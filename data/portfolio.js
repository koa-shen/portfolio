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
    email: "koashensf@gmail.com",
    phone: "(415) 810-8344",
    linkedin: "https://linkedin.com/in/koa-shen/",
    github: "https://github.com/koa-shen",
    // Drop the exported PDF at this path (see assets/README note)
    resumePdf: "assets/Koa_Shen_Resume.pdf",
    // Hero portrait or a hero render of your best project
    heroImage: "assets/images/hero.jpg",
  },

  /* ===================== HERO STAT STRIP ===================== */
  /* Four quick credibility hits. Keep them concrete. */
  stats: [
    { value: "3.97", label: "Major GPA" },
    { value: "20+ DOF", label: "Simulated at SLAC" },
    { value: "15", label: "Engineers Led" },
    { value: "40+", label: "Parts CNC Machined" },
  ],

  /* ===================== ABOUT ===================== */
  about: {
    headline: "About",
    // 2-3 short paragraphs. Draft below is built from what you told me —
    // edit the tone until it sounds like you.
    paragraphs: [
      "I'm a third-year Mechanical Engineering student at UC Santa Barbara focused on robotics and motion control. My work sits at the seam between design and implementation: I like problems where the CAD, the hand calcs, the toolpath, and the control loop all have to agree with each other.",
      "At SLAC National Accelerator Laboratory I built a Python-based digital twin framework for multi-axis X-ray beamline stages, then used it to drive a redesign of a high-traffic optical assembly. On Gaucho Racing I lead the chassis and ergonomics side of our FSAE EV car and machine suspension hardware on Haas mills and lathes. In between, I'm building a 6-DOF printed robotic manipulator from scratch, cycloidal drives and all.",
      "Looking ahead, I want to keep growing into the kind of engineer who can hold the whole system in view, not just the piece in front of them — understanding how a bit of design, simulation, code, or machining work fits into the larger project and integrates with what my collaborators are building. I'm also chasing specific skills: ROS, C++, machine design, FEA in ANSYS, and a stronger grip on control theory, some from coursework and some from my own projects. For now that means continuing at SLAC on design and simulation work, and hopefully joining a new lab at UCSB where I can get thrown at problems I haven't seen before. Longer term, I'm aiming for a full-time Summer 2027 internship in controls, robotics, or autonomous actuation — ideally somewhere I click with the people and learn fast. I'm hoping this next year sharpens exactly where I want to specialize, which should also make me a stronger fit when it's time to pick a robotics/controls capstone project.",
    ],
  },

  /* ===================== EDUCATION ===================== */
  education: [
    {
      school: "University of California, Santa Barbara",
      degree: "B.S. Mechanical Engineering",
      dates: "Expected June 2028",
      location: "Santa Barbara, CA",
      gpa: "3.97 Major GPA · 3.94 Cumulative GPA",
      details: [
        "Relevant coursework: Statics, Dynamics, Intro to Mechanics of Materials, Advanced Mechanics of Materials, Circuits, Intro MATLAB, Intermediate MATLAB, Calculus-based Physics series, Calculus series.",
        "Dean's Honors, College of Engineering — every quarter to date.",
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
        "Built out a public stage-catalog library covering the majority of LCLS's common motion stages; nearing full EPICS controls compatibility, which will let any hutch engineer model and simulate their own assembly without rewriting kinematics.",
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
        "Led three full exhibit overhauls beyond routine servicing: Arp Forms (a vibrating piston-crankshaft mechanism that jiggles oobleck to demonstrate non-Newtonian fluid behavior), Monochromatic Room (custom HDPE glasses with polarized filters that decode a room lit only in pure yellow), and Spinning Patterns (encoder-controlled spinning table where visitors compose garnet-sand pattern art).",
        "Left behind updated CAD for every component I redesigned — including new encoder mounts and viewer-glasses assemblies — plus a redesigned load-spreading bezel for Arp Forms' acrylic enclosure (replacing discrete fasteners that had been over-constraining and cracking it) — all documented on Confluence for future access, reassembly, or remanufacture.",
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
        "Placed 30th at FSAE EV 2026 (Brooklyn, MI), up from 54th the year before — the team's first time passing technical inspection and competing in every dynamic event.",
        "Optimized the quick-release steering wheel from 3 lbs to 1.7 lbs — under half its prior weight — while improving driver comfort and force application.",
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
        "Contributed to two ongoing projects under Prof. Elliot Hawkes: a flywheel-clutch jumping robot that stores jump energy in a spinning mass rather than an elastic release (Hawkes Lab's signature approach), making it far more reusable and a candidate for aerial scouting on thin-atmosphere planets; and a running-shoe midsole using variable-pressure air pouches instead of foam, with a composite shell providing the structural stiffness the pouches can't.",
        "Designed mechanism components and a polycarbonate load-cell test enclosure for safely characterizing the jumping robot's launch potential; iterated several composite midsole layups (material, weave, cure process, and reinforcement geometry) to tune stiffness and bending response. Worked with graduate students James Clinton and Anders Seawright on the two projects, respectively — no publications or posters yet.",
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
        "Open-source kinematic-simulation framework that began by finding collisions in a high-DOF polycapillary assembly and grew into a platform for safe motion planning and controls integration.",
      tags: ["Python", "Drake", "CoACD", "MeshCat", "OpenCascade", "Path Planning"],
      cover: "assets/images/digital-twin/TWIN LAB FRONT.png",
      images: [
        "assets/images/digital-twin/TWIN LAB ISO 1.png",
        "assets/images/digital-twin/TWIN LAB ISO 2.png",
        "assets/images/digital-twin/TWIN LAB COLLISION WARNING.png",
        "assets/images/digital-twin/TWIN LAB CONTROL PANEL.png",
        "assets/images/digital-twin/DETECTOR STAGE ASSEMBLY.png",
      ],
      // Detail page sections. Keep the engineering narrative: problem -> constraints -> approach -> result.
      sections: [
        {
          heading: "Problem",
          body: "The polycapillary test assembly at LCLS packs many independently actuated stages into a small, sealed enclosure. Any commanded move risks driving hardware into a neighbor, and a crash can destroy detectors worth six figures or burn irreplaceable beam time. Static CAD inspection could not practically evaluate every travel range or design revision, so interference was largely checked by intuition.",
        },
        {
          heading: "Constraints",
          body: "A ~20ms planning latency target, an enclosure envelope of roughly 3x2x2 ft (with a protruding section for a long detector stage) that leaves little safety margin for 28 DOF of hardware, and mandatory interoperability with SLAC's EPICS controls system — which runs on a private, access-restricted network for the controls team. Tooling also had to stay open-source: commercial options like Siemens Process Simulate cost roughly $25k/year per seat, which doesn't scale to a lab of engineers who need to iterate rapidly.",
        },
        {
          heading: "Approach",
          body: "I built a Python framework on top of Drake for kinematics and planning, OpenCascade for CAD ingestion, CoACD for approximate convex decomposition of complex geometry into collision-tractable meshes, and MeshCat for visualization. Stages are inventoried into a reusable library so a new assembly can be described and simulated without re-deriving its kinematics.",
        },
        {
          heading: "Beyond collision detection",
          body: "Once the collision model was working, the same framework became useful for more than identifying interferences: it provides the kinematic basis for homing sequences, path planning, and explicit safe and no-go zones. Those capabilities matter most on high-DOF assemblies with incomplete encoder coverage, where an operator needs more confidence than a static CAD check can provide.",
        },
        {
          heading: "Results",
          body: "The largest model to date covers 28 total DOF across a mix of linear, rotary, and tip-tilt stages, all cataloged in a reusable stage library. Collision checking runs in real time using CoACD convex-hull decomposition with a secondary mesh triangle-triangle distance query for verification, both leaning on Drake's fast collision-query algorithms — one of the reasons I chose Drake over MuJoCo. Applying the framework to the XCS polycapillary test assembly (built years before this simulation work began) surfaced at least 10 actionable design changes needed for true interference resistance: a helium-purged acrylic enclosure redesign, repositioned stage stacks, new breadboard-mounting brackets, and encoder retrofits on stages that currently have no closed-loop feedback at all. Full path planning is still in progress — the collision-detection core is done, but integration is gated on controls-team bandwidth rather than the simulation itself. Compared to commercial alternatives like Siemens Process Simulate (~$25k/year per seat), this framework runs faster, with lower latency, tailored to LCLS's rapid-iteration workflow, at zero licensing cost — saving SLAC an estimated tens to hundreds of thousands of dollars depending on seat count.",
        },
        {
          heading: "What I'd do differently",
          body: "I'd reconsider the GUI. MeshCat came bundled with Drake and was the path of least resistance, but it's a limited visualization layer — it has no real button support, only sliders, which gets awkward when you want the sim to expose more than a parameter sweep. I'd also revisit the CoACD mesh decomposition step: it enables fast real-time collision queries, but generating a new decomposition after a CAD revision takes about two hours. That's still far faster than commercial alternatives, but slow enough that a rapid-iteration designer might give up on simulating a new revision rather than wait — and speeding that up would make the tool much more compelling to adopt.",
        },
      ],
      links: [
        { label: "GitHub — slaclab/twin-lab", url: "https://github.com/slaclab/twin-lab" },
      ],
    },

    {
      id: "polycapillary",
      title: "Polycapillary Optics Assembly Redesign",
      org: "SLAC National Accelerator Laboratory",
      dates: "2026",
      featured: true,
      summary:
        "Redesign of a high-use beamline optics assembly, driven by collision-simulation findings and instrument-scientist feedback to improve alignment, maneuverability, and beam-time efficiency.",
      tags: ["Solid Edge", "PDM", "Kinematic Mounts", "Statics & Dynamics", "GD&T", "Optomechanics"],
      cover: "assets/images/polycapillary/POLYCAP REAL ISO.jpg",
      images: [
        "assets/images/polycapillary/POLYCAP LASER RENDER ISO FRONT.png",
        "assets/images/polycapillary/POLYCAP LASER INTERNALS RENDER.png",
        "assets/images/polycapillary/POLYCAP STACK IRIS RENDER FRONT.png",
        "assets/images/polycapillary/POLYCAP STANDARD RENDER INTERNALS.png",
        "assets/images/polycapillary/POLYCAP STATIC MOUNT.png",
      ],
      sections: [
        {
          heading: "Problem",
          body: "The existing polycapillary assembly is used constantly across experiments but was poorly designed: alignment was slow and unreliable, packaging invited interference with neighboring hardware, and setup consumed X-ray beam time that costs tens of thousands of dollars per experiment.",
        },
        {
          heading: "Design changes",
          body: "Collision-simulation findings and direct feedback from instrument scientists drove new brackets, a more stable enclosure base mount, kinematic mounts for repeatable hot-swapping, alignment lasers and irises for semi-fine alignment, cable management and detector strain relief, and additional stages for detector maneuverability. Packaging was reworked to remove identified interference risks while making the assembly more usable in real experimental workflows.",
        },
        {
          heading: "Analysis",
          body: "Statics and dynamics hand calculations were used to verify that every stage and mount was adequate for its loading cases, including worst-case handling. The failure mode being designed against is unambiguous: dropping or crashing a detector is a $100k+ mistake.",
        },
        {
          heading: "Impact",
          body: "The underlying goal is to reduce setup and recovery time before and during experiments. LCLS beamtime costs approximately $70k per day, so saving even a few hours per year returns more value than the cost of a summer internship.",
        },
        {
          heading: "Alignment workflow",
          body: "Previously, precise alignment happened live, with the beam on: technicians used diode sensors to center the beam, then translated the stack to swap the crystal in for the diode. Doing that during active beamtime is stressful and expensive (beam time runs into the thousands of dollars per hour), and once the chamber is sealed and helium-purged, any crash or drop ends the experiment outright. The redesign front-loads alignment instead: hot-swappable kinematic mounts let optics be laser-aligned without helium in the chamber, and added manual stages — driven by micrometers with locking screws, since a slipped carriage could drop the detector — make beam-centering on the detector far more controlled. Combined with the interference-prevention work, the live-beam portion of the procedure is now simpler and lower-risk than before.",
        },
        {
          heading: "Numbers",
          body: "Added 2 DOF to the assembly, bringing it to 30 DOF total. Kinematic mount repeatability follows the Newport M-BK-1A spec sheet. The assembly serves an estimated 1–2 experiments per year. Precise mass and enclosure dimensions, plus a cleared cost-savings figure, are pending final CAD and sign-off from my SLAC supervisor.",
        },
        {
          heading: "Clearance note",
          body: "Cost-savings estimate is in progress with my SLAC supervisor — will publish once confirmed.",
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
      cover: "assets/images/robot-arm/FULL REDUCER ASSEMBLY RENDER ISO.jpg",
      images: [
        "assets/images/robot-arm/FULL REDUCER ASSEMBLY RENDER EXPLODED ISO.jpg",
        "assets/images/robot-arm/REDUCER SECTION SIDE VIEW.png",
        "assets/images/robot-arm/ASSEMBLED REDUCER AND STEPPER.jpg",
        "assets/images/robot-arm/STEPPER WITH REDUCER AND ENCODER.jpg",
        "assets/images/robot-arm/ENCODER WIRING SETUP.jpg",
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
          heading: "Reduction & Packaging",
          body: "Each cycloidal reducer runs a 15:1 reduction, sized to be compatible with any NEMA 17 stepper: it fits within the motor's 42x42mm face profile and is shorter axially than the stepper itself, so it packages cleanly into linkages without growing the joint envelope. Measured backlash, holding torque, arm reach, payload target, and total BOM cost are still being characterized as the build progresses.",
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
      cover: "assets/images/gr26-wheels/SPINDLE CNC MILLING COMPLETE.jpg",
      images: [
        "assets/images/gr26-wheels/UPRIGHT MACHINING IN PROGRESS.jpg",
        "assets/images/gr26-wheels/SPINDLE IN CNC LATHE.jpg",
        "assets/images/gr26-wheels/SOFTJAWS MACHINING.jpg",
        "assets/images/gr26-wheels/FINISHED CLEVISES.jpg",
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
          heading: "Components & tolerances",
          body: "Machined uprights, spindles, spacers, and brackets in 7075-T6 aluminum — 5 of each (except uprights, which are wheel-specific) to cover all four wheels plus a spare. Held +/-0.0005in on the wheel hub bearing interfaces (a slight mallet press fit) and +/-0.0002in on the spherical bearing interface for the rod ends (a slip fit, then edge-crimped). Cycle time wasn't optimized for speed — the priority was accuracy, surface finish, and machine/operator safety.",
        },
        {
          heading: "Fixturing",
          body: "Used custom softjaws machined from 6061 for most milling operations. Uprights, being one-of-one parts, were held with breadboard step-clamp setups since repeatability wasn't a factor; spacers and brackets used standard vice and parallel-bar setups.",
        },
        {
          heading: "DFM impact",
          body: "Scrap rate was mostly a function of Mastercam programming error rather than the design, so DFM feedback didn't move that number. Lead time was the real win: feature-orientation adjustments and tolerance checks caught during design review saved entire machine setups — a savings that multiplies across every replica part made.",
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
        "Led a 15-person team from ergonomics sketches through installation of the GR26 driver environment: floor closeout, firewall, heat insulation, composite seat, and Confor foam headrest. Passed FSAE EV technical inspection fully rules-compliant.",
      tags: ["Composites", "Ergonomics", "Sheet Metal", "Project Management", "FSAE Rules"],
      cover: "assets/images/gr26-safety/GR26 SAFETY SYSTEMS.png",
      images: [
        "assets/images/gr26-safety/GR26 SEAT.png",
        "assets/images/gr26-safety/GR26 STEERING WHEEL ISO.png",
        "assets/images/gr26-safety/DRIVER COCKPIT.jpg",
        "assets/images/gr26-safety/GR26 ERGO JIG WITH DRIVER.png",
        "assets/images/gr26-safety/FIREWALL GAP COVER.jpg",
      ],
      sections: [
        {
          heading: "Scope",
          body: "Owned the full driver environment: floor closeout, firewall, heat insulation, a custom-molded composite seat, and a Confor foam headrest. This work required packaging every component around the chassis, driver, powertrain heat, and FSAE rules.",
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
          heading: "Seat development",
          body: "The composite seat came in around 4 lbs. It was the team's first composite-seat program, so the work established a baseline for material selection, mold and layup process, fit, and installation; comfort remains a focus for the incoming ergonomics lead.",
        },
        {
          heading: "Fit strategy",
          body: "FSAE rules require accommodating 5th-percentile-female to 95th-percentile-male drivers, but our actual driver pool clustered around the 35th-percentile male. So the cockpit was built to stay usable across the full rules-mandated range while being truly optimized for our real drivers: a seat molded directly to them, a steering wheel molded to their grip, headrest placement set from their feedback, and pedal placement calibrated to their leg length, with optional mounting positions for drivers at the percentile extremes.",
        },
        {
          heading: "Results",
          body: "At FSAE EV 2026 (Brooklyn, Michigan, June 2026) the team placed 30th, up from 54th the year before — the first time the team passed technical inspection, and the first time it competed in a dynamic event, let alone all of them. Full development ran from early August 2025 to early May 2026, roughly nine months sketch-to-installed.",
        },
      ],
      links: [],
    },

    {
      id: "chassis-welding-jig",
      title: "FSAE Chassis Welding Jig Evolution",
      org: "Gaucho Racing",
      dates: "2024 – 2026",
      featured: true,
      summary:
        "Designed successive welding fixtures that locate the racecar's tube chassis at its CAD-defined nodes, progressing from an 80/20-and-plywood GR25 jig to a more accurate, assembly-friendly hybrid system for GR26.",
      tags: ["Welding Fixtures", "Assembly Design", "80/20", "3D Printing", "Laser Cutting", "Tolerance Stackup"],
      cover: "assets/images/chassis-jig/GR26 CHASSIS JIG ISO.png",
      images: [
        "assets/images/chassis-jig/GR25 CHASSIS JIG AERIAL.png",
        "assets/images/chassis-jig/GR25 CHASSIS JIG ISO.png",
        "assets/images/chassis-jig/GR25 CHASSIS JIG SIDE.png",
        "assets/images/chassis-jig/GR26 CHASSIS JIG SIDE.png",
        "assets/images/chassis-jig/CH26.ChassisJig8020 RENDER ISO.jpg",
        "assets/images/chassis-jig/CHASSIS FIXTURE IN TRUCKBED.jpg",
      ],
      sections: [
        {
          heading: "Why the jig matters",
          body: "The welding fixture establishes the chassis node positions that define wheelbase, suspension hardpoints, and the rest of the vehicle geometry. Tolerance stackup in the fixture becomes chassis error after welding, potentially changing wheelbase and contributing to suspension chatter and other vehicle-dynamics problems.",
        },
        {
          heading: "GR25 baseline",
          body: "I led a three-person team to build the GR25 fixture under a $1,500 budget. The 80/20-and-plywood design constrained 81 chassis tubes to CAD within 0.050 in at the nodes and provided the team with a functioning precision-welding reference for the car.",
        },
        {
          heading: "What needed to change",
          body: "The GR25 system worked, but assembly was difficult and the structure could become overconstrained. Laser-cut variation and wood warpage also limited confidence in repeated setup and accuracy, especially where many fixture interfaces accumulated around the chassis.",
        },
        {
          heading: "GR26 hybrid jig",
          body: "For GR26, the team shifted design philosophy: 3D-printed locating brackets were combined with 80/20 and plywood to make the jig easier to assemble while improving positional control. The hybrid system focused precision where it mattered at the tube nodes rather than relying on an increasingly complicated all-plywood fixture.",
        },
      ],
      links: [],
    },

    {
      id: "steering-wheel-development",
      title: "FSAE Steering Wheel Development",
      org: "Gaucho Racing",
      dates: "2024 – 2026",
      featured: false,
      summary:
        "Led and then supervised successive steering-wheel iterations that reduced mass, improved driver comfort and force application, and coordinated manufacturing and vehicle integration across subteams.",
      tags: ["Ergonomics", "Composites", "CAD", "Manufacturing Sourcing", "Vehicle Integration", "FSAE"],
      cover: "assets/images/steering-wheel/GR26 STEERING WHEEL ISO.png",
      images: [
        "assets/images/steering-wheel/GR24 STEERING WHEEL.png",
        "assets/images/steering-wheel/GR25 STEERING WHEEL 1 FRONT.png",
        "assets/images/steering-wheel/GR25 STEERING WHEEL 1 BACK.png",
        "assets/images/steering-wheel/GR25 STEERING WHEEL 2 FRONT.png",
        "assets/images/steering-wheel/GR25 STEERING WHEEL 2 INTERNALS.png",
        "assets/images/steering-wheel/GR25 STEERING WHEEL DEVELOPMENT.png",
        "assets/images/steering-wheel/ER26SteeringWheelQR RENDER EXPLODED ISO.jpg",
      ],
      sections: [
        {
          heading: "Development arc",
          body: "I managed steering-wheel development as the responsible engineer during the GR25 design cycle, then continued contributing as the chassis and ergonomics lead during GR26. The project evolved through several designs instead of treating the wheel as a one-off part, with each cycle retaining what worked and addressing mass, grip, and integration issues from the previous car.",
        },
        {
          heading: "Engineering and research",
          body: "During GR25, I secured $2,000 in undergraduate research funding for wheel R&D and used hand calculations and FEA to compare CFRP, GFRP, 6061-T6, and 7075-T6 options for the baseplate. That work reduced assembly weight by 25% and cost by 30% from the preceding design.",
        },
        {
          heading: "GR26 collaboration",
          body: "After moving into the leadership role, I worked with the next design engineer to develop a better GR26 wheel from the prior work. I provided technical guidance while sourcing materials and manufacturing, coordinating interfaces with the relevant subteams, and keeping the design aligned with the full driver-system package.",
        },
        {
          heading: "Result",
          body: "Across the design cycles, the steering-wheel assembly moved from 4 lb to 3 lb and then to 1.7 lb for GR26, while improving driver comfort and force application at the wheels. The final result was a lighter quick-release wheel that was better integrated with the car and the people driving it.",
        },
      ],
      links: [],
    },

    {
      id: "exploratorium-exhibits",
      title: "Interactive Exhibit Mechanism Redesigns",
      org: "Exploratorium",
      dates: "2025",
      featured: false,
      summary:
        "Redesigned and fabricated durable mechanisms for high-use public exhibits, combining reverse engineering with manual machining, welding, and visitor-focused reliability improvements.",
      tags: ["Reverse Engineering", "Manual Machining", "Welding", "CAD", "Mechanism Design"],
      cover: "assets/images/exploratorium/ARP FORMS MECHANISM.jpg",
      images: [
        "assets/images/exploratorium/AERIAL OF VIEWER MACHINING.jpg",
        "assets/images/exploratorium/CLOSE UP OF VIEWER MACHINING.jpg",
        "assets/images/exploratorium/SPINNING PATTERNS ENCODER MOUNT.jpg",
      ],
      sections: [
        {
          heading: "Problem",
          body: "Public exhibits experience constant, unpredictable use, so a mechanism that works on a bench can still fail quickly in the gallery. Several exhibits needed more than routine maintenance: their damaged or unreliable components had to be understood, redesigned, and fabricated around the constraints of the existing installation.",
        },
        {
          heading: "Projects",
          body: "I led full overhauls of Arp Forms, Monochromatic Room, and Spinning Patterns. The work included a redesigned load-spreading bezel for Arp Forms' acrylic enclosure, custom HDPE polarized-filter viewer glasses for Monochromatic Room, and redesigned encoder mounts and viewer assemblies for Spinning Patterns.",
        },
        {
          heading: "Fabrication",
          body: "I reverse-engineered failed parts and made replacements with manual machining, welding, woodshop, and makerspace equipment. The redesigns had to be manufacturable with the tools on hand and robust enough to withstand continual visitor interaction.",
        },
        {
          heading: "Handoff",
          body: "Every redesigned component was documented in CAD and Confluence so future technicians can access the design intent, reassemble mechanisms, and remanufacture wear items without repeating the original investigation.",
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
    ],
  },

  /* ===================== JOB TARGET (site-invisible, for tailoring) ===================== */
  target: {
    roles: ["Robotics Intern", "Controls Intern", "Mechanical Design Intern (Robotics)"],
    term: "Summer 2027",
    companies: ["Waymo", "Zoox", "Tesla Autonomy", "Intuitive Surgical"],
    priorities: ["Established company", "High compensation", "Bay Area (commutable from SF)"],
  },
};
