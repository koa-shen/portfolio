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
    D.meta.website,
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
      <ul>${e.details
        .filter((detail) => !detail.startsWith('Planned this academic year:'))
        .map((detail) => detail.startsWith("Dean's Honors, College of Engineering")
          ? "Consistently earned Dean's Honors in the College of Engineering."
          : detail)
        .map(li).join('')}</ul>
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
      "Built simulation and load-case workflows spanning CAD import, kinematics, and collision checks for high-DOF beamline assemblies.",
      "Applied XCS findings to the optics redesign and documented Solid Edge, Teamcenter, and EPICS interfaces.",
    ],
    Exploratorium: [
      "Serviced 100+ exhibits and led three overhauls; the Arp Forms redesign avoided $3,000+ in replacement costs.",
    ],
    "Gaucho Racing (FSAE EV) — UC Santa Barbara": [
      "Led a 15-person team through GR26 safety-system design, fabrication, and installation; passed FSAE technical inspection.",
      "CNC-machined 33 parts from 4130 steel and 7075-T6 aluminum; held bearing interfaces to 0.0005 in and standardized five spindles.",
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
      "Designed a compact 15:1 cycloidal reducer for a planned 6-DOF arm compatible with NEMA 17; 381 mm reach and 0.5 kg payload remain unvalidated targets.",
      "Built PlatformIO C++ firmware for TMC2209 stepper control, including step/dir generation and real-time telemetry.",
      "Integrated a 12-bit AS5600 encoder for missed-step detection; multi-joint output sensing remains planned.",
    ],
    "digital-twin": [
      "Built a 32-DOF Drake digital twin (305 bodies) with OpenCascade, CoACD, and MeshCat; millisecond checks span 15 LCLS stages.",
      "Applied it to three assemblies; retroactive XCS checks exposed at least five pinch points restricting use.",
    ],
    "polycapillary": ["Developed a redesign for a 32-DOF optics assembly with three kinematic bases and six hot-swappable optics; projected savings of 1–2 hours per shift-day and roughly $30k in annual value are not yet verified."],
    "steering-wheel-development": ["Integrated buttons, potentiometers, a display, and quick-release; reduced wheel mass from 5 lb to 1.7 lb through iterative design and FEA."],
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
    "CAD & Manufacturing": ["SolidWorks", "Solid Edge", "Teamcenter PDM", "Inventor / Fusion", "Mastercam", "GD&T", "CNC / manual machining", "Composites", "Welding", "Sheet metal"],
    Programming: ["Python", "C/C++", "PlatformIO", "MATLAB", "Arduino / microcontrollers", "Git / GitHub"],
    "Robotics & Controls": ["Drake kinematics (path planning in development)", "Collision detection", "TMC2209 stepper control", "AS5600 encoders / I2C multiplexing"],
  };
  const skills = Object.entries(resumeSkills).map(([group, list]) => `
    <div><b>${escapeHtml(group)}:</b> ${list.map(escapeHtml).join(', ')}</div>`).join('');

  document.getElementById('resume').innerHTML = `
    <header class="r-head">
      <h1 class="r-name">${text(D.meta.name)}</h1>
      <p class="r-role">${text(D.meta.role)} · Robotics · Motion Systems</p>
      <div class="r-contact">${contactBits}</div>
    </header>

    <section class="r-sec"><h2>Education</h2>${education}</section>
    <section class="r-sec"><h2>Experience</h2>${experience}</section>
    <section class="r-sec"><h2>Selected Projects</h2>${projects}</section>
    <section class="r-sec"><h2>Technical Skills</h2><div class="r-skills">${skills}</div></section>`;
})();
