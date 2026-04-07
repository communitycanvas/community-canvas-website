# CSS Unification Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Consolidate 4 CSS files + inline styles into one external `assets/css/styles.css`, reducing ~927KB to ~150-250KB while preserving visual fidelity.

**Architecture:** Run PurgeCSS to strip unused selectors from the 926KB `site.css`, then do a manual cleanup pass to remove obsolete vendor prefixes and dead patterns. Extract inline `<style>` blocks (Typekit fonts, Facebook SDK remnants) into the external file or delete them. Replace repeated inline `style="..."` attributes with utility classes.

**Tech Stack:** PurgeCSS (via npx), Python 3 (for HTML processing), Playwright (for visual QA)

---

### Task 1: Run PurgeCSS to strip unused selectors

**Files:**
- Input: `assets/css/site.css`, `assets/css/custom.css`, `assets/css/spacer.css`, `assets/css/code.css`
- Input: `index.html`, `about.html`, `translations.html`, `thank-you.html`
- Create: `assets/css/purged-site.css` (intermediate)

**Step 1: Create PurgeCSS config**

Create `purgecss.config.js` in project root:

```js
module.exports = {
  content: ['index.html', 'about.html', 'translations.html', 'thank-you.html'],
  css: ['assets/css/site.css'],
  output: 'assets/css/',
  safelist: ['loaded', 'wf-loading', 'wf-active', 'wf-inactive'],
}
```

**Step 2: Run PurgeCSS**

Run: `npx purgecss --config purgecss.config.js`

Expected: `assets/css/site.css` is overwritten with purged version. Check the new file size — should be significantly smaller than 926KB.

**Step 3: Verify purge result**

Run: `wc -c assets/css/site.css`

Expected: Somewhere in the range of 150-300KB. If it's still >500KB, investigate — PurgeCSS may need the `defaultExtractor` option for Squarespace's class naming.

**Step 4: Back up originals first**

Before running PurgeCSS, copy originals:

Run:
```bash
cp assets/css/site.css assets/css/site-original.css
cp assets/css/custom.css assets/css/custom-original.css
```

NOTE: Do Step 4 BEFORE Steps 1-3.

---

### Task 2: Manual cleanup of purged CSS

**Files:**
- Modify: `assets/css/site.css` (the purged version from Task 1)

**Step 1: Write a Python cleanup script**

Create `/tmp/cleanup_css.py`:

```python
import re

with open('assets/css/site.css', 'r') as f:
    css = f.read()

original_size = len(css)

# 1. Remove -moz- prefixed properties (keep -webkit-)
css = re.sub(r'\s*-moz-[a-z-]+\s*:[^;]+;', '', css)

# 2. Remove -o- prefixed properties
css = re.sub(r'\s*-o-[a-z-]+\s*:[^;]+;', '', css)

# 3. Remove -ms- prefixed properties (keep -ms-transform for older mobile)
css = re.sub(r'\s*-ms-(?!transform)[a-z-]+\s*:[^;]+;', '', css)

# 4. Remove IE hacks: *property and _property
css = re.sub(r'\s*[*_][a-z-]+\s*:[^;]+;', '', css)

# 5. Remove \9 IE hacks
css = re.sub(r'\\9', '', css)

# 6. Remove empty rules (selector with no properties)
css = re.sub(r'[^{}]+\{\s*\}', '', css)

# 7. Remove unused @keyframes (check if animation-name is referenced)
keyframe_names = re.findall(r'@keyframes\s+([a-zA-Z0-9_-]+)', css)
for name in keyframe_names:
    # Check if the keyframe name is used outside its own @keyframes block
    usage = re.findall(r'animation(?:-name)?\s*:[^;]*' + re.escape(name), css)
    if not usage:
        css = re.sub(r'@keyframes\s+' + re.escape(name) + r'\s*\{[^}]*(?:\{[^}]*\}[^}]*)*\}', '', css)

# 8. Collapse multiple blank lines
css = re.sub(r'\n{3,}', '\n\n', css)

final_size = len(css)
print(f"Cleanup: {original_size:,} -> {final_size:,} bytes ({100 - 100*final_size//original_size}% reduction)")

with open('assets/css/site.css', 'w') as f:
    f.write(css)
```

**Step 2: Run the cleanup**

Run: `cd "/Users/trarara/Dropbox/+Work/Community Canvas Archive" && python3 /tmp/cleanup_css.py`

Expected: Further 10-30% reduction from the purged size.

---

### Task 3: Extract Typekit @font-face from inline styles

**Files:**
- Modify: `index.html`, `about.html`, `translations.html`, `thank-you.html`
- Create: `/tmp/typekit-fonts.css` (intermediate, will be merged into styles.css)

**Step 1: Extract the Typekit @font-face block**

