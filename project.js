(() => {
  'use strict';
  const projects = window.DEESC_PROJECTS || [];
  const id = new URLSearchParams(location.search).get('id');
  const p = projects.find(item => item.id === id);
  const mount = document.querySelector('#projectMount');
  const e = value => String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  if (!p) {
    document.title = 'Project not found | DEESC Prototyping';
    mount.innerHTML = '<section class="container page-intro error-page"><p class="eyebrow">PROJECT NOT FOUND</p><h1>Project not<br>available.</h1><p>This project link is missing or no longer available.</p><a class="button primary" href="index.html">View selected work <span>↗</span></a></section>';
    return;
  }
  const groupPages = {selected:['index.html#selected-work','Selected work'],people:['people.html','Personal devices'],other:['projects.html','Other projects']};
  const [backUrl,backLabel] = groupPages[p.group] || groupPages.other;
  document.querySelectorAll('.main-nav a').forEach(link => {
    if (link.getAttribute('href') === backUrl.split('#')[0]) link.setAttribute('aria-current','page');
  });
  document.title = `${p.title} | DEESC Prototyping`;
  document.querySelector('meta[name="description"]').content = p.subtitle;
  document.querySelector('meta[property="og:title"]').content = document.title;
  document.querySelector('meta[property="og:description"]').content = p.subtitle;
  document.querySelector('link[rel="canonical"]').href = `https://deescproto.com/project.html?id=${encodeURIComponent(p.id)}`;
  const isSmall = p.group === 'other';
  const gallery = p.gallery || [];
  const documents = p.documents || [];
  const next = projects.find(item => item.group === p.group && item.id !== p.id);
  const pathRows = paths => `<div class="connection-paths">${paths.map(path => `<div class="connection-path"><p>${e(path.label)}</p><ol>${path.nodes.map(node => `<li>${e(node)}</li>`).join('')}</ol></div>`).join('')}</div>`;
  const imageButton = (src, alt, caption, fit = '') => `<button type="button" class="feature-visual story-visual ${fit === 'contain' ? 'story-contain' : ''}" data-gallery-index="${gallery.findIndex(g => g.src === src)}" aria-label="Open image: ${e(alt)}"><img src="${e(src)}" alt="${e(alt)}" loading="lazy"><span class="photo-label">${e(caption)}</span><span class="image-arrow" aria-hidden="true">↗</span></button>`;
  const network = p.networkResults;
  const networkEvidence = network ? `<div class="network-evidence">
    <dl class="network-stats">${network.stats.map(([value,label]) => `<div><dt>${e(label)}</dt><dd>${e(value)}</dd></div>`).join('')}</dl>
    <p class="network-scope">Five-minute soak: 480 MHz CPU / 32 MHz SPI. Nine-profile matrix: standalone board, temporary diagnostic firmware.</p>
    <div class="network-reading"><div><h3>Measurement details</h3><p>${e(network.finding)}</p><p class="network-caveat">${e(network.caveat)}</p></div><figure>${imageButton(network.image,network.imageCaption,'UDP / payload verification','contain')}<figcaption>${e(network.imageCaption)}</figcaption></figure></div>
    <details class="network-matrix"><summary>Inspect all nine test profiles</summary><div class="table-scroll" role="region" aria-label="Ethernet test profile results" tabindex="0"><table><caption>Completed CPU / SPI matrix · verified application exchanges</caption><thead><tr><th scope="col">CPU MHz</th><th scope="col">SPI MHz</th><th scope="col">TCP passed / total</th><th scope="col">UDP passed / total</th><th scope="col">1 MiB echo KiB/s</th></tr></thead><tbody>${network.rows.map(r => `<tr><th scope="row">${r.cpu_mhz}</th><td>${r.spi_mhz}</td><td>${r.tcp_passed.toLocaleString('en-US')} / ${r.tcp_total.toLocaleString('en-US')}</td><td>${r.udp_passed.toLocaleString('en-US')} / ${r.udp_total.toLocaleString('en-US')}</td><td>${r.stream_kib_per_s.toFixed(1)}</td></tr>`).join('')}</tbody></table></div><p class="section-note">Each rate is one complete 1 MiB echo, with payload bytes counted once. Matrix totals include functional and soak checks. CPU clock, SPI clock and Ethernet link speed are separate quantities.</p></details>
    <div class="evidence-links"><a href="hitl-network-excerpt.pcapng" download>Wireshark excerpt <span>PCAPNG ↓</span></a><a href="hitl-network-matrix.csv" download>Test matrix <span>CSV ↓</span></a><a href="hitl-network-results.json" target="_blank" rel="noopener">Results & limitations <span>JSON ↗</span></a></div><p class="section-note">${e(network.excerptNote)}</p>
    </div>` : '';
  const stories = p.stories ? `<section class="container case-stories" aria-label="HITL on the bench">${p.stories.map((story,i) => `<article class="feature case-story ${i % 2 ? 'feature-hitl' : ''}" id="${e(story.id)}">${imageButton(story.image,story.alt,story.caption,story.fit)}<div class="feature-copy"><div class="feature-top"><span class="index-number">${e(story.number)}</span><span class="status">${i === 2 ? 'CAPTURED & CHECKED' : 'BENCH DEVELOPMENT'}</span></div><p class="eyebrow">${e(story.eyebrow)}</p><h2>${e(story.title)}</h2><p>${e(story.body)}</p><ul class="detail-lines">${story.points.map(line => `<li>${e(line)}</li>`).join('')}</ul>${story.note ? `<p class="story-note">${e(story.note)}</p>` : ''}${story.result ? `<p class="story-result">${e(story.result)}</p>` : ''}<a class="text-link" href="${e(story.link)}" ${story.link.endsWith('.pcapng') ? 'download' : ''}>${e(story.linkLabel)} <span aria-hidden="true">↗</span></a></div></article>${i === 2 ? networkEvidence : ''}`).join('')}</section>` : '';
  const gallerySection = `<section class="container gallery-section" id="gallery"><div class="gallery-heading"><div><p class="eyebrow">PROJECT PHOTOS / ${String(gallery.length).padStart(2,'0')} IMAGES</p><h2>Hardware and design photos</h2></div><p>Select a photo to inspect it. Use arrow keys to browse.</p></div><div class="gallery-grid">${gallery.map((g,i)=>`<button class="gallery-item" data-index="${i}" data-technical="${/schematic|layout|routing|render|CAD|Altium|stage|circuit|Wireshark/i.test(g.caption)}" aria-label="Open image: ${e(g.caption)}"><img src="${e(g.src)}" alt="${e(g.caption)}" loading="lazy"><span>${e(g.caption)}</span></button>`).join('')}</div></section>`;
  const deepSections = `
    ${p.hardware?.length ? `<section class="container detail-section" id="hardware"><div class="detail-heading"><p class="eyebrow">HARDWARE ARCHITECTURE</p><h2>${e(p.hardwareTitle)}</h2><p>${e(p.hardwareIntro)}</p></div><div class="hardware-grid">${p.hardware.map(item => `<article class="hardware-card">${item.image ? `<figure><img src="${e(item.image)}" alt="${e(item.alt)}" loading="lazy">${item.caption ? `<figcaption>${e(item.caption)}</figcaption>` : ''}</figure>` : ''}<div class="hardware-copy"><p class="hardware-role"><span>${e(item.index)}</span>${e(item.role)}</p><h3>${e(item.title)}</h3><p>${e(item.body)}</p><details><summary>Technical details</summary><ul>${item.details.map(detail => `<li>${e(detail)}</li>`).join('')}</ul></details></div></article>`).join('')}</div>${p.paths ? `${pathRows(p.paths)}<p class="section-note">${e(p.pathsNote)}</p>` : ''}</section>` : ''}
    ${p.routeExplorer ? `<section class="routing-section" id="signal-routing"><div class="container"><div class="detail-heading"><p class="eyebrow">SIGNAL ROUTING</p><h2>Signal-source selection</h2><p>HITL sits at selected electrical interfaces. Use this illustration to compare the original path with a firmware-generated test path.</p></div><div class="route-controls"><label for="route-signal">Interface<select id="route-signal"><option value="dshot">DShot motor commands</option><option value="pdb">PDB UART / GPIO</option><option value="gps">GPS UART</option><option value="rf">Radio UART</option><option value="mag">External magnetometer I²C</option></select></label><div class="route-mode" role="group" aria-label="Illustrated signal source"><button type="button" data-mode="normal" aria-pressed="true">Original signal</button><button type="button" data-mode="test" aria-pressed="false">HITL test signal</button></div></div><div class="route-diagram" data-mode="normal"><div class="route-sources"><div class="route-source active" id="route-original"><span>ORIGINAL SOURCE</span><strong id="route-original-name">Flight controller</strong></div><div class="route-source" id="route-generated"><span>TEST SOURCE</span><strong>HITL firmware</strong></div></div><div class="route-switch"><span>HARDWARE SELECTOR</span><strong id="route-switch-name">4-channel DShot mux</strong><span class="route-switch-state" id="route-state">Original path selected</span></div><div class="route-destination"><span>SELECTED INTERFACE</span><strong id="route-destination">ESC DShot inputs</strong><span id="route-protocol">Four DShot channels</span></div></div><div class="route-explanation" aria-live="polite"><h3 id="route-title">Flight-controller commands pass through.</h3><p id="route-description">The multiplexer selects the FMU's four DShot lines for the ESC outputs.</p></div><p class="section-note">Interactive illustration, not a connection to live hardware. Emulated behavior depends on firmware. The default original path assumes valid mux power and the intended select / enable levels.</p></div></section>` : ''}
    ${p.software ? `<section class="container detail-section" id="software"><div class="detail-heading"><p class="eyebrow">PYTHON INTERFACE</p><h2>${e(p.software.title)}</h2><p>${e(p.software.intro)}</p></div>${pathRows(p.software.paths)}<dl class="software-details">${p.software.details.map(([title,body]) => `<div><dt>${e(title)}</dt><dd>${e(body)}</dd></div>`).join('')}</dl><p class="ownership-note">${e(p.software.ownership)}</p></section>` : ''}
    ${p.validation ? `<section class="container detail-section" id="verification"><div class="detail-heading"><p class="eyebrow">TEST & VERIFICATION</p><h2>${e(p.validationTitle)}</h2><p>${e(p.validationIntro)}</p></div><div class="verification-grid">${p.validation.map(item => `<article><p class="eyebrow">${e(item.label)}</p><h3>${e(item.title)}</h3><p>${e(item.body)}</p><span>${e(item.scope)}</span></article>`).join('')}</div><div class="outcome"><p class="eyebrow">CURRENT STATE & NEXT WORK</p><p>${e(p.outcome)}</p></div></section>` : ''}
    ${p.boardShowcase ? `<section class="container detail-section board-showcase" id="board-design"><div class="detail-heading"><p class="eyebrow">PCB DESIGN</p><h2>${e(p.boardShowcase.title)}</h2></div><div class="board-views">${p.boardShowcase.images.map(item => `<figure><a href="${e(item.src)}" target="_blank" rel="noopener" aria-label="Open full-size board image: ${e(item.caption)}"><img src="${e(item.src)}" alt="${e(item.caption)}" loading="lazy"></a><figcaption>${e(item.caption)}</figcaption></figure>`).join('')}</div></section>` : ''}`;
  mount.innerHTML = `
    <section class="case-hero"><div class="container"><a class="back-link" href="${backUrl}">← ${backLabel}</a>
    <div class="case-hero-grid"><div><p class="eyebrow">${e(p.category).toUpperCase()}</p><h1>${e(p.title)}</h1><p class="case-subtitle">${e(p.subtitle)}</p><div class="tags">${p.tags.map(tag=>`<span>${e(tag)}</span>`).join('')}</div><p class="case-status">${e(p.status)}</p></div>
    <figure class="case-hero-image${p.heroFit === 'contain' || p.id === 'edge-detection-camera' ? ' contain' : ''}"><img src="${e(p.heroImage)}" alt="${e(p.heroAlt || p.title)}" fetchpriority="high"></figure></div></div></section>
    ${p.facts?.length ? `<dl class="container facts">${p.facts.map(([label,value])=>`<div><dt>${e(label)}</dt><dd>${e(value)}</dd></div>`).join('')}</dl>` : ''}
    ${p.hardware ? `<nav class="container case-jump" aria-label="On this project page">${p.stories ? '<a href="#bench-story">On the bench</a><a href="#motor-tuning">AI motor tuning</a><a href="#network-results">Wireshark results</a><a href="#gallery">Photos</a>' : '<a href="#project-overview">Overview</a>'}<a href="#hardware">Hardware</a>${p.routeExplorer ? '<a href="#signal-routing">Signal routing</a><a href="#software">Software</a>' : ''}<a href="#design-documents">Documents</a>${!p.stories ? '<a href="#gallery">Gallery</a>' : ''}</nav>` : ''}
    ${p.stories ? stories + gallerySection : `<section class="container case-section" id="project-overview">${isSmall ? `<article class="case-simple"><p class="eyebrow">THE IDEA</p><h2>What it does.</h2><p>${e(p.overview)}</p></article>` : `
    <div class="case-grid"><article><p class="eyebrow">THE PROJECT</p><h2>${p.group === 'selected' ? 'Project overview' : 'Project overview'}</h2><p class="case-overview">${e(p.overview)}</p><p class="case-focus">${e(p.focus)}</p></article>
    <aside aria-label="Engineering details"><p class="eyebrow">ENGINEERING DETAILS</p><ol class="engineering-list">${p.engineering.map((point,i)=>`<li><span>${String(i+1).padStart(2,'0')}</span><p>${e(point)}</p></li>`).join('')}</ol></aside></div>
    ${p.diagram?.length ? `<div class="architecture"><p class="eyebrow">${p.id === 'hitl-test-platform' ? 'THE TEST WORKFLOW' : 'SYSTEM OVERVIEW'}</p><div class="system-flow">${p.diagram.map(([title,desc],i)=>`<div class="system-node"><span>0${i+1}</span><h3>${e(title)}</h3><p>${e(desc)}</p></div>`).join('')}</div></div>` : ''}
    ${p.systemCaption ? `<p class="section-note">${e(p.systemCaption)}</p>` : ''}
    ${p.outcome && !p.validation ? `<div class="outcome"><p class="eyebrow">CURRENT STATE</p><p>${e(p.outcome)}</p></div>` : ''}`}</section>`}
    ${deepSections}
    ${documents.length || p.documentNote ? `<section class="container docs-section" id="design-documents"><div class="docs-box"><p class="eyebrow">DESIGN DOCUMENTS</p><h2>${documents.length ? 'Schematic documents' : p.documentCta ? 'Related HITL test platform' : 'Additional design information'}</h2>${p.documentNote ? `<p>${e(p.documentNote)}</p>` : ''}<div class="doc-links">${documents.map(doc=>`<a href="${e(doc.href)}" target="_blank" rel="noopener noreferrer">${e(doc.label.replace(/_/g,' ').replace('.pdf',''))}<span>PDF ↗</span></a>`).join('')}${p.documentCta ? `<a href="${e(p.documentCta.href)}">${e(p.documentCta.label)} <span>↗</span></a>` : !documents.length ? '<a href="mailto:thomasstolpe424@gmail.com?subject=DEESC%20Project%20Details">Contact Thomas <span>↗</span></a>' : ''}</div></div></section>` : ''}
    ${!p.stories ? gallerySection : ''}
    ${next ? `<nav class="container project-related" aria-label="Related project"><span>RELATED PROJECT</span><a href="project.html?id=${encodeURIComponent(next.id)}">${e(next.title)} <span aria-hidden="true">↗</span></a></nav>` : ''}`;
  if (p.routeExplorer) {
    const routes = {
      dshot: {source:'Flight controller', mux:'4-channel DShot mux', destination:'ESC DShot inputs', protocol:'Four DShot channels', normal:['Flight-controller commands pass through.', 'The multiplexer selects the FMU’s four DShot lines for the ESC outputs.'], test:['HITL supplies the motor-command path.', 'The multiplexer selects the four HITL-generated DShot lines in place of the FMU lines. The actual waveform and test sequence come from the firmware.']},
      pdb: {source:'Original PDB interface', mux:'PDB UART / GPIO mux', destination:'Selected PDB link', protocol:'UART + GPIO', normal:['Use the original power-board interface.', 'The PDB multiplexer connects the original UART and GPIO paths.'], test:['Select the HITL power-board test interface.', 'The mux selects the HITL UART and GPIO branch. This provides an electrical route for controlled power-interface tests; behavior depends on firmware and the connected peer.']},
      gps: {source:'GPS board', mux:'GPS UART mux', destination:'FMU GPS interface', protocol:'UART TX / RX', normal:['Route the navigation board’s serial data.', 'The original GPS UART lines pass through the selector to the flight-controller interface.'], test:['Substitute a controlled GPS serial stream.', 'The selector connects the HITL UART branch. Firmware supplies test data at this wired serial interface.']},
      rf: {source:'Radio board', mux:'Radio UART mux', destination:'FMU radio interface', protocol:'UART TX / RX', normal:['Use the radio board’s UART link.', 'The RF board handles the radio communication; HITL routes its serial interface toward the FMU.'], test:['Exercise the radio’s serial interface.', 'HITL selects its own UART branch in place of the radio board’s UART. The test operates on the wired serial interface.']},
      mag: {source:'External GPS / mag board', mux:'Magnetometer I²C mux', destination:'FMU external mag interface', protocol:'I²C SDA / SCL', normal:['Connect the external magnetometer path.', 'The original SDA and SCL lines pass from the GPS / magnetometer board through the selector. This path is separate from the FMU’s onboard magnetometer.'], test:['Select the HITL I²C branch.', 'HITL replaces the external SDA and SCL path. Sensor emulation requires firmware that matches the expected device address and register behavior.']}
    };
    let mode = 'normal';
    const select = document.querySelector('#route-signal');
    const modeButtons = document.querySelectorAll('[data-mode][aria-pressed]');
    function updateRoute() {
      const r = routes[select.value];
      document.querySelector('#route-original-name').textContent = r.source;
      document.querySelector('#route-switch-name').textContent = r.mux;
      document.querySelector('#route-destination').textContent = r.destination;
      document.querySelector('#route-protocol').textContent = r.protocol;
      document.querySelector('#route-title').textContent = r[mode][0];
      document.querySelector('#route-description').textContent = r[mode][1];
      document.querySelector('#route-state').textContent = mode==='normal' ? 'Original path selected' : 'HITL path selected';
      document.querySelector('.route-diagram').dataset.mode = mode;
      document.querySelector('#route-original').classList.toggle('active', mode==='normal');
      document.querySelector('#route-generated').classList.toggle('active', mode==='test');
      modeButtons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.mode===mode)));
    }
    select.addEventListener('change', updateRoute);
    modeButtons.forEach(button => button.addEventListener('click', () => { mode=button.dataset.mode; updateRoute(); }));
    updateRoute();
  }
  const dialog = document.querySelector('#lightbox');
  const image = document.querySelector('#lightboxImage');
  const caption = document.querySelector('#lightboxCaption');
  const count = document.querySelector('#lightboxCount');
  let current = 0;
  let opener = null;
  function show(index) {
    current = (index + gallery.length) % gallery.length;
    const g = gallery[current];
    image.src = g.src; image.alt = g.caption; caption.textContent = g.caption;
    count.textContent = `${current+1} / ${gallery.length}`;
    if (!dialog.open) { dialog.showModal(); document.body.classList.add('no-scroll'); }
  }
  document.querySelectorAll('.gallery-item, [data-gallery-index]').forEach(button => button.addEventListener('click', () => {
    opener = button; show(Number(button.dataset.galleryIndex ?? button.dataset.index));
  }));
  dialog.querySelector('.lightbox-close').addEventListener('click', () => dialog.close());
  dialog.querySelector('.lightbox-prev').addEventListener('click', () => show(current-1));
  dialog.querySelector('.lightbox-next').addEventListener('click', () => show(current+1));
  dialog.addEventListener('close', () => { document.body.classList.remove('no-scroll'); opener?.focus(); });
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
  dialog.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft') { event.preventDefault(); show(current-1); }
    if (event.key === 'ArrowRight') { event.preventDefault(); show(current+1); }
  });
})();
