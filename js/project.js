/* =========================================================
   Project detail page — reads ?id= from the URL
   ========================================================= */
(function () {
  const id = new URLSearchParams(location.search).get('id');
  const project = PORTFOLIO.projects.find((p) => p.id === id);
  const mount = document.getElementById('detail');

  document.getElementById('year').textContent = new Date().getFullYear();

  if (!project) {
    mount.innerHTML = `
      <div class="notfound">
        <h1>Project not found</h1>
        <p class="section__lede" style="margin-inline:auto">That project id doesn't exist in the data file.</p>
        <a class="btn" href="index.html#projects">Back to projects</a>
      </div>`;
    return;
  }

  document.title = `${plain(project.title)} — Koa Shen`;

  const links = (project.links || []).map((l) =>
    isFiller(l.label)
      ? `<li><span class="filler">${escapeHtml(fillerText(l.label))}</span></li>`
      : `<li><a href="${escapeHtml(l.url)}" target="_blank" rel="noopener">${escapeHtml(l.label)} ↗</a></li>`
  ).join('');

  mount.innerHTML = `
    <div class="detail__topline">
      <a class="back" href="index.html#projects">← All projects</a>
      <span class="detail__org">${text(project.org)} · ${text(project.dates)}</span>
    </div>

    <h1 class="detail__title">${text(project.title)}</h1>
    <p class="detail__summary">${text(project.summary)}</p>
    <div class="tags">${project.tags.map((t) => `<span class="tag">${text(t)}</span>`).join('')}</div>

    <div class="detail__cover${project.compactImages ? ' detail__cover--compact' : ''}">${imageOrPlaceholder(project.cover, plain(project.title))}</div>

    <div class="detail__body">
      <div class="detail__sections">
        ${project.sections.map((s) => `
          <section>
            <h3>${text(s.heading)}</h3>
            <p>${text(s.body)}</p>
          </section>`).join('')}

        ${project.video ? `
          <section class="project-video">
            <h3>${text(project.video.title || 'Project video')}</h3>
            <video controls preload="metadata" playsinline poster="${escapeHtml(project.video.poster || project.cover)}" aria-label="${escapeHtml(`${plain(project.title)} video`)}">
              <source src="${escapeHtml(project.video.src)}" type="video/mp4">
              Your browser does not support MP4 video playback.
            </video>
          </section>` : ''}

        <section>
          <h3>Gallery</h3>
          <div class="gallery${project.compactImages ? ' gallery--compact' : ''}">
            ${(project.images || []).map((src) =>
              `<figure>${imageOrPlaceholder(src, plain(project.title))}</figure>`).join('')}
          </div>
        </section>
      </div>

      <aside class="detail__aside">
        <h4>At a glance</h4>
        <p style="margin:0 0 1rem;font-size:.9rem;color:var(--text-dim)">
          <strong>${text(project.org)}</strong><br>${text(project.dates)}
        </p>
        ${links ? `<h4>Links</h4><ul style="padding-left:1.1rem;margin:0;font-size:.9rem">${links}</ul>` : ''}
      </aside>
    </div>`;
})();
