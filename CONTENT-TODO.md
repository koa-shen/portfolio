# Content checklist

Everything below is a `FILLER:` string in [data/portfolio.js](data/portfolio.js).
Search the file for `FILLER:` to find them all. Check items off as you replace them.

---

## Tier 1 — blocks launch

- [ ] **Email** — the one you'll put on applications (`meta.email`)
- [ ] **LinkedIn URL** (`meta.linkedin`)
- [ ] **GitHub URL** (`meta.github`) — for robotics/controls roles this is close to mandatory
- [ ] **Phone** — resume only, optional (`meta.phone`)
- [ ] **Hero image** — portrait, or a hero render of the SLAC framework / robot arm (`meta.heroImage`)
- [ ] **Relevant coursework** — 6–8 courses (`education[0].details`)
- [ ] **Cumulative GPA** — include only if strong; major GPA of 3.97 is already listed
- [ ] **Application term** — confirm Summer 2027 (`target.term`)
- [ ] **SLAC publication clearance** — written OK from your supervisor on which images
      and numbers you can post publicly. Do this before the site goes live.

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
- [ ] Print materials chosen and why; layer orientation decisions
- [ ] Arm reach, payload target, holding torque, total BOM cost
- [ ] Controls architecture: MCU, motor/driver, comms bus, loop rate, GUI framework
- [ ] Repo and/or build log

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

**Hawkes Lab**
- [ ] What the research was actually about — one sentence of context
- [ ] Publication, poster, or demo contributions; advisor / grad student

## Tier 3 — polish

- [ ] Third About paragraph — what you're looking for next, in your voice
- [ ] Fourth hero stat (`stats[3]`) — e.g. "40+ parts CNC machined"
- [ ] Robotics & Controls skill group — add ROS/ROS2, Git, C/C++ with honest levels, or delete the rows
- [ ] Photos and renders for every project (paths are listed in the data file)
- [ ] Export the resume to `assets/Koa_Shen_Resume.pdf` so the download link works
- [ ] Buy a domain (`koashen.com` or similar) and point it at GitHub Pages

---

## Things worth adding that aren't in the data yet

- [ ] **C/C++ experience** — most robotics/controls internships list it. If you have
      none, consider porting one arm subsystem to C++ before applications open.
- [ ] **Git/GitHub presence** — a public repo for the arm or the sim framework is the
      single highest-leverage thing you can add for your target companies.
- [ ] **A short video** — 20 seconds of a joint moving, or the MeshCat sim catching a
      collision, embedded on the project page. Motion sells motion control.
- [ ] **Controls coursework or self-study** — you're targeting controls roles; make sure
      something on the page demonstrates feedback control, not just mechanism design.
