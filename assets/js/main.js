/*
 * main.js — behaviour for the Banglar Krrish website.
 *
 * Modules (in order):
 *   1. CONFIG            — the ONLY place to set the contact email and social links.
 *   2. i18n              — English / Bengali switching and persistence.
 *   3. Navigation        — mobile menu and current-page marking.
 *   4. Videos            — 16:9 cards, thumbnail fallback chain, in-page players.
 *   5. Press             — editorial cards for the press page and home teaser.
 *   6. Gallery lightbox  — keyboard-accessible image viewer.
 *   7. Contact form      — validation, sanitising, mailto hand-off, copy fallback.
 *   8. Utilities         — clipboard, year, social links, feature detection.
 *
 * No third-party scripts load until a visitor presses play on a video.
 */

/* ==========================================================================
   1. CONFIG — edit here only
   ========================================================================== */
const CONFIG = {
  /* The official contact email. Used by the contact form and footer.
     Change this one value to update the whole site. */
  CONTACT_EMAIL: "contact.bdkrrish@gmail.com",

  /* Official social-media accounts. Add only verified https:// URLs.
     Example: { label: "Facebook", url: "https://www.facebook.com/example" }
     When this list is empty, the social-media section is hidden. */
  SOCIAL_LINKS: []
};

/* ==========================================================================
   2. i18n — translation engine
   ========================================================================== */
const LANG_STORAGE_KEY = "banglar-krrish-lang";
const SUPPORTED_LANGS = ["en", "bn"];
let currentLang = "en";
const languageListeners = []; // functions re-run when the language changes

/** Read a translation string, falling back to English, then to the key itself. */
function t(key, vars) {
  const dict = (window.I18N && (window.I18N[currentLang] || window.I18N.en)) || {};
  let text = dict[key];
  if (text === undefined && window.I18N && window.I18N.en) text = window.I18N.en[key];
  if (text === undefined) text = key;
  if (vars) {
    Object.keys(vars).forEach((name) => {
      text = text.replace("{" + name + "}", String(vars[name]));
    });
  }
  return text;
}

/** Remember the visitor's language choice; fails silently if storage is blocked. */
function saveLang(lang) {
  try { window.localStorage.setItem(LANG_STORAGE_KEY, lang); } catch (e) { /* storage unavailable */ }
}
function loadLang() {
  try {
    const saved = window.localStorage.getItem(LANG_STORAGE_KEY);
    if (SUPPORTED_LANGS.indexOf(saved) !== -1) return saved;
  } catch (e) { /* storage unavailable */ }
  return "en";
}

/** Apply translations to every element that declares a data-i18n key. */
function applyTranslations() {
  const year = String(new Date().getFullYear());

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.getAttribute("data-i18n"), { year: year });
  });

  // data-i18n-attr="placeholder:form.name;aria-label:lightbox.close"
  document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
    el.getAttribute("data-i18n-attr").split(";").forEach((pair) => {
      const parts = pair.split(":");
      if (parts.length === 2) el.setAttribute(parts[0].trim(), t(parts[1].trim(), { year: year }));
    });
  });

  // Page title and meta description, from the page's data-page value.
  const page = document.body.getAttribute("data-page");
  if (page) {
    const title = t("meta." + page + ".title");
    const desc = t("meta." + page + ".desc");
    document.title = title;
    setMeta('meta[name="description"]', desc);
    setMeta('meta[property="og:title"]', title);
    setMeta('meta[property="og:description"]', desc);
    setMeta('meta[name="twitter:title"]', title);
    setMeta('meta[name="twitter:description"]', desc);
  }
}

function setMeta(selector, value) {
  const el = document.querySelector(selector);
  if (el) el.setAttribute("content", value);
}

/** Switch the content language: html lang/dir, buttons, text, and dynamic lists. */
function setLanguage(lang) {
  if (SUPPORTED_LANGS.indexOf(lang) === -1) return;
  currentLang = lang;
  document.documentElement.lang = lang === "bn" ? "bn" : "en";
  document.documentElement.setAttribute("data-lang", lang);
  setMeta('meta[property="og:locale"]', lang === "bn" ? "bn_BD" : "en_US");

  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    const active = btn.getAttribute("data-lang-btn") === lang;
    btn.setAttribute("aria-pressed", active ? "true" : "false");
  });

  applyTranslations();
  languageListeners.forEach((fn) => { try { fn(lang); } catch (e) { /* keep going */ } });
  saveLang(lang);
}

