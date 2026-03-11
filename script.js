const site = window.RAAT_CONTENT;
const app = document.getElementById("app");
const pageId = document.body.dataset.page || "home";
const languageOrder = ["en", "th", "zh"];

const state = {
  lang: getInitialLang(),
  navOpen: false,
};

const resourceUi = {
  audience: {
    member: { en: "For Members", th: "สำหรับสมาชิก", zh: "为会员" },
    public: { en: "For Public / Institutions", th: "สำหรับสาธารณะ / หน่วยงาน", zh: "面向公众 / 机构" },
  },
  open: {
    en: "Open Resource",
    th: "เปิดทรัพยากร",
    zh: "打开资源",
  },
  related: {
    en: "Related page",
    th: "หน้าที่เกี่ยวข้อง",
    zh: "相关页面",
  },
  featured: {
    en: "Featured Files",
    th: "ไฟล์แนะนำ",
    zh: "精选文件",
  },
};

const chromeUi = {
  snapshot: { en: "Snapshot", th: "ภาพรวม", zh: "概览" },
  coreDocs: { en: "Core Documents", th: "เอกสารหลัก", zh: "核心文件" },
  partnerNetwork: { en: "Partner Network", th: "เครือข่ายพันธมิตร", zh: "合作网络" },
};

const mobilityTrends = {
  geo: "TH",
  time: "now 7-d",
  queries: ["รถติด", "รถยนต์ไฟฟ้า", "ขนส่งสาธารณะ", "ใบขับขี่สากล"],
};

function getInitialLang() {
  const params = new URLSearchParams(window.location.search);
  const queryLang = params.get("lang");

  if (languageOrder.includes(queryLang)) {
    localStorage.setItem("raat-lang", queryLang);
    return queryLang;
  }

  const stored = localStorage.getItem("raat-lang");
  return languageOrder.includes(stored) ? stored : "en";
}

function isExternalHref(href) {
  return /^(https?:|mailto:|tel:)/.test(href);
}

function isAssetHref(href) {
  return href.startsWith("./docs/") || href.startsWith("./assets/");
}

function formatIndex(index) {
  return String(index).padStart(2, "0");
}

function withLang(href) {
  if (isExternalHref(href) || href.startsWith("./docs/") || href.startsWith("./assets/") || href.startsWith("./media/")) {
    return href;
  }
  if (href.startsWith("#")) return href;

  const [path, hash] = href.split("#");
  const glue = path.includes("?") ? "&" : "?";
  return `${path}${glue}lang=${state.lang}${hash ? `#${hash}` : ""}`;
}

function renderButton(link, className = "") {
  const href = link.external ? link.href : withLang(link.href);
  const classes = ["button"];

  if (link.tone === "dark") classes.push("button--dark");
  else if (link.tone === "plain") classes.push("button--plain");
  else classes.push("button--soft");

  if (className) classes.push(className);

  return `<a class="${classes.join(" ")}" href="${href}"${
    link.external ? ' target="_blank" rel="noreferrer"' : ""
  }>${link.label}</a>`;
}

function renderFigure({ src, alt, caption = "", className = "", loading = "lazy" }) {
  return `
    <figure class="media-frame ${className}">
      <img src="${src}" alt="${alt}" loading="${loading}" />
      ${caption ? `<figcaption class="media-tag">${caption}</figcaption>` : ""}
    </figure>
  `;
}

