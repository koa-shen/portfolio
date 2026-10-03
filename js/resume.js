/* =========================================================
   Resume rendering — same data source as the site.
   ========================================================= */
(function () {
  const D = PORTFOLIO;
  const resumeTarget = new URLSearchParams(window.location.search).get('target');
  const isSemiValley = resumeTarget === 'semivalley';
  const isTau = resumeTarget === 'tau';
  const isNimo = resumeTarget === 'nimo';
  const isApplied = resumeTarget === 'applied';
  const resumeDownload = document.getElementById('resumeDownload');

  if (isSemiValley || isTau || isNimo || isApplied) {
    const filename = isTau
      ? 'Koa_Shen_Tau_Robotics_Resume.pdf'
      : isNimo ? 'Koa_Shen_Nimo_Technology_Resume.pdf'
        : isApplied ? 'Koa_Shen_Applied_Materials_Resume.pdf' : 'Koa_Shen_SemiValley_Resume.pdf';
    resumeDownload.href = `assets/${filename}`;
    resumeDownload.download = filename;
  }

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
        <p class="r-sub">${text(e.degree)} · ${isSemiValley || isTau || isNimo || isApplied ? '3.97 major / 3.94 overall GPA' : text(e.gpa)} · Dean's Honors every quarter</p>
        <span class="r-when">${text(e.location)}</span>
      </div>
      <ul>${e.details
        .filter((detail) => !detail.startsWith('Planned this academic year:'))
        .filter((detail) => !detail.startsWith("Dean's Honors, College of Engineering"))
        .map((detail) => detail.startsWith('Relevant coursework:')
          ? 'Coursework: Dynamics, Mechanics of Materials, Circuits. Current: Dynamical Systems and Machine Learning.'
          : detail)
        .map(li).join('')}</ul>
    </div>`).join('');

  /* Resume keeps the strongest distinct roles; full history stays on the portfolio. */
  const resumeOrganizations = new Set([
    "SLAC National Accelerator Laboratory — LCLS",
    "Exploratorium",
    "Gaucho Racing (FSAE EV) — UC Santa Barbara",
  ]);
  const tauExperienceOrder = [
    'Exploratorium',
    'Gaucho Racing (FSAE EV) — UC Santa Barbara',
    'SLAC National Accelerator Laboratory — LCLS',
  ];
  const nimoExperienceOrder = [
    'SLAC National Accelerator Laboratory — LCLS',
    'Gaucho Racing (FSAE EV) — UC Santa Barbara',
    'Exploratorium',
  ];
  const appliedExperienceOrder = [
    'SLAC National Accelerator Laboratory — LCLS',
    'Gaucho Racing (FSAE EV) — UC Santa Barbara',
    'Exploratorium',
  ];
  const ordered = isTau || isNimo || isApplied
    ? (isTau ? tauExperienceOrder : isNimo ? nimoExperienceOrder : appliedExperienceOrder)
        .map((org) => D.experience.find((x) => x.org === org))
    : [
        ...D.experience.filter((x) => x.type === 'paid' && resumeOrganizations.has(x.org)),
        ...D.experience.filter((x) => x.type !== 'paid' && resumeOrganizations.has(x.org)),
      ];

  const generalExperienceBullets = {
    "SLAC National Accelerator Laboratory — LCLS": [
      "Built CAD import, kinematics, collision-check, and load-case workflows for high-DOF LCLS assemblies.",
      "Applied XCS findings to the optics redesign and documented Solid Edge, Teamcenter, and EPICS interfaces.",
    ],
    Exploratorium: [
      "Serviced 100+ exhibits and led three overhauls; the Arp Forms redesign avoided $3,000+ in replacement costs.",
    ],
    "Gaucho Racing (FSAE EV) — UC Santa Barbara": [
      "Led 15 people through GR26 safety-system design and installation; passed FSAE technical inspection.",
      "CNC-machined 33 parts from 4130 steel and 7075-T6 aluminum; held fits to 0.0005 in and standardized five spindles.",
    ],
  };
  const semiValleyExperienceBullets = {
    "SLAC National Accelerator Laboratory — LCLS": [
      "Built CAD-import, kinematics, collision-check, and load-case workflows for high-DOF precision motion assemblies.",
      "Redesigned a high-DOF X-ray optics assembly with new mounts and stages; produced GD&T-controlled Solid Edge designs and Teamcenter documentation.",
    ],
    Exploratorium: [
      "Maintained 100+ interactive exhibits; reverse-engineered and fabricated mechanisms, leading three overhauls and avoiding $3,000+ in replacement costs.",
    ],
    "Gaucho Racing (FSAE EV) — UC Santa Barbara": [
      "Led 15 people through safety-system design, fabrication, and installation; passed FSAE technical inspection.",
      "CNC-machined 33 steel and aluminum components, holding bearing interfaces within 0.0005 in.",
    ],
  };
  const tauExperienceBullets = {
    Exploratorium: [
      'Serviced 100+ interactive exhibits; diagnosed failures and fabricated replacement parts using machine-shop, welding, and woodshop tools.',
      'Led three exhibit overhauls, including a mechanism redesign that avoided $3,000+ in replacement costs; documented CAD for future repair.',
    ],
    'Gaucho Racing (FSAE EV) — UC Santa Barbara': [
      'Led 15 teammates through design, fabrication, and installation of driver-safety hardware; passed FSAE technical inspection.',
      'Machined 33 steel and aluminum suspension components, holding critical bearing interfaces within 0.0005 in.',
    ],
    'SLAC National Accelerator Laboratory — LCLS': [
      'Built a Python/Drake digital twin and reusable stage catalog for high-DOF motion assemblies; collision checks run in milliseconds.',
      'Produced Solid Edge designs with GD&T and Teamcenter documentation; checked stage and mount loads with statics and dynamics calculations.',
    ],
  };
  const nimoExperienceBullets = {
    'SLAC National Accelerator Laboratory — LCLS': [
      'Designed precision motion assemblies in Solid Edge and Teamcenter, applying GD&T and statics/dynamics checks to mounts and stages.',
      'Used Python/Drake kinematics and collision checks to identify interference and guide mechanical changes to packaging and alignment.',
    ],
    'Gaucho Racing (FSAE EV) — UC Santa Barbara': [
      'Led a 15-person team from design through fabrication and installation of driver-safety hardware; passed FSAE technical inspection.',
      'CNC-machined 33 suspension components in 4130 steel and 7075-T6 aluminum; held bearing interfaces within 0.0005 in.',
    ],
    Exploratorium: [
      'Reverse-engineered and repaired mechanisms across 100+ interactive exhibits using manual machining, welding, and fabrication tools.',
      'Redesigned a cracking acrylic enclosure interface with a load-spreading bezel, avoiding $3,000+ in replacement costs; documented CAD for future repair.',
    ],
  };
  const appliedExperienceBullets = {
    'SLAC National Accelerator Laboratory — LCLS': [
      'Designed and analyzed high-DOF X-ray beamline assemblies using CAD, Python/Drake kinematics, collision checks, and load cases.',
      'Produced Solid Edge designs with GD&T and Teamcenter documentation; used analysis findings to guide optics assembly redesigns.',
    ],
    'Gaucho Racing (FSAE EV) — UC Santa Barbara': [
      'CNC-machined 33 components from 4130 steel and 7075-T6 aluminum; held critical bearing interfaces within 0.0005 in.',
      'Led 15 teammates through safety-system design, manufacturing, and installation; passed FSAE technical inspection.',
    ],
    Exploratorium: [
      'Maintained 100+ exhibit mechanisms, reverse-engineered and fabricated replacement components, and led three major overhauls.',
      'Redesigned a cracking acrylic enclosure interface with a load-spreading bezel, avoiding $3,000+ in replacement costs.',
    ],
  };
  const resumeExperienceBullets = isTau
    ? tauExperienceBullets
    : isNimo ? nimoExperienceBullets
      : isApplied ? appliedExperienceBullets
        : isSemiValley ? semiValleyExperienceBullets : generalExperienceBullets;

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
  const resumeProjectIds = new Set(isApplied ? [
    'digital-twin',
    'polycapillary',
    'gr26-wheel-assemblies',
  ] : isNimo ? [
    'robot-arm',
    'steering-wheel-development',
    'gr26-wheel-assemblies',
  ] : isTau ? [
    'robot-arm',
    'steering-wheel-development',
  ] : [
    "robot-arm",
    "digital-twin",
    "polycapillary",
    "steering-wheel-development",
  ]);
  const generalProjectSummaries = {
    "robot-arm": [
      "Designed a 15:1 cycloidal reducer for NEMA 17; planned arm targets (unvalidated): 6 DOF, 381 mm reach, 0.5 kg payload.",
      "Built PlatformIO C++ firmware for TMC2209 stepper control, including step/dir generation and real-time telemetry.",
      "Integrated a 12-bit AS5600 encoder for missed-step detection; multi-joint output sensing remains planned.",
    ],
    "digital-twin": [
      "Built a 32-DOF Drake twin (305 bodies) with OpenCascade, CoACD, MeshCat; millisecond checks span 15 LCLS stages.",
      "Applied it to three assemblies; retroactive XCS checks exposed at least five pinch points restricting use.",
    ],
    "polycapillary": ["Developed a redesign for a 32-DOF optics assembly with three kinematic bases and six hot-swappable optics; projected savings of 1–2 hours per shift-day and roughly $30k in annual value are not yet verified."],
    "steering-wheel-development": ["Integrated wheel buttons, potentiometers, display, and quick-release; FEA-guided iteration cut mass from 5 lb to 1.7 lb."],
  };
  const semiValleyProjectSummaries = {
    "robot-arm": [
      "Built and bench-validated closed-loop stepper control for a 15:1 cycloidal reducer using custom C++ firmware and AS5600 encoder feedback.",
      "Implemented missed-step detection and automatic position-error compensation; multi-joint integration remains in development.",
    ],
    "digital-twin": [
      "Built a Python/Drake digital twin for a 32-DOF assembly, integrating CAD import, kinematics, collision checking, and MeshCat visualization.",
      "Applied the framework to three LCLS assemblies; collision checks run in milliseconds across 305 bodies.",
    ],
    "polycapillary": [
      "Redesigned a 32-DOF optics assembly with three kinematic bases, six hot-swappable optics, and added stages to improve alignment and packaging.",
      "Used simulation findings and statics/dynamics calculations to guide design changes and evaluate handling loads.",
    ],
    "steering-wheel-development": [
      "Integrated controls, display, and quick-release into a competition steering wheel; FEA-guided iteration reduced mass from 5 lb to 1.7 lb.",
    ],
  };
  const tauProjectSummaries = {
    'robot-arm': [
      'Assembled and bench-tested a NEMA 17 stepper, TMC2209 driver, 15:1 reducer, and AS5600 encoder; validated feedback and missed-step detection.',
      '3D-printed reducer components in PETG/ABS and built C++ firmware for step control and automatic position-error correction.',
    ],
    'steering-wheel-development': [
      'Integrated buttons, potentiometers, display, and quick-release into an FSAE steering wheel; iterative, FEA-guided redesign reduced mass from 5 lb to 1.7 lb.',
    ],
  };
  const nimoProjectSummaries = {
    'robot-arm': [
      'Designed and built a compact 15:1 cycloidal reducer package for a NEMA 17 stepper, integrating a TMC2209 driver and AS5600 encoder.',
      'Bench-validated encoder feedback, missed-step detection, and automatic position correction in custom C++ firmware; printed reducer parts in PETG/ABS.',
    ],
    'steering-wheel-development': [
      'Integrated buttons, potentiometers, display, and quick-release into a driver interface; FEA-guided iteration reduced mass from 5 lb to 1.7 lb.',
    ],
    'gr26-wheel-assemblies': [
      'CNC-machined 33 precision suspension parts on Haas mills and lathes; held critical bearing fits within 0.0005 in and standardized five spindles.',
    ],
  };
  const appliedProjectSummaries = {
    'digital-twin': [
      'Built a Python/Drake digital twin for a 32-DOF assembly, integrating CAD import, kinematics, collision checking, and visualization.',
      'Applied the framework to three LCLS assemblies; collision checks run in milliseconds across 305 bodies.',
    ],
    polycapillary: [
      'Redesigned a high-DOF optics assembly with three kinematic bases, six hot-swappable optics, and added motion stages.',
      'Used simulation findings, instrument-scientist feedback, and statics/dynamics checks to guide packaging and alignment changes.',
    ],
    'gr26-wheel-assemblies': [
      'CNC-machined 33 precision suspension parts on Haas mills and lathes; held critical bearing fits within 0.0005 in.',
    ],
  };
  const resumeProjectSummaries = isTau
    ? tauProjectSummaries
    : isNimo ? nimoProjectSummaries
      : isApplied ? appliedProjectSummaries
        : isSemiValley ? semiValleyProjectSummaries : generalProjectSummaries;
  const projects = D.projects.filter((p) => resumeProjectIds.has(p.id)).map((p) => `
    <div class="r-entry">
      <div class="r-row">
        <p class="r-title">${text(p.title)}</p>
        <span class="r-when">${text(p.dates)}</span>
      </div>
      <ul>${resumeProjectSummaries[p.id].map((summary) => `<li>${escapeHtml(summary)}</li>`).join('')}</ul>
    </div>`).join('');

  /* Skills — comma lists, ATS-friendly */
  const generalSkills = {
    "CAD & Manufacturing": ["SolidWorks", "Solid Edge", "Teamcenter PDM", "Inventor/Fusion", "Mastercam", "GD&T", "CNC/manual machining"],
    Software: ["Python", "C/C++", "PlatformIO", "MATLAB", "Arduino", "Git/GitHub", "EPICS", "OpenCascade", "CoACD", "MeshCat"],
    "Robotics & Controls": ["Drake kinematics", "Collision detection", "TMC2209 stepper control", "AS5600 encoders/I2C multiplexing"],
  };
  const semiValleySkills = {
    "Mechanical Design & Manufacturing": ["SolidWorks", "Solid Edge", "Teamcenter PDM", "GD&T", "CNC/manual machining", "Mastercam"],
    "Analysis & Simulation": ["Statics and dynamics", "Drake kinematics", "Collision detection", "FEA-guided design", "Python", "MATLAB"],
    "Controls & Prototyping": ["C/C++", "PlatformIO", "Stepper control", "AS5600 encoder feedback", "Arduino", "Git/GitHub"],
  };
  const tauSkills = {
    'Maintenance & Fabrication': ['Mechanical repair', 'Failure diagnosis', 'Manual/CNC machining', 'Welding', '3D printing (PETG/ABS)'],
    'Robotics & Electronics': ['Mechanical assembly', 'Stepper drivers', 'Encoder/driver wiring', 'Arduino', 'C/C++', 'PlatformIO'],
    'CAD & Documentation': ['Solid Edge', 'SolidWorks', 'GD&T', 'Teamcenter PDM', 'Reverse engineering'],
  };
  const nimoSkills = {
    'Mechanical Design': ['Solid Edge', 'SolidWorks', 'Mechanism design', 'GD&T', 'Teamcenter PDM', 'Tolerance-aware design'],
    'Prototyping & Manufacturing': ['CNC/manual machining', '3D printing (PETG/ABS)', 'Mastercam', 'FEA', 'Assembly and functional testing'],
    'Mechatronics & Controls': ['C/C++', 'Python', 'Arduino', 'TMC2209 stepper control', 'AS5600 encoder feedback', 'PlatformIO'],
  };
  const appliedSkills = {
    'CAD & Engineering Documentation': ['Solid Edge', 'SolidWorks', 'Teamcenter PDM', 'GD&T', 'Engineering drawings'],
    'Analysis & Simulation': ['Statics and dynamics', 'FEA', 'Python', 'MATLAB', 'Drake kinematics', 'Collision detection'],
    'Manufacturing & Hardware': ['CNC/manual machining', 'Mastercam', '4130 steel', '7075-T6 aluminum', 'Welding', 'Design for manufacturing'],
  };
  const resumeSkills = isApplied ? appliedSkills : isNimo ? nimoSkills : isTau ? tauSkills : isSemiValley ? semiValleySkills : generalSkills;
  const skills = Object.entries(resumeSkills).map(([group, list]) => `
    <div><b>${escapeHtml(group)}:</b> ${list.map(escapeHtml).join(', ')}</div>`).join('');

  document.getElementById('resume').innerHTML = `
    <header class="r-head">
      <h1 class="r-name">${text(D.meta.name)}</h1>
      <p class="r-role">${isApplied
        ? 'Mechanical Engineering Intern Candidate · Equipment Design · Analysis · Manufacturing'
        : isNimo
        ? 'Mechanical Engineering Intern Candidate · Robotic Mechanisms · Actuation · Prototyping'
        : isTau
          ? 'Robotics Technician Candidate · Assembly · Repair · Electromechanical Testing'
          : isSemiValley
            ? 'Mechanical Engineering Candidate · Hardware Design · Analysis · Manufacturing'
            : `${text(D.meta.role)} · Robotics · Motion Systems`}</p>
      <div class="r-contact">${contactBits}</div>
    </header>

    <section class="r-sec"><h2>Education</h2>${education}</section>
    <section class="r-sec"><h2>Experience</h2>${experience}</section>
    <section class="r-sec"><h2>Selected Projects</h2>${projects}</section>
    <section class="r-sec"><h2>Technical Skills</h2><div class="r-skills">${skills}</div></section>`;
})();