function initLanguage() {
  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    btn.addEventListener("click", () => setLanguage(btn.getAttribute("data-lang-btn")));
  });
  setLanguage(loadLang());
}

/* ==========================================================================
   3. Navigation — mobile menu
   ========================================================================== */
function initNavigation() {
  const toggle = document.querySelector("[data-nav-toggle]");
  const nav = document.getElementById("primary-nav");
  if (!toggle || !nav) return;

  const setOpen = (open) => {
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  };

  toggle.addEventListener("click", () => setOpen(!nav.classList.contains("is-open")));
  nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setOpen(false)));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && nav.classList.contains("is-open")) {
      setOpen(false);
      toggle.focus();
    }
  });
  // Close the menu if the viewer resizes to desktop width.
  const desktopQuery = window.matchMedia ? window.matchMedia("(min-width: 961px)") : null;
  if (desktopQuery && desktopQuery.addEventListener) {
    desktopQuery.addEventListener("change", (mq) => { if (mq.matches) setOpen(false); });
  }

  // Mark the current page for assistive tech and styling.
  const here = (window.location.pathname.split("/").pop() || "index.html").toLowerCase();
  nav.querySelectorAll("a").forEach((a) => {
    const target = (a.getAttribute("href") || "").split("/").pop().toLowerCase();
    if (target === here || (here === "" && target === "index.html")) a.setAttribute("aria-current", "page");
  });
}

/* ==========================================================================
   4. Videos — thumbnails, players, and failure handling
   ========================================================================== */

/* Feature detection for lazy thumbnails. */
const canObserve = "IntersectionObserver" in window;

/** Format YouTube's YYYY-MM-DD date for the active language, without inventing values. */
function formatDate(iso) {
  if (!iso) return "";
  const [y, m, d] = iso.split("-").map(Number);
  const date = new Date(Date.UTC(y, m - 1, d));
  try {
    return new Intl.DateTimeFormat(currentLang === "bn" ? "bn-BD" : "en-GB", {
      day: "numeric", month: "short", year: "numeric", timeZone: "UTC"
    }).format(date);
  } catch (e) {
    return iso; // Intl unavailable: show the ISO date.
  }
}

/** Does the text contain Bengali script? Used to set the correct lang on titles. */
function isBengali(text) { return /[\u0980-\u09FF]/.test(text); }

/**
 * Build one video card. The card is created once; its text uses data-i18n keys
 * so language switches update it in place without reloading the player.
 */
function createVideoCard(video, index) {
  const card = document.createElement("article");
  card.className = "video-card";
  card.setAttribute("data-video-id", video.id);

  const media = document.createElement("div");
  media.className = "video-media";
  // Local AI-generated artwork is the immediate background: the box is never empty.
  const fallback = window.FALLBACK_THUMBS[(video.fallback - 1 + window.FALLBACK_THUMBS.length) % window.FALLBACK_THUMBS.length];
  media.style.setProperty("--fallback", "url('" + fallback + "')");
  media.setAttribute("data-media", "");

  const playBtn = document.createElement("button");
  playBtn.type = "button";
  playBtn.className = "play-btn";
  playBtn.setAttribute("data-play", "");
  playBtn.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M8 5.14v13.72L19 12z"/></svg>';
  media.appendChild(playBtn);

  const body = document.createElement("div");
  body.className = "video-body";

  const h3 = document.createElement("h3");
  h3.textContent = video.title;
  h3.lang = isBengali(video.title) ? "bn" : "en";

  const meta = document.createElement("p");
  meta.className = "video-meta";
  const dateText = formatDate(video.uploaded);
  meta.innerHTML = "<strong data-i18n='card.channel'></strong>: " + escapeHtml(video.channel) +
    " · <strong data-i18n='card.uploaded'></strong>: " + escapeHtml(dateText);

  const category = document.createElement("p");
  category.className = "video-meta";
  category.innerHTML = "<strong data-i18n='card.category'></strong>: " + escapeHtml(video.category);

  const watch = document.createElement("a");
  watch.className = "video-link";
  watch.href = "https://www.youtube.com/watch?v=" + encodeURIComponent(video.id);
  watch.target = "_blank";
  watch.rel = "noopener noreferrer";
  watch.setAttribute("data-i18n", "card.watchOn");

  const hint = document.createElement("p");
  hint.className = "video-hint";
  hint.setAttribute("data-i18n", "card.playerHint");

  body.append(h3, meta, category, hint, watch);
  card.append(media, body);

  // Labels for the play button depend on language.
  const setPlayLabel = () => {
    playBtn.setAttribute("aria-label", t("card.play") + ": " + video.title);
  };
  setPlayLabel();
  languageListeners.push(setPlayLabel);

  // Date text is localised on each language change.
  languageListeners.push(() => {
    meta.innerHTML = "<strong data-i18n='card.channel'></strong>: " + escapeHtml(video.channel) +
      " · <strong data-i18n='card.uploaded'></strong>: " + escapeHtml(formatDate(video.uploaded));
    applyTranslations();
  });

  // Thumbnail: load only when near the viewport, using a finite fallback chain.
  const loadThumb = () => attachThumbnail(media, video.id);
  if (canObserve) {
    const io = new IntersectionObserver((entries, observer) => {
      if (entries.some((en) => en.isIntersecting)) {
        observer.disconnect();
        loadThumb();
      }
    }, { rootMargin: "300px 0px" });
    io.observe(card);
  } else {
    loadThumb();
  }

  playBtn.addEventListener("click", () => activatePlayer(card, video));
  return card;
}

