/* =========================================================
   Resume rendering — same data source as the site.
   ========================================================= */
(function () {
  const D = PORTFOLIO;

  const li = (s) => `<li${isFiller(s) ? ' class="filler"' : ''}>${
    isFiller(s) ? escapeHtml(fillerText(s)) : escapeHtml(s)
  }</li>`;

  const contactBits = [
    D.meta.phone,
    D.meta.email,
    D.meta.linkedin,
    D.meta.github,
  ].map((v) => `<span>${text(v.replace(/^https?:\/\//i, ''))}</span>`).join('');

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

  /* Resume keeps the strongest distinct roles; full history stays on the portfolio. */
  const resumeOrganizations = new Set([
    "SLAC National Accelerator Laboratory — LCLS",
    "Exploratorium",
    "Gaucho Racing (FSAE EV) — UC Santa Barbara",
  ]);
  const ordered = [
    ...D.experience.filter((x) => x.type === 'paid' && resumeOrganizations.has(x.org)),
    ...D.experience.filter((x) => x.type !== 'paid' && resumeOrganizations.has(x.org)),
  ];

  const resumeExperienceBullets = {
    "SLAC National Accelerator Laboratory — LCLS": [
      "Developed reusable simulation and mechanical-analysis workflows for high-DOF LCLS beamline assemblies.",
      "Translated interference and loading findings into safer motion and alignment designs for detector-heavy experiments.",
    ],
    Exploratorium: [
      "Reverse-engineered and fabricated repairs for 100+ public exhibits; led three major overhauls, with the Arp Forms redesign avoiding $3,000+ in replacement costs.",
    ],
    "Gaucho Racing (FSAE EV) — UC Santa Barbara": [
      "Fabrication Team Lead; in the 2025–26 academic year, led a 15-person Chassis & Ergonomics team through GR26 safety-system design, manufacturing, and installation.",
      "CNC-machined GR26 suspension assemblies on Haas mills and lathes with Mastercam, iterating GD&T feedback with the suspension design team.",
    ],
  };

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
      <ul>${resumeExperienceBullets[x.org].map(li).join('')}</ul>
    </div>`).join('');

  /* Complement the experience section with projects that show distinct depth. */
  const resumeProjectIds = new Set([
    "robot-arm",
    "digital-twin",
    "polycapillary",
    "steering-wheel-development",
  ]);
  const resumeProjectSummaries = {
    "robot-arm": [
      "Designed a compact 15:1 cycloidal reducer that fits within a NEMA 17's 42 mm square face for a planned 6-DOF desktop manipulator.",
      "Built PlatformIO C++ firmware for TMC2209 stepper control, including step/dir generation and real-time telemetry.",
      "Integrated a 12-bit AS5600 magnetic encoder to detect missed steps and characterize reducer motion; multi-joint output sensing remains planned.",
    ],
    "digital-twin": ["Built a Drake-based digital twin with OpenCascade CAD import, CoACD collision meshes, and MeshCat visualization; live checks cover 28 DOF across 15 reusable stages, with adoption across three hutch assemblies in progress."],
    "polycapillary": ["Redesigned alignment with hot-swap mounts, lasers, irises, and detector stages to save hours of beamtime annually and reduce collision exposure for $100k+ detectors."],
    "steering-wheel-development": ["Integrated buttons, potentiometers, a display, and quick-release hardware; reduced mass from 4 lb to 1.7 lb across design revisions while improving driver fit."],
  };
  const projects = D.projects.filter((p) => resumeProjectIds.has(p.id)).map((p) => `
    <div class="r-entry">
      <div class="r-row">
        <p class="r-title">${text(p.title)}</p>
        <span class="r-when">${text(p.dates)}</span>
      </div>
      <ul>${resumeProjectSummaries[p.id].map((summary) => `<li>${escapeHtml(summary)}</li>`).join('')}</ul>
    </div>`).join('');

  /* Skills — comma lists, ATS-friendly */
  const resumeSkills = {
    "CAD & Manufacturing": ["SolidWorks", "Solid Edge", "Inventor / Fusion", "Mastercam", "GD&T", "CNC / manual machining", "Composites", "Welding", "Sheet metal"],
    Programming: ["Python", "C/C++", "PlatformIO", "MATLAB", "Arduino / microcontrollers", "Git / GitHub"],
    "Robotics & Controls": ["Drake kinematics / path planning", "Collision detection", "TMC2209 stepper control", "AS5600 encoders / I2C multiplexing"],
  };
  const skills = Object.entries(resumeSkills).map(([group, list]) => `
    <div><b>${escapeHtml(group)}:</b> ${list.map(escapeHtml).join(', ')}</div>`).join('');

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
