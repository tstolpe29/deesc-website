const projects=window.DEESC_PROJECTS||[];
const clientGrid=document.querySelector('#clientGrid');
const portfolioGrid=document.querySelector('#portfolioGrid');
function card(p){return `<a class="project-card reveal" href="project.html?id=${encodeURIComponent(p.id)}"><div class="project-image-wrap"><img src="${p.heroImage}" alt="${p.title}" loading="lazy"><div class="project-number">${p.number}</div><div class="project-type">${p.category}</div></div><div class="project-body"><div class="project-topline"><span>${p.status}</span><b>↗</b></div><h3>${p.title}</h3><p>${p.subtitle}</p><div class="tags">${p.tags.map(t=>`<span>${t}</span>`).join('')}</div></div></a>`}
if(clientGrid) clientGrid.innerHTML=projects.filter(p=>p.category==='Client Work').map(card).join('');
if(portfolioGrid) portfolioGrid.innerHTML=projects.filter(p=>p.category!=='Client Work').map(card).join('');
document.querySelector('#year').textContent=new Date().getFullYear();
const toggle=document.querySelector('.menu-toggle'), nav=document.querySelector('.main-nav');
if(toggle){toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')==='true';toggle.setAttribute('aria-expanded',String(!open));nav.classList.toggle('open',!open)});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{toggle.setAttribute('aria-expanded','false');nav.classList.remove('open')}));}
const observer=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.08});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