The second inline `<style>` block in each HTML file contains ~5.8KB of `@font-face` declarations for `din-condensed-web`, `ff-meta-serif-web-pro`, `garamond-premier-pro`, `garamond-premier-pro-display`, `katarine-web`. Extract this from `index.html` (it's identical on all pages) and save to `/tmp/typekit-fonts.css`.

**Step 2: Remove inline Typekit block from all 4 HTML files**

Use Python/regex to find and remove the `<style>` block that contains `@font-face{font-family:garamond-premier-pro` (this uniquely identifies the Typekit block vs. the other inline styles).

**Step 3: Remove Facebook SDK inline block from all 4 HTML files**

The third inline `<style>` block contains `.fb_hidden`, `.fb_reposition`, etc. (~5.4KB). Remove it entirely — Facebook widgets were stripped.

**Step 4: Verify the font-loading keyframe block remains**

Each file should still have one small `<style>` block:
```css
@keyframes fonts-loading { 0%, 99% { color: transparent; } } html.wf-loading * { animation: fonts-loading 3s; }
```

Run: `grep -c '<style' index.html about.html translations.html thank-you.html`

Expected: 1 per file.

---

### Task 4: Create utility classes and replace inline styles

**Files:**
- Modify: `index.html`, `about.html`, `translations.html`, `thank-you.html`
- Create: `/tmp/utility-classes.css` (intermediate, will be merged)

**Step 1: Create utility class definitions**

```css
/* Archive utility classes */
.pre-wrap { white-space: pre-wrap; }
.img-cover { display: block; object-fit: cover; width: 100%; height: 100%; object-position: 50% 50%; }
.block { display: block; }
```

**Step 2: Write Python script to replace inline styles with classes**

Create `/tmp/replace_inline_styles.py`:

```python
import re

REPLACEMENTS = [
    ('style="white-space:pre-wrap;"', 'pre-wrap'),
    ('style="display:block;object-fit: cover; width: 100%; height: 100%; object-position: 50% 50%"', 'img-cover'),
    ('style="display:block"', 'block'),
]

for fname in ['index.html', 'about.html', 'translations.html', 'thank-you.html']:
    with open(fname, 'r') as f:
        html = f.read()

    for style_attr, class_name in REPLACEMENTS:
        # If element already has class="...", append to it
        # Pattern: class="existing-classes" ... style="..."
        # or: style="..." ... class="existing-classes"
        
        # Simple approach: remove the style attr, then add class
        # First, handle elements that already have a class attribute
        pattern_with_class = r'(class="[^"]*)"(\s[^>]*?)' + re.escape(style_attr)
        replacement = r'\1 ' + class_name + r'"\2'
        html_new = re.sub(pattern_with_class, replacement, html)
        
        if html_new != html:
            html = html_new
        else:
            # Try style before class
            pattern_style_before_class = re.escape(style_attr) + r'(\s[^>]*?)(class="[^"]*)"'
            replacement2 = r'\1\2 ' + class_name + '"'
            html = re.sub(pattern_style_before_class, replacement2, html)
        
        # Handle elements with style attr but no class attr
        # Replace style="..." with class="classname"
        html = html.replace(style_attr, f'class="{class_name}"')

    with open(fname, 'w') as f:
        f.write(html)

    count = html.count(f'"{class_name}"') if REPLACEMENTS else 0
    print(f"{fname}: done")
```

**Step 3: Run the replacement**

Run: `cd "/Users/trarara/Dropbox/+Work/Community Canvas Archive" && python3 /tmp/replace_inline_styles.py`

**Step 4: Verify no original style attrs remain**

Run: `grep -c 'style="white-space:pre-wrap;"' index.html about.html translations.html thank-you.html`

Expected: 0 per file.

---

### Task 5: Assemble final unified CSS file

**Files:**
- Create: `assets/css/styles.css`
- Delete: `assets/css/site.css`, `assets/css/custom.css`, `assets/css/spacer.css`, `assets/css/code.css`

**Step 1: Concatenate all CSS sources**

```bash
cd "/Users/trarara/Dropbox/+Work/Community Canvas Archive"
cat /tmp/typekit-fonts.css assets/css/site.css assets/css/custom.css assets/css/spacer.css assets/css/code.css /tmp/utility-classes.css > assets/css/styles.css
```

**Step 2: Verify the result**

Run: `wc -c assets/css/styles.css`

Expected: ~150-260KB.

**Step 3: Delete the individual CSS files**

```bash
rm assets/css/site.css assets/css/custom.css assets/css/spacer.css assets/css/code.css
```

Keep the backup originals (`site-original.css`, `custom-original.css`) for reference.

---

### Task 6: Update HTML files to use single stylesheet

**Files:**
- Modify: `index.html`, `about.html`, `translations.html`, `thank-you.html`

**Step 1: Replace CSS link tags**

In each HTML file, replace the multiple CSS `<link>` tags:
```html
<link rel="stylesheet" href="assets/css/site.css">
<link rel="stylesheet" href="assets/css/custom.css">
```
and any references to `spacer.css` / `code.css` (including those in `data-block-css` attributes) with a single:
```html
<link rel="stylesheet" href="assets/css/styles.css">
```

Also remove any `data-block-css` attributes that referenced the old individual files.

**Step 2: Verify each file has exactly one local CSS link**

Run: `grep 'assets/css/' index.html about.html translations.html thank-you.html`

Expected: One `styles.css` reference per file.

---

### Task 7: Visual QA

**Files:**
- All 4 HTML pages

**Step 1: Take screenshots of all 4 pages at 1440px**

Use Playwright or the QATester agent to open each page via `file://` protocol and capture full-page screenshots.

**Step 2: Compare against reference screenshots**

Reference screenshots are at `/tmp/cc-screenshots/home.png`, `about.png`, `translations.png`, `thank-you.png`.

Check:
- Layout structure (header, sections, footer)
- Images loading
- Colors correct (coral accent, teal footer)
- Font rendering (Typekit fonts load via external `<link>`)
- Navigation links work between pages

**Step 3: Fix any regressions**

If PurgeCSS removed something needed, add the selector back from `site-original.css`.

**Step 4: Commit**

```bash
git add -A
git commit -m "refactor: unify CSS into single styles.css, purge unused selectors"
```

---

### Task 8: Log the change

**Files:**
- Modify: `docs/log.md`

Add log entry documenting:
- What changed (CSS consolidation)
- Size reduction (before/after)
- Files created/deleted
