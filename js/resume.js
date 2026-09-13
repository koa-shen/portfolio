/* =========================================================
   Resume rendering — same data source as the site.
   ========================================================= */
(function () {
  const D = PORTFOLIO;

  const li = (s) => `<li${isFiller(s) ? ' class="filler"' : ''}>${
    isFiller(s) ? escapeHtml(fillerText(s)) : escapeHtml(s)
  }</li>`;

  const contactBits = [
    D.meta.location,
    D.meta.email,
    D.meta.phone,
    D.meta.linkedin,
    D.meta.github,
  ].map((v) => `<span>${text(v)}</span>`).join('');

  /* Education */
  const education = D.education.map((e) => `
    <div class="r-entry">
      <div class="r-row">
        <p class="r-title">${text(e.school)}</p>
        <span class="r-when">${text(e.dates)}</span>
      </div>
      <div class="r-row">
        <p class="r-sub">${text(e.degree)} — ${text(e.gpa)}</p>
        <span class="r-when">${text(e.location)}</span>
      </div>
      <ul>${e.details.map(li).join('')}</ul>
    </div>`).join('');

  /* Experience — paid roles first, then teams/research */
  const ordered = [
    ...D.experience.filter((x) => x.type === 'paid'),
    ...D.experience.filter((x) => x.type !== 'paid'),
  ];

  const experience = ordered.map((x) => `
    <div class="r-entry">
      <div class="r-row">
        <p class="r-title">${text(x.role)}</p>
        <span class="r-when">${text(x.dates)}</span>
      </div>
      <div class="r-row">
        <p class="r-sub">${text(x.org)}</p>
        <span class="r-when">${text(x.location)}</span>
      </div>
      <ul>${x.bullets.map(li).join('')}</ul>
    </div>`).join('');

  /* Projects — featured only, one line each, to keep this to a page */
  const projects = D.projects.filter((p) => p.featured).map((p) => `
    <div class="r-entry">
      <div class="r-row">
        <p class="r-title">${text(p.title)}</p>
        <span class="r-when">${text(p.dates)}</span>
      </div>
      <ul>
        <li>${text(p.summary)}</li>
        <li><em>Tools:</em> ${p.tags.map((t) => escapeHtml(plain(t))).join(', ')}</li>
      </ul>
    </div>`).join('');

  /* Skills — comma lists, ATS-friendly */
  const skills = Object.entries(D.skills).map(([group, list]) => `
    <div><b>${escapeHtml(group)}:</b> ${
      list.map((s) => isFiller(s.name)
        ? `<span class="filler">${escapeHtml(fillerText(s.name))}</span>`
        : escapeHtml(s.name)).join(', ')
    }</div>`).join('');

  document.getElementById('resume').innerHTML = `
    <header class="r-head">
      <h1 class="r-name">${text(D.meta.name)}</h1>
      <p class="r-role">${text(D.meta.role)} · ${text(D.meta.focus)}</p>
      <div class="r-contact">${contactBits}</div>
    </header>

    <section class="r-sec"><h2>Education</h2>${education}</section>
    <section class="r-sec"><h2>Experience</h2>${experience}</section>
    <section class="r-sec"><h2>Selected Projects</h2>${projects}</section>
    <section class="r-sec"><h2>Technical Skills</h2><div class="r-skills">${skills}</div></section>`;
})();
