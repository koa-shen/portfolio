# Aurora Mechanical Design Engineer Intern Interview Prep

Role: 2027 Summer Mechanical Design Engineer Intern, sensor cleaning systems

Use these as memory cues, not a script. For each story, keep the setup brief, make your personal contribution clear, and separate completed results from targets or projections.

## Recruiter Opening

Practice a natural 40–50 second answer to “Tell me about yourself and what interested you in this role.” Use this as a guide, not a memorized script:

> I’m a third-year mechanical engineering student at UCSB, looking for a Summer 2027 internship in robotics or autonomous systems. I’ve worked on mechanical design, simulation, and testing across optomechanical alignment systems at SLAC, vehicle subsystems with Gaucho Racing, and a compact 3D-printed robotic actuator. Adarsh Kumar from Aurora’s mechanical design team recommended I look at this role. I was especially interested because sensor cleaning brings together mechanical design, prototyping, testing, and vehicle integration. I’d be excited to contribute my hands-on hardware experience and learn from the team as it develops reliable systems for autonomous vehicles.

## Why Aurora and This Role?

Use this if asked what specifically interests you about Aurora or the internship:

> Aurora stands out to me because it’s working to bring autonomous trucking into real-world operations across different truck platforms. I’m especially interested in the engineering challenges that come with that: designing systems that are durable, serviceable, and reliable in demanding conditions. This role appeals to me because sensor cleaning is a concrete part of that challenge, combining mechanical design, testing, and vehicle integration. I’d be excited to contribute to that work and learn from the team.

## What I Hope to Get from the Internship

If asked what you hope to gain and contribute:

> I’m hoping to build experience taking mechatronic hardware through the development cycle, from understanding requirements and designing prototypes through testing and iteration. I’d like to contribute to a meaningful sensor-cleaning project and, with the team’s guidance, take ownership of a well-scoped piece of the work. I’m also excited to learn how mechanical design fits into a vehicle-scale autonomous system and contribute to safer, more reliable trucking.

## Strength: Rapid Prototyping

If asked what strength you would bring to the role, emphasize end-to-end iteration and use the actuator as evidence:

> One strength I’d bring is quickly turning a design into a testable prototype. I’ve worked across concept development, CAD, simulation, fabrication, assembly, and troubleshooting, so I can move between system-level decisions and details like machining parts, soldering connections, or integrating an encoder. In my actuator project, I designed and 3D-printed a compact 15:1 cycloidal reducer, integrated the stepper, driver, and encoder, and developed the firmware. On the single-joint bench setup, I validated encoder feedback, position-error compensation, and missed-step detection. That breadth helps me iterate efficiently and understand how mechanical, electrical, and software decisions affect the whole system.

## Growth Area: Applied Fluid Dynamics

If asked about an area you are developing, be candid while showing active interest and the strengths you already bring:

> One area I’m actively developing is applied fluid dynamics. My formal coursework is just beginning, so most of my exposure so far has come from self-directed reading and videos. I’m especially interested in how fluid principles apply to systems such as pneumatic actuators and sensor-cleaning hardware, and I’m eager to build that foundation through further study and hands-on testing. I can already contribute strengths in mechanical design, prototyping, and iteration, and I’m excited to pair those with a deeper understanding of fluid systems.

## Recruiter Logistics

If asked about work authorization, availability, or location:

> I’m authorized to work and do not require sponsorship. I’m available to start June 14, 2027, and can work through September 19; I return to school on September 20. I value in-person collaboration and would prefer the San Francisco office if that’s an option for this role. I’m also flexible about commuting to another Bay Area location if the team is based there.

If asked whether you are interviewing elsewhere:

> I’m not currently interviewing with other companies. I’m continuing my internship with SLAC.

## Teamwork Example

Practice for “Tell me about a time you worked with a team to deliver something.” Aim for about 45–60 seconds:

> During the 2025–2026 season, I led a 15-person Gaucho Racing team responsible for the components drivers use to operate the car safely. I had to keep our engineering work on schedule while making the team accessible to new members. I created a structured onboarding process so they could contribute early, while assigning ownership of critical components to experienced members I knew could deliver. I tracked responsibilities, checked in regularly, and supported newer teammates while staying hands-on with the work. Over time, two engineers who had owned components became team leads, and three members who joined the previous year became responsible engineers. Our components passed technical inspection.

If you mention the team’s 25-place improvement over the previous year, confirm that the comparison is for the same competition and ranking category.

## When Something Went Wrong

Practice for “Tell me about a time a project didn’t go as planned.” Keep the focus on how you responded and verified the fix:

> During chassis manufacturing, we had to stop welding because the tube-frame fixture was sagging and wasn’t locating the frame consistently relative to the table. I led a quick retrofit, designing 10 3D-printed parts to support the frame, align it to the table, and hold critical suspension points in position. I worked with the original fixture designer to install the changes. I checked the result visually and measured key suspension points relative to each other and to the table. Dimensions that had been inches outside tolerance came back within the team’s acceptable range, so welding could resume. A full redesign with machined parts might have made the fixture more rigid, but likely would have put our competition schedule at risk; the retrofit met the immediate requirements and helped us finish the car in time.

