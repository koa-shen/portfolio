# Content checklist

Use this as a launch checklist. There are no active `FILLER:` strings in [data/portfolio.js](data/portfolio.js).

---

## Tier 1 — blocks launch

- [x] **Email** — the one you'll put on applications (`meta.email`)
- [x] **LinkedIn URL** (`meta.linkedin`)
- [x] **GitHub URL** (`meta.github`) — updated to `https://github.com/koa-shen`
- [x] **Phone** — resume only, optional (`meta.phone`)
- [x] **Hero image** (`meta.heroImage`)
- [x] **Relevant coursework** (`education[0].details`)
- [x] **Cumulative GPA** — 3.94
- [x] **Application term** — Summer 2027
- [x] **SLAC publication clearance** — cleared by user

## Tier 2 — the numbers that win interviews

Recruiters at Waymo/Zoox/Tesla skim for magnitude. Every one of these is a bullet upgrade.

**Digital twin framework (your flagship)**
- [x] Largest model — 32 DOF and 305 active bodies
- [x] How many stages inventoried into the library? — 15 commonly used LCLS stages
- [x] Planning / collision-check solve time — planning TBD; collision checks take a few ms
- [x] Interferences caught — at least five use-restricting pinch points found retroactively
- [x] Adoption: three assemblies currently simulated
- [x] Real constraints — vacuum/helium envelopes, compact FEH beamline, Solid Edge/Teamcenter and EPICS interoperability
- [x] Public repo link — `https://github.com/slaclab/twin-lab/`
- [x] "What I'd do differently" paragraph

**Polycapillary redesign**
- [x] Alignment time before vs. after — not yet tested; projected savings of 1–2 hours per shift-day
- [x] DOF and repeatability — 2 DOF added; 3 kinematic bases and 6 hot-swappable optics at <100 µrad repeatability; mass is not relevant
- [x] Experiments served per year + projected value — 2 experiments per year on average; approximately $30k annual savings once implemented

**Robot arm**
- [ ] Cycloidal reducer — 15:1 per joint confirmed; measured backlash coming soon
- [x] Print materials and orientation — PETG and ABS structural parts; layers oriented for radial housing loads and geometric accuracy; TPU strain relief planned
- [ ] Upload a photo of the encoder-and-limit-switch backlash test setup
- [x] Arm targets — 381 mm reach, 0.5 kg useful payload, and no more than 5 s between opposite sides of the workspace; all provisional
- [ ] Measured output holding torque and total BOM cost — prototype motor has a nominal 42 N·cm rating; the roughly 1.87 N·m payload-only shoulder torque is an estimate based on provisional reach and payload targets
- [x] Controls architecture: MCU, TMC2209 driver, I2C + TCA9548A mux, AS5600 absolute joint encoders, telemetry CSV (`ms,step_pos,angle_deg`)
- [x] Repo link: `https://github.com/koa-shen/desktop-6dof-arm`

**GR26 wheel assemblies**
- [x] Components and quantities — 8 clevises, 16 rod ends, 5 identical spindles, and 4 unique/mirrored uprights
- [x] Materials — 4130 chromoly steel clevises and rod ends; 7075-T6 aluminum spindles and uprights
- [x] Tolerances, cycle time, and fixturing — 0.0004 in bore window; 0.0005 in bearing interfaces; 5 min clevis/rod-end cycles; step clamps and two-face spindle softjaws
- [x] Scrap rate and DFM impact — 1/3 of upright stock scrapped; common tripod-coupling spindle design likely prevented at least two more scrapped parts

**GR26 safety systems**
- [x] Steering wheel and seat mass — wheel: 5 lb (2024), 4 lb (2025), 3 lb then 1.7 lb (2026); seat: about 4 lb
- [x] Driver percentile range — 5th-percentile female through 95th-percentile male
- [x] Competition and placement — 30th at 2026 Michigan FSAE Electric; 2nd UC overall, best UC in endurance, 4th in California
- [x] Development time — early July through mid-May, roughly 10 months sketch-to-installed

**Exploratorium**
- [x] Exhibits serviced / redesigned — serviced 100+ exhibits and completed 3 full overhauls: Arp Forms, Spinning Patterns, and Monochromatic Room
- [x] Handoff — Confluence links to current PDM designs, remanufacturing instructions, and CAM files for custom spares

## Tier 3 — polish

- [x] Third About paragraph — tightened for launch
- [x] Fourth hero stat — 40+ parts CNC machined
- [x] Robotics & Controls skill group — added C/C++ (PlatformIO), TMC2209, AS5600, Git/GitHub, Drake
- [x] Photos and renders for every project — staged in `assets/images/`
- [x] Export the resume to `assets/Koa_Shen_Resume.pdf` so the download link works
- [ ] Buy a domain (`koashen.com` or similar) and point it at GitHub Pages

---

## Things worth adding that aren't in the data yet

- [x] **C/C++ experience** — verified from PlatformIO firmware on desktop-6dof-arm
- [x] **Git/GitHub presence** — linked `https://github.com/koa-shen/desktop-6dof-arm`
- [x] **Robot-arm motion video** — single-joint motor/reducer bench test embedded on
      the project page.
- [x] **Controls coursework or self-study** — currently taking Dynamical Systems and Machine Learning; Mechatronics, Robotics Lab, and Inverse Kinematics planned this academic year.
