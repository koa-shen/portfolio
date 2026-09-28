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
    role: "B.S. Candidate in Mechanical Engineering · UC Santa Barbara",
    focus: "Robotics · Controls · Motion Systems · Design for Manufacturing",
    // Short punchy line under your name on the hero. Rewrite in your voice.
    tagline:
      "I connect simulation, mechanical design, and fabrication to build motion systems, from 32-DOF X-ray beamline assemblies at SLAC to cycloidal-drive robot arms.",
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
    { value: "32 DOF", label: "Simulated at SLAC" },
    { value: "15", label: "Engineers Led" },
    { value: "40+", label: "Parts CNC Machined" },
  ],

  /* ===================== ABOUT ===================== */
  about: {
    headline: "About",
    // 2-3 short paragraphs. Draft below is built from what you told me —
    // edit the tone until it sounds like you.
    paragraphs: [
      "I'm a mechanical engineering student at UC Santa Barbara focused on robotics and motion control. I work across CAD, analysis, fabrication, and controls, with a particular interest in turning models into reliable hardware.",
      "At SLAC, I develop simulation and mechanical-design workflows for X-ray beamline motion stages. With Gaucho Racing, I lead chassis and ergonomics work and machine suspension hardware. In my own projects, I build and test mechatronic systems, including a cycloidal-drive actuator for a planned robot arm.",
      "I'm seeking a Summer 2027 internship in robotics, controls, or autonomous actuation. I'm especially interested in roles that connect modeling and analysis to physical systems, and I'm deepening that foundation through SLAC work, UCSB coursework, and independent hardware projects.",
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
        "Relevant coursework: Statics, Dynamics, Dynamical Systems (in progress), Machine Learning (in progress), Intro and Advanced Mechanics of Materials, Circuits, MATLAB, Calculus-based Physics, and Calculus.",
        "Planned this academic year: Mechatronics, Robotics Lab, and Inverse Kinematics.",
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
        "Built an open-source Python digital-twin framework (Drake, CoACD, MeshCat, OpenCascade) with millisecond-scale collision checks for motion assemblies up to 32 DOF; path planning remains in development.",
        "Translated collision findings and instrument-scientist feedback into an optical-assembly redesign with kinematic mounts, alignment lasers, irises, cable management, and two added motion axes.",
        "Used statics and dynamics hand calculations to assess stages and mounts under handling and loading cases around detectors worth $100k+.",
        "Produced design and PDM-controlled documentation in Siemens Solid Edge, applying GD&T for manufacture and inspection.",
        "Cataloged 15 stages commonly used across LCLS and applied the framework to three assemblies, with interoperability designed around Solid Edge, Teamcenter PDM, and the controls team's EPICS database.",
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
      role: "Fabrication Team Lead",
      dates: "Fall 2024 – Present",
      location: "Santa Barbara, CA",
      type: "project",
      tags: ["Assembly Design", "Mechatronics", "Project Management", "CNC", "Welding"],
      bullets: [
        "Previously led a 15-person team through ergonomics sketches, detail design, manufacturing, and installation of the GR26 driver safety systems; passed technical inspection at FSAE EV competition fully rules-compliant.",
        "CNC-machined 4130 chromoly steel and 7075-T6 aluminum GR26 suspension components on Haas TM mills and lathes, holding bearing interfaces within 0.0005 in.",
        "Own chassis and ergonomics packaging, including welded tube structures, tube notching, and assembly design.",
        "Placed 30th at 2026 Michigan FSAE Electric, 2nd among UC teams, best UC in endurance, and 4th among California teams.",
        "Helped evolve the quick-release steering wheel from 5 lbs in 2024 to 1.7 lbs in its final 2026 form through iterative design and FEA-driven weight optimization.",
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
      dates: "2026 – Present",
      featured: true,
      summary:
        "Open-source kinematic-simulation framework with millisecond-scale collision checks, 15 reusable stage models, and three assemblies currently simulated; motion planning remains in development.",
      tags: ["Python", "Drake", "CoACD", "MeshCat", "OpenCascade", "Path Planning (In Development)"],
      cover: "assets/images/digital-twin/TWIN LAB FRONT.png",
      images: [
        "assets/images/digital-twin/TWIN LAB ISO 1.png",
        "assets/images/digital-twin/TWIN LAB ISO 2.png",
        "assets/images/digital-twin/TWIN LAB COLLISION WARNING.png",
        "assets/images/digital-twin/TWIN LAB CONTROL PANEL.png",
      ],
      // Detail page sections. Keep the engineering narrative: problem -> constraints -> approach -> result.
      sections: [
        {
          heading: "Problem",
          body: "The XCS polycapillary assembly at LCLS packs 32 DOF into a small, sealed enclosure. Any commanded move risks driving hardware into a neighbor, and a crash can destroy detectors worth six figures or burn irreplaceable beam time. Collision checking is currently retroactive, so the simulation is being used to expose restrictions in the existing assembly before future planning and controls integration can prevent unsafe moves.",
        },
        {
          heading: "Constraints",
          body: "Enclosure envelopes are driven by vacuum or helium pumping requirements as well as competing space claims along the beamline. Space is especially scarce in the Far Experimental Hall, where XCS sits in a compact facility excavated into a hill. The workflow also needs to interoperate with Siemens Solid Edge, Teamcenter PDM, and the controls team's EPICS database. Tooling had to stay open-source: commercial options like Siemens Process Simulate cost roughly $25k/year per seat, which doesn't scale to a lab of engineers who need to iterate rapidly.",
        },
        {
          heading: "Approach",
          body: "I built a Python framework on top of Drake for kinematics, OpenCascade for CAD ingestion, CoACD for approximate convex decomposition of complex geometry into collision-tractable meshes, and MeshCat for visualization. Fifteen common motion stages are now inventoried into a reusable library so a new assembly can be described and simulated without re-deriving its kinematics.",
        },
        {
          heading: "Beyond collision detection",
          body: "Interactive collision checking is operational within the simulation, but it is currently retroactive rather than connected to live controls. The same framework provides the kinematic basis for future homing sequences, path planning, and explicit safe and no-go zones; those capabilities remain in development. They matter most on high-DOF assemblies with incomplete encoder coverage, where an operator needs more confidence than a static CAD check can provide.",
        },
        {
          heading: "Results",
          body: "The largest model to date is the XCS polycapillary assembly, with 32 DOF and 305 active bodies spanning linear, rotary, and tip-tilt motion. The reusable catalog now contains 15 stages commonly used at LCLS, and collision checks complete in a few milliseconds using CoACD convex-hull decomposition and Drake's collision-query algorithms. Retroactive checking of the XCS assembly has identified at least five genuine pinch points that restrict its use. Three assemblies are currently being simulated; full path planning and EPICS integration remain in development.",
        },
        {
          heading: "Operational impact",
          body: "Repeatable motion simulation has made at least five real restrictions in the existing XCS polycapillary assembly visible to engineers. Collision checking is still retroactive rather than connected to live controls, but these findings can guide hardware revisions now and provide concrete cases for future path planning and EPICS integration.",
        },
        {
          heading: "What I'd do differently",
          body: "First, I would start with a smaller assembly so the core framework matured faster and path planning could begin earlier. Starting with a large, realistic assembly did accelerate development of the stage catalog, but it was a clear schedule tradeoff. Second, I would verify the CAD against the physical assembly before simulation. We discovered deep into STEP-file simulation that the CAD no longer matched the hardware, forcing CAD repairs and simulation work to run in parallel during a 10-week summer program. Third, I would involve XCS controls personnel, instrument scientists, and operators earlier. Their input could have accelerated EPICS live/replay and path planning while shaping the simulation around the needs of experiment runs.",
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
      dates: "2026 – Present",
      featured: true,
      summary:
        "Redesign of a high-use beamline optics assembly, driven by collision-simulation findings and instrument-scientist feedback to improve alignment, maneuverability, and beam-time efficiency.",
      tags: ["Solid Edge", "PDM", "Kinematic Mounts", "Statics & Dynamics", "GD&T", "Optomechanics"],
      cover: "assets/images/polycapillary/POLYCAP LASER RENDER ISO FRONT.png",
      images: [
        "assets/images/polycapillary/POLYCAP REAL ISO.jpg",
        "assets/images/polycapillary/POLYCAP LASER INTERNALS RENDER.png",
        "assets/images/polycapillary/POLYCAP STACK IRIS RENDER FRONT.png",
        "assets/images/polycapillary/POLYCAP STANDARD RENDER INTERNALS.png",
      ],
      sections: [
        {
          heading: "Problem",
          body: "The polycapillary assembly serves about two experiments per year, each typically running for a week. During those runs, alignment is slow and unreliable, packaging invites interference with neighboring hardware, and setup consumes X-ray beam time that costs tens of thousands of dollars per experiment.",
        },
        {
          heading: "Design changes",
          body: "Collision-simulation findings and direct feedback from instrument scientists drove new brackets, a more stable enclosure base mount, three kinematic bases with six optical components on hot-swappable top plates, alignment lasers and irises for semi-fine alignment, cable management and detector strain relief, and two additional DOF for detector maneuverability. Packaging was reworked to remove identified interference risks while making the assembly more usable in real experimental workflows.",
        },
        {
          heading: "Analysis",
          body: "Statics and dynamics hand calculations were used to verify that every stage and mount was adequate for its loading cases, including worst-case handling. The failure mode being designed against is unambiguous: dropping or crashing a detector is a $100k+ mistake.",
        },
        {
          heading: "Impact",
          body: "The redesign is projected to save roughly 1–2 hours of alignment work per shift-day during week-long experiments, which use the assembly about twice per year on average. Because no polycapillary experiment runs are scheduled in the immediate future, the improvement has not yet been timed in operation. Once all fixes are implemented, the expected annual value is on the order of $30k; this is a planning estimate rather than audited cash savings. Improved setup reliability should also lower the risk of delays or scrapped runs that consume staff, instrument, and preparation resources beyond beamtime itself.",
        },
        {
          heading: "Alignment workflow",
          body: "Previously, precise alignment happened live, with the beam on: technicians used diode sensors to center the beam, then translated the stack to swap the crystal in for the diode. Once the chamber is sealed and helium-purged, a crash or drop can end the experiment. The redesign front-loads alignment instead: hot-swappable kinematic mounts let optics be laser-aligned without helium in the chamber, and added manual stages — driven by micrometers with locking screws — make beam-centering on the detector more controlled. Together with the interference-prevention work, this simplifies the live-beam procedure and reduces collision and handling exposure for detectors worth $100k+ and other sensitive optics.",
        },
        {
          heading: "Numbers",
          body: "Added 2 DOF, bringing the assembly to 32 DOF total, along with three kinematic bases supporting six optical components on hot-swappable top plates. The kinematic interfaces provide less than 100 microradians of repeatability. The assembly serves two experiments per year on average; total assembly mass is not a meaningful design metric for this application.",
        },
      ],
      links: [],
    },

    {
      id: "robot-arm",
      title: "Compact Cycloidal Reducer & Stepper Package",
      org: "Personal Project",
      dates: "Summer 2026 – Present",
      featured: false,
      compactImages: true,
      summary:
        "In-progress development and bench validation of a compact 15:1 cycloidal reducer and NEMA 17 stepper package, with motor-shaft encoder feedback and custom firmware.",
      tags: ["In Progress", "C++", "PlatformIO", "TMC2209", "AS5600 Encoder", "15:1 Cycloidal Reducer", "PETG / ABS"],
      cover: "assets/images/robot-arm/FULL REDUCER ASSEMBLY RENDER ISO.jpg",
      video: {
        title: "Single-Joint Motor and Reducer Bench Test",
        src: "assets/videos/robot-arm-motor-test.mp4",
        poster: "assets/images/robot-arm/MOTOR MODULE TEST VIDEO POSTER.jpg",
      },
      images: [
        "assets/images/robot-arm/FULL REDUCER ASSEMBLY RENDER EXPLODED ISO.jpg",
        "assets/images/robot-arm/FULL REDUCER ASSEMBLY RENDER EXPLODED SIDE.jpg",
        "assets/images/robot-arm/BOM LAYOUT REAL.jpg",
        "assets/images/robot-arm/CORE SUBASSEMBLY REAL.jpg",
        "assets/images/robot-arm/REDUCER AND HOUSING SEPARATE REAL.jpg",
        "assets/images/robot-arm/ASSEMBLED REDUCER AND STEPPER REAL.jpg",
        "assets/images/robot-arm/REDUCER SECTION SIDE VIEW.png",
        "assets/images/robot-arm/STEPPER WITH REDUCER AND ENCODER.jpg",
        "assets/images/robot-arm/ENCODER WIRING SETUP.jpg",
      ],
      sections: [
        {
          heading: "Long-term goal",
          body: "Build a 6-DOF desktop manipulator using custom 3D-printed cycloidal reducers and off-the-shelf electronics, serving as a physical hardware testbed for the Drake-based planning framework developed at SLAC. Provisional whole-arm targets are 0.5 kg of useful payload, about 381 mm (15 in) of reach from the base axis to the tool center point, and a move between opposite sides of the usable workspace in no more than five seconds. These are design goals, not validated capabilities. Other numerical values are provisional estimates unless explicitly identified as confirmed or measured.",
        },
        {
          heading: "Actuation & Firmware",
          body: "The single-joint prototype uses a 1.5 A NEMA 17 stepper with a nominal 42 N·cm holding-torque rating, paired with a TMC2209 silent driver. Built custom C++ firmware using PlatformIO for microcontrollers, implementing phase-based bringup, step/dir pulse generation, and real-time CSV telemetry (ms, step_pos, angle_deg). The exact motor remains to be confirmed before final whole-arm design.",
        },
        {
          heading: "Position Sensing",
          body: "The current single-joint bench setup uses an AS5600 12-bit magnetic encoder on the motor shaft to detect missed steps and characterize the reducer. A direct output-axis encoder and the TCA9548A I²C multiplexer are planned for multi-joint hardware, where they will measure true post-reduction joint angle and resolve shared-address collisions.",
        },
        {
          heading: "DFM & Materials",
          body: "Structural components are printed in PETG and ABS on a Bambu P1S, with layer orientation chosen to maximize radial load capacity in the reducer housing's primary loading case. Print orientation is also selected for geometric accuracy because tight tolerances determine the compromise between backlash and mechanical resistance. TPU strain relief and more complete cable routing are planned once the motion chain exists; the current bench wiring remains loose while the joint architecture is still being developed.",
        },
        {
          heading: "Reduction & Packaging",
          body: "Each cycloidal reducer runs a 15:1 reduction, sized to be compatible with any NEMA 17 stepper: it fits within the motor's 42x42mm face profile and is shorter axially than the stepper itself, so it packages cleanly into linkages without growing the joint envelope. At the 0.5 kg payload target and 381 mm extension, payload alone applies about 1.87 N·m of static shoulder torque before gripper, link, efficiency, and dynamic loads are included. Measured output holding torque, backlash, and total BOM cost remain pending.",
        },
        {
          heading: "Current Validation & Future Architecture",
          body: "The project is currently in 15:1 reducer characterization. The backlash test uses encoder feedback with a limit switch: the shaft is preloaded against the switch, then backed off while the encoder measures the interval of shaft motion before the switch signal changes. The measured backlash value, torque, thermal behavior, payload, and reach remain pending. Kinematic simulation and trajectory optimization are planned in Python and Drake, with a future SPI/CAN architecture for higher joint-telemetry bandwidth.",
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
      dates: "Winter 2025 – Spring 2026",
      featured: true,
      summary:
        "CNC machined 33 precision suspension components on Haas TM mills and lathes, holding critical bearing interfaces within 0.0005 in and improving spindle manufacturability through design review.",
      tags: ["Mastercam", "Haas", "4130 Steel", "7075-T6 Aluminum", "CNC Mill", "CNC Lathe", "GD&T", "DFM"],
      cover: "assets/images/gr26-wheels/SPINDLE CNC MILLING COMPLETE.jpg",
      images: [
        "assets/images/gr26-wheels/UPRIGHT MACHINING IN PROGRESS.jpg",
        "assets/images/gr26-wheels/SPINDLE IN CNC LATHE.jpg",
        "assets/images/gr26-wheels/FINISHED CLEVISES.jpg",
      ],
      sections: [
        {
          heading: "Scope",
          body: "Machined 8 precision-bored clevises and 16 precision-bored rod ends from 4130 chromoly steel, plus 5 identical spindles and 4 unique but similar or mirrored uprights from 7075-T6 aluminum for the GR26 suspension. The clevises and rod ends receive edge-crimped bearings before being welded to the control arms; the spindle and upright bearing interfaces were the most demanding features. Every job ran on a Haas TM mill or Haas TM lathe.",
        },
        {
          heading: "Design for manufacturing",
          body: "Worked directly with the suspension design team, feeding GD&T and manufacturability constraints into design reviews. Although only the rear wheels are driven, I proposed using the tripod-coupling housing on all five spindles so the same proven CAM programs could produce four installed parts and one spare. One spindle was still scrapped, but standardizing the design likely prevented at least two additional scrap parts and shortened programming and setup time.",
        },
        {
          heading: "Components & tolerances",
          body: "Held a 0.0004 in total tolerance window on the clevis and rod-end bores, with cycle times of about five minutes per part. Held 0.0005 in on the spindle outside-diameter bearing interfaces and upright bore bearing interfaces. Critical fits were measured and confirmed with go/no-go tests.",
          image: "assets/images/gr26-wheels/SOFTJAWS MACHINING.jpg",
          imageAlt: "Repeatable machining setup for the GR clevis bores",
          imageCaption: "Repeatable setup used to machine the GR clevis bores.",
        },
        {
          heading: "Fixturing",
          body: "Used breadboard step-clamp setups for most operations. The five identical spindles used a pair of custom softjaws with two locating faces to establish repeatable datums across their different operations.",
        },
        {
          heading: "DFM impact",
          body: "The uprights were the highest-risk parts: they tended to flex during machining and push the bearing bore out of tolerance, consuming one-third of the starting stock as scrap. That loss was accepted given the geometry and precision required. The larger lead-time win came from standardizing all five spindles around the tripod-coupling housing, which reused proven CAM and reduced the opportunity for additional setup and programming failures.",
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
        "assets/images/steering-wheel/ER26SteeringWheelQR RENDER EXPLODED ISO.jpg",
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
          body: "At 2026 Michigan FSAE Electric, the team placed 30th overall, 2nd among UC teams, best among UC teams in endurance, and 4th among California teams. It was the team's first time passing technical inspection and competing in every dynamic event. Full development ran from initial sketches in early July 2025 through the finished car in mid-May 2026, roughly 10 months sketch-to-installed.",
        },
      ],
      links: [],
    },

    {
      id: "chassis-welding-jig",
      title: "FSAE Chassis Welding Jig Evolution",
      org: "Gaucho Racing",
      dates: "Winter 2024 – Present",
      featured: true,
      summary:
        "Designed successive welding fixtures that locate the racecar's tube chassis at its CAD-defined nodes, progressing from an 80/20-and-plywood GR25 jig to a more accurate, assembly-friendly hybrid system for GR26.",
      tags: ["Welding Fixtures", "Assembly Design", "80/20", "3D Printing", "Laser Cutting", "Tolerance Stackup"],
      cover: "assets/images/chassis-jig/CH26.ChassisJig8020 RENDER ISO.jpg",
      images: [
        "assets/images/chassis-jig/CH26.ChassisJig8020 RENDER SIDE.jpg",
        "assets/images/chassis-jig/GR26 CHASSIS JIG ISO.png",
        "assets/images/chassis-jig/GR26 CHASSIS JIG SIDE.png",
        "assets/images/chassis-jig/GR25 CHASSIS JIG AERIAL.png",
        "assets/images/chassis-jig/GR25 CHASSIS JIG ISO.png",
        "assets/images/chassis-jig/GR25 CHASSIS JIG SIDE.png",
        "assets/images/chassis-jig/CHASSIS FIXTURE IN TRUCKBED.jpg",
      ],
      sections: [
        {
          heading: "Why the jig matters",
          body: "The welding fixture establishes the chassis node positions that define wheelbase, suspension hardpoints, and the rest of the vehicle geometry. Tolerance stackup in the fixture becomes chassis error after welding, potentially changing wheelbase and contributing to suspension chatter and other vehicle-dynamics problems.",
        },
        {
          heading: "GR25 baseline",
          body: "I led a three-person team to build the GR25 fixture under a $1,500 budget. The 80/20 frame and laser-cut plywood panels constrained 81 chassis tubes to CAD within 0.050 in at the nodes, while keeping the fixture modular and inexpensive enough to revise alongside the team's continuous chassis design changes. It reduced assembly time 50% from the prior fixture, whose laser-cut slots had not been toleranced and required extensive hand-sanding.",
        },
        {
          heading: "What needed to change",
          body: "The GR25 system worked, but assembly was difficult and the structure could become overconstrained. Laser-cut variation and wood warpage also limited confidence in repeated setup and accuracy, especially where many fixture interfaces accumulated around the chassis.",
        },
        {
          heading: "GR26 hybrid jig",
          body: "For GR26, the team shifted design philosophy: 3D-printed locating brackets were combined with reused 80/20 and plywood to make the jig easier to assemble while improving positional control. Printing the brackets cost less in materials and labor than laser-cutting equivalent parts, while reusing the 80/20 avoided buying a new frame setup, stock, and machined components. The hybrid design focused precision at the tube nodes and cut assembly time a further 30% from GR25.",
        },
      ],
      links: [],
    },

    {
      id: "steering-wheel-development",
      title: "FSAE Steering Wheel Development",
      org: "Gaucho Racing",
      dates: "Fall 2024 – Present",
      featured: false,
      summary:
        "Led and then supervised successive steering-wheel iterations that reduced mass, improved driver comfort and force application, and coordinated manufacturing and vehicle integration across subteams.",
      tags: ["Ergonomics", "Composites", "CAD", "Manufacturing Sourcing", "Vehicle Integration", "FSAE"],
      cover: "assets/images/steering-wheel/ER26SteeringWheelQR RENDER EXPLODED ISO.jpg",
      images: [
        "assets/images/steering-wheel/GR24 STEERING WHEEL.png",
        "assets/images/steering-wheel/GR25 STEERING WHEEL 1 FRONT.png",
        "assets/images/steering-wheel/GR25 STEERING WHEEL 1 BACK.png",
        "assets/images/steering-wheel/GR25 STEERING WHEEL 2 FRONT.png",
        "assets/images/steering-wheel/GR25 STEERING WHEEL 2 INTERNALS.png",
        "assets/images/steering-wheel/ER26SteeringWheelQR RENDER EXPLODED ISO.jpg",
      ],
      sections: [
        {
          heading: "Development arc",
          body: "I managed steering-wheel development as the responsible engineer during the GR25 design cycle, then continued contributing as the chassis and ergonomics lead during GR26. The project evolved through several designs instead of treating the wheel as a one-off part, with each cycle retaining what worked and addressing mass, grip, and integration issues from the previous car.",
        },
        {
          heading: "Engineering and research",
          body: "During GR25, I secured $2,000 in undergraduate research funding for wheel R&D and used hand calculations and FEA to compare CFRP, GFRP, 6061-T6, and 7075-T6 options for the baseplate. The wheel was tested for ergonomics, strength, and FSAE compliance; that work reduced assembly weight by 25% and cost by 30% from the preceding design.",
        },
        {
          heading: "Integrated driver interface",
          body: "The steering wheel had to function as both a structural and electronic driver interface, integrating buttons, potentiometers, a digital display, and a quick-release mechanism for driver egress. That made packaging, wiring, control placement, and mechanical safety part of the same design problem rather than separate handoffs.",
        },
        {
          heading: "GR26 collaboration",
          body: "After moving into the leadership role, I worked with the next design engineer to develop a better GR26 wheel from the prior work. I provided technical guidance while sourcing materials and manufacturing, coordinating interfaces with the relevant subteams, and keeping the design aligned with the full driver-system package.",
        },
        {
          heading: "Result",
          body: "Across the design cycles, the steering-wheel assembly moved from 5 lb in 2024 to 4 lb in 2025 and 3 lb in the initial 2026 design. Weight-optimization FEA then brought the final 2026 version to 1.7 lb while improving driver comfort and force application at the wheels.",
        },
      ],
      links: [],
    },

    {
      id: "exploratorium-exhibits",
      title: "Interactive Exhibit Mechanism Redesigns",
      org: "Exploratorium",
      dates: "Summer 2025",
      featured: false,
      showDetailCover: false,
      summary:
        "Completed three major exhibit overhauls and serviced 100+ public exhibits, combining reverse engineering with manual machining, welding, and visitor-focused reliability improvements.",
      tags: ["Reverse Engineering", "Manual Machining", "Welding", "CAD", "Mechanism Design"],
      cover: "assets/images/exploratorium/REPEATABLE SETUP MANUAL MACHINING.jpg",
      images: [
        "assets/images/exploratorium/REPEATABLE SETUP MANUAL MACHINING.jpg",
        "assets/images/exploratorium/AERIAL OF VIEWER MACHINING.jpg",
        "assets/images/exploratorium/CLOSE UP OF VIEWER MACHINING.jpg",
        "assets/images/exploratorium/SPINNING PATTERNS ENCODER MOUNT.jpg",
        "assets/images/exploratorium/EXTERIOR WELDING SAMPLE.jpg",
        "assets/images/exploratorium/INTERIOR WELDING SAMPLE.jpg",
      ],
      sections: [
        {
          heading: "Context",
          body: "Public exhibits experience constant, unpredictable use, so a mechanism that works on a bench can still fail quickly in the gallery. I worked on three focused reliability problems: leaks and acrylic cracking in Arp Forms, replacement polarized viewers for Monochromatic Room, and sand-damaged rotary-encoder mounts in Spinning Patterns.",
        },
        {
          heading: "Arp Forms renewal",
          body: "Arp Forms demonstrates the non-Newtonian behavior of oobleck by driving a silicone membrane with a piston-crank mechanism. Oobleck was leaking through failures in the enclosure seal, while the membrane mounting and bolting pattern contributed to wear and acrylic-body stress fractures. I improved the bolting pattern, addressed membrane wear, redesigned the load-spreading bezel, and sealed existing cracks with acrylic solvent and silicone paste.",
        },
        {
          heading: "Monochromatic Room viewers",
          body: "When the viewer CAD was accidentally deleted, I reverse-engineered a replacement from an existing unit. The soft-starboard viewer holds polarized lenses for a yellow-lit room; it needed to stay ergonomic and safe while surviving heavy use. After applying GD&T, we machined replacement batches on a Haas CNC router with CAM and fixturing choices that minimized material waste and improved manufacturing tolerance.",
        },
        {
          heading: "Spinning Patterns encoder mounts",
          body: "Garnet sand was working into the gap between the rotary-encoder mount's flanged tube cap and its tube, making routine maintenance difficult and wearing the thin aluminum flange. I redesigned the part with a thicker flange, a properly toleranced outer diameter, and maintenance-oriented geometry, then manually machined the mounts onsite with a clocking setup for the blind tapped mounting holes.",
        },
        {
          heading: "Handoff",
          body: "I documented which PDM designs were current in Confluence, linked directly to the files, and left remanufacturing instructions and CAM files. The handoff was designed so the next technician can produce custom spares without repeating the original reverse engineering or process development.",
        },
        {
          heading: "Scale & savings",
          body: "Alongside servicing 100+ exhibits during the summer, I completed three major overhauls. The Arp Forms renewal avoided more than $3,000 in replacement-part costs, and custom lathe tooling for the work saved approximately $500 in outsourced tools and labor.",
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
      { name: "Drake Kinematics (Path Planning in Development)", level: 2 },
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
