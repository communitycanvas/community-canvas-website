# Claude Instructions

## Project Overview

Static HTML/CSS archive of community-canvas.org (formerly on Squarespace). Hosted on GitHub Pages with the community-canvas.org domain.

**Key Features:**
- 4 pages: index.html, translations.html, about.html, thank-you.html
- All images downloaded locally in `assets/images/`
- Shared CSS in `assets/css/style.css`

## Fonts

Adobe Fonts (Typekit) embed:
```html
<link rel="stylesheet" href="https://use.typekit.net/ruh6dca.css">
```

This kit provides:
- **katarine-web** — headings (h1, h2, h3) and header nav. Weights: 400 (normal)
- **ff-meta-serif-web-pro** — body text. Weights: 400 (normal)

Also used:
- **Google Fonts Roboto** — weights 500, 700. `<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,500;0,700">`
- **Font Awesome 5** — icons. `<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css">`

Color scheme:
- Accent/links: `#ff6d57` (coral)
- Body text: `#272727`
- Headings: `#1d1d1d`
- Footer/thank-you bg: `#4daac4` (teal)


---

## Documentation

When new features, integrations, architecture decisions, or other noteworthy information comes up during work, document it in `docs/readme.md`. Keep it updated as a living reference for the project.

---

## Plans

All implementation plans must be saved to `docs/plans/`. Filenames must start with the date in `YYYY-MM-DD` format, followed by a descriptive name (e.g., `docs/plans/2026-03-27-auth-system.md`, `docs/plans/2026-03-27-cms-migration.md`). This ensures plans are versioned, reviewable, and accessible across sessions.

---

## Logging Requirements

**CRITICAL:** For every code change or feature addition:

1. **Write a log entry** describing what was changed and why
2. **Save to `docs/log.md`** in the following format:

### Log Entry Format

```markdown
## [YYYY-MM-DD] - [Brief Change Title]

**What Changed:**
- Specific file(s) modified or created
- Description of the change

**Why:**
- Reason for the change (feature request, bug fix, refactor, etc.)

**Files Modified:**
- `path/to/file.ext`
- `path/to/file.ext`

---
```

### Example

```markdown
## 2026-03-27 - Added Parent Name field to notification form

**What Changed:**
- Added "Parent Name" input field to the email notification modal
- Updated `submitNotify()` to collect and send parent name to Google Apps Script

**Why:**
- Parents want to be identified when registering interest, not just by email

**Files Modified:**
- `index.html` - Added input field and updated form submission logic

---
```

### When to Log

Log entries are needed for:
- ✅ New features
- ✅ Bug fixes
- ✅ File modifications
- ✅ New file creation
- ✅ Schema/structure changes (e.g., adding columns to Google Sheet)

Don't log:
- ❌ Reading files to understand context
- ❌ Running tests/verification
- ❌ Responding to questions without code changes



### Workflow

1. **Make the code change(s)**
2. **Write the log entry** in the format above
3. **Append to `docs/log.md`**
4. **Inform the user** of what was done in your response

---

### How to Update `docs/log.md`

```javascript
// Pseudocode - in practice, use Read → Edit/Write
const logEntry = `
## [YYYY-MM-DD] - [Title]

**What Changed:**
- ...

**Why:**
- ...

**Files Modified:**
- ...

---
`;

// Append to docs/log.md
```

Always preserve existing log entries. New entries go at the **top** (most recent first) for easy scanning.

---

## Current Project State

### File Inventory


### Active Features
