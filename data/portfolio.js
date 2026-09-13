/*
 * SINGLE SOURCE OF TRUTH
 * ----------------------
 * Both the website and the resume page read from this file.
 * Edit here once, both update.
 *
 * FILLER CONVENTION
 * -----------------
 * Any string that starts with "FILLER:" is placeholder content.
 * It renders on the page with a yellow "NEEDS CONTENT" highlight so you
 * can see exactly what is still missing. Replace the whole string
 * (including the "FILLER:" prefix) with real content when you have it.
 *
 * Everything WITHOUT the prefix is real information you provided.
 */

const PORTFOLIO = {
  /* ===================== IDENTITY / CONTACT ===================== */
  meta: {
    name: "Koa Shen",
    role: "Mechanical Engineering B.S. @ UC Santa Barbara",
    focus: "Robotics · Motion Systems · Design for Manufacturing",
    // Short punchy line under your name on the hero. Rewrite in your voice.
    tagline:
      "I design, simulate, and machine motion systems — from 20-DOF X-ray beamline stages at SLAC to cycloidal-drive robot arms on my bench at home.",
    location: "San Francisco Bay Area / Santa Barbara, CA",
    email: "FILLER: your.email@ucsb.edu",
    phone: "FILLER: (415) 555-0123  — optional, resume only",
    linkedin: "FILLER: https://linkedin.com/in/koa-shen",
    github: "https://github.com/koa-shen",
    // Drop the exported PDF at this path (see assets/README note)
    resumePdf: "assets/Koa_Shen_Resume.pdf",
    // Hero portrait or a hero render of your best project
    heroImage: "FILLER: assets/images/hero.jpg",
  },

  /* ===================== HERO STAT STRIP ===================== */
  /* Four quick credibility hits. Keep them concrete. */
  stats: [
    { value: "3.97", label: "Major GPA" },
    { value: "20+ DOF", label: "Simulated at SLAC" },
    { value: "15", label: "Engineers Led" },
    { value: "FILLER: ##", label: "FILLER: e.g. Parts CNC Machined" },
  ],

  /* ===================== ABOUT ===================== */
  about: {
    headline: "About",
    // 2-3 short paragraphs. Draft below is built from what you told me —
    // edit the tone until it sounds like you.
    paragraphs: [
      "I'm a third-year Mechanical Engineering student at UC Santa Barbara focused on robotics and motion control. My work sits at the seam between design and implementation: I like problems where the CAD, the hand calcs, the toolpath, and the control loop all have to agree with each other.",
      "At SLAC National Accelerator Laboratory I built a Python-based digital twin framework for multi-axis X-ray beamline stages, then used it to drive a redesign of a high-traffic optical assembly. On Gaucho Racing I lead the chassis and ergonomics side of our FSAE EV car and machine suspension hardware on Haas mills and lathes. In between, I'm building a 6-DOF printed robotic manipulator from scratch, cycloidal drives and all.",
      "FILLER: One more paragraph — what you're looking for next, and what you're drawn to. e.g. 'I'm looking for a Summer 2027 robotics or controls internship in the Bay Area, ideally somewhere I can own hardware end-to-end.' Add a personal note if you want (hobbies, what got you into machines).",
    ],
  },

  /* ===================== EDUCATION ===================== */
  education: [
    {
      school: "University of California, Santa Barbara",
      degree: "B.S. Mechanical Engineering",
      dates: "Expected June 2028",
      location: "Santa Barbara, CA",
      gpa: "3.97 Major GPA",
      details: [
        "FILLER: Cumulative GPA — include it if it's above ~3.5, otherwise list major GPA only (already listed above).",
        "FILLER: Relevant coursework — list 6-8. Suggested for a robotics/controls target: Dynamics, Vibrations, Control Systems, Mechatronics, Machine Design, Numerical Methods, Linear Algebra, Thermodynamics.",
        "FILLER: Honors / scholarships / Dean's List terms, if any.",
      ],
    },
  ],

  /* ===================== EXPERIENCE ===================== */
  /* type: "paid" | "project"  — drives the badge on the timeline */
  experience: [
    {
      org: "SLAC National Accelerator Laboratory — LCLS",
      role: "Engineering Intern",
      dates: "Summer 2026 – Present (extended to part-time remote)",
      location: "Menlo Park, CA",
      type: "paid",
      tags: ["Design", "GD&T", "Kinematic Simulation", "Collision Detection", "Controls"],
      bullets: [
        "Built an open-source Python digital-twin framework (Drake, CoACD, MeshCat, OpenCascade) for collision detection and path planning on 20+ DOF motion assemblies operating in tightly enclosed beamline enclosures.",
        "Redesigned a high-traffic polycapillary optics assembly — kinematic mounts, alignment lasers, irises, and added stages — using the simulation framework to cut interference risk and improve focusing reliability.",
        "Performed statics and dynamics hand calculations to qualify stages and mounts against loading cases protecting $100k+ detectors from crash and drop failures.",
        "Produced design and PDM-controlled documentation in Siemens Solid Edge, applying GD&T for manufacture and inspection.",
        "FILLER: A bullet with a hard number on the framework's adoption — e.g. 'inventoried N motion stages' or 'framework adopted by X hutches / Y engineers.'",
      ],
    },
    {
      org: "Exploratorium",
      role: "Maintenance Technician",
      dates: "Summer 2025",
      location: "San Francisco, CA",
      type: "paid",
      tags: ["Reverse Engineering", "Machining", "Welding", "Woodshop"],
      bullets: [
        "Reverse-engineered and redesigned failing components of public exhibits subjected to continuous visitor use.",
        "Fabricated replacement parts using manual machining, welding, woodshop, and makerspace equipment.",
        "FILLER: How many exhibits did you service/repair? Any exhibit you fully redesigned? Add a number-bearing bullet.",
        "FILLER: Did you interface with exhibit designers/visitors? Any documentation or process you left behind?",
      ],
    },
    {
      org: "Gaucho Racing (FSAE EV) — UC Santa Barbara",
      role: "Chassis & Ergonomics Lead / Fabrication Team Lead",
      dates: "Fall 2024 – Present",
      location: "Santa Barbara, CA",
      type: "project",
      tags: ["Assembly Design", "Mechatronics", "Project Management", "CNC", "Welding"],
      bullets: [
        "Lead a 15-person team through ergonomics sketches, detail design, manufacturing, and installation of the GR26 driver safety systems; passed technical inspection at FSAE EV competition fully rules-compliant.",
        "CNC machined GR26 suspension wheel assemblies on Haas mills and lathes, programming toolpaths in Mastercam and iterating on GD&T feedback with the suspension design team.",
        "Own chassis and ergonomics packaging, including welded tube structures, tube notching, and assembly design.",
        "FILLER: Competition result / placement, and which competition + year (e.g. FSAE EV Michigan 2026, placed Nth of M).",
        "FILLER: A quantified chassis or safety-system outcome — mass saved, cycle time, part count, cost.",
      ],
    },
    {
      org: "Hawkes Lab — UC Santa Barbara",
      role: "Undergraduate Researcher",
      dates: "2025 – 2026 Academic Year",
      location: "Santa Barbara, CA",
      type: "project",
      tags: ["Design", "Composites", "Arduino"],
      bullets: [
        "Designed and manufactured composite structures for soft/continuum robotics research hardware.",
        "Built Arduino-based control and sensing for benchtop test setups.",
        "FILLER: What was the research actually about? (growing robots / vine robots / adhesion / something else) — one sentence of context makes this bullet 10x stronger.",
        "FILLER: Any publication, poster, or demo you contributed to? Advisor or grad student you worked under?",
      ],
    },
  ],

  /* ===================== PROJECTS ===================== */
  /*
   * `id` is used in the URL: project.html?id=digital-twin
   * `images` render in the detail-page gallery; missing files fall back to a
   * placeholder tile automatically, so you can add photos incrementally.
   */
  projects: [
    {
      id: "digital-twin",
      title: "Digital Twin Simulation Framework for LCLS Motion Stages",
      org: "SLAC National Accelerator Laboratory",
      dates: "2026",
      featured: true,
      summary:
        "Open-source Python framework for collision detection and path planning across 20+ DOF X-ray beamline motion systems in compact, enclosed spaces.",
      tags: ["Python", "Drake", "CoACD", "MeshCat", "OpenCascade", "Path Planning"],
      cover: "FILLER: assets/images/digital-twin/cover.jpg",
      images: [
        "FILLER: assets/images/digital-twin/meshcat-scene.png — screenshot of the MeshCat visualization",
        "FILLER: assets/images/digital-twin/collision-demo.gif — short clip of collision detection catching an interference",
        "FILLER: assets/images/digital-twin/stage-inventory.png — the stage inventory / library structure",
      ],
      // Detail page sections. Keep the engineering narrative: problem -> constraints -> approach -> result.
      sections: [
        {
          heading: "Problem",
          body: "LCLS beamline experiments pack many independently actuated stages into small, sealed enclosures. Any commanded move risks driving hardware into a neighbor, and a crash can destroy detectors worth six figures or burn irreplaceable beam time. Before this work, interference was checked by intuition and static CAD inspection.",
        },
        {
          heading: "Constraints",
          body: "FILLER: List the real constraints — enclosure envelope dimensions, number of axes, required planning latency, the fact it had to run on existing lab machines / alongside existing controls, open-source-only tooling, etc.",
        },
        {
          heading: "Approach",
          body: "I built a Python framework on top of Drake for kinematics and planning, OpenCascade for CAD ingestion, CoACD for approximate convex decomposition of complex geometry into collision-tractable meshes, and MeshCat for visualization. Stages are inventoried into a reusable library so a new assembly can be described and simulated without re-deriving its kinematics.",
        },
        {
          heading: "Scalability",
          body: "The core design goal was reuse: a stage inventory plus a documented implementation workflow means other motion assemblies at SLAC can be modeled by an engineer who didn't write the framework.",
        },
        {
          heading: "Results",
          body: "FILLER: Numbers, please — how many DOF in the largest model, how many stages inventoried, planning/solve time, number of interferences caught before hardware, number of assemblies modeled, any adoption by other engineers or hutches. This is your flagship project; it deserves the hardest numbers you have.",
        },
        {
          heading: "What I'd do differently",
          body: "FILLER: One honest paragraph. Interviewers love this section — it shows engineering judgment, not just execution.",
        },
      ],
      links: [
        { label: "FILLER: GitHub repo (if the code is public)", url: "#" },
        { label: "FILLER: Technical writeup / internal report (if shareable)", url: "#" },
      ],
    },

    {
      id: "polycapillary",
      title: "Polycapillary Optics Assembly Redesign",
      org: "SLAC National Accelerator Laboratory",
      dates: "2026",
      featured: true,
      summary:
        "Ground-up redesign of a frequently used, poorly packaged beamline optics assembly — kinematic mounts, alignment lasers, irises, and added stages — validated against crash risk with simulation and hand calcs.",
      tags: ["Solid Edge", "PDM", "Kinematic Mounts", "Statics & Dynamics", "GD&T", "Optomechanics"],
      cover: "FILLER: assets/images/polycapillary/cover.jpg",
      images: [
        "FILLER: assets/images/polycapillary/cad-render.png — isometric render of the new assembly",
        "FILLER: assets/images/polycapillary/before-after.png — old vs. new packaging comparison",
        "FILLER: assets/images/polycapillary/installed.jpg — photo of the hardware installed on the beamline",
      ],
      sections: [
        {
          heading: "Problem",
          body: "The existing polycapillary assembly is used constantly across experiments but was poorly designed: alignment was slow and unreliable, packaging invited interference with neighboring hardware, and setup consumed X-ray beam time that costs tens of thousands of dollars per experiment.",
        },
        {
          heading: "Design changes",
          body: "Integrated kinematic mounts for repeatable removal and reinstallation, alignment lasers and irises for fast optical alignment, and additional motion stages to expand focusing capability. Packaging was reworked to reduce interference risk, guided by the digital twin framework.",
        },
        {
          heading: "Analysis",
          body: "Statics and dynamics hand calculations were used to verify that every stage and mount was adequate for its loading cases, including worst-case handling. The failure mode being designed against is unambiguous: dropping or crashing a detector is a $100k+ mistake.",
        },
        {
          heading: "Impact",
          body: "Saves tens of thousands of dollars of beam time per experiment, with the assembly potentially deployed multiple times per year.",
        },
        {
          heading: "Numbers to add",
          body: "FILLER: Alignment time before vs. after (minutes/hours), number of DOF added, mass, positioning repeatability of the kinematic mounts, number of experiments per year it serves, dollar figure you're comfortable publishing.",
        },
        {
          heading: "Clearance note",
          body: "FILLER: Confirm with your SLAC supervisor what imagery and numbers you're allowed to publish publicly. Get this in writing before the site goes live.",
        },
      ],
      links: [],
    },

    {
      id: "robot-arm",
      title: "6-DOF Printed Robotic Manipulator",
      org: "Personal Project",
      dates: "Summer 2026 – Present",
      featured: true,
      summary:
        "6-DOF desktop manipulator designed with custom cycloidal reducers, PETG structural components, TMC2209 stepper drivers, AS5600 magnetic encoders on joint output axes, and C++/PlatformIO firmware.",
      tags: ["C++", "PlatformIO", "TMC2209", "AS5600 Encoders", "TCA9548A Mux", "Cycloidal Drives", "PETG / DFM", "Drake"],
      cover: "FILLER: assets/images/robot-arm/cover.jpg",
      images: [
        "FILLER: assets/images/robot-arm/cycloidal-exploded.png — exploded CAD view of a reducer",
        "FILLER: assets/images/robot-arm/printed-parts.jpg — photo of printed reducer hardware",
        "FILLER: assets/images/robot-arm/arm-assembly.jpg — current state of the arm",
        "FILLER: assets/images/robot-arm/backlash-test.mp4 — video of a joint running",
      ],
      sections: [
        {
          heading: "Goal",
          body: "Build a capable 6-DOF desktop manipulator using custom 3D-printed cycloidal reducers and off-the-shelf electronics, serving as a physical hardware testbed for the Drake-based planning framework developed at SLAC.",
        },
        {
          heading: "Actuation & Firmware",
          body: "Driven by NEMA 17 stepper motors (1.5A, 42 N·cm) paired with TMC2209 silent drivers. Built custom C++ firmware using PlatformIO for microcontrollers, implementing phase-based bringup, step/dir pulse generation, and real-time CSV telemetry (ms, step_pos, angle_deg).",
        },
        {
          heading: "Position Sensing",
          body: "AS5600 12-bit magnetic absolute encoders mounted directly on joint output axes to measure true joint angle post-reduction. Multi-joint I²C bus management handled via a TCA9548A multiplexer to resolve I²C address collisions.",
        },
        {
          heading: "DFM & Materials",
          body: "Printed on a Bambu P1S using PETG for structural and encoder mounting parts for thermal and mechanical stability near warm motors, TPU for cable strain relief, and custom M3 fastener hardware layouts.",
        },
        {
          heading: "Design details to add",
          body: "FILLER: Reduction ratio per joint, measured backlash, holding torque, arm reach and payload target, total BOM cost. These specifics will solidify the hardware numbers.",
        },
        {
          heading: "Simulation & Future Architecture",
          body: "Kinematic simulation and trajectory optimization powered by Python and Drake. Future architecture migration planned toward SPI/CAN bus for higher joint telemetry bandwidth.",
        },
      ],
      links: [
        { label: "GitHub Repository (koa-shen/desktop-6dof-arm)", url: "https://github.com/koa-shen/desktop-6dof-arm" },
      ],
    },

    {
      id: "gr26-wheel-assemblies",
      title: "GR26 CNC Wheel Assemblies",
      org: "Gaucho Racing",
      dates: "2025 – 2026",
      featured: true,
      summary:
        "CNC machined suspension wheel assemblies programmed in Mastercam and cut on Haas mills and lathes, iterated with the suspension design team through GD&T feedback.",
      tags: ["Mastercam", "Haas", "CNC Mill", "CNC Lathe", "GD&T", "DFM"],
      cover: "FILLER: assets/images/gr26-wheels/cover.jpg",
      images: [
        "FILLER: assets/images/gr26-wheels/toolpath.png — Mastercam toolpath screenshot",
        "FILLER: assets/images/gr26-wheels/machining.jpg — part on the Haas",
        "FILLER: assets/images/gr26-wheels/finished-part.jpg — finished upright/hub",
      ],
      sections: [
        {
          heading: "Scope",
          body: "Machined the wheel-end assemblies for the GR26 car's suspension, covering both milling and turning operations.",
        },
        {
          heading: "Design for manufacturing",
          body: "Worked directly with the suspension design team, feeding GD&T and manufacturability feedback back into the design so the parts could actually be held, fixtured, and inspected.",
        },
        {
          heading: "Specifics to add",
          body: "FILLER: Which components exactly (uprights, hubs, spacers?), material (7075? 4130?), number of parts made, tolerances held, cycle time, fixturing approach, any scrap-rate or lead-time improvement from your DFM feedback.",
        },
      ],
      links: [],
    },

    {
      id: "gr26-safety",
      title: "GR26 Driver Safety & Ergonomics Systems",
      org: "Gaucho Racing",
      dates: "2025 – 2026",
      featured: false,
      summary:
        "Led a 15-person team from ergonomics sketches through installation: floor closeout, firewall, heat insulation, custom-molded composite seat, weight-optimized quick-release steering wheel, and Confor foam headrest. Passed FSAE EV technical inspection fully rules-compliant.",
      tags: ["Composites", "Ergonomics", "Sheet Metal", "Project Management", "FSAE Rules"],
      cover: "FILLER: assets/images/gr26-safety/cover.jpg",
      images: [
        "FILLER: assets/images/gr26-safety/seat-mold.jpg — seat layup or mold",
        "FILLER: assets/images/gr26-safety/steering-wheel.jpg — the quick-release wheel",
        "FILLER: assets/images/gr26-safety/cockpit.jpg — finished cockpit",
        "FILLER: assets/images/gr26-safety/ergonomics-sketch.jpg — early ergonomics study",
      ],
      sections: [
        {
          heading: "Scope",
          body: "Owned the full driver environment: floor closeout, firewall, heat insulation, a custom-molded composite seat, a custom-molded steering wheel with weight optimization and quick-release, and a Confor foam headrest.",
        },
        {
          heading: "Leadership",
          body: "Managed a 15-person team across the entire lifecycle — initial ergonomics sketches, detail design, manufacturing, and installation — while keeping every subsystem compliant with FSAE rules.",
        },
        {
          heading: "Validation",
          body: "The complete package passed technical inspection at FSAE EV competition with full rules compliance.",
        },
        {
          heading: "Numbers to add",
          body: "FILLER: Steering wheel mass before/after optimization, seat mass, percentile driver range accommodated, headrest impact test results, timeline (how many weeks from sketch to installed), and which FSAE rules sections you had to satisfy.",
        },
      ],
      links: [],
    },
  ],

  /* ===================== SKILLS ===================== */
  /* level: 1 = familiar, 2 = intermediate, 2.5 = intermediate-advanced, 3 = advanced */
  skills: {
    Software: [
      { name: "SolidWorks", level: 3 },
      { name: "Mastercam", level: 3 },
      { name: "Bambu Studio", level: 3 },
      { name: "VS Code", level: 3 },
      { name: "MATLAB", level: 2 },
      { name: "Python", level: 2 },
      { name: "C/C++ (Embedded / PlatformIO)", level: 2 },
      { name: "Solid Edge", level: 2 },
      { name: "Inventor / Fusion", level: 2 },
      { name: "Arduino / Microcontrollers", level: 2 },
    ],
    Hardware: [
      { name: "Manual Machining", level: 3 },
      { name: "CNC Machining", level: 3 },
      { name: "Woodshop", level: 3 },
      { name: "Composites", level: 2.5 },
      { name: "Welding", level: 2 },
      { name: "Sheet Metal", level: 2 },
      { name: "Tube Notching", level: 2 },
      { name: "GD&T", level: 2 },
      { name: "Hand Calculations", level: 2 },
    ],
    "Robotics & Controls": [
      { name: "Drake (Kinematics & Path Planning)", level: 2 },
      { name: "TMC2209 Stepper Control", level: 2 },
      { name: "AS5600 Magnetic Encoders (I²C / Mux)", level: 2 },
      { name: "Kinematic Simulation & Collision Detection", level: 2 },
      { name: "Git / GitHub", level: 2.5 },
      { name: "FILLER: ROS / ROS2 — add with an honest level, or delete", level: 1 },
    ],
  },

  /* ===================== JOB TARGET (site-invisible, for tailoring) ===================== */
  target: {
    roles: ["Robotics Intern", "Controls Intern", "Mechanical Design Intern (Robotics)"],
    term: "FILLER: Confirm the term you're applying for — Summer 2027?",
    companies: ["Waymo", "Zoox", "Tesla Autonomy", "Intuitive Surgical"],
    priorities: ["Established company", "High compensation", "Bay Area (commutable from SF)"],
  },
};
