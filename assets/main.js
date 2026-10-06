// Header: Hintergrund beim Scrollen
const header = document.querySelector('.site-header');
const onScroll = () => header && header.classList.toggle('scrolled', window.scrollY > 20);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// Mobile Menü
const burger = document.querySelector('.burger');
if (burger) {
  burger.addEventListener('click', () => {
    const open = document.body.classList.toggle('menu-open');
    burger.setAttribute('aria-expanded', open);
  });
  document.querySelectorAll('.nav-links a').forEach(a =>
    a.addEventListener('click', () => document.body.classList.remove('menu-open'))
  );
}

// Reveal-Animationen
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Portfolio-Filter
const filters = document.querySelectorAll('.filter');
filters.forEach(btn => btn.addEventListener('click', () => {
  filters.forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const cat = btn.dataset.filter;
  document.querySelectorAll('.work').forEach(w => {
    w.classList.toggle('hidden', cat !== 'all' && w.dataset.cat !== cat);
  });
}));

// Videos im Portfolio: Hover-Play auf Desktop
document.querySelectorAll('.work-media video').forEach(v => {
  v.muted = true; v.loop = true; v.playsInline = true;
  const card = v.closest('.work');
  card.addEventListener('mouseenter', () => v.play().catch(() => {}));
  card.addEventListener('mouseleave', () => v.pause());
});

// Kontaktformular (Formspree / beliebiger POST-Endpoint)
const form = document.querySelector('#contact-form');
if (form) {
  const status = form.querySelector('.form-status');
  form.addEventListener('submit', async e => {
    e.preventDefault();
    if (form.action.includes('DEINE_FORM_ID')) {
      status.textContent = 'Formular ist noch nicht verbunden – bitte Formspree-ID eintragen (siehe README).';
      status.style.color = 'var(--orange)';
      return;
    }
    status.textContent = 'Wird gesendet …';
    status.style.color = 'var(--muted)';
    try {
      const res = await fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
      if (!res.ok) throw new Error();
      form.reset();
      status.textContent = 'Danke! Ich melde mich innerhalb von 24 Stunden bei Ihnen.';
      status.style.color = 'var(--orange)';
    } catch {
      status.textContent = 'Das hat leider nicht geklappt. Schreiben Sie mir gern direkt per E-Mail.';
      status.style.color = '#ff4d4d';
    }
  });
}

// Jahr im Footer
document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
