import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';

const root = new URL('../', import.meta.url);
const read = path => readFileSync(new URL(path, root), 'utf8');
const pages = ['index.html', 'about.html', 'people.html', 'projects.html', 'project.html', 'agent-chat.html'];
const landing = read('agent-chat.html');
const tools = read('optional-tools.html');

test('portfolio navigation consistently opens Agent Chat', () => {
  for (const page of [...pages, 'optional-tools.html']) {
    const nav = read(page).match(/<nav\b[^>]*>[\s\S]*?<\/nav>/)?.[0];
    assert.ok(nav, `${page}: navigation exists`);
    assert.match(nav, /<a href="agent-chat\.html"[^>]*>Agent Chat<\/a>/, page);
    assert.doesNotMatch(nav, /Decision Room/, page);
  }
  assert.doesNotMatch(tools.match(/<nav\b[^>]*>[\s\S]*?<\/nav>/)?.[0] || '', /aria-current="page"/);
});

test('chat is the primary workflow and the existing private workspace is the destination', () => {
  const main = landing.split('<main id="main">')[1].split('</main>')[0];
  const firstLink = main.match(/<a\b[^>]+href="([^"]+)"[^>]*>([^<]+)<\/a>/);
  assert.equal(firstLink?.[1], 'https://deesc-agent-chat.rightbench4.chatgpt.site');
  assert.equal(firstLink?.[2], 'Open Agent Chat');
  assert.match(main, /three selected AI agents/i);
  assert.match(main, /one combined answer\./i);
  assert.match(main, /The original replies stay available/);
  assert.match(main, /Agents agreeing does not make an answer correct/);
  assert.match(main, /The agents produce text only/);
  assert.match(main, /Owner-only private workspace\. Public sign-up is not available\./);
  assert.match(main, /Bring your own API keys or local model/);
  assert.doesNotMatch(main, /<form|<textarea|id="brief-builder"|id="canvas"/);
  assert.doesNotMatch(landing, /<script[^>]+src="decision-/);
});

test('landing and optional tools retain strict CSP with valid local assets and anchors', () => {
  for (const [name, html] of [['agent-chat.html', landing], ['optional-tools.html', tools]]) {
    assert.match(html, /script-src 'self'; style-src 'self'/, name);
    assert.doesNotMatch(html, /unsafe-inline|\son(?:click|load|error)=|\sstyle=/i, name);
    for (const script of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/g)) {
      assert.match(script[1], /\bsrc="[^"#]+"/, `${name}: external script source`);
      assert.equal(script[2].trim(), '', `${name}: no inline script`);
    }
    for (const match of html.matchAll(/\b(?:href|src)="([^"]+)"/g)) {
      const ref = match[1];
      if (/^(?:https?:|mailto:|data:)/.test(ref)) continue;
      const [pathname, fragment] = ref.split('#');
      const filename = pathname.split('?')[0] || name;
      assert.ok(existsSync(new URL(filename, root)), `${name}: ${ref}`);
      if (fragment && filename.endsWith('.html')) {
        assert.ok(read(filename).includes(`id="${fragment}"`), `${name}: missing anchor ${ref}`);
      }
    }
  }
});

test('optional tools preserve their form bindings, downloads and recorded history', () => {
  for (const id of ['brief-builder', 'canvas', 'builder-form', 'builder-export-md', 'builder-export-json', 'decision-matrix', 'export-canvas', 'export-report', 'export-brief', 'recorded-review']) {
    assert.ok(tools.includes(`id="${id}"`), id);
  }
  for (const script of ['decision-builder.js', 'decision-canvas.js', 'decision-example.js']) {
    assert.ok(tools.includes(`src="${script}?`), script);
  }
  const example = JSON.parse(read('decision-review-example.json'));
  assert.equal(example.reportStatus, 'valid');
  assert.ok(example.replies.length > 0);
  assert.ok(example.replies.every(reply => typeof reply.text === 'string'));
  assert.match(read('decision-example.js'), /all five attempts/);
  assert.match(landing, /href="optional-tools\.html#recorded-review"/);
  assert.match(tools, /src="decision-example\.js\?v=4"/);
});

test('recorded-review anchor scrolls only after successful asynchronous rendering and an exact current hash', async () => {
  const script = read('decision-example.js');
  const example = JSON.parse(read('decision-review-example.json'));
  for (const scenario of [
    { initial: '#recorded-review', final: '#recorded-review', ok: true, expected: 1 },
    { initial: '#recorded-review', final: '#canvas', ok: true, expected: 0 },
    { initial: '#recorded-review-extra', final: '#recorded-review-extra', ok: true, expected: 0 },
    { initial: '#recorded-review', final: '#recorded-review', ok: false, expected: 0 },
  ]) {
    let release;
    const fetchResponse = new Promise(resolve => { release = resolve; });
    const node = () => ({ children: [], append(...children) { this.children.push(...children); }, setAttribute() {} });
    const target = { ...node(), hidden: true };
    let scrolls = 0;
    target.scrollIntoView = () => {
      assert.equal(target.hidden, false, 'target must be visible before scrolling');
      assert.ok(target.children.some(child => child.download === 'deesc-recorded-example.json'), 'rendering must finish before scrolling');
      scrolls++;
    };
    const location = { hash: scenario.initial };
    const completion = runInNewContext(script, {
      document: { getElementById: () => target, createElement: node },
      location,
      fetch: () => fetchResponse,
    });
    assert.equal(scrolls, 0, 'nothing should scroll while the response is pending');
    assert.equal(target.hidden, true);
    location.hash = scenario.final;
    release({ ok: scenario.ok, json: async () => example });
    await completion;
    assert.equal(scrolls, scenario.expected, JSON.stringify(scenario));
    assert.equal(target.hidden, !scenario.ok);
  }
});
