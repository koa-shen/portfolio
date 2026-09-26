/* =========================================================
   Home page rendering
   ========================================================= */
(function () {
  const D = PORTFOLIO;

  /* ---------- simple [data-field] bindings ---------- */
  document.querySelectorAll('[data-field]').forEach((el) => {
    el.innerHTML = text(get(D, el.dataset.field));
  });

  /* ---------- hero links ---------- */
  const linkDefs = [
    { key: 'email', label: 'Email', href: (v) => `mailto:${v}` },
    { key: 'linkedin', label: 'LinkedIn', href: (v) => v },
    { key: 'github', label: 'GitHub', href: (v) => v },
  ];

  document.getElementById('heroLinks').innerHTML = linkDefs.map((def) => {
    const raw = D.meta[def.key];
    return isFiller(raw)
      ? `<li><span class="filler">${escapeHtml(def.label)} — ${escapeHtml(fillerText(raw))}</span></li>`
      : `<li><a href="${escapeHtml(def.href(raw))}">${escapeHtml(def.label)}</a></li>`;
  }).join('');

  /* ---------- hero media ---------- */
  document.getElementById('heroMedia').innerHTML =
    imageOrPlaceholder(D.meta.heroImage, `${plain(D.meta.name)} portrait`, 'eager');

  /* ---------- stat strip ---------- */
  document.getElementById('heroStats').innerHTML = D.stats.map((s) => `
    <div class="stat">
      <div class="stat__v">${text(s.value)}</div>
      <div class="stat__l">${text(s.label)}</div>
    </div>`).join('');

  /* ---------- about ---------- */
  document.getElementById('about-body').innerHTML =
    D.about.paragraphs.map((p) => `<p>${text(p)}</p>`).join('');

  /* ---------- education ---------- */
  document.getElementById('education').innerHTML = D.education.map((e) => `
    <div class="edu__card reveal">
      <div class="edu__top">
        <h3 class="edu__school">${text(e.school)}</h3>
        <span class="edu__meta">${text(e.dates)} · ${text(e.location)}</span>
      </div>
      <p class="edu__degree">${text(e.degree)}</p>
      <span class="edu__gpa">${text(e.gpa)}</span>
      <ul>${e.details.map((d) => `<li${isFiller(d) ? ' class="filler"' : ''}>${
        isFiller(d) ? escapeHtml(fillerText(d)) : escapeHtml(d)
      }</li>`).join('')}</ul>
    </div>`).join('');

  /* ---------- projects ---------- */
  document.getElementById('projects-grid').innerHTML = D.projects.map((p) => `
    <a class="card reveal${p.featured ? ' card--feature' : ''}" href="project.html?id=${encodeURIComponent(p.id)}">
      <div class="card__media${p.compactImages ? ' card__media--compact' : ''}">${imageOrPlaceholder(p.cover, p.title, 'eager')}</div>
      <div class="card__body">
        <span class="card__org">${text(p.org)} · ${text(p.dates)}</span>
        <h3 class="card__title">${text(p.title)}</h3>
        <p class="card__summary">${text(p.summary)}</p>
        <div class="tags">${p.tags.map((t) => `<span class="tag">${text(t)}</span>`).join('')}</div>
        <span class="card__more">Read the write-up →</span>
      </div>
    </a>`).join('');

  /* ---------- experience timeline ---------- */
  document.getElementById('timeline').innerHTML = D.experience.map((x) => `
    <article class="tl reveal">
      <div class="tl__top">
        <h3 class="tl__role">${text(x.role)}
          <span class="tl__badge${x.type === 'paid' ? ' tl__badge--paid' : ''}">${x.type === 'paid' ? 'Employment' : 'Team / Research'}</span>
        </h3>
        <span class="tl__meta">${text(x.dates)} · ${text(x.location)}</span>
      </div>
      <p class="tl__org">${text(x.org)}</p>
      <div class="tags">${x.tags.map((t) => `<span class="tag">${text(t)}</span>`).join('')}</div>
      <ul>${x.bullets.map((b) => `<li${isFiller(b) ? ' class="filler"' : ''}>${
        isFiller(b) ? escapeHtml(fillerText(b)) : escapeHtml(b)
      }</li>`).join('')}</ul>
    </article>`).join('');

  /* ---------- skills ---------- */
  document.getElementById('skills-grid').innerHTML = Object.entries(D.skills).map(([group, list]) => `
    <div class="skillgroup reveal">
      <h3>${escapeHtml(group)}</h3>
      ${list.map((s) => `
        <div class="skill">
          <div class="skill__top">
            <span>${text(s.name)}</span>
            <span class="skill__lvl">${LEVEL_LABELS[s.level] || ''}</span>
          </div>
          <div class="skill__bar"><div class="skill__fill" data-pct="${(s.level / 3) * 100}"></div></div>
        </div>`).join('')}
    </div>`).join('');

  /* ---------- contact ---------- */
  document.getElementById('contactLinks').innerHTML = [
    isFiller(D.meta.email)
      ? `<span class="filler">Email — ${escapeHtml(fillerText(D.meta.email))}</span>`
      : `<a class="btn" href="mailto:${escapeHtml(D.meta.email)}">Email me</a><button class="btn btn--ghost" id="copyEmail" type="button">Copy email</button>`,
    isFiller(D.meta.linkedin)
      ? `<span class="filler">LinkedIn — ${escapeHtml(fillerText(D.meta.linkedin))}</span>`
      : `<a class="btn btn--ghost" href="${escapeHtml(D.meta.linkedin)}" target="_blank" rel="noopener">LinkedIn</a>`,
    isFiller(D.meta.github)
      ? `<span class="filler">GitHub — ${escapeHtml(fillerText(D.meta.github))}</span>`
      : `<a class="btn btn--ghost" href="${escapeHtml(D.meta.github)}" target="_blank" rel="noopener">GitHub</a>`,
    `<a class="btn btn--ghost" href="resume.html">Resume</a>`,
  ].join('');

  const copyEmail = document.getElementById('copyEmail');
  if (copyEmail) {
    copyEmail.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(D.meta.email);
        copyEmail.textContent = 'Copied';
        window.setTimeout(() => { copyEmail.textContent = 'Copy email'; }, 1800);
      } catch {
        window.prompt('Copy this email address:', D.meta.email);
      }
    });
  }

  document.getElementById('year').textContent = new Date().getFullYear();

  /* ---------- nav: mobile toggle + stuck state ---------- */
  const nav = document.getElementById('nav');
  const toggle = document.getElementById('navToggle');
  const links = document.querySelector('.nav__links');

  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  links.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      links.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
  window.addEventListener('scroll', () => {
    nav.classList.toggle('is-stuck', window.scrollY > 12);
  }, { passive: true });

  /* ---------- scroll reveal + skill bar fill ---------- */
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-in');
      entry.target.querySelectorAll('.skill__fill').forEach((bar) => {
        bar.style.width = `${bar.dataset.pct}%`;
      });
      io.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px' });

  document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

  /* ---------- active nav link on scroll ---------- */
  const sections = [...document.querySelectorAll('section[id]')];
  const navAnchors = [...document.querySelectorAll('.nav__links a[href^="#"]')];
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navAnchors.forEach((a) =>
        a.classList.toggle('is-active', a.getAttribute('href') === `#${entry.target.id}`));
    });
  }, { threshold: 0.4 });
  sections.forEach((s) => spy.observe(s));
})();