/**
 * Finite thumbnail chain: maxresdefault -> hqdefault -> local artwork (already shown).
 * YouTube returns a 120×90 grey placeholder when a size does not exist; we treat that as a miss.
 * No spinner is shown at any point, and the image fades in only once it has loaded.
 */
function attachThumbnail(media, videoId) {
  const sources = [
    "https://i.ytimg.com/vi/" + videoId + "/maxresdefault.jpg",
    "https://i.ytimg.com/vi/" + videoId + "/hqdefault.jpg"
  ];
  let step = 0;
  const img = document.createElement("img");
  img.className = "thumb";
  img.alt = "";
  img.decoding = "async";
  img.referrerPolicy = "strict-origin-when-cross-origin";

  const tryNext = () => {
    step += 1;
    if (step < sources.length) {
      img.src = sources[step];
    } else {
      img.remove(); // Every remote option failed: the local artwork remains visible.
    }
  };

  img.onload = () => {
    if (img.naturalWidth <= 120) { tryNext(); return; }
    img.classList.add("is-loaded");
  };
  img.onerror = tryNext;

  media.insertBefore(img, media.firstChild);
  img.src = sources[0];
}

/**
 * Replace the thumbnail with an in-page YouTube player (privacy-enhanced domain).
 * Uses the YouTube IFrame API so embedding errors (e.g. restricted videos) can be
 * handled gracefully. If the API cannot load, a plain iframe is used instead.
 */
function activatePlayer(card, video) {
  if (card.getAttribute("data-state") === "playing") return;
  card.setAttribute("data-state", "playing");

  const media = card.querySelector("[data-media]");
  media.innerHTML = "";
  media.style.removeProperty("--fallback");
  media.style.backgroundImage = "none";
  media.style.background = "#000";

  const mount = document.createElement("div");
  mount.className = "video-player";
  mount.id = "player-" + video.id;
  media.appendChild(mount);

  loadYouTubeApi().then(() => {
    createApiPlayer(mount, card, video);
  }).catch(() => {
    mount.innerHTML = "";
    mount.appendChild(createPlainIframe(video));
  });
}

function createPlainIframe(video) {
  const iframe = document.createElement("iframe");
  iframe.src = "https://www.youtube-nocookie.com/embed/" + encodeURIComponent(video.id) +
    "?autoplay=1&rel=0&playsinline=1";
  iframe.title = video.title;
  iframe.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share");
  iframe.setAttribute("allowfullscreen", "");
  iframe.setAttribute("referrerpolicy", "strict-origin-when-cross-origin");
  iframe.loading = "eager";
  return iframe;
}

function createApiPlayer(mount, card, video) {
  const player = new window.YT.Player(mount, {
    host: "https://www.youtube-nocookie.com",
    videoId: video.id,
    width: "100%",
    height: "100%",
    playerVars: { autoplay: 1, rel: 0, playsinline: 1 },
    events: {
      onReady: (e) => {
        const frame = e.target.getIframe && e.target.getIframe();
        if (frame) {
          frame.setAttribute("title", video.title);
          frame.setAttribute("allowfullscreen", "");
        }
      },
      onError: (e) => showBlockedMessage(card, video, e.data)
    }
  });
  return player;
}

