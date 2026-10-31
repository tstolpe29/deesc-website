(() => {
  'use strict';
  const projects = window.DEESC_PROJECTS || [];
  const id = new URLSearchParams(location.search).get('id');
  const p = projects.find(item => item.id === id);
  const mount = document.querySelector('#projectMount');
  const e = value => String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  if (!p) {
    document.title = 'Project not found | DEESC Prototyping';
    mount.innerHTML = '<section class="container page-intro error-page"><p class="eyebrow">PROJECT NOT FOUND</p><h1>Let’s get you<br>back to the work.</h1><p>This project link is missing or no longer available.</p><a class="button primary" href="index.html">View selected work <span>↗</span></a></section>';
    return;
  }
  const groupPages = {selected:['index.html#selected-work','Selected work'],people:['people.html','Built for people'],other:['projects.html','Other projects']};
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
  mount.innerHTML = `
    <section class="case-hero"><div class="container"><a class="back-link" href="${backUrl}">← ${backLabel}</a>
    <div class="case-hero-grid"><div><p class="eyebrow">${e(p.category).toUpperCase()}</p><h1>${e(p.title)}</h1><p class="case-subtitle">${e(p.subtitle)}</p><div class="tags">${p.tags.map(tag=>`<span>${e(tag)}</span>`).join('')}</div><p class="case-status">${e(p.status)}</p></div>
    <figure class="case-hero-image${p.id === 'edge-detection-camera' ? ' contain' : ''}"><img src="${e(p.heroImage)}" alt="${e(p.title)}" fetchpriority="high"></figure></div></div></section>
    ${p.facts?.length ? `<dl class="container facts">${p.facts.map(([label,value])=>`<div><dt>${e(label)}</dt><dd>${e(value)}</dd></div>`).join('')}</dl>` : ''}
    <section class="container case-section">${isSmall ? `<article class="case-simple"><p class="eyebrow">THE IDEA</p><h2>What it does.</h2><p>${e(p.overview)}</p></article>` : `
    <div class="case-grid"><article><p class="eyebrow">THE PROJECT</p><h2>${p.group === 'selected' ? 'A system with a purpose.' : 'Designed around everyday use.'}</h2><p class="case-overview">${e(p.overview)}</p><p class="case-focus">${e(p.focus)}</p></article>
    <aside aria-label="Engineering details"><p class="eyebrow">INSIDE THE BUILD</p><ol class="engineering-list">${p.engineering.map((point,i)=>`<li><span>${String(i+1).padStart(2,'0')}</span><p>${e(point)}</p></li>`).join('')}</ol></aside></div>
    ${p.diagram?.length ? `<div class="architecture"><p class="eyebrow">${p.id === 'hitl-test-platform' ? 'THE TEST WORKFLOW' : 'THE SYSTEM AT A GLANCE'}</p><div class="system-flow">${p.diagram.map(([title,desc],i)=>`<div class="system-node"><span>0${i+1}</span><h3>${e(title)}</h3><p>${e(desc)}</p></div>`).join('')}</div></div>` : ''}
    ${p.outcome ? `<div class="outcome"><p class="eyebrow">CURRENT STATE</p><p>${e(p.outcome)}</p></div>` : ''}`}</section>
    ${documents.length || p.documentNote ? `<section class="container docs-section"><div class="docs-box"><p class="eyebrow">DESIGN DOCUMENTS</p><h2>${documents.length ? 'A closer look at the design.' : 'Want to discuss the design?'}</h2>${p.documentNote ? `<p>${e(p.documentNote)}</p>` : ''}<div class="doc-links">${documents.map(doc=>`<a href="${e(doc.href)}" target="_blank" rel="noopener noreferrer">${e(doc.label.replace(/_/g,' ').replace('.pdf',''))}<span>PDF ↗</span></a>`).join('')}${!documents.length ? '<a href="mailto:thomasstolpe424@gmail.com?subject=DEESC%20Project%20Details">Contact Thomas <span>↗</span></a>' : ''}</div></div></section>` : ''}
    <section class="container gallery-section"><div class="gallery-heading"><div><p class="eyebrow">FROM DESIGN TO HARDWARE / ${String(gallery.length).padStart(2,'0')} IMAGES</p><h2>The build, up close.</h2></div><p>Select a photo to inspect it. Use arrow keys to browse.</p></div><div class="gallery-grid">${gallery.map((g,i)=>`<button class="gallery-item" data-index="${i}" data-technical="${/schematic|layout|routing|render|CAD|Altium|stage|circuit/i.test(g.caption)}" aria-label="Open image: ${e(g.caption)}"><img src="${e(g.src)}" alt="${e(g.caption)}" loading="lazy"><span>${e(g.caption)}</span></button>`).join('')}</div></section>
    ${next ? `<nav class="container project-related" aria-label="Related project"><span>EXPLORE MORE</span><a href="project.html?id=${encodeURIComponent(next.id)}">${e(next.title)} <span aria-hidden="true">↗</span></a></nav>` : ''}`;
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
  document.querySelectorAll('.gallery-item').forEach(button => button.addEventListener('click', () => {
    opener = button; show(Number(button.dataset.index));
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