## Adapting My Approach

Practice for “Tell me about a time new information made you change your approach.” Keep the focus on recognizing that the original method did not scale and what you learned:

> At SLAC, I was assigned to redesign a complex motorized alignment system with 30 degrees of freedom and interference problems. I initially tried to resolve them by adjusting CAD assembly relationships and moving components one at a time. After a day or two, I realized I couldn’t reliably reason through all the interactions among multiple moving stages or keep track of every interference that way. I changed course and built a Python simulation workflow that imports native Solid Edge assemblies, animates actuator motion, detects collisions, and replays archived controls data. I’ve since used it to check design iterations, and the team is continuing development toward path planning and homing sequences. In hindsight, I should have questioned my initial approach sooner and checked the CAD against the physical hardware before building the simulation around it. I learned to reassess my assumptions when a problem’s scale changes and to validate the inputs before relying on the results.

Describe archived-controls replay separately from live controls integration, which remains in development.

## Questions to Ask

### Recruiter / Interview Logistics
- What attire is typical for interviews at Aurora?
- If you’re able to share, will the interview include a design exercise, technical questions, a portfolio review, or some combination?
- Which office locations are available for this internship, and where is this team based?

### Interviewer / Role and Team
- What contamination cases are most challenging for the current sensor-cleaning system?
- How does the team measure sensor performance before and after cleaning?
- How does the team prototype and validate mechanical designs? What tools or facilities are available for building test setups and evaluating hardware?
- What does an intern typically own, and how does a concept move from bench testing to vehicle validation?
- How are interns onboarded into the team’s workflows, and what does mentorship from full-time engineers typically look like?
- What has your day-to-day experience at Aurora been like, and what stands out to you about the working environment?
- What would success look like for the intern by the end of the summer?
- How has your experience at Aurora shaped you as an engineer, both technically and in how you approach problems?

Prioritize questions about technical validation and intern ownership if time is limited. The personal experience question works well near the end.

## Topics to Review

- Aurora’s mission, safety culture, Aurora Driver, and the hardware/sensor context of the role.
- Sensor-cleaning problem framing: sensor type and field of view, contaminant, operating conditions, cleaning success criteria, and effect on perception or sensing quality.
- Lidar fundamentals and performance measures.
- Camera fundamentals and image/perception performance measures.
- Requirements and interfaces: available power, fluid or air supply, packaging, vehicle/OEM interfaces, serviceability, mass, cost, reliability, and environmental exposure.
- Applied fluid mechanics: pressure, flow rate, pressure drop, pump sizing, nozzle selection, spray coverage, and the tradeoffs between liquid spray and air flow.
- Thermal basics: heat transfer, defogging/de-icing, freeze protection, power demand, and material/fluid temperature limits.
- Mechanical design for automotive environments: seals, materials, corrosion/chemical compatibility, vibration, shock, thermal cycling, tolerance stack-up, manufacturability, and maintenance.
- Test planning: representative contamination, controllable variables, repeatability, baseline/control conditions, sensor-performance metrics, failure criteria, and staged bench-to-vehicle validation.
- Surrogate test infrastructure: how to reproduce rain, spray, dirt, bugs, snow, or ice safely and consistently; how to correlate a bench test with real-world conditions.
- CFD and CAE fundamentals: what question the model answers, assumptions and boundary conditions, mesh/convergence awareness, and how simulation should be checked against physical tests. Be candid about your actual ANSYS/CFD experience.
- CAD and design communication: explain your Solid Edge/SolidWorks experience, packaging decisions, drawings/GD&T, design reviews, and how you would ramp up in CATIA V6 if needed.
- Your project evidence: optical alignment, collision/interference risk, vehicle packaging, CNC tolerances and fixturing, prototype iteration, closed-loop validation, and design handoff.
- Behavioral examples: safety-first decisions, leading without complete authority, resolving cross-functional constraints, responding to a failure or mistake, prioritizing under time pressure, and learning from test results.

## STAR Story Prompts

Keep each answer to a compact arc: **Situation** (context) → **Task** (your responsibility) → **Action** (your decisions and work) → **Result** (evidence, learning, or next step). These are abbreviated prompts; put them in your own voice.

### SLAC Digital Twin and Collision Detection
- **S:** X-ray beamline assemblies have many motion axes in tightly constrained enclosures; a collision can damage sensitive, six-figure detectors or consume valuable beam time.
- **T:** Build a reusable way to model motion and expose interference risks.
- **A:** Developed an open-source Python framework using Drake, OpenCascade, CoACD, and MeshCat; cataloged 15 reusable stages and applied it to a 30-DOF assembly with 305 active bodies.
- **R:** Live collision checks run in milliseconds; retroactive analysis found at least five real pinch points. The framework is being applied to three assemblies. Path planning and live controls integration remain in development.
- **Good follow-up:** Explain how you validated the CAD against hardware, handled imperfect source geometry, and what you would involve controls/operators in earlier.