/* YouTube error codes 101 and 150 mean the owner disallows embedding. */
function showBlockedMessage(card, video) {
  card.setAttribute("data-state", "blocked");
  // Remove the player and restore the local artwork so the card is never empty.
  const media = card.querySelector("[data-media]");
  media.innerHTML = "";
  media.style.background = "";
  const fallbackIndex = (video.fallback - 1 + window.FALLBACK_THUMBS.length) % window.FALLBACK_THUMBS.length;
  media.style.setProperty("--fallback", "url('" + window.FALLBACK_THUMBS[fallbackIndex] + "')");

  const body = card.querySelector(".video-body");
  if (body.querySelector(".video-blocked")) return;
  const box = document.createElement("div");
  box.className = "video-blocked";
  box.setAttribute("role", "status");
  box.innerHTML = "<strong data-i18n='card.blockedTitle'></strong><p data-i18n='card.blockedBody'></p>";
  body.insertBefore(box, body.querySelector(".video-link"));
  applyTranslations();
}

/* Load the YouTube IFrame API once, only when a visitor presses play. */
let ytApiPromise = null;
function loadYouTubeApi() {
  if (window.YT && window.YT.Player) return Promise.resolve();
  if (ytApiPromise) return ytApiPromise;
  ytApiPromise = new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error("timeout")), 8000);
    const prev = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      clearTimeout(timer);
      if (typeof prev === "function") prev();
      resolve();
    };
    const script = document.createElement("script");
    script.src = "https://www.youtube.com/iframe_api";
    script.async = true;
    script.onerror = () => { clearTimeout(timer); reject(new Error("load failed")); };
    document.head.appendChild(script);
  }).catch((err) => { ytApiPromise = null; throw err; });
  return ytApiPromise;
}

/** Render the video cards into any [data-video-grid] (optionally limited). */
function renderVideos() {
  document.querySelectorAll("[data-video-grid]").forEach((grid) => {
    if (grid.getAttribute("data-rendered") === "1" || !window.SITE_VIDEOS) return;
    const limit = parseInt(grid.getAttribute("data-limit"), 10) || window.SITE_VIDEOS.length;
    window.SITE_VIDEOS.slice(0, limit).forEach((video, i) => grid.appendChild(createVideoCard(video, i)));
    grid.setAttribute("data-rendered", "1");
    grid.removeAttribute("aria-busy");
  });
}

/* ==========================================================================
   5. Press — editorial cards
   ========================================================================== */
function renderPress() {
  document.querySelectorAll("[data-press-grid]").forEach((grid) => {
    if (grid.getAttribute("data-rendered") === "1" || !window.SITE_PRESS) return;
    const limit = parseInt(grid.getAttribute("data-limit"), 10) || window.SITE_PRESS.length;
    window.SITE_PRESS.slice(0, limit).forEach((item, i) => {
      const card = document.createElement("article");
      card.className = "card press-card";

      const art = document.createElement("div");
      art.className = "press-art";
      art.setAttribute("role", "img");
      art.setAttribute("aria-label", "");
      art.setAttribute("data-i18n-attr", "aria-label:press.decorative");
      art.style.backgroundImage = "url('" + window.FALLBACK_THUMBS[i % window.FALLBACK_THUMBS.length] + "')";

      const body = document.createElement("div");
      body.className = "press-body";

      const pub = document.createElement("p");
      pub.className = "publisher";
      pub.setAttribute("data-publisher", "");

      const date = document.createElement("p");
      date.className = "date";

      const h3 = document.createElement("h3");
      h3.setAttribute("data-title", "");

      const summary = document.createElement("p");
      summary.className = "summary";
      summary.setAttribute("data-summary", "");

      const link = document.createElement("a");
      link.className = "read-link";
      link.href = item.url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.setAttribute("data-read", "");

      body.append(pub, date, h3, summary, link);
      card.append(art, body);
      grid.appendChild(card);

      const fill = () => {
        const lang = currentLang;
        pub.textContent = item.publisher[lang] || item.publisher.en;
        if (item.date) {
          date.textContent = t("press.published") + ": " + formatDate(item.date);
          date.classList.remove("unverified");
        } else {
          date.textContent = t("press.dateUnverified");
        }
        if (item.title) {
          h3.textContent = item.title;
          h3.lang = isBengali(item.title) ? "bn" : "en";
        } else {
          h3.textContent = t("press.titleUnverified");
          h3.removeAttribute("lang");
        }
        summary.textContent = item.summary[lang] || item.summary.en;
        link.innerHTML = escapeHtml(t("press.readOriginal")) + " <span class='sr-only'>(" + escapeHtml(item.publisher.en) + ", opens in a new tab)</span> →";
      };
      fill();
      languageListeners.push(fill);
    });
    grid.setAttribute("data-rendered", "1");
  });
}

