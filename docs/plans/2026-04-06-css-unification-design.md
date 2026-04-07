# CSS Unification Design

## Goal
Consolidate 4 CSS files + inline styles into one external `assets/css/styles.css`. Reduce size from ~927KB to ~150-250KB while maintaining pixel-perfect visual fidelity. Make the CSS maintainable for hand-editing.

## Approach: PurgeCSS + Manual Pass

### Output
One file: `assets/css/styles.css`

Contents in order:
1. Typekit `@font-face` declarations (extracted from inline `<style>` blocks)
2. PurgeCSS-purged `site.css` (only used selectors)
3. `custom.css` contents appended
4. `spacer.css` + `code.css` contents appended
5. Utility classes (`.pre-wrap`, `.img-cover`, `.block`)

### PurgeCSS Configuration
- Content sources: `index.html`, `about.html`, `translations.html`, `thank-you.html`
- CSS sources: `site.css`, `custom.css`, `spacer.css`, `code.css`
- Safelist: `loaded`, `wf-loading`, `wf-active`, `wf-inactive`

### Manual Cleanup Pass (post-PurgeCSS)
Remove:
- `-moz-`, `-o-`, `-ms-` vendor prefixes (keep `-webkit-`)
- IE hacks (`*property`, `_property`, `\9`)
- Empty rules
- Duplicate properties within same rule (keep last)
- Unused `@keyframes`
- Remaining Squarespace feature selectors (blog, cart, product, events, newsletter)

### HTML Changes (all 4 pages)
- Replace 4 CSS `<link>` tags with single `<link rel="stylesheet" href="assets/css/styles.css">`
- Remove Typekit `@font-face` inline `<style>` block (~5.8KB per page)
- Remove Facebook SDK inline `<style>` block (~5.4KB per page)
- Keep font-loading keyframe `<style>` block (111 bytes)
- Replace `style="white-space:pre-wrap;"` → class `pre-wrap` (~62 instances)
- Replace `style="display:block;object-fit: cover;..."` → class `img-cover` (~16 instances)
- Replace `style="display:block"` → class `block` (~2 instances)
- Keep unique per-element `style="..."` attributes (max-widths, padding, positioning)

### Deleted Files
- `assets/css/site.css`
- `assets/css/custom.css`
- `assets/css/spacer.css`
- `assets/css/code.css`

### Verification
- Visual QA each page at 1440px against `/tmp/cc-screenshots/`
- Verify images, nav links, font rendering