### SLAC Polycapillary Optics Assembly Redesign
- **S:** A heavily used optics assembly was difficult to align, crowded by neighboring hardware, and operated around delicate detectors and optics.
- **T:** Improve alignment and maneuverability while reducing interference and handling risk.
- **A:** Used simulation findings and instrument-scientist feedback to redesign packaging, add two degrees of freedom, introduce three kinematic bases for six hot-swappable optics, and add alignment aids; checked loading cases with hand calculations.
- **R:** The redesign provides under 100 microradians of repeatability at the kinematic interfaces. It is projected to save 1–2 alignment hours per shift-day and about $30k annually once implemented; those savings have not yet been measured in operation.

### Gaucho Racing Driver Safety and Ergonomics
- **S:** The team needed a complete, rules-compliant driver environment packaged around the chassis, powertrain heat, and a wide required driver-percentile range.
- **T:** Lead the safety/ergonomics work from concept through installation.
- **A:** Led a 15-person team through sketches, design, fabrication, and integration of the floor closeout, firewall, heat insulation, composite seat, and headrest; coordinated fit for drivers from 5th-percentile female to 95th-percentile male.
- **R:** The system passed FSAE EV technical inspection. The team competed in every dynamic event; at Michigan 2026 it placed 30th overall and second among UC teams.

### Gaucho Racing CNC Wheel Assemblies and DFM
- **S:** GR26 needed precision suspension components across several geometries, with tight bearing fits and limited tolerance for machining errors.
- **T:** Manufacture the parts accurately and improve repeatability and manufacturability where possible.
- **A:** Machined 33 components in 4130 chromoly and 7075-T6 aluminum; used repeatable fixturing and go/no-go checks; proposed a common tripod-coupling housing across all five spindles to reuse proven CAM/setup.
- **R:** Held critical interfaces to 0.0005 in and clevis/rod-end bores to a 0.0004 in tolerance window. One spindle was still scrapped; standardization likely avoided at least two additional scrap parts and reduced setup/programming risk.

### Gaucho Racing Chassis Welding Jigs
- **S:** Chassis node accuracy affects vehicle geometry, while the prior fixture was slow to assemble and could accumulate errors or become overconstrained.
- **T:** Develop fixtures that locate chassis tubes to CAD while remaining affordable and practical to revise.
- **A:** Led a three-person team on GR25’s modular 80/20-and-plywood jig, then helped evolve the approach for GR26 using 3D-printed locating brackets with reused frame components.
- **R:** GR25 located 81 tubes within 0.050 in of CAD at the nodes and reduced assembly time 50% versus the previous fixture. GR26’s hybrid approach cut assembly time a further 30% versus GR25 while focusing precision at the tube nodes.

### Gaucho Racing Steering Wheel Development
- **S:** The steering wheel had to be a light, comfortable, structurally sound driver interface integrating controls, display, wiring, and quick release.
- **T:** Lead an iteration and later support the next design cycle through analysis, manufacturing, and integration.
- **A:** Secured $2,000 in undergraduate research funding; used hand calculations and FEA to compare material options; gathered ergonomic feedback and coordinated interfaces with other subteams.
- **R:** The wheel evolved from 5 lb in 2024 to 1.7 lb in the final 2026 version. The GR25 iteration reduced assembly weight 25% and cost 30% from the preceding design; the final 2026 version reached 1.7 lb after further FEA-driven optimization.

### Personal Cycloidal Reducer and Closed-Loop Actuator
- **S:** I wanted a compact, affordable actuator prototype and a physical testbed connected to my robotics interests.
- **T:** Design and validate a reducer/stepper package and demonstrate position feedback on a bench setup.
- **A:** Designed a 15:1 cycloidal reducer around a NEMA 17 and TMC2209; wrote C++ firmware in PlatformIO; integrated an AS5600 motor-shaft encoder and CSV telemetry; tested error compensation and missed-step detection.
- **R:** Encoder feedback and closed-loop compensation are validated on the single-joint bench setup. Output torque, measured backlash, thermal behavior, and whole-arm payload/reach are still pending; present those as next validation steps, not achieved performance.

### Exploratorium Exhibit Reliability Work
- **S:** Public exhibits see constant, unpredictable use; failures included leaks/cracking, damaged viewer parts, and abrasive sand wearing encoder mounts.
- **T:** Restore and improve mechanisms so they withstand use and can be maintained by the next technician.
- **A:** Serviced 100+ exhibits and completed three major overhauls; reverse-engineered missing viewer CAD, redesigned a load-spreading bezel and encoder mounts, machined replacement parts, and documented current PDM files, CAM, and remanufacturing instructions.
- **R:** Improved repairability and left reusable handoff documentation. The Arp Forms renewal avoided more than $3,000 in replacement-part costs; custom lathe tooling saved about $500 in outsourced tools and labor.

## Accuracy Reminders

- Label polycapillary time and cost savings as projections until measured in operation.
- Describe digital-twin path planning and EPICS/live-controls integration as in progress.
- For the robot arm, report the validated single-joint encoder/control behavior; do not claim measured output torque, backlash, payload, or reach yet.
- On every story, distinguish what you personally owned from what the broader team delivered.
