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
- [ ] Print materials and orientation — PETG and ABS used structurally; TPU strain relief and cable management planned; layer-orientation rationale still needed
- [ ] Upload a photo of the encoder-and-limit-switch backlash test setup
- [ ] Arm reach, payload target, holding torque, total BOM cost
- [x] Controls architecture: MCU, TMC2209 driver, I2C + TCA9548A mux, AS5600 absolute joint encoders, telemetry CSV (`ms,step_pos,angle_deg`)
- [x] Repo link: `https://github.com/koa-shen/desktop-6dof-arm`

**GR26 wheel assemblies**
- [ ] Which components (uprights? hubs? spacers?), material, quantity made
- [ ] Tolerances held, cycle time, fixturing approach
- [ ] Any scrap-rate or lead-time win from your DFM feedback

**GR26 safety systems**
- [ ] Steering wheel mass before/after optimization; seat mass
- [ ] Driver percentile range accommodated
- [ ] Competition, year, and placement
- [ ] Weeks from sketch to installed

**Exploratorium**
- [ ] Exhibits serviced / redesigned (a count)
- [ ] Anything you left behind: documentation, a process, a jig

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
- [ ] **Controls coursework or self-study** — you're targeting controls roles; make sure
      something on the page demonstrates feedback control, not just mechanism design.
