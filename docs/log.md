# Project Log

## 2026-04-15 - Add Google Analytics (GA4)

**What Changed:**
- Added GA4 `gtag.js` snippet (Measurement ID `G-XKBE3WTDBD`) to the `<head>` of all 4 pages.
- Chose direct gtag.js over Google Tag Manager: static archive with no marketing/conversion tags to manage, so the GTM container adds complexity without benefit.

**Why:**
- User wants pageview analytics for the archive.

**Files Modified:**
- `index.html`
- `about.html`
- `translations.html`
- `thank-you.html`

---

## 2026-04-15 - Kill blue flash on page navigation

**What Changed:**
- `assets/css/mobile-menu.css`: overrode the body background to white. Squarespace's base stylesheet sets `body.tweak-site-width-option-full-background.tweak-footer-show:not(.tweak-site-border-show)` to `#78d8f2` (cyan). The body has all three matching classes, so during cross-page navigation the blue bg flashed through between the old page unloading and the new page's sections painting.

**Why:**
- User reported a blink of blue → white → content when clicking menu items that link to another HTML page. Root cause was the cyan body background; now it's white, matching the content sections, so the transition to the new page is seamless.

**Files Modified:**
- `assets/css/mobile-menu.css`

---

## 2026-04-15 - Smooth anchor scrolling + remove menu-click flicker

**What Changed:**
- `assets/css/mobile-menu.css`: added `html { scroll-behavior: smooth }` (with a `prefers-reduced-motion` fallback to `auto`) so clicking any in-page anchor link glides to the section instead of snapping. Added `-webkit-tap-highlight-color: transparent` on `.Mobile-overlay-nav-item`, `.Header-nav-item`, `.Index-nav-item`, and `.Mobile-bar-menu` to eliminate the iOS/Android blue tap flash. Suppressed the mouse-click focus ring via `:focus:not(:focus-visible)` (keyboard focus ring still shown for a11y).

**Why:**
- Tapping a mobile menu item produced a blue → white flash, then an instant jump to the anchor. The blue was the default `-webkit-tap-highlight-color`; the jump was the browser's default anchor navigation. On desktop the perceived flicker was the click-induced focus outline plus the instant scroll. Now: no tap-highlight, keyboard-only focus ring, and smooth-scroll to anchor while the menu fades out.

**Files Modified:**
- `assets/css/mobile-menu.css`

---

## 2026-04-15 - Parallel soft fade for mobile menu items

**What Changed:**
- `assets/css/mobile-menu.css`: replaced the per-item stagger on `.Mobile-overlay-nav-item` with a single parallel fade — all items fade in together over 320ms with a soft `cubic-bezier(0.33, 0, 0.2, 1)` ease, starting 280ms after open (so it begins just as the parent slide settles).

**Why:**
- Requested a softer, quicker, parallel fade in place of the stagger.

**Files Modified:**
- `assets/css/mobile-menu.css`

---

## 2026-04-15 - Simplify mobile menu item stagger

**What Changed:**
- `assets/css/mobile-menu.css`: removed the 8px Y-translate from the nav-item stagger (now pure opacity fade). Pushed start delay to 300ms so items begin appearing only after the parent menu's 320ms horizontal slide is done — previously they faded in while the parent was still sliding, which made them look like they were drifting sideways a few pixels.

**Why:**
- Items appeared to slide horizontally, but that was actually the parent container still sliding in under them during their fade. Cleanest fix is a simple fade that starts after the parent settles.

**Files Modified:**
- `assets/css/mobile-menu.css`

---

## 2026-04-15 - Smooth mobile menu open/close animation

**What Changed:**
- `assets/css/mobile-menu.css`: overrode Squarespace's overlay timing. Squarespace base set `.Mobile-overlay` to `left: -99999px` with `transition: left 0s 525ms`, causing a ~500ms delay on open (container snaps into view after the slide has already finished off-screen) and a too-abrupt close. Now the overlay stays at `left: 0` and fades via `opacity` + `pointer-events`, and `.Mobile-overlay-menu` slides via `transform` with `cubic-bezier(0.22, 1, 0.36, 1)` easing (300ms open, 220ms close — exit slightly faster per motion-design guidance). Killed the leftover `anim-opacity-99` keyframe animation on `.Mobile-overlay`. Added a staggered fade/rise of the nav items on open (180–340ms delays) for polish. Added `prefers-reduced-motion` fallback that collapses all durations/delays.