/* ==========================================================================
   6. Gallery lightbox — keyboard accessible
   ========================================================================== */
let lightbox = null;
let lbItems = [];
let lbIndex = 0;
let lbOpener = null;

function buildLightbox() {
  const wrap = document.createElement("div");
  wrap.className = "lightbox";
  wrap.setAttribute("role", "dialog");
  wrap.setAttribute("aria-modal", "true");
  wrap.setAttribute("aria-label", t("lightbox.open"));
  wrap.innerHTML =
    "<button type='button' class='lb-btn lb-close' data-lb='close' data-i18n-attr='aria-label:lightbox.close;title:lightbox.close'>" +
      "<svg viewBox='0 0 24 24' aria-hidden='true' focusable='false'><path fill='currentColor' d='M6.4 5l12.6 12.6-1.4 1.4L5 6.4z M19 6.4L6.4 19 5 17.6 17.6 5z'/></svg></button>" +
    "<button type='button' class='lb-btn lb-prev' data-lb='prev' data-i18n-attr='aria-label:lightbox.prev;title:lightbox.prev'>" +
      "<svg viewBox='0 0 24 24' aria-hidden='true' focusable='false'><path fill='currentColor' d='M15.4 5.6L8 12l7.4 6.4-1.3 1.5L5 12l9.1-7.9z'/></svg></button>" +
    "<figure><img alt='' /><figcaption></figcaption></figure>" +
    "<button type='button' class='lb-btn lb-next' data-lb='next' data-i18n-attr='aria-label:lightbox.next;title:lightbox.next'>" +
      "<svg viewBox='0 0 24 24' aria-hidden='true' focusable='false'><path fill='currentColor' d='M8.6 18.4L16 12 8.6 5.6l1.3-1.5L19 12l-9.1 7.9z'/></svg></button>";
  document.body.appendChild(wrap);

  wrap.querySelector("[data-lb='close']").addEventListener("click", closeLightbox);
  wrap.querySelector("[data-lb='prev']").addEventListener("click", () => stepLightbox(-1));
  wrap.querySelector("[data-lb='next']").addEventListener("click", () => stepLightbox(1));
  wrap.addEventListener("click", (e) => { if (e.target === wrap) closeLightbox(); });
  wrap.addEventListener("keydown", (e) => {
    if (e.key === "Escape") { e.preventDefault(); closeLightbox(); }
    else if (e.key === "ArrowLeft") { e.preventDefault(); stepLightbox(-1); }
    else if (e.key === "ArrowRight") { e.preventDefault(); stepLightbox(1); }
    else if (e.key === "Tab") { trapFocus(e, wrap); }
  });
  return wrap;
}

/** Keep keyboard focus inside the open dialog. */
function trapFocus(e, root) {
  const focusables = Array.prototype.slice.call(root.querySelectorAll("button"));
  if (!focusables.length) return;
  const first = focusables[0];
  const last = focusables[focusables.length - 1];
  if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
  else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
}

function showLightboxItem(index) {
  const item = lbItems[index];
  if (!item) return;
  lbIndex = index;
  const img = lightbox.querySelector("img");
  // Read alt text and caption live so they follow the current language.
  img.src = item.img.getAttribute("src");
  img.alt = item.img.getAttribute("alt") || "";
  lightbox.querySelector("figcaption").textContent = item.figcaption ? item.figcaption.textContent : "";
}

function openLightbox(index, opener) {
  lbOpener = opener;
  if (!lightbox) {
    lightbox = buildLightbox();
    languageListeners.push(() => { if (lightbox) applyTranslations(); });
  }
  showLightboxItem(index);
  lightbox.classList.add("is-open");
  document.body.style.overflow = "hidden";
  lightbox.querySelector("[data-lb='close']").focus();
}

