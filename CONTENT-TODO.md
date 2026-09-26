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
- [ ] Largest model: how many DOF, how many bodies?
- [ ] How many stages inventoried into the library?
- [ ] Planning / collision-check solve time
- [ ] Interferences caught before they reached hardware
- [ ] Adoption: how many assemblies, hutches, or engineers now use it?
- [ ] Real constraints (enclosure envelope, latency, existing controls integration)
- [ ] Public repo link, if the code can be open-sourced
- [ ] "What I'd do differently" paragraph

**Polycapillary redesign**
- [ ] Alignment time before vs. after
- [ ] DOF added, assembly mass, kinematic mount repeatability
- [ ] Experiments served per year + the dollar figure you're cleared to publish

**Robot arm**
- [ ] Cycloidal reduction ratio per joint, measured backlash
- [ ] Print materials chosen and why; layer orientation decisions (updated PETG/TPU/DFM)
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