**Why:**
- Open felt laggy (menu appeared ~500ms after tap with no visible slide) and close disappeared abruptly. The root cause was Squarespace's `transition: left 0s 525ms` rule delaying the container's visibility while the menu slid off-screen.

**Files Modified:**
- `assets/css/mobile-menu.css`

---

## 2026-04-15 - Fix mobile menu close jitter

**What Changed:**
- `assets/css/mobile-menu.css`: moved `.Mobile-overlay-menu` `width: 100%` and `background-color`, plus `.Mobile-overlay` `background-color`, out of the `body.mobile-menu-open` selector so they apply at all times. Only `left: 0` on `.Mobile-overlay` and `transform: translate3d(0,0,0)` on `.Mobile-overlay-menu` now toggle with the open class.

**Why:**
- On close, those width/background properties were reverting instantly (un-transitioned) while the transform slid out — which reflowed the centered nav text a few pixels before the slide, producing a visible jitter.

**Files Modified:**
- `assets/css/mobile-menu.css`

---

## 2026-04-15 - Mobile hero spacing on index.html

**What Changed:**
- Added a `@media (max-width: 959px)` block to `assets/css/mobile-menu.css` that (a) adds `margin-top: 56px !important` to the H1 block `#block-1b52ceadd016ab026329` ("A framework to help you build meaningful communities.") — padding-top was swallowed by Squarespace block rules — and (b) hides the spacer block `#block-f6cbb0326d5ab68599e0` immediately underneath it.

**Why:**
- Tighten the mobile hero layout: give the H1 room to breathe at the top, drop the redundant Squarespace spacer.

**Files Modified:**
- `assets/css/mobile-menu.css`

---

## 2026-04-15 - Mobile header: keep bar above overlay, drop extra padding

**What Changed:**
- `assets/css/mobile-menu.css`: raised `.Mobile-bar--top` to `z-index: 2000 !important` (with explicit `background: #ffffff !important`) and hamburger to `z-index: 2001` so the bar — and the hamburger's × morph — stays visible above the opened overlay. Removed `padding: 80px 24px 40px` from `.Mobile-overlay-menu` per request.

**Why:**
- When open, the overlay's white background was visually covering the bar, so the morphed × wasn't visible. Raising the bar's stacking context keeps it in front.

**Files Modified:**
- `assets/css/mobile-menu.css`

---

## 2026-04-15 - Mobile header: morph hamburger into × (zero position jump)

**What Changed:**
- `assets/css/mobile-menu.css`: removed separate `.Mobile-overlay-close` button (hidden via `display:none !important`). Hamburger button now morphs into an × via two `::before`/`::after` pseudo-elements that animate from 3-bar state (top + box-shadow middle + bottom) into a rotated × when `body.mobile-menu-open` is set. Bar is raised to `z-index: 1020` so it stays above the overlay (z-index 1010) and clickable when open.
- `assets/js/mobile-menu.js`: changed hamburger handler from `open` to `toggle`, removed close-button listener.

**Why:**
- Previous `position:fixed` close button escaped its offscreen parent (always visible) AND didn't line up with the hamburger because the logo image makes `.Mobile-bar--top` taller than 44px, so the hamburger is vertically centered, not at `top:8px`. Morphing the same element guarantees identical position.

**Files Modified:**
- `assets/css/mobile-menu.css`
- `assets/js/mobile-menu.js`

---

## 2026-04-15 - Mobile header: align close button, fix menu item centering

