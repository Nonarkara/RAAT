# RAAT Concept Site

<p align="center">
  <img src="docs/hero-banner.png" alt="Field-journal illustration: a researcher at a wooden desk above a river valley, with notebooks, a compass, and a tablet. Several drones fly over the landscape. The tablet HUD and map overlay are drawn as atmosphere, not as a screenshot of this site." width="100%" />
</p>

<p align="center"><em>The tablet HUD, map overlay, and drones in this banner are <strong>illustration only</strong>. They are not a product screenshot, not a live dashboard, and not part of this prototype’s interface.</em></p>

> **This is not the official website of the Royal Automobile Association of Thailand (RAAT).**
>
> It is an independent civic-design experiment — a concept prototype exploring how a public motorsport, mobility, and membership institution might present itself online. It is **not** an RAAT product, **not** an official publication, and **not** affiliated with, commissioned by, endorsed by, or operated by RAAT, the FIA, or any RAAT partner.
>
> **Do not use this site to apply for a racing license, request roadside assistance, pay membership fees, or contact RAAT.** Those services live on RAAT’s own channels. Start at **[raat.or.th](https://www.raat.or.th)** (and, where RAAT itself points you, [raat.club](https://raat.club)).

This README is written for **learners**: people opening a public GitHub repo to see how a civic interface is structured, what it is allowed to claim, and where the line is between design research and the real institution.

---

## What this is

A static, trilingual (English / Thai / 中文) editorial prototype of a public-facing RAAT site. It treats RAAT as a **civic institution** with three jobs that should share one interface:

1. **Governance** — heritage, board, regulations, public record
2. **Motorsport** — national calendar, licensing path, NCR 2026–2028, disciplines
3. **Mobility** — member utility (roadside help, documents) and public road-safety programs such as Helmets for Kids

The prototype is HTML shells plus two JavaScript files. `content.js` holds the copy and document index. `script.js` renders each page. There is no backend, no login, no payment flow, and no secret store.

| File | Role |
| --- | --- |
| `index.html` | Home — services, resource preview, motorsport snapshot, mobility, legitimacy |
| `about.html` | Heritage timeline, archive, governance, public records |
| `motorsport.html` | March 2026 calendar, disciplines, license steps, rules |
| `mobility.html` | Road safety, member utility, Google Trends pulse (Thailand) |
| `resources.html` | Split library: member services vs public / institutional files |

Language is `en` by default, switchable in the header (`EN` / `ไทย` / `中文`). The choice is stored in `localStorage` (`raat-lang`) and can be set with `?lang=en`, `?lang=th`, or `?lang=zh`.

The GitHub description already states the same boundary: a concept site and civic design experiment, not an official RAAT product.

**Live preview:** [https://nonarkara.github.io/RAAT/](https://nonarkara.github.io/RAAT/)

---

## Philosophy

The banner is a field notebook, not a control tower.

The open Thai pages in the drawing list a working method:

1. **สำรวจพื้นที่** — survey the territory
2. **เก็บข้อมูล** — collect the record
3. **วิเคราะห์** — analyze
4. **สื่อสาร** — communicate

And a checklist of what not to forget: **ผู้คน** (people), **ธรรมชาติ** (nature), **เวลา** (time), **ผลกระทบ** (impact). A sticky note reads **ป่า น้ำ คน** — forest, water, people.

That is the ethic of this experiment. The “territory” here is a public institution’s web face, not a drone survey. The question is whether one public surface can hold membership utility, national motorsport governance, and road-safety work without looking like a poster warehouse or a committee noticeboard.

For learners, the useful move is the same as in the drawing: look first, take notes, then redesign. Compare this prototype with [raat.or.th](https://www.raat.or.th). Ask what becomes easier to find (calendar, rules, license path, public records) and what still belongs only on RAAT’s own channels (payments, licenses, roadside help).

Independent work by **[Dr Non Arkaraprasertkul](https://github.com/Nonarkara)** ([@Nonarkara](https://github.com/Nonarkara)), with **Axiom Thailand**. It is a civic design study, not RAAT communications, and not Axiom delivering an official RAAT website.

---

## Ethical use

Use this repo to **learn**: information architecture, trilingual civic UI, how a static site can make public documents findable. Do not use it as RAAT.

- **Not official RAAT.** RAAT’s live site is [raat.or.th](https://www.raat.or.th). This repo does not replace it.
- **Not a partnership, commission, or endorsement.** Nothing in these files documents an official relationship with RAAT, the FIA, AIP Foundation, sponsors whose logos appear in `assets/`, or any other institution named in the copy. Sponsor marks and partner language are visual research, not claims of sponsorship of this experiment.
- **Not a service counter.** Footer telephone numbers, LINE (`@raatofficial`), `admin@raat.or.th`, and the Chatuchak address are transcribed from a March 2026 source pack so the prototype *looks* operational. They are **not** contact details for this repository or for Dr Non / Axiom. Do not call, pay, or message them from this GitHub page.
- **Not legal or sporting authority.** Opening a PDF here does not make this GitHub project the National Sporting Authority, an FIA ASN portal, or a publisher of binding rules.
- **Copy in the UI is design-research copy.** Brand language, board names, phone numbers, and document titles are shown to test architecture, not to speak for the association.
- **The HUD is not the product.** The tablet interface in `docs/hero-banner.png` is drawn atmosphere. This prototype is an editorial website, not a mapping HUD, drone console, or field-ops dashboard.
- **No secrets in this tree.** There is no `.env`, no API key, no login, and no credential file. Do not add any. The only client-side persistence is the language preference in `localStorage`. The mobility page’s Google Trends frame uses public search queries, not a private token.

Do not republish this site, its PDFs, or its photos as “the RAAT website.” Fork it, critique it, rebuild the IA — and keep the unofficial boundary visible.

---

## How it works

No build step, no framework, no package manager. Each HTML file is a shell: a page id on `<body>`, then `content.js` and `script.js`.

```
.
├── index.html / about.html / motorsport.html / mobility.html / resources.html
├── content.js          # copy, timeline, events, resource index
├── script.js           # render, nav, language, reveal
├── styles.css          # editorial layout (no framework)
├── assets/             # photos, posters, logos used by the prototype
├── docs/               # source-pack PDFs/DOCXs, plus this README’s hero banner
└── media/              # video paths exist in copy; files are gitignored
```

`content.js` is the source of truth for trilingual strings, the March 2026 calendar snapshot, the heritage timeline, and which files sit in the member vs public library. `script.js` reads `data-page`, picks a language, and paints the page. `styles.css` is custom editorial layout.

`docs/` holds research inputs the prototype treats as a public library (regulations scan, board list, short history, NCR 2026–2028, March 2026 calendar, license steps, contact sheet, mobility note). Those files are **design-research materials**, not documents issued by this repository. `docs/hero-banner.png` is the README illustration only; the site pages do not load it.

Intro and motorsport videos referenced in `content.js` (`media/*.mp4`) are listed in `.gitignore` and are **not** in this clone.

---

## How to use

**Browse the live preview** (GitHub Pages on `main`): [https://nonarkara.github.io/RAAT/](https://nonarkara.github.io/RAAT/)

**Run it locally** (recommended so language URLs, document links, and the Trends embed behave like a real site):

```bash
git clone https://github.com/Nonarkara/RAAT.git
cd RAAT
python3 -m http.server 8080
```

Open [http://localhost:8080](http://localhost:8080). Equivalent: `npx --yes serve .` or any other static file server.

Opening `index.html` as a `file://` URL will render the layout; a local server is still the reliable way to click through documents and language switches.

**Learner path**

1. Open Home, then switch `EN` / `ไทย` / `中文` and reload — the `?lang=` query and `raat-lang` key are the whole i18n system.
2. Walk About → Motorsport → Mobility → Resources and notice the same three jobs (governance, sport, member utility) repeating in different densities.
3. Open a file from `docs/` in the UI, then open the same path in the repo, so you can see what is “on the shelf” vs what is only a poster in `assets/`.
4. Keep [raat.or.th](https://www.raat.or.th) in another tab. Anything that looks like a real service (license, roadside, payment, official contact) belongs there, not here.

---

## License

Prototype source (`*.html`, `content.js`, `script.js`, `styles.css`, and this README) is released under the [MIT License](LICENSE). Copyright © 2026 Dr Non Arkaraprasertkul.

**RAAT’s name, royal patronage marks, logos, photographs, posters, PDFs, Word files, and any third-party sponsor or partner marks remain with their owners.** MIT on this repo does not relicense those materials and does not grant a right to present this work as RAAT’s own.

The hero illustration in `docs/hero-banner.png` is provided for this README. It does not depict a shipping RAAT interface.
