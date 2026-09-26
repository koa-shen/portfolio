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
      "Built an open-source Python digital twin (Drake, CoACD) with live collision detection across 28 DOF and a reusable 15-stage catalog; began applying it to three top-level hutch assemblies.",
      "Applied simulation findings to redesign the high-use polycapillary optics assembly, improving alignment and detector maneuverability while reducing collision and handling exposure for $100k+ detectors.",
      "Moved precision alignment out of the live-beam workflow, saving hours of beamtime per year and improving setup reliability for experiments scheduled far in advance.",
    ],
    Exploratorium: [
      "Reverse-engineered repairs for 100+ exhibits under continuous public use and led three major overhauls; the Arp Forms redesign avoided $3,000+ in replacement costs.",
      "Fabricated replacement parts across machining, welding, and woodshop; custom lathe tooling saved about $500.",
      "Produced updated CAD and Confluence documentation for redesigned components; completed 150+ hours of machining, CNC routing, and TIG welding training.",
    ],
    "Gaucho Racing (FSAE EV) — UC Santa Barbara": [
      "Fabrication Team Lead; last school year, led a 15-person Chassis & Ergonomics team through GR26 safety-system design, manufacturing, and installation.",
      "CNC-machined GR26 suspension assemblies on Haas mills and lathes with Mastercam, iterating GD&T feedback with the suspension design team.",
      "GR26 passed technical inspection and placed 30th at FSAE EV 2026, up from 54th; optimized the quick-release steering wheel from 3 lb to 1.7 lb.",
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
    "chassis-welding-jig",
    "steering-wheel-development",
  ]);
  const resumeProjectSummaries = {
    "robot-arm": "15:1 cycloidal reducer/stepper package in bench validation; fits within a NEMA 17's 42 mm square envelope.",
    "chassis-welding-jig": "GR25 jig located 81 tubes within 0.050 in and cut assembly time 50%; GR26 hybrid design reduced it another 30%.",
    "steering-wheel-development": "GR25 R&D cut wheel mass 25% and cost 30%; the GR26 wheel reached 1.7 lb with improved ergonomics.",
  };
  const projects = D.projects.filter((p) => resumeProjectIds.has(p.id)).map((p) => `
    <div class="r-entry">
      <div class="r-row">
        <p class="r-title">${text(p.title)}</p>
        <span class="r-when">${text(p.dates)}</span>
      </div>
      <ul><li>${escapeHtml(resumeProjectSummaries[p.id])}</li></ul>
    </div>`).join('');

  /* Skills — comma lists, ATS-friendly */
  const resumeSkills = {
    Software: ["SolidWorks", "Solid Edge", "Mastercam", "Python", "C/C++", "PlatformIO", "MATLAB"],
    Fabrication: ["CNC / manual machining", "GD&T", "Composites", "Welding", "3D printing"],
    "Robotics & Controls": ["Drake", "Kinematic simulation / collision detection", "TMC2209", "AS5600 encoders"],
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
