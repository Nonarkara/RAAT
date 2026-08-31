# RAAT Concept Site

> **This is not the official website of the Royal Automobile Association of Thailand (RAAT).**
>
> It is an **independent civic design experiment** — a concept prototype exploring how a public motorsport, mobility, and membership institution might present itself online. It is **not** an RAAT product, **not** an official publication, and **not** affiliated with, commissioned by, endorsed by, or operated by RAAT, the FIA, or any RAAT partner.
>
> **Do not use this site to apply for a racing license, request roadside assistance, pay membership fees, or contact RAAT.** Those services live on RAAT’s own channels. Start at **[raat.or.th](https://www.raat.or.th)** (and, where RAAT itself points you, [raat.club](https://raat.club)).
>
> Anything in this prototype that *sounds* official — brand language, board names, phone numbers, document titles — is **design research copy** drawn from a March 2026 source pack and public pages. It is shown here to test information architecture, not to speak for the association.

---

## What this is

A static, trilingual (English / Thai / 中文) editorial prototype of a public-facing RAAT site. It treats RAAT as a **civic institution** with three jobs that should share one interface:

1. **Governance** — heritage, board, regulations, public record
2. **Motorsport** — national calendar, licensing path, NCR 2026–2028, disciplines
3. **Mobility** — member utility (roadside help, documents) and public road-safety programs such as Helmets for Kids

The prototype is built from HTML shells plus two JavaScript files: `content.js` holds the copy and document index; `script.js` renders each page. There is no backend, no login, and no payment flow.

Pages:

| File | Role |
| --- | --- |
| `index.html` | Home — services, resource preview, motorsport snapshot, mobility, legitimacy |
| `about.html` | Heritage timeline, archive, governance, public records |
| `motorsport.html` | March 2026 calendar, disciplines, license steps, rules |
| `mobility.html` | Road safety, member utility, Google Trends pulse (Thailand) |
| `resources.html` | Split library: member services vs public / institutional files |

Language is `en` by default, switchable in the header (`EN` / `ไทย` / `中文`). The choice is stored in `localStorage` (`raat-lang`) and can be set with `?lang=en`, `?lang=th`, or `?lang=zh`.

The GitHub repo description already states the same boundary: a concept site and civic design experiment, not an official RAAT product.

## What this is not

- **Not official RAAT.** RAAT’s live site is [raat.or.th](https://www.raat.or.th). This repo does not replace it.
- **Not a partnership, commission, or endorsement.** Nothing in these files documents an official relationship with RAAT, FIA, AIP Foundation, sponsors whose logos appear in `assets/`, or any other institution named in the copy. Sponsor marks and partner language are **visual research**, not claims of sponsorship of this experiment.
- **Not a service counter.** Footer telephone numbers, LINE (`@raatofficial`), `admin@raat.or.th`, and the Chatuchak address are transcribed from the source pack so the prototype *looks* operational. They are **not** contact details for this repository or for Dr Non / Axiom.
- **Not legal or sporting authority.** Opening a PDF here does not make this GitHub project the National Sporting Authority, an FIA ASN portal, or a publisher of binding rules.
- **Not complete source media.** Intro and motorsport videos referenced in `content.js` (`media/*.mp4`) are listed in `.gitignore` and are **not** in this clone.

## How to view / run

No build step, Node, or package manager. Serve the folder over HTTP (recommended so language URLs, document links, and the Trends embed behave like a real site).

**Live preview (GitHub Pages):** [https://nonarkara.github.io/RAAT/](https://nonarkara.github.io/RAAT/)

**Local:**

```bash
git clone https://github.com/Nonarkara/RAAT.git
cd RAAT
python3 -m http.server 8080
```

Open [http://localhost:8080](http://localhost:8080). Equivalent: `npx --yes serve .` or any other static file server.

Opening `index.html` as a `file://` URL will render the layout; a local server is still the reliable way to click through documents and language switches.

### Layout of the repo

```
.
├── index.html / about.html / motorsport.html / mobility.html / resources.html
├── content.js          # copy, timeline, events, resource index
├── script.js           # render, nav, language, reveal
├── styles.css          # editorial layout (no framework)
├── assets/             # photos, posters, logos used by the prototype
├── docs/               # source-pack PDFs and DOCXs linked from the UI
└── media/              # video paths exist in copy; files are gitignored
```

`docs/` includes materials the prototype treats as a public library (regulations scan, board list, short history, NCR 2026–2028, March 2026 calendar, license steps, contact sheet, mobility note). Those files are **research inputs for the design**, not documents issued by this repository.

## Who made this (Dr Non / Axiom)

Independent experiment by **[Dr Non Arkaraprasertkul](https://github.com/Nonarkara)** ([@Nonarkara](https://github.com/Nonarkara)), working with **Axiom Thailand**.

It is a civic design study: can one public face hold membership utility, national motorsport governance, and road-safety work without looking like a poster warehouse or a committee noticeboard? It is **not** RAAT communications, **not** Axiom delivering an official RAAT website, and **not** a bid document dressed up as a product.

## License

Prototype source (`*.html`, `content.js`, `script.js`, `styles.css`, and this README) is released under the [MIT License](LICENSE). Copyright © 2026 Dr Non Arkaraprasertkul.

**RAAT’s name, royal patronage marks, logos, photographs, posters, PDFs, Word files, and any third-party sponsor or partner marks remain with their owners.** MIT on this repo does not relicense those materials and does not grant a right to present this work as RAAT’s own.