**What Changed:**
- In `assets/css/mobile-menu.css`:
  - Changed `.Mobile-overlay-close` from `position: absolute; top: 12px; right: 12px` to `position: fixed; top: 8px; right: 12px` (with media-query bumps to 28/40/56px at 640/768/960px) so the × sits exactly where the hamburger was — no offset jump when toggling.
  - Changed `.Mobile-overlay-menu-main` to `flex-direction: column` — the container has two `<nav>` siblings (primary + empty secondary) that were being laid out side-by-side in the default flex row, pushing the primary nav off-center. Stacked column + `text-align: center` now centers menu items horizontally.

**Why:**
- Close button was 4px lower than hamburger, causing a visible jump on toggle.
- Menu items appeared left-of-center because two nav elements were sharing horizontal row space.

**Files Modified:**
- `assets/css/mobile-menu.css`

---

## 2026-04-15 - Mobile header: swap logo/hamburger alignment

**What Changed:**
- In `assets/css/mobile-menu.css`, used flex `order` + `justify-content` on the three `[data-nc-container]` columns to put the logo in the left slot and the hamburger in the right slot (no HTML changes).

**Why:**
- Requested layout: logo left-aligned, hamburger right-aligned.

**Files Modified:**
- `assets/css/mobile-menu.css`

---

## 2026-04-15 - Mobile header: working hamburger menu, removed invisible search button

