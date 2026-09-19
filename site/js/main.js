(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];

  /* Hero load choreography: wait for fonts so the line masks measure correctly */
  const start = () => requestAnimationFrame(() => document.documentElement.classList.add('is-loaded'));
  if (document.fonts && document.fonts.ready) {
    Promise.race([document.fonts.ready, new Promise(r => setTimeout(r, 900))]).then(start);
  } else start();

  /* Header state + sticky mobile CTA */
  const header = $('#header');
  const mobileCta = $('.mobile-cta');
  const hero = $('.hero');
  const final = $('#join');
  let ticking = false;
  const onScroll = () => {
    const y = window.scrollY;
    header.classList.toggle('is-scrolled', y > 24);
    if (mobileCta && hero) {
      const pastHero = y > hero.offsetHeight - 120;
      const atFinal = final && final.getBoundingClientRect().top < window.innerHeight;
      const show = pastHero && !atFinal;
      mobileCta.classList.toggle('is-visible', show);
      mobileCta.setAttribute('aria-hidden', String(!show));
      mobileCta.querySelector('a').tabIndex = show ? 0 : -1;
    }
    ticking = false;
  };
  window.addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
  onScroll();

  /* Mobile menu */
  const menu = $('#mobile-menu');
  const openBtn = $('.nav .menu-toggle');
  const setMenu = (open) => {
    menu.classList.toggle('is-open', open);
    openBtn.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
    if (open) $('nav a', menu).focus(); else openBtn.focus();
  };
  openBtn.addEventListener('click', () => setMenu(true));
  $$('[data-close]', menu).forEach(el => el.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && menu.classList.contains('is-open')) setMenu(false); });

  /* Scroll reveals + count-ups */
  const countUp = (el) => {
    const target = parseFloat(el.dataset.count);
    const decimals = parseInt(el.dataset.decimals || '0', 10);
    const fmt = v => v.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
    if (reduceMotion || !target) { el.textContent = fmt(target); return; }
    const dur = 1600;
    const t0 = performance.now();
    const tick = (now) => {
      const p = Math.min((now - t0) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 4);
      el.textContent = fmt(target * eased);
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      el.classList.add('is-in');
      $$('[data-count]', el).forEach(countUp);
      const statement = el.matches('.statement') ? el : $('.statement', el);
      if (statement) statement.classList.add('is-in');
      io.unobserve(el);
    });
  }, { threshold: 0.18, rootMargin: '0px 0px -40px 0px' });
  $$('.reveal').forEach(el => io.observe(el));

  /* Before / after comparison */
  $$('.compare-img').forEach(box => {
    const range = $('input[type="range"]', box);
    const set = () => box.style.setProperty('--pos', range.value + '%');
    range.addEventListener('input', set);
    set();
  });

  /* Forms: client-side validation + success state. Wire the submit to your CRM here. */
  const emailOk = v => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());
  $$('form[data-form]').forEach(form => {
    const input = $('input[type="email"]', form);
    const err = $('.form-error', form);
    const btn = $('button[type="submit"]', form);
    const success = form.nextElementSibling && form.nextElementSibling.classList.contains('form-success') ? form.nextElementSibling : null;
    const validate = () => {
      const ok = emailOk(input.value);
      input.setAttribute('aria-invalid', String(!ok));
      err.textContent = ok ? '' : 'Enter a valid email address, like name@example.com.';
      return ok;
    };
    input.addEventListener('blur', () => { if (input.value) validate(); });
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (!validate()) { input.focus(); return; }
      btn.disabled = true;
      const label = btn.textContent;
      btn.textContent = 'Sending…';
      // TODO: POST to CRM (GoHighLevel / HubSpot) webhook; fire analytics event `${form.dataset.form}_submit`.
      await new Promise(r => setTimeout(r, 700));
      btn.textContent = label;
      btn.disabled = false;
      if (success) { form.hidden = true; success.hidden = false; }
    });
  });

  /* Draft notice */
  const chip = $('.draft-chip');
  if (chip) $('button', chip).addEventListener('click', () => { chip.hidden = true; });

  $$('[data-year]').forEach(el => { el.textContent = new Date().getFullYear(); });
})();
