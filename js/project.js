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

    ${project.showDetailCover === false ? '' : `<div class="detail__cover${project.compactImages ? ' detail__cover--compact' : ''}">${imageOrPlaceholder(project.cover, plain(project.title))}</div>`}

    <div class="detail__body">
      <div class="detail__sections">
        ${project.sections.map((s) => `
          <section>
            <h3>${text(s.heading)}</h3>
            <p>${text(s.body)}</p>
            ${s.image ? `<figure class="detail__section-image">
              ${imageOrPlaceholder(s.image, plain(s.imageAlt || project.title))}
              ${s.imageCaption ? `<figcaption>${text(s.imageCaption)}</figcaption>` : ''}
            </figure>` : ''}
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

  const imageViewer = document.createElement('dialog');
  imageViewer.className = 'image-viewer';
  imageViewer.setAttribute('aria-label', 'Image preview');
  imageViewer.innerHTML = `
    <button class="image-viewer__close" type="button" aria-label="Close image preview">&times;</button>
    <img alt="">`;
  document.body.append(imageViewer);

  const previewImage = imageViewer.querySelector('img');
  const openImage = (image) => {
    previewImage.src = image.currentSrc || image.src;
    previewImage.alt = image.alt;
    imageViewer.showModal();
  };

  mount.querySelectorAll('.detail__cover img, .gallery img, .detail__section-image img').forEach((image) => {
    image.tabIndex = 0;
    image.setAttribute('role', 'button');
    image.setAttribute('aria-label', `View larger: ${image.alt}`);
  });

  mount.addEventListener('click', (event) => {
    const image = event.target.closest('.detail__cover img, .gallery img, .detail__section-image img');
    if (image) openImage(image);
  });

  mount.addEventListener('keydown', (event) => {
    if (event.target.matches('.detail__cover img, .gallery img, .detail__section-image img') && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      openImage(event.target);
    }
  });

  imageViewer.querySelector('.image-viewer__close').addEventListener('click', () => imageViewer.close());
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && imageViewer.open) {
      event.preventDefault();
      imageViewer.close();
    }
  });
  imageViewer.addEventListener('click', (event) => {
    if (event.target === imageViewer) imageViewer.close();
  });
})();