function closeLightbox() {
  if (!lightbox) return;
  lightbox.classList.remove("is-open");
  document.body.style.overflow = "";
  if (lbOpener) lbOpener.focus();
}

function stepLightbox(delta) {
  const count = lbItems.length;
  showLightboxItem((lbIndex + delta + count) % count);
}

function initGallery() {
  const figures = document.querySelectorAll("[data-gallery] .gallery-item");
  if (!figures.length) return;
  lbItems = Array.prototype.map.call(figures, (fig) => ({
    img: fig.querySelector("img"),
    figcaption: fig.querySelector("figcaption"),
    button: fig.querySelector("button")
  }));
  lbItems.forEach((item, i) => {
    if (item.button) item.button.addEventListener("click", () => openLightbox(i, item.button));
  });
}

/* ==========================================================================
   7. Contact form
   ========================================================================== */
const FIELD_LIMITS = { name: 100, subject: 150, message: 3000 };
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/**
 * Strip control characters and angle brackets, trim, and cap the length.
 * Returns the cleaned value and whether anything was removed.
 */
function sanitize(value, max, singleLine) {
  let v = String(value || "");
  v = v.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "");
  if (singleLine) v = v.replace(/[\r\n]+/g, " ");
  v = v.replace(/[<>]/g, "");
  v = v.trim();
  const changed = v !== String(value || "").trim();
  if (v.length > max) { v = v.slice(0, max); }
  return { value: v, changed: changed };
}

function validateField(name, value) {
  switch (name) {
    case "name": return value.length >= 2 ? "" : "err.name";
    case "email": return EMAIL_PATTERN.test(value) ? "" : "err.email";
    case "subject": return value.length >= 3 ? "" : "err.subject";
    case "message": return value.length >= 10 ? "" : "err.message";
    default: return "";
  }
}

function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  const fields = {
    name: form.elements["name"],
    email: form.elements["email"],
    subject: form.elements["subject"],
    message: form.elements["message"]
  };
  const statusBox = document.getElementById("form-status");
  const fallback = document.getElementById("form-fallback");
  const copyEmailBtn = document.getElementById("copy-email");
  const copyMessageBtn = document.getElementById("copy-message");
  const copyLive = document.getElementById("copy-live");
  let lastMessageText = "";

  // Recipient shown on the page, always from CONFIG.
  document.querySelectorAll("[data-contact-email]").forEach((el) => { el.textContent = CONFIG.CONTACT_EMAIL; });

  const showError = (name, key) => {
    const el = fields[name];
    const err = document.getElementById(name + "-error");
    if (key) {
      el.setAttribute("aria-invalid", "true");
      err.textContent = t(key);
    } else {
      el.removeAttribute("aria-invalid");
      err.textContent = "";
    }
  };

  // Keep error text in the active language when the language switches.
  languageListeners.push(() => {
    Object.keys(fields).forEach((name) => {
      const el = fields[name];
      if (el.getAttribute("aria-invalid") === "true") {
        const key = validateField(name, sanitize(el.value, FIELD_LIMITS[name], name !== "message").value);
        if (key) document.getElementById(name + "-error").textContent = t(key);
      }
    });
  });

  // Live validation after the first blur on each field.
  Object.keys(fields).forEach((name) => {
    fields[name].addEventListener("blur", () => {
      const clean = sanitize(fields[name].value, FIELD_LIMITS[name], name !== "message").value;
      showError(name, validateField(name, clean));
    });
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let firstInvalid = null;
    let sanitisedAny = false;
    const clean = {};

    Object.keys(fields).forEach((name) => {
      const result = sanitize(fields[name].value, FIELD_LIMITS[name], name !== "message");
      clean[name] = result.value;
      if (result.changed) sanitisedAny = true;
      const key = validateField(name, result.value);
      showError(name, key);
      if (key && !firstInvalid) firstInvalid = name;
    });

    if (firstInvalid) {
      setStatus("error", t("form.checkFields"));
      fields[firstInvalid].focus();
      return;
    }

    // Compose the email. Nothing is sent by this site; the visitor's email app does it.
    const subject = "[Website contact] " + clean.subject;
    const body = [
      "Name: " + clean.name,
      "Email: " + clean.email,
      "",
      clean.message,
      "",
      "— Sent via the Banglar Krrish website contact form"
    ].join("\n");
    lastMessageText = "To: " + CONFIG.CONTACT_EMAIL + "\nSubject: " + subject + "\n\n" + body;

    const mailto = "mailto:" + CONFIG.CONTACT_EMAIL +
      "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(body);

    // Mail links longer than a few thousand characters can be truncated by some apps.
    const longNote = mailto.length > 1900;

    setStatus("info", t("form.opened") + (sanitisedAny ? " " + t("form.sanitizedNote") : "") + (longNote ? " " + longNoteText() : ""));
    showFallback();

    // Hand off to the visitor's email application.
    window.location.href = mailto;
  });

  function longNoteText() {
    return currentLang === "bn"
      ? "বার্তাটি অনেক বড়; ইমেইল অ্যাপ কিছু অংশ কেটে ফেলতে পারে। তাহলে ‘বার্তা কপি করুন’ ব্যবহার করুন।"
      : "Your message is long, so some email apps may cut part of it. If that happens, use “Copy message”.";
  }

  function setStatus(type, text) {
    statusBox.className = "form-status is-visible form-status--" + type;
    statusBox.textContent = text;
    statusBox.setAttribute("role", type === "error" ? "alert" : "status");
  }

  function showFallback() {
    fallback.classList.add("is-visible");
    const note = document.getElementById("fallback-note");
    if (note) note.textContent = t("form.notOpened");
  }

  copyEmailBtn.addEventListener("click", async () => {
    const ok = await copyText(CONFIG.CONTACT_EMAIL);
    copyLive.textContent = ok ? t("form.copied") : t("form.copyFailed");
  });
  copyMessageBtn.addEventListener("click", async () => {
    const text = lastMessageText || buildDraftText(fields);
    const ok = await copyText(text);
    copyLive.textContent = ok ? t("form.copied") : t("form.copyFailed");
  });
}

