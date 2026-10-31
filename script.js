(() => {
  const year = document.querySelector('#year');
  if (year) year.textContent = new Date().getFullYear();
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  if (!toggle || !nav) return;
  const closeMenu = () => { toggle.setAttribute('aria-expanded', 'false'); nav.classList.remove('open'); };
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('open', open);
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      closeMenu(); toggle.focus();
    }
  });
  document.addEventListener('click', event => {
    if (!nav.contains(event.target) && !toggle.contains(event.target)) closeMenu();
  });
  window.matchMedia('(min-width: 801px)').addEventListener('change', closeMenu);
})();
