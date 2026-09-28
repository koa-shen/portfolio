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
      "Worked across CAD import, kinematic modeling, collision checks, and mechanical load cases for high-DOF beamline assemblies.",
      "Applied model findings to the XCS optics redesign and documented interfaces across Solid Edge, Teamcenter, and the controls team's EPICS environment.",
    ],
    Exploratorium: [
      "Serviced 100+ public exhibits and led three major overhauls; the Arp Forms redesign avoided more than $3,000 in replacement costs.",
    ],
    "Gaucho Racing (FSAE EV) — UC Santa Barbara": [
      "Led a 15-person Chassis & Ergonomics team through GR26 safety-system design, manufacturing, and installation in 2025–26.",
      "CNC-machined 33 suspension components from 4130 steel and 7075-T6 aluminum, holding critical bearing interfaces within 0.0005 in and standardizing five spindles around proven CAM.",
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
      "Designed a compact 15:1 cycloidal reducer within a NEMA 17's 42 mm square face for a planned 6-DOF arm; 381 mm reach and 0.5 kg payload are unvalidated design targets.",
      "Built PlatformIO C++ firmware for TMC2209 stepper control, including step/dir generation and real-time telemetry.",
      "Integrated a 12-bit AS5600 magnetic encoder to detect missed steps and characterize reducer motion; multi-joint output sensing remains planned.",
    ],
    "digital-twin": [
      "Built a Drake-based digital twin with OpenCascade CAD import, CoACD collision meshes, and MeshCat visualization; millisecond-scale checks cover 305 active bodies in a 32-DOF assembly, using a catalog of 15 common LCLS stages.",
      "Applied the framework to three assemblies; retroactive XCS collision checks exposed at least five use-restricting pinch points.",
    ],
    "polycapillary": ["Redesigned a 32-DOF optics assembly with three kinematic bases and six hot-swappable optics; projected alignment savings of 1–2 hours per shift-day and roughly $30k annually remain unmeasured."],
    "steering-wheel-development": ["Integrated buttons, potentiometers, a display, and quick-release hardware; reduced mass from 5 lb in 2024 to 1.7 lb in 2026 through iterative design and weight-optimization FEA."],
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
    "Robotics & Controls": ["Drake kinematics (path planning in development)", "Collision detection", "TMC2209 stepper control", "AS5600 encoders / I2C multiplexing"],
  };
  const skills = Object.entries(resumeSkills).map(([group, list]) => `
    <div><b>${escapeHtml(group)}:</b> ${list.map(escapeHtml).join(', ')}</div>`).join('');

  document.getElementById('resume').innerHTML = `
    <header class="r-head">
      <h1 class="r-name">${text(D.meta.name)}</h1>
      <p class="r-role">${text(D.meta.role)} · ${text(D.meta.focus.replace("Design for Manufacturing", "DFM"))}</p>
      <div class="r-contact">${contactBits}</div>
    </header>

    <section class="r-sec"><h2>Education</h2>${education}</section>
    <section class="r-sec"><h2>Experience</h2>${experience}</section>
    <section class="r-sec"><h2>Selected Projects</h2>${projects}</section>
    <section class="r-sec"><h2>Technical Skills</h2><div class="r-skills">${skills}</div></section>`;
})();
