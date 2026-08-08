const projects = window.DEESC_PROJECTS || [];
const id = new URLSearchParams(location.search).get('id') || projects[0]?.id;
const p = projects.find(x => x.id === id) || projects[0];
const prev = projects.find(x => x.id === p.prev);
const next = projects.find(x => x.id === p.next);

document.title = `${p.title} | DEESC Prototyping`;

const hasDocs = Boolean(p.documents?.length);
const hasDocNote = Boolean(p.documentNote);
const sourceDocuments = (hasDocs || hasDocNote) ? `
<section class="source-docs-section">
  <div class="container">
    <div class="source-docs-card">
      <div class="source-docs-header">
        <div class="source-docs-mark" aria-hidden="true">⌁</div>
        <div>
          <p class="kicker">SOURCE DOCUMENTS</p>
          <h2>${hasDocs ? 'Schematics & project files.' : 'Detailed schematics available.'}</h2>
          <p>${hasDocs ? 'Open the original engineering documents used for this project.' : p.documentNote}</p>
        </div>
      </div>
      ${hasDocNote && hasDocs ? `<div class="nda-note"><span>LOCKED / NDA</span><p>${p.documentNote}</p></div>` : ''}
      ${hasDocs ? `<div class="doc-links">${p.documents.map(d => `
        <a href="${d.href}" target="_blank" rel="noopener">
          <span class="doc-file-type">PDF</span>
          <span class="doc-file-name">${d.label}</span>
          <span class="doc-open">OPEN DOCUMENT ↗</span>
        </a>`).join('')}</div>` : `
        <div class="nda-note standalone">
          <span>LOCKED / NDA</span>
          <p>Contact DEESC to request access.</p>
          <a href="mailto:thomasstolpe424@gmail.com?subject=DEESC%20Drone%20Schematics%20NDA">REQUEST SCHEMATICS →</a>
        </div>`}
    </div>
  </div>
</section>` : '';

const mount = document.querySelector('#projectMount');
mount.innerHTML = `
<section class="project-hero tech-grid-bg">
  <div class="container project-hero-grid">
    <div class="project-hero-copy">
      <a class="back-link" href="index.html#${p.category === 'Client Work' ? 'client-work' : 'portfolio'}">← Back to projects</a>
      <p class="kicker">${p.category.toUpperCase()} / ${p.number}</p>
      <h1>${p.title}</h1>
      <p class="project-subtitle">${p.subtitle}</p>
      <div class="tags large-tags">${p.tags.map(t => `<span>${t}</span>`).join('')}</div>
      <div class="project-status"><span>PROJECT STATUS</span><b>${p.status}</b></div>
    </div>
    <div class="project-hero-image${p.id === 'edge-detection-camera' ? ' centered-contain' : ''}"><img src="${p.heroImage}" alt="${p.title}"><span>${p.number}</span></div>
  </div>
</section>
<section class="section">
  <div class="container case-grid">
    <article class="case-copy">
      <p class="kicker">PROJECT OVERVIEW</p>
      <h2>The problem and the build.</h2>
      <p class="lead">${p.overview}</p>
      <p>${p.focus}</p>
    </article>
    <aside class="case-side">
      <p class="kicker">ENGINEERING</p>
      ${p.engineering.map((x, i) => `<div class="engineering-point"><span>${String(i + 1).padStart(2, '0')}</span><p>${x}</p></div>`).join('')}
    </aside>
  </div>
</section>
${sourceDocuments}
<section class="section gallery-section">
  <div class="container">
    <div class="section-heading">
      <div><p class="kicker">BUILD GALLERY / ${String(p.gallery.length).padStart(2, '0')} IMAGES</p><h2>Hardware, layout and design detail.</h2></div>
      <p>Every project image supplied for the portfolio is included here. Click any image to inspect it full-size.</p>
    </div>
    <div class="gallery-grid">${p.gallery.map((g, i) => `<button class="gallery-item" data-index="${i}" aria-label="Open image: ${g.caption.replace(/"/g, '&quot;')}"><img src="${g.src}" alt="${g.caption}" loading="lazy"><span>${g.caption}</span></button>`).join('')}</div>
  </div>
</section>
<section class="project-nav">
  <div class="container project-nav-grid">
    <a href="project.html?id=${prev.id}"><span>← PREVIOUS</span><b>${prev.title}</b></a>
    <a class="next" href="project.html?id=${next.id}"><span>NEXT →</span><b>${next.title}</b></a>
  </div>
</section>`;

document.querySelector('#year').textContent = new Date().getFullYear();
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
if (toggle) {
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    nav.classList.toggle('open', !open);
  });
}

const lb = document.querySelector('#lightbox');
const lbImg = document.querySelector('#lightboxImage');
const lbCap = document.querySelector('#lightboxCaption');
let current = 0;
function show(i) {
  current = (i + p.gallery.length) % p.gallery.length;
  const g = p.gallery[current];
  lbImg.src = g.src;
  lbImg.alt = g.caption;
  lbCap.textContent = g.caption;
  lb.classList.add('open');
  lb.setAttribute('aria-hidden', 'false');
  document.body.classList.add('no-scroll');
}
function close() {
  lb.classList.remove('open');
  lb.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('no-scroll');
}
document.querySelectorAll('.gallery-item').forEach(b => b.addEventListener('click', () => show(Number(b.dataset.index))));
document.querySelector('.lightbox-close').addEventListener('click', close);
document.querySelector('.lightbox-prev').addEventListener('click', () => show(current - 1));
document.querySelector('.lightbox-next').addEventListener('click', () => show(current + 1));
lb.addEventListener('click', e => { if (e.target === lb) close(); });
document.addEventListener('keydown', e => {
  if (!lb.classList.contains('open')) return;
  if (e.key === 'Escape') close();
  if (e.key === 'ArrowLeft') show(current - 1);
  if (e.key === 'ArrowRight') show(current + 1);
});