/** Draft text used when copying before the form has been submitted. */
function buildDraftText(fields) {
  const name = sanitize(fields.name.value, FIELD_LIMITS.name, true).value;
  const email = sanitize(fields.email.value, 200, true).value;
  const subject = sanitize(fields.subject.value, FIELD_LIMITS.subject, true).value;
  const message = sanitize(fields.message.value, FIELD_LIMITS.message, false).value;
  return "To: " + CONFIG.CONTACT_EMAIL + "\nSubject: [Website contact] " + subject +
    "\n\nName: " + name + "\nEmail: " + email + "\n\n" + message;
}

/* ==========================================================================
   8. Utilities
   ========================================================================== */

/** Copy text with the async Clipboard API, falling back to a hidden textarea. */
async function copyText(text) {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch (e) { /* fall through to the legacy method */ }
  try {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand && document.execCommand("copy");
    document.body.removeChild(ta);
    return !!ok;
  } catch (e) {
    return false;
  }
}

/** Escape text before inserting it into innerHTML. */
function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

/** Render configured social links; hide the section entirely when none are verified. */
function setMailtoLinks() {
  document.querySelectorAll("[data-contact-mailto]").forEach((a) => {
    a.setAttribute("href", "mailto:" + CONFIG.CONTACT_EMAIL);
    a.textContent = CONFIG.CONTACT_EMAIL;
  });
}

function renderSocialLinks() {
  const links = (CONFIG.SOCIAL_LINKS || []).filter((l) => /^https:\/\//.test(l.url));
  document.querySelectorAll("[data-social-section]").forEach((sec) => {
    sec.classList.toggle("is-hidden", links.length === 0);
  });
  document.querySelectorAll("[data-social-list]").forEach((list) => {
    list.innerHTML = "";
    links.forEach((l) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = l.url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.textContent = l.label;
      li.appendChild(a);
      list.appendChild(li);
    });
  });
}

/** Feature detection summary; the site degrades gracefully where a feature is missing. */
const FEATURES = {
  clipboard: !!(navigator.clipboard && window.isSecureContext),
  intersectionObserver: canObserve,
  localStorage: (function () { try { return !!window.localStorage; } catch (e) { return false; } })()
};

/* ==========================================================================
   Boot
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  document.documentElement.classList.add("js");
  initNavigation();
  renderSocialLinks();
  setMailtoLinks();
  renderVideos();
  renderPress();
  initGallery();
  initContactForm();
  initLanguage(); // last: applies translations to everything rendered above
});