function renderStatRail(items, className = "") {
  return `
    <div class="stat-rail ${className}">
      ${items
        .map(
          ([value, label]) => `
            <article class="stat-item">
              <strong>${value}</strong>
              <span>${label}</span>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

function renderNumberGrid(items, className = "") {
  return `
    <div class="number-grid ${className}">
      ${items
        .map(
          ([value, label]) => `
            <article class="number-item">
              <strong>${value}</strong>
              <span>${label}</span>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

function renderDocShelf(docKeys, className = "") {
  return `
    <div class="doc-shelf ${className}">
      ${docKeys
        .map((key, index) => {
          const doc = site.docs[key];
          const actionLabel = doc.action[state.lang].replace("Open ", "").replace("เปิด ", "").replace("打开 ", "");

          return `
            <article class="doc-link">
              <div class="doc-link__index">${formatIndex(index + 1)}</div>
              <div class="doc-link__body">
                <div class="doc-link__meta">
                  <span>RAAT</span>
                  <span>${actionLabel}</span>
                </div>
                <div class="doc-link__title">${doc.title[state.lang]}</div>
                <p>${doc.meta[state.lang]}</p>
              </div>
              <div class="doc-link__action">
                <a href="${doc.href}" target="_blank" rel="noreferrer">${doc.action[state.lang]}</a>
              </div>
            </article>
          `;
        })
        .join("")}
    </div>
  `;
}

function getNavItem(pageKey) {
  return site.shared.nav.find((item) => item.id === pageKey) || null;
}

function renderActionLedger(items, className = "") {
  return `
    <div class="action-ledger ${className}">
      ${items
        .map(
          (item, index) => `
            <article class="action-ledger__item">
              <span class="action-ledger__index">${formatIndex(index + 1)}</span>
              <div class="action-ledger__body">
                <strong>${item.label}</strong>
                <p>${item.detail}</p>
              </div>
              <a href="${item.external ? item.href : withLang(item.href)}"${
                item.external ? ' target="_blank" rel="noreferrer"' : ""
              }>${item.action || resourceUi.open[state.lang]}</a>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

function renderResourceCard(resourceKey, index) {
  const resource = site.resources[resourceKey];
  if (!resource) return "";

  const relatedPage = getNavItem(resource.related);
  const shouldOpenInNewTab = resource.external || isAssetHref(resource.href);
  const indexLabel = formatIndex(index + 1);
  const fallbackLabel = resource.topic.slice(0, 3).toUpperCase();

  return `
    <article class="resource-card resource-card--${resource.topic}">
      <div class="resource-card__index">${indexLabel}</div>
      <div class="resource-card__visual">
        ${
          resource.image
            ? `<img src="${resource.image}" alt="${resource.title[state.lang]}" loading="lazy" />`
            : `<span>${fallbackLabel}</span>`
        }
      </div>
      <div class="resource-card__content">
        <div class="resource-card__meta">
          <span>${resourceUi.audience[resource.audience][state.lang]}</span>
          <span>${resource.type[state.lang]}</span>
        </div>
        <div class="resource-card__body">
          <h3>${resource.title[state.lang]}</h3>
          <p>${resource.summary[state.lang]}</p>
        </div>
        <div class="resource-card__actions">
          <a href="${withLang(resource.href)}"${
            shouldOpenInNewTab ? ' target="_blank" rel="noreferrer"' : ""
          }>${resourceUi.open[state.lang]}</a>
          ${
            relatedPage
              ? `<a href="${withLang(relatedPage.href)}">${resourceUi.related[state.lang]} / ${
                  relatedPage.label[state.lang]
                }</a>`
              : ""
          }
        </div>
      </div>
    </article>
  `;
}

function renderResourceGrid(resourceKeys, className = "") {
  return `
    <div class="resource-grid ${className}">
      ${resourceKeys.map((key, index) => renderResourceCard(key, index)).join("")}
    </div>
  `;
}

function buildTrendsExploreHref() {
  const params = new URLSearchParams({
    geo: mobilityTrends.geo,
    date: mobilityTrends.time,
    q: mobilityTrends.queries.join(","),
  });

  return `https://trends.google.com/trends/explore?${params.toString()}`;
}

function buildTrendsEmbedHref() {
  const langMap = { en: "en-US", th: "th", zh: "zh-CN" };
  const req = {
    comparisonItem: mobilityTrends.queries.map((keyword) => ({
      keyword,
      geo: mobilityTrends.geo,
      time: mobilityTrends.time,
    })),
    category: 0,
    property: "",
  };
  const params = new URLSearchParams({
    hl: langMap[state.lang] || "en-US",
    tz: "420",
    req: JSON.stringify(req),
    eq: `geo=${mobilityTrends.geo}&q=${mobilityTrends.queries.join(",")}&date=${mobilityTrends.time}`,
  });

  return `https://trends.google.com/trends/embed/explore/TIMESERIES?${params.toString()}`;
}

function renderTrendsSection(trends) {
  return `
    <section class="section shell" id="pulse" data-reveal>
      <div class="split-grid split-grid--trend">
        <div class="surface panel-card panel-stack">
          <p class="eyebrow">${trends.eyebrow}</p>
          <h2 class="section-title section-title--tight">${trends.title}</h2>
          <p class="copy-block">${trends.body}</p>
          <div class="trend-chip-row">
            ${trends.tags.map((tag) => `<span class="trend-chip">${tag}</span>`).join("")}
          </div>
          <div class="button-row">
            ${renderButton({
              label: trends.cta,
              href: buildTrendsExploreHref(),
              external: true,
              tone: "plain",
            })}
          </div>
        </div>
        <div class="surface panel-card trends-panel">
          <iframe
            class="trends-frame"
            src="${buildTrendsEmbedHref()}"
            title="${trends.title}"
            loading="lazy"
            referrerpolicy="origin"
          ></iframe>
        </div>
      </div>
    </section>
  `;
}

function renderTimeline(items) {
  return `
    <div class="timeline-grid">
      ${items
        .map(
          ([year, text]) => `
            <article class="timeline-entry">
              <div class="timeline-entry__year">${year}</div>
              <p>${text}</p>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

function renderEventStream(items) {
  return `
    <div class="event-stream">
      ${items
        .map(
          ([date, title, meta]) => `
            <article class="event-row">
              <div class="event-row__date">${date}</div>
              <div class="event-row__copy">
                <strong>${title}</strong>
                <p>${meta}</p>
              </div>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

function renderPartnerRiver() {
  return `
    <div class="partner-river">
      ${site.shared.partnerLogos
        .map(
          (logo, index) => `
            <img src="./assets/${logo}" alt="Partner logo ${index + 1}" loading="lazy" />
          `
        )
        .join("")}
    </div>
  `;
}

function renderHeader() {
  const navLinks = site.shared.nav
    .map((item) => {
      const active = item.id === pageId ? "is-active" : "";
      return `<a class="${active}" href="${withLang(item.href)}">${item.label[state.lang]}</a>`;
    })
    .join("");

  return `
    <header class="site-header">
      <div class="site-header__inner shell">
        <a class="brand" href="${withLang("./index.html")}" aria-label="RAAT home">
          <img src="./assets/logo-raat.webp" alt="RAAT logo" width="38" height="60" />
          <span class="brand-copy">
            <strong>RAAT</strong>
            <span>${site.shared.brandTag[state.lang]}</span>
          </span>
        </a>

        <button class="nav-toggle ${state.navOpen ? "is-open" : ""}" id="navToggle" aria-label="Toggle navigation">
          <span></span>
          <span></span>
        </button>

        <nav class="site-nav ${state.navOpen ? "is-open" : ""}" id="siteNav" aria-label="Primary navigation">
          ${navLinks}
          <a class="mobile-contact" href="#footer">${site.shared.contactShortcut[state.lang]}</a>
        </nav>

        <div class="lang-switch" aria-label="Language switcher">
          ${languageOrder
            .map(
              (lang) => `
                <button type="button" data-lang="${lang}" class="${
                  state.lang === lang ? "is-active" : ""
                }">${lang === "en" ? "EN" : lang === "th" ? "ไทย" : "中文"}</button>
              `
            )
            .join("")}
        </div>

        <a class="header-cta" href="${site.shared.serviceCta.href}" target="_blank" rel="noreferrer">
          ${site.shared.serviceCta.label[state.lang]}
        </a>
      </div>
    </header>
  `;
}

function renderFooter() {
  const footer = site.shared.footer[state.lang];

  return `
    <footer class="site-footer" id="footer">
      <div class="shell">
        <div class="footer-head">
          <p class="eyebrow">RAAT</p>
          <h2 class="section-title section-title--tight">${footer.heading}</h2>
        </div>

        <div class="footer-grid">
          <section class="footer-column">
            <h3>${footer.serviceTitle}</h3>
            <div class="footer-list">
              ${footer.serviceLinks
                .map(
                  (link) => `
                    <a href="${link.external ? link.href : withLang(link.href)}"${
                      link.external ? ' target="_blank" rel="noreferrer"' : ""
                    }>${link.label}</a>
                  `
                )
                .join("")}
            </div>
          </section>

          <section class="footer-column">
            <h3>${footer.contactTitle}</h3>
            <div class="footer-contact">
              ${footer.contacts
                .map(
                  ([label, value]) => `
                    <div>
                      <span>${label}</span>
                      <strong>${value}</strong>
                    </div>
                  `
                )
                .join("")}
            </div>
          </section>

          <section class="footer-column">
            <h3>${footer.docsTitle}</h3>
            <div class="footer-list">
              ${footer.docKeys
                .map((key) => {
                  const doc = site.docs[key];
                  return `
                    <a href="${doc.href}" target="_blank" rel="noreferrer">
                      ${doc.title[state.lang]}
                    </a>
                  `;
                })
                .join("")}
            </div>
          </section>
        </div>

        <div class="footer-note">${footer.note}</div>
      </div>
    </footer>
  `;
}

function renderHome(page) {
  const resourcesLabel = getNavItem("resources")?.label[state.lang] || "Resources";
  const motorsportLabel = getNavItem("motorsport")?.label[state.lang] || "Motorsport";
  const mobilityLabel = getNavItem("mobility")?.label[state.lang] || "Mobility";
  const homeActionLedger = [
    {
      label: page.utility.items[0][0],
      detail: page.utility.items[0][1],
      href: site.shared.serviceCta.href,
      external: true,
      action: site.shared.serviceCta.label[state.lang],
    },
    {
      label: page.utility.items[1][0],
      detail: page.utility.items[1][1],
      href: "./motorsport.html#license",
      action: page.hero.actions[1].label,
    },
    {
      label: page.utility.items[2][0],
      detail: page.utility.items[2][1],
      href: "./motorsport.html#calendar",
      action: page.hero.actions[2].label,
    },
    {
      label: page.utility.items[3][0],
      detail: page.utility.items[3][1],
      href: "./about.html#governance",
      action: page.hero.actions[3].label,
    },
  ];

  return `
    <main class="page page-home">
      <section class="page-hero shell" data-reveal>
        <div class="hero-copy">
          <p class="eyebrow">${page.hero.eyebrow}</p>
          <h1 class="display-title">${page.hero.title}</h1>
          <p class="lede">${page.hero.deck}</p>
          <div class="button-row">
            ${page.hero.actions.map((link) => renderButton(link)).join("")}
          </div>
        </div>

        ${renderFigure({
          src: "./assets/home-circuit-dji.jpg",
          alt: "RAAT circuit grid at Chang International Circuit",
          caption: "National circuit grid / Buriram",
          className: "hero-stage media-frame--hero",
          loading: "eager",
        })}

        <aside class="hero-panel">
          <div class="surface panel-card panel-stack surface--soft">
            <p class="eyebrow">${chromeUi.snapshot[state.lang]}</p>
            ${renderStatRail(page.hero.stats, "stat-rail--compact")}
          </div>
          <div class="surface panel-card panel-stack">
            <p class="eyebrow">${page.manifesto.eyebrow}</p>
            <p class="lead-line">${page.manifesto.body}</p>
            <div class="line-stack line-stack--compact">
              ${page.manifesto.points
                .slice(0, 2)
                .map(
                  ([title, text]) => `
                    <article class="line-item line-item--compact">
                      <strong>${title}</strong>
                      <p>${text}</p>
                    </article>
                  `
                )
                .join("")}
            </div>
          </div>
        </aside>
      </section>

      <section class="section shell" id="services" data-reveal>
        <div class="section-head">
          <p class="eyebrow">${page.utility.eyebrow}</p>
          <h2 class="section-title">${page.utility.title}</h2>
          <p class="copy-block">${page.utility.body}</p>
        </div>
        ${renderActionLedger(homeActionLedger)}
      </section>

      <section class="section shell" data-reveal>
        <div class="section-head">
          <p class="eyebrow">${page.resourcePreview.eyebrow}</p>
          <h2 class="section-title">${page.resourcePreview.title}</h2>
          <p class="copy-block">${page.resourcePreview.body}</p>
        </div>
        <div class="split-grid split-grid--library">
          <aside class="surface panel-card panel-stack surface--soft">
            <p class="eyebrow">${resourceUi.featured[state.lang]}</p>
            ${renderDocShelf(["rules", "calendar", "regulations", "mobility"])}
          </aside>
          <div class="content-stack">
            <div class="resource-columns">
              <section class="resource-lane">
                <div class="subsection-head">
                  <p class="eyebrow">${page.resourcePreview.memberTitle}</p>
                </div>
                ${renderResourceGrid(page.resourcePreview.memberKeys, "resource-grid--compact")}
              </section>
              <section class="resource-lane">
                <div class="subsection-head">
                  <p class="eyebrow">${page.resourcePreview.publicTitle}</p>
                </div>
                ${renderResourceGrid(page.resourcePreview.publicKeys, "resource-grid--compact")}
              </section>
            </div>
            <div class="button-row">
              ${renderButton({ label: resourcesLabel, href: "./resources.html", tone: "plain" })}
            </div>
          </div>
        </div>
      </section>

      <section class="section shell" data-reveal>
        <div class="section-head">
          <p class="eyebrow">${page.motorsport.eyebrow}</p>
          <h2 class="section-title">${page.motorsport.title}</h2>
          <p class="copy-block">${page.motorsport.body}</p>
        </div>
        <div class="feature-grid feature-grid--balanced">
          <div class="content-stack">
            ${renderEventStream(site.events[state.lang].slice(0, 4))}
            <div class="button-row">
              ${renderButton({ label: motorsportLabel, href: "./motorsport.html", tone: "plain" })}
            </div>
          </div>
          ${renderFigure({
            src: "./assets/home-rally-panorama.png",
            alt: "RAAT rally stage",
            caption: "Rally championship terrain / source pack",
            className: "media-frame--wide",
          })}
        </div>
      </section>

      <section class="section shell" data-reveal>
        <div class="feature-grid feature-grid--balanced feature-grid--reverse">
          ${renderFigure({
            src: "./assets/mobility-rider.jpg",
            alt: "School mobility and road safety",
            caption: "Helmets for Kids 2025-2026",
            className: "media-frame--portrait",
          })}
          <div class="surface panel-card panel-stack surface--soft">
            <p class="eyebrow">${page.mobility.eyebrow}</p>
            <h2 class="section-title section-title--tight">${page.mobility.title}</h2>
            <p class="copy-block">${page.mobility.body}</p>
            ${renderNumberGrid(page.mobility.impacts)}
            <div class="line-stack">
              ${page.mobility.services
                .map(
                  ([title, text]) => `
                    <article class="line-item">
                      <strong>${title}</strong>
                      <p>${text}</p>
                    </article>
                  `
                )
                .join("")}
            </div>
            <div class="button-row">
              ${renderButton({ label: mobilityLabel, href: "./mobility.html", tone: "plain" })}
            </div>
          </div>
        </div>
      </section>

      <section class="section shell" data-reveal>
        <div class="section-head">
          <p class="eyebrow">${page.credibility.eyebrow}</p>
          <h2 class="section-title">${page.credibility.title}</h2>
          <p class="copy-block">${page.credibility.body}</p>
        </div>
        <div class="feature-grid feature-grid--balanced">
          <div class="content-stack">
            ${renderTimeline(site.timeline[state.lang].slice(0, 4))}
            ${renderDocShelf(page.credibility.docKeys)}
          </div>
          ${renderFigure({
            src: "./assets/board-members.png",
            alt: "RAAT board members",
            className: "media-frame--board",
          })}
        </div>
      </section>

      <section class="section shell section--partners" data-reveal>
        <div class="surface panel-card panel-stack surface--soft">
          <p class="eyebrow">${chromeUi.partnerNetwork[state.lang]}</p>
          ${renderPartnerRiver()}
        </div>
      </section>
    </main>
  `;
}

function renderAbout(page) {
  return `
    <main class="page page-about">
      <section class="page-hero shell" data-reveal>
        <div class="hero-copy">
          <p class="eyebrow">${page.hero.eyebrow}</p>
          <h1 class="display-title">${page.hero.title}</h1>
          <p class="lede">${page.hero.deck}</p>
        </div>

        ${renderFigure({
          src: "./assets/history-race-ceremony.jpg",
          alt: "Historic Thai racing ceremony",
          caption: "Historic race ceremony / archive",
          className: "hero-stage media-frame--hero",
          loading: "eager",
        })}

        <aside class="hero-panel">
          <div class="surface panel-card panel-stack surface--soft">
            <p class="eyebrow">${chromeUi.coreDocs[state.lang]}</p>
            ${renderDocShelf(["history", "board", "regulations"])}
          </div>
        </aside>
      </section>

      <section class="section shell" id="timeline" data-reveal>
        <div class="section-head">
          <p class="eyebrow">${page.timelineIntro.eyebrow}</p>
          <h2 class="section-title">${page.timelineIntro.title}</h2>
          <p class="copy-block">${page.timelineIntro.body}</p>
        </div>
        ${renderTimeline(site.timeline[state.lang])}
      </section>

      <section class="section shell" id="archive" data-reveal>
        <div class="section-head">
          <p class="eyebrow">${page.archive.eyebrow}</p>
          <h2 class="section-title">${page.archive.title}</h2>
          <p class="copy-block">${page.archive.body}</p>
        </div>
        <div class="gallery-grid gallery-grid--editorial">
          ${renderFigure({
            src: "./assets/history-beera-car.jpg",
            alt: "Prince Birabongse archive",
            className: "media-frame--feature",
          })}
          ${renderFigure({
            src: "./assets/history-family-1930s.jpg",
            alt: "Historic RAAT family archive",
            className: "media-frame--stack",
          })}
          ${renderFigure({
            src: "./assets/history-campbell-trophy.jpg",
            alt: "Historic Brooklands coverage",
            className: "media-frame--stack",
          })}
        </div>
      </section>

      <section class="section shell" id="governance" data-reveal>
        <div class="feature-grid feature-grid--balanced">
          <div class="surface panel-card panel-stack">
            <p class="eyebrow">${page.governance.eyebrow}</p>
            <h2 class="section-title section-title--tight">${page.governance.title}</h2>
            <p class="copy-block">${page.governance.body}</p>
            <p class="lead-line">${page.governance.lead}</p>
            ${renderDocShelf(page.governance.docKeys)}
          </div>
          ${renderFigure({
            src: "./assets/board-members.png",
            alt: "RAAT board portrait",
            className: "media-frame--board",
          })}
        </div>
      </section>

      <section class="section shell" data-reveal>
        <div class="section-head">
          <p class="eyebrow">${page.resources.eyebrow}</p>
          <h2 class="section-title">${page.resources.title}</h2>
          <p class="copy-block">${page.resources.body}</p>
        </div>
        ${renderResourceGrid(page.resources.keys)}
      </section>
    </main>
  `;
}

function renderMotorsport(page) {
  return `
    <main class="page page-motorsport">
      <section class="page-hero shell" data-reveal>
        <div class="hero-copy">
          <p class="eyebrow">${page.hero.eyebrow}</p>
          <h1 class="display-title">${page.hero.title}</h1>
          <p class="lede">${page.hero.deck}</p>
        </div>

        ${renderFigure({
          src: "./assets/home-rally-panorama.png",
          alt: "RAAT rally stage",
          caption: "National rally terrain / source pack",
          className: "hero-stage media-frame--hero",
          loading: "eager",
        })}

        <aside class="hero-panel">
          <div class="surface panel-card panel-stack surface--soft">
            <p class="eyebrow">${chromeUi.coreDocs[state.lang]}</p>
            ${renderDocShelf(["rules", "calendar", "license"])}
          </div>
        </aside>
      </section>

      <section class="section shell" id="calendar" data-reveal>
        <div class="section-head">
          <p class="eyebrow">${page.calendarIntro.eyebrow}</p>
          <h2 class="section-title">${page.calendarIntro.title}</h2>
          <p class="copy-block">${page.calendarIntro.body}</p>
        </div>
        <div class="feature-grid feature-grid--balanced">
          <div class="content-stack">
            ${renderEventStream(site.events[state.lang])}
          </div>
          ${renderFigure({
            src: "./assets/home-circuit-dji.jpg",
            alt: "Circuit event grid",
            className: "media-frame--wide",
          })}
        </div>
      </section>

      <section class="section shell" id="disciplines" data-reveal>
        <div class="section-head">
          <p class="eyebrow">${page.disciplines.eyebrow}</p>
          <h2 class="section-title">${page.disciplines.title}</h2>
        </div>
        <div class="rail-grid">
          ${page.disciplines.items
            .map(
              ([title, text]) => `
                <article class="rail-item">
                  <strong>${title}</strong>
                  <p>${text}</p>
                </article>
              `
            )
            .join("")}
        </div>
      </section>

      <section class="section shell" id="license" data-reveal>
        <div class="feature-grid feature-grid--balanced">
          <div class="surface panel-card panel-stack">
            <p class="eyebrow">${page.license.eyebrow}</p>
            <h2 class="section-title section-title--tight">${page.license.title}</h2>
            <p class="copy-block">${page.license.body}</p>
            <div class="step-flow">
              ${page.license.steps
                .map(
                  ([step, title, text]) => `
                    <article class="step-item">
                      <div class="step-item__count">${step}</div>
                      <div>
                        <strong>${title}</strong>
                        <p>${text}</p>
                      </div>
                    </article>
                  `
                )
                .join("")}
            </div>
          </div>
          <div class="gallery-grid gallery-grid--stacked">
            ${renderFigure({
              src: "./assets/license-ways.png",
              alt: "License channels poster",
              className: "media-frame--poster",
            })}
            ${renderFigure({
              src: "./assets/license-steps.png",
              alt: "License steps poster",
              className: "media-frame--poster",
            })}
          </div>
        </div>
      </section>

      <section class="section shell" id="rules" data-reveal>
        <div class="section-head">
          <p class="eyebrow">${page.rulesIntro.eyebrow}</p>
          <h2 class="section-title">${page.rulesIntro.title}</h2>
          <p class="copy-block">${page.rulesIntro.body}</p>
        </div>
        ${renderDocShelf(page.rulesIntro.docKeys)}
      </section>

      <section class="section shell" data-reveal>
        <div class="section-head">
          <p class="eyebrow">${page.resources.eyebrow}</p>
          <h2 class="section-title">${page.resources.title}</h2>
          <p class="copy-block">${page.resources.body}</p>
        </div>
        ${renderResourceGrid(page.resources.keys)}
      </section>
    </main>
  `;
}

function renderMobility(page) {
  return `
    <main class="page page-mobility">
      <section class="page-hero shell" data-reveal>
        <div class="hero-copy">
          <p class="eyebrow">${page.hero.eyebrow}</p>
          <h1 class="display-title">${page.hero.title}</h1>
          <p class="lede">${page.hero.deck}</p>
          <div class="button-row">
            ${renderButton({
              label: site.shared.serviceCta.label[state.lang],
              href: site.shared.serviceCta.href,
              external: true,
              tone: "dark",
            })}
            ${renderButton({
              label: site.shared.contactShortcut[state.lang],
              href: "#footer",
              tone: "plain",
            })}
          </div>
        </div>

        ${renderFigure({
          src: "./assets/mobility-rider.jpg",
          alt: "Student using RAAT helmet on a motorcycle ride",
          caption: "School mobility / Helmets for Kids",
          className: "hero-stage media-frame--hero",
          loading: "eager",
        })}

        <aside class="hero-panel">
          <div class="surface panel-card panel-stack surface--soft">
            <p class="eyebrow">${page.impact.eyebrow}</p>
            <h2 class="section-title section-title--tight">${page.impact.title}</h2>
            <p class="copy-block">${page.impact.body}</p>
            ${renderNumberGrid(page.impact.numbers)}
          </div>
        </aside>
      </section>

      ${renderTrendsSection(page.trends)}

      <section class="section shell" id="services" data-reveal>
        <div class="feature-grid feature-grid--balanced">
          <div class="surface panel-card panel-stack">
            <p class="eyebrow">${page.services.eyebrow}</p>
            <h2 class="section-title section-title--tight">${page.services.title}</h2>
            <p class="copy-block">${page.services.body}</p>
            <div class="line-stack">
              ${page.services.lanes
                .map(
                  ([title, text]) => `
                    <article class="line-item">
                      <strong>${title}</strong>
                      <p>${text}</p>
                    </article>
                  `
                )
                .join("")}
            </div>
          </div>
          <div class="gallery-grid gallery-grid--editorial">
            ${renderFigure({
              src: "./assets/mobility-students-group.jpg",
              alt: "Students and partners in helmet handover ceremony",
              className: "media-frame--feature",
            })}
            ${renderFigure({
              src: "./assets/mobility-ceremony-helmets.jpg",
              alt: "Safety ceremony",
              className: "media-frame--stack",
            })}
            ${renderFigure({
              src: "./assets/mobility-helmets-close.jpg",
              alt: "Helmet preparation details",
              className: "media-frame--stack",
            })}
          </div>
        </div>
      </section>

      <section class="section shell" data-reveal>
        <div class="surface panel-card panel-stack surface--soft">
          <p class="eyebrow">${page.partnership.eyebrow}</p>
          <h2 class="section-title section-title--tight">${page.partnership.title}</h2>
          <p class="copy-block">${page.partnership.body}</p>
          ${renderPartnerRiver()}
        </div>
      </section>

      <section class="section shell" data-reveal>
        <div class="section-head">
          <p class="eyebrow">${page.resources.eyebrow}</p>
          <h2 class="section-title">${page.resources.title}</h2>
          <p class="copy-block">${page.resources.body}</p>
        </div>
        ${renderResourceGrid(page.resources.keys)}
      </section>
    </main>
  `;
}

function renderResourcesPage(page) {
  const contacts = site.shared.footer[state.lang].contacts;
  const memberCount = Object.values(site.resources).filter((resource) => resource.audience === "member").length;
  const publicCount = Object.values(site.resources).filter((resource) => resource.audience === "public").length;

  return `
    <main class="page page-resources">
      <section class="page-hero shell" data-reveal>
        <div class="hero-copy">
          <p class="eyebrow">${page.hero.eyebrow}</p>
          <h1 class="display-title">${page.hero.title}</h1>
          <p class="lede">${page.hero.deck}</p>
          <div class="button-row">
            ${page.contactRail.actions.map((link) => renderButton(link)).join("")}
          </div>
        </div>

        <div class="hero-stage surface panel-card hero-library">
          <p class="eyebrow">${chromeUi.coreDocs[state.lang]}</p>
          ${renderDocShelf(["membershipPoster", "contact", "board", "regulations"])}
        </div>

        <aside class="hero-panel">
          <div class="surface panel-card panel-stack surface--soft">
            <div class="library-stats">
              <article class="library-stat">
                <strong>${memberCount}</strong>
                <span>${page.memberSection.eyebrow}</span>
              </article>
              <article class="library-stat">
                <strong>${publicCount}</strong>
                <span>${page.publicSection.eyebrow}</span>
              </article>
            </div>
          </div>
          <div class="surface panel-card resource-contact">
            ${contacts
              .map(
                ([label, value]) => `
                  <div>
                    <span>${label}</span>
                    <strong>${value}</strong>
                  </div>
                `
              )
              .join("")}
          </div>
        </aside>
      </section>

      <section class="section shell" data-reveal>
        <div class="section-head">
          <p class="eyebrow">${page.memberSection.eyebrow}</p>
          <h2 class="section-title">${page.memberSection.title}</h2>
          <p class="copy-block">${page.memberSection.body}</p>
        </div>
        ${renderResourceGrid(page.memberSection.keys)}
      </section>

      <section class="section shell" data-reveal>
        <div class="section-head">
          <p class="eyebrow">${page.publicSection.eyebrow}</p>
          <h2 class="section-title">${page.publicSection.title}</h2>
          <p class="copy-block">${page.publicSection.body}</p>
        </div>
        ${renderResourceGrid(page.publicSection.keys)}
      </section>

      <section class="section shell" data-reveal>
        <div class="split-grid split-grid--contact">
          <div class="surface panel-card panel-stack">
            <p class="eyebrow">${page.contactRail.eyebrow}</p>
            <h2 class="section-title section-title--tight">${page.contactRail.title}</h2>
            <p class="copy-block">${page.contactRail.body}</p>
            <div class="button-row">
              ${page.contactRail.actions.map((link) => renderButton(link)).join("")}
            </div>
          </div>
          <div class="surface panel-card resource-contact">
            ${contacts
              .map(
                ([label, value]) => `
                  <div>
                    <span>${label}</span>
                    <strong>${value}</strong>
                  </div>
                `
              )
              .join("")}
          </div>
        </div>
      </section>
    </main>
  `;
}

function renderPage() {
  const page = site.pages[pageId][state.lang];

  document.documentElement.lang = state.lang;
  document.title = page.metaTitle;

  let content = "";

  if (pageId === "about") content = renderAbout(page);
  else if (pageId === "motorsport") content = renderMotorsport(page);
  else if (pageId === "mobility") content = renderMobility(page);
  else if (pageId === "resources") content = renderResourcesPage(page);
  else content = renderHome(page);

  app.innerHTML = `${renderHeader()}${content}${renderFooter()}`;

  bindUI();
  setupReveal();
}

function bindUI() {
  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", () => {
      state.lang = button.dataset.lang;
      localStorage.setItem("raat-lang", state.lang);
      state.navOpen = false;
      syncUrl();
      renderPage();
    });
  });

  const navToggle = document.getElementById("navToggle");
  if (navToggle) {
    navToggle.addEventListener("click", () => {
      state.navOpen = !state.navOpen;
      renderPage();
    });
  }

  document.querySelectorAll(".site-nav a").forEach((link) => {
    link.addEventListener("click", () => {
      state.navOpen = false;
    });
  });
}

function syncUrl() {
  const url = new URL(window.location.href);
  url.searchParams.set("lang", state.lang);
  window.history.replaceState({}, "", url);
}

let revealObserver;
function setupReveal() {
  if (revealObserver) revealObserver.disconnect();

  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16, rootMargin: "0px 0px -40px 0px" }
  );

  document.querySelectorAll("[data-reveal]").forEach((node) => {
    revealObserver.observe(node);
  });
}

renderPage();
