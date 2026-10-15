# Banglar Krrish — Official Personal-Brand Website

A bilingual (English / বাংলা) static website for **Mohammad Al Mamun**, publicly known as **Banglar Krrish (বাংলার কৃষ)**, a performer from Sirajganj, Bangladesh.

It is plain HTML5, CSS3 and vanilla JavaScript. There is no build step, no backend, no paid service and no analytics. It is designed for free hosting on **GitHub Pages**.

---

## Contents

- [Project structure](#project-structure)
- [Quick start (local preview)](#quick-start-local-preview)
- [Set the contact email](#set-the-contact-email)
- [Add official social-media links](#add-official-social-media-links)
- [Edit text and translations](#edit-text-and-translations)
- [Add or change videos](#add-or-change-videos)
- [Add or change press articles](#add-or-change-press-articles)
- [Replace images](#replace-images)
- [Publish on GitHub Pages](#publish-on-github-pages)
- [Use a custom domain](#use-a-custom-domain)
- [Verification and maintenance checklist](#verification-and-maintenance-checklist)
- [Known limitations](#known-limitations)

---

## Project structure

```
index.html          Home
about.html          Biography
videos.html         Videos (nine YouTube videos, played on the page)
media.html          Press & Media (eight articles)
gallery.html        Gallery (AI-generated illustrations + lightbox)
contact.html        Contact (mailto-based form)
privacy.html        Privacy Policy (English)
terms.html          Terms of Use (English)
404.html            Not-found page
assets/
  css/style.css     All shared styles
  js/translations.js  All bilingual text, video list, press list
  js/main.js        All behaviour (config, language, videos, lightbox, form)
  images/           Optimised WebP artwork + favicon.svg
  fonts/            Self-hosted Inter and Hind Siliguri (no third-party font requests)
robots.txt          Crawler rules and sitemap location
sitemap.xml         Sitemap for the eight public pages
.nojekyll           Tells GitHub Pages to serve files as-is
README.md           This file
```

All links and asset paths are **relative**, so the site works at `https://<user>.github.io/<repo>/` and at a custom domain root without changes.

---

## Quick start (local preview)

No installation is needed. Any static server works. From the project folder:

```bash
# Python 3
python3 -m http.server 8080
# then open http://localhost:8080
```

Opening `index.html` directly from disk also works, but a local server is recommended so the language preference and all features behave as they do online.

---

## Set the contact email

The contact email is set in **one place**: the `CONFIG` object at the top of `assets/js/main.js`.

```js
const CONFIG = {
  CONTACT_EMAIL: "contact.bdkrrish@gmail.com",   // <- change this
  SOCIAL_LINKS: []
};
```

The contact form, the footer email link and the recipient box on the contact page all read this value. Do not paste the address into the HTML files.

> **How the form works.** GitHub Pages cannot receive form submissions. When a visitor presses the button, their own email application opens with the recipient, subject and message filled in. The visitor must press send there. The site never claims that a message was delivered. If the email app does not open, the page shows the address and offers *Copy email address* and *Copy message* buttons.

---

## Add official social-media links

Only add accounts that you have verified as official. Add them to `SOCIAL_LINKS` in `assets/js/main.js`:

```js
SOCIAL_LINKS: [
  { label: "Facebook", url: "https://www.facebook.com/your-official-page" },
  { label: "YouTube",  url: "https://www.youtube.com/@your-channel" }
]
```

Only `https://` links are rendered. While the list is empty, the social-media section on the home page is hidden automatically.

---

## Edit text and translations

All visible text is in `assets/js/translations.js`, under `window.I18N`:

- `en` — English strings
- `bn` — Bengali strings (Unicode)

Each element in the HTML that should change with the language carries a key, for example:

```html
<h1 data-i18n="home.heroTitle">A Story of Dreams, Courage &amp; Determination</h1>
```

To change that heading, edit `home.heroTitle` in both `en` and `bn` in `translations.js`. The HTML text is a fallback for search engines and for visitors without JavaScript.

Attribute text (alt text, placeholders, labels) uses `data-i18n-attr`, for example `data-i18n-attr="placeholder:form.name"`.

**Navigation labels are intentionally not translated.** They are always English: Home, About, Videos, Press & Media, Gallery, Contact.

The selected language is saved in the browser (`localStorage`). If storage is unavailable, the site still works and defaults to English.

Page titles and descriptions are set from `meta.<page>.title` and `meta.<page>.desc` in the same file.

---

## Add or change videos

Videos are listed in `window.SITE_VIDEOS` in `assets/js/translations.js`:

```js
{
  id: "7HwImROOLgg",            // the YouTube video ID (the part after youtu.be/)
  title: "…original title…",    // as published on YouTube
  channel: "ATN Bangla News",
  uploaded: "2026-10-09",       // from YouTube
  category: "News & Politics",  // YouTube's category
  fallback: 1                   // local artwork to show first: 1, 2 or 3
}
```

Each card:

1. shows a local AI-generated image at once, so the box is never empty;
2. tries `maxresdefault.jpg`, then `hqdefault.jpg` from YouTube's image server, and keeps the local artwork if both fail (no spinner, no endless retries);
3. creates the player only when the visitor presses play. The player uses `youtube-nocookie.com` and appears in the same page. The video does not open a new tab;
4. shows a clear message with a *Watch on YouTube* link if the owner has blocked embedding.

Thumbnails are loaded only near the viewport, and no YouTube scripts load until someone presses play.

---

## Add or change press articles

Articles are listed in `window.SITE_PRESS` in `assets/js/translations.js`:

```js
{
  publisher: { en: "Talash BD", bn: "তালাশ বিডি" },
  url: "https://…",
  title: "…headline as published…",   // or null if it could not be verified
  date: "2026-10-14",                  // ISO date from the article, or null
  summary: { en: "…", bn: "…" }       // your own short description
}
```

If `title` is `null`, the card says the title is not verified and links to the original. If `date` is `null`, the card says the date is not verified. Do not invent metadata.

---

## Replace images

The artwork lives in `assets/images/` as optimised WebP files, plus `favicon.svg`.

| File | Used for |
|---|---|
| `hero.webp` | Home hero |
| `about.webp` | Home and biography illustration |
| `parkour-01.webp`, `parkour-02.webp` | Gallery; biography-page background |
| `gallery-01.webp` … `gallery-04.webp` | Gallery |
| `video-fallback-01.webp` … `03.webp` | Video and press card artwork (fallback) |
| `og-image.webp` | Social-sharing preview (1200 × 630) |
| `favicon.svg` | Browser tab icon |

Replace any file with a new file of the same name, or change the `src` in the HTML and `FALLBACK_THUMBS` in `translations.js`.

**Authenticity rule.** All artwork is AI-generated, fictional and illustrative. Do not replace it with an image that falsely presents the subject as photographed at a real event, and do not use a face that is presented as the real person unless the owner has supplied and approved authentic photographs with rights.

---

## Publish on GitHub Pages

1. Push this repository to GitHub. The default branch is `main`, and the site files sit at the repository root.
2. On GitHub, open **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
4. Set **Branch** to `main` and the folder to **/ (root)**, then press **Save**.
5. Wait one to two minutes. The site will be available at:

   `https://<your-github-username>/banglar-krish/`

   For the repository `Atikulislamx/banglar-krish` that is `https://atikulislamx.github.io/banglar-krish/`.

Because all paths are relative, nothing else needs to change for a repository subpath.

> The `.nojekyll` file tells GitHub Pages to serve the files exactly as written.

---

## Use a custom domain

1. Add your domain in **Settings → Pages → Custom domain** and set the DNS records GitHub asks for.
2. Create a file named `CNAME` in the repository root containing only your domain, for example `www.example.com`.
3. Update the absolute URLs that are used for search and social sharing. They currently point to `https://atikulislamx.github.io/banglar-krish/`. Replace that prefix everywhere it appears:
   - `<link rel="canonical">`, `og:url` and `og:image` in each HTML page
   - `sitemap.xml`
   - the `Sitemap:` line in `robots.txt`

   A text search for `atikulislamx.github.io/banglar-krish` finds them all.

---

## Verification and maintenance checklist

Before going live, confirm these owner-side items:

- [ ] **Contact email.** `CONFIG.CONTACT_EMAIL` in `assets/js/main.js` is the address you want to receive enquiries. It is set to the address given in the brief. Change it if needed.
- [ ] **Social links.** Add only verified official accounts to `SOCIAL_LINKS`.
- [ ] **Ei Samay article.** The headline and date could not be read automatically. Confirm them, then update `title` and `date` in `SITE_PRESS`.
- [ ] **Sangbad Pratidin date.** Not shown on the page that was checked. Add it if you can verify it.
- [ ] **Video embedding.** Some YouTube owners block embedding. The site handles this gracefully, but you should check each of the nine videos once in a browser.
- [ ] **Legal pages.** The Privacy Policy and Terms of Use are written for this site, but they are not legal advice. Have them reviewed if you need legal certainty. The governing-law clause (Bangladesh) is a placeholder choice to confirm.
- [ ] **Biography facts.** Every statement is attributed to reports or to the owner's account. Reports differ on some details (for example, years of practice). Update the biography if the owner gives you verified corrections.
- [ ] **Links.** Check the press and video links periodically; third-party pages can move or be removed.

---

## Known limitations

- **No server-side form.** Messages are sent by the visitor's own email app. Delivery cannot be confirmed by this site.
- **Video embedding is controlled by YouTube.** A video may refuse to play here; the card then explains this and links to YouTube.
- **Thumbnail fallbacks are local artwork**, not the real YouTube thumbnails, whenever YouTube's image service is unavailable.
- **Language switching** covers the page content, forms, cards and footer. The Privacy Policy and Terms of Use are provided in English.
- **Browser support.** Designed for current evergreen browsers. Older browsers see the content without some enhancements.

---

## Credits and licences

- Fonts: [Inter](https://rsms.me/inter/) and [Hind Siliguri](https://fonts.google.com/specimen/Hind+Siliguri), self-hosted under the SIL Open Font License (licence texts are in `assets/fonts/`).
- Artwork: AI-generated illustrations created for this project. They depict fictional, masked or silhouetted performers and are not photographs.
- Video and press content belongs to the named channels and publishers. The site links to them and does not host their content.
