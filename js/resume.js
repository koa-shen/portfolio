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

  /* Resume keeps the strongest distinct roles; full history stays on the portfolio. */
  const resumeOrganizations = new Set([
    "SLAC National Accelerator Laboratory — LCLS",
    "Exploratorium",
    "Gaucho Racing (FSAE EV) — UC Santa Barbara",
    "Hawkes Lab — UC Santa Barbara",
  ]);
  const ordered = [
    ...D.experience.filter((x) => x.type === 'paid' && resumeOrganizations.has(x.org)),
    ...D.experience.filter((x) => x.type !== 'paid' && resumeOrganizations.has(x.org)),
  ];

  const resumeExperienceBullets = {
    "SLAC National Accelerator Laboratory — LCLS": [
      "Built a Drake/CoACD digital twin; live collision detection models 28 DOF across a 15-stage catalog.",
      "Applying it to three hutch assemblies and the polycapillary redesign; path planning and EPICS remain in development.",
    ],
    Exploratorium: [
      "Serviced 100+ exhibits and led three major overhauls; Arp Forms fixes avoided $3,000+ in replacement costs.",
      "Saved about $500 with custom lathe tooling; trained 150+ hours in machining, CNC routing, and TIG welding.",
    ],
    "Gaucho Racing (FSAE EV) — UC Santa Barbara": [
      "Lead a 15-person chassis/ergonomics team; GR26 passed inspection and placed 30th at FSAE EV 2026.",
      "CNC-machined suspension assemblies on Haas mills/lathes with Mastercam; managed five driver components and welding fixtures.",
    ],
    "Hawkes Lab — UC Santa Barbara": [
      "Worked with graduate mentors on two robotics projects; trained 50+ hours in composites, 3D printing, waterjet, and actuation-test firmware.",
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