**What Changed:**
- Created `assets/css/mobile-menu.css` — CSS-drawn hamburger (3 bars) and close (×) icons (original Squarespace `ui-icons.svg` sprite is missing/404, so button SVGs were rendering blank). Fullscreen white overlay triggered by `body.mobile-menu-open`; nav items styled with katarine-web at 28px, coral (#ff6d57) hover.
- Created `assets/js/mobile-menu.js` — toggles `body.mobile-menu-open` on hamburger click; closes on ×, backdrop, nav link click, or Escape key.
- Linked both files in the `<head>` of all 4 pages.
- Removed the `Mobile-bar-search` anchor (`top-right` container) from all 4 pages — it was invisible (broken SVG) but still clickable and had no functionality.

**Why:**
- The mobile header had no working hamburger menu (Squarespace JS controllers no longer ship with the static archive) and a ghost/invisible search button in the top-right corner.

**Files Modified:**
- `assets/css/mobile-menu.css` (new)
- `assets/js/mobile-menu.js` (new)
- `index.html`
- `translations.html`
- `about.html`
- `thank-you.html`

---

## 2026-04-07 - CSS Unification Complete

**What Changed:**
- Consolidated 4 CSS files (site.css 926KB, custom.css 1.2KB, spacer.css 107B, code.css 115B) into single `assets/css/styles.css` (60KB)
- PurgeCSS removed unused selectors: 926KB → 61KB (93% reduction)
- Manual cleanup removed vendor prefixes (-moz-, -o-, -ms-), IE hacks, 11 unused @keyframes: 61KB → 53KB
- Extracted Typekit @font-face declarations from inline `<style>` blocks into external CSS
- Removed Facebook SDK inline `<style>` blocks (dead code, ~5.4KB per page)
- Replaced 217 inline `style="..."` attributes with utility classes (.pre-wrap, .img-cover, .block)
- Updated all 4 HTML files to reference single `assets/css/styles.css`
- Visual QA passed on all 4 pages — zero regressions

**Result:**
- CSS: 927KB total → 60KB single file (93.5% reduction)
- HTML: ~45KB saved across 4 files (inline style blocks + attributes removed)

**Files Created:**
- `assets/css/styles.css` — unified stylesheet
- `assets/css/site-original.css` — backup of original
- `assets/css/custom-original.css` — backup of original
- `purgecss.config.js` — PurgeCSS configuration

**Files Deleted:**
- `assets/css/site.css`, `assets/css/custom.css`, `assets/css/spacer.css`, `assets/css/code.css`

**Files Modified:**
- `index.html`, `about.html`, `translations.html`, `thank-you.html`

---

## 2026-04-03 - Tasks 5 & 6: Assemble unified CSS file and update HTML references

**What Changed:**
- Concatenated 6 CSS sources (typekit-fonts, site, custom, spacer, code, utility-classes) into single `assets/css/styles.css` (60,286 bytes)
- Deleted individual CSS files: `site.css`, `custom.css`, `spacer.css`, `code.css`
- Preserved backups: `site-original.css` and `custom-original.css`
- Updated all 4 HTML files (index.html, about.html, translations.html, thank-you.html) to use single `<link rel="stylesheet" href="assets/css/styles.css">` reference
- Removed all `data-block-css` attributes referencing old individual CSS files from div elements across all HTML files

**Why:**
- CSS unification plan: consolidate 4 separate CSS files plus extracted font/utility CSS into one file to reduce HTTP requests and simplify maintenance

**Files Modified:**
- `assets/css/styles.css` (created - unified CSS)
- `assets/css/site.css` (deleted)
- `assets/css/custom.css` (deleted)
- `assets/css/spacer.css` (deleted)
- `assets/css/code.css` (deleted)
- `index.html` - replaced 4 CSS link tags with 1, removed data-block-css attributes
- `about.html` - replaced 3 CSS link tags with 1, removed data-block-css attributes
- `translations.html` - replaced 4 CSS link tags with 1, removed data-block-css attributes
- `thank-you.html` - replaced 4 CSS link tags with 1, removed data-block-css attributes

---

## 2026-04-03 - Tasks 3 & 4: Extract inline style blocks and replace inline styles with utility classes

**What Changed:**

Task 3 - Inline style block cleanup:
- Extracted Typekit `@font-face` declarations (5,796 chars) from inline `<style>` blocks to `/tmp/typekit-fonts.css`
- Removed Typekit `@font-face` inline `<style>` block from all 4 HTML files (identical on each)
- Removed Facebook SDK inline `<style>` block (dead code) from all 4 HTML files
- Each HTML file now has exactly 1 remaining `<style>` block (font-loading keyframe)

Task 4 - Utility class replacement:
- Created `/tmp/utility-classes.css` with 3 utility classes: `.pre-wrap`, `.img-cover`, `.block`
- Replaced `style="white-space:pre-wrap;"` with class `pre-wrap` (79 replacements across all files)
- Replaced `style="display:block;object-fit: cover; width: 100%; height: 100%; object-position: 50% 50%"` with class `img-cover` (45 replacements)
- Replaced `style="display:block"` with class `block` (8 replacements)
- Total: 132 inline style attributes replaced with CSS classes
- Properly appended classes to elements with existing `class` attributes

**Why:**
- CSS unification plan: consolidating scattered inline styles into maintainable external CSS
- Removing dead Facebook SDK styles (widgets were previously stripped)
- Extracting Typekit fonts for inclusion in unified stylesheet

**Files Modified:**
- `index.html` - Removed 2 inline style blocks, replaced 80 inline style attributes
- `about.html` - Removed 2 inline style blocks, replaced 7 inline style attributes
- `translations.html` - Removed 2 inline style blocks, replaced 120 inline style attributes (multi-per-line)
- `thank-you.html` - Removed 2 inline style blocks, replaced 10 inline style attributes
- `/tmp/typekit-fonts.css` - Created (extracted Typekit font-face declarations)
- `/tmp/utility-classes.css` - Created (3 utility classes)

---

## 2026-04-03 - Task 2: Manual cleanup of purged CSS (vendor prefixes, IE hacks, unused keyframes)

**What Changed:**
- Removed all `-moz-` prefixed properties (e.g. `-moz-transition`, `-moz-transform`)
- Removed all `-o-` prefixed properties (e.g. `-o-transition`)
- Removed `-ms-` prefixed properties except `-ms-transform` (kept for older mobile)
- Removed IE hacks: properties starting with `*` or `_`, and `\9` suffix hacks
- Removed 11 unused `@keyframes` blocks (bounceIn, bounceOut, sqs-spin, show-confirmation, show-confirmation-mobile, loading-indicator-rotate-spinner, loading-indicator-dash, indicator-loading, anim-opacity-half)
- Kept 2 referenced `@keyframes`: `anim-opacity-full`, `anim-opacity-99`
- Removed empty rules left behind after property removal
- Collapsed multiple blank lines to maximum 2
- Preserved all `-webkit-` prefixes (needed for iOS Safari)

**Result:**
- Before: 61,527 bytes (60KB)
- After: 52,864 bytes (52KB) -- 14.1% reduction

**Why:**
- Post-PurgeCSS cleanup pass. Vendor prefixes for Firefox, Opera, and IE are unnecessary for a static archive targeting modern browsers. IE-specific hacks serve no purpose. Unused keyframes add dead weight.

**Files Modified:**
- `assets/css/site.css` - Manual cleanup from 61KB to 52KB

---

## 2026-04-03 - Task 1: PurgeCSS to strip unused selectors from site.css

**What Changed:**
- Backed up `assets/css/site.css` (926KB) to `assets/css/site-original.css`
- Backed up `assets/css/custom.css` (1.2KB) to `assets/css/custom-original.css`
- Created `purgecss.config.js` config targeting all 4 HTML pages with safelist for font-loading classes
- Ran PurgeCSS v8.0.0 to remove unused selectors

**Result:**
- Before: 925,921 bytes (926KB)
- After: 61,527 bytes (60KB) -- 93% reduction

**Why:**
- The full Squarespace theme CSS contained thousands of selectors for features not used by these 4 archive pages. Purging unused selectors is the first step toward a unified, maintainable stylesheet.

**Files Modified:**
- `assets/css/site.css` - Purged from 926KB to 60KB

**Files Created:**
- `assets/css/site-original.css` - Backup of original
- `assets/css/custom-original.css` - Backup of original
- `purgecss.config.js` - PurgeCSS configuration

---

## 2026-04-04 - Built v2 archive pages using Playwright rendered DOM

**What Changed:**
- Captured fully rendered DOM from all 4 pages using Playwright (headless Chromium)
- Downloaded Squarespace CSS files locally: site.css (925KB), custom.css, spacer.css, code.css
- Downloaded 6 additional images missed in v1 (Pixie-Cigar.jpg, Tanja-Laub.jpg, Community-Canvas-Guidebook-Cover.png, Community-Canvas-Summary-Cover.png, Italian-Community-Canvas-Summary.png, Julie-Petignat.jpg)
- Processed HTML: stripped all 22 script tags, removed analytics/tracking, replaced CDN image URLs with local paths, replaced CDN CSS URLs with local paths, fixed protocol-relative URLs, removed data-block-scripts attributes, removed preconnect hints, stripped srcset attributes, removed loading="lazy", added Typekit font embed, fixed all internal nav links to use .html extensions
- Visual QA passed on all 4 pages — layout, colors, images, and content match original screenshots

**Why:**
- v1 rebuild wasn't visually accurate enough. v2 uses the actual Squarespace-rendered HTML + CSS for pixel-perfect fidelity.

**Files Created:**
- `index2.html` - Homepage (115KB)
- `about2.html` - About page (61KB)
- `translations2.html` - Translations page (164KB)
- `thank-you2.html` - Thank You page (44KB)
- `assets/css/site.css` - Squarespace theme CSS (926KB)
- `assets/css/custom.css` - Custom overrides (1.2KB)
- `assets/css/spacer.css` - Component CSS
- `assets/css/code.css` - Component CSS
- 6 new images in `assets/images/`

---

## 2026-04-03 - Fixed navigation links across all pages

**What Changed:**
- Updated all internal navigation links from absolute paths (`/translations`, `/about`, `/thank-you`) to relative paths (`translations.html`, `about.html`, `thank-you.html`)
- Fixed logo links from `/` to `index.html`
- Fixed "Get Started" links from other pages to `index.html#get-started`
- Fixed `/improve` link on translations page to `index.html`
- Fixed `/#get-started` and `/#get-in-touch` links on about page to proper relative paths

**Why:**
- Absolute paths break when serving as static files (file:// protocol). Static archive needs relative `.html` paths for navigation to work both locally and on GitHub Pages.

**Files Modified:**
- `index.html`
- `translations.html`
- `about.html`
- `thank-you.html`

---

## 2026-04-03 - Built Thank You page (thank-you.html) for static archive

**What Changed:**
- Created `thank-you.html` with complete static archive of the Thank You page
- Blue/teal (#4daac4) background section with white text containing all acknowledgments
- Full unabbreviated list of all Steward names with proper diacritical characters (Syrjala, Sahlmuller, Fernandez, Tolle, Joao, etc.)
- Five bullet-point categories: 2.0 team, v1 contributors, translators, Kauffman Foundation, Stewards
- Shared header/footer matching all other archive pages
- Mobile hamburger menu toggle

**Why:**
- Archiving the community-canvas.org Thank You page as a static HTML file before site goes offline

**Files Modified:**
- `thank-you.html` - New file created

---

## 2026-04-03 - Built Translations page (translations.html) for static archive

**What Changed:**
- Created `translations.html` with complete static archive of the Translations page
- Includes all 14 language sections (Arabic, Catalan, Chinese, Czech, Farsi, Finnish, French, German, Hebrew, Italian, Portuguese Brazil, Russian, Spanish, Ukrainian) with anchor IDs
- Each language section has translator credits, document links (PDFs and Google Docs), and cover images where available
- Includes "The Translators" section with 9 translator bios (photos, flag emojis, biographical text, contact info)
- Uses shared CSS from `assets/css/style.css` with minimal page-specific inline styles
- Header, footer, mobile hamburger toggle, and responsive design match site-wide patterns
- All links preserved: GitHub PDF URLs, Google Doc URLs, mailto links, LinkedIn profiles, personal websites

**Why:**
- Building static HTML archive of community-canvas.org, translations page is one of the four main pages

**Files Modified:**
- `translations.html` - New file created
- `docs/log.md` - Added this log entry

---

## 2026-04-03 - Built About page (about.html) for static archive

**What Changed:**
- Created complete About page as static HTML5, matching the original Squarespace design from reference screenshot
- Includes all sections: "What is the Community Canvas?", "What do we mean by community?", "Why did we create it?", "How we created the Canvas", "A Sincere Thank You", and "Who Created the Canvas?"
- Uses 7/5 two-column layout matching original Squarespace grid with illustrations alongside text
- All text content extracted verbatim from the original raw HTML source
- Includes shared header/nav, footer, Google Fonts, Font Awesome, meta tags, favicon, and mobile hamburger toggle
- Page-specific CSS for the two-column about layout embedded in a style block

**Why:**
- Building the static archive of community-canvas.org; the About page explains the framework's purpose and creation

**Files Modified:**
- `about.html` - Created About page

---

## 2026-04-03 - Built homepage (index.html) for static archive

**What Changed:**
- Created complete homepage as static HTML5, matching the original Squarespace design from reference screenshots
- Includes all sections: header with nav, hero with background image, Moving Forward & Community Canvas overview, Get Started documents (Summary, Guidebook, MVC, Worksheets), Translations with language links, About the Creators with bios, Thank You acknowledgments, and footer
- Uses shared CSS from assets/css/style.css with semantic HTML5 markup
- Includes Google Fonts, Font Awesome, meta/OG tags, favicon, and mobile hamburger menu toggle

**Why:**
- Building the static archive of community-canvas.org; the homepage is the primary page

**Files Modified:**
- `index.html` - Created homepage

---

## 2026-04-03 - Comprehensive HTML page analysis for static archive

**What Changed:**
- Created exhaustive page-analysis.md documenting all content, structure, images, links, fonts, and configuration from the 4 downloaded HTML pages (home, thank-you, translations, about)
- Extracted every piece of verbatim text, all image URLs mapped to local filenames, all external/internal links, navigation structure, section layouts, Squarespace template settings, and font references

**Why:**
- Needed complete content extraction from the Squarespace source HTML to serve as the reference document for building the static archive pages

**Files Modified:**
- `docs/page-analysis.md` - Created comprehensive analysis document
- `docs/log.md` - Created log file

---
