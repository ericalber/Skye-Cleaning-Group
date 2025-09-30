# Skins & Tokens Add-on

These styles are optional refinements for advanced staging demos. Nothing changes unless you import the files **and** add the feature flags on `<body>`.

## Files
- `src/styles/skins/gsx.tokens.css` – Grandstar-inspired tokens (radius, shadows, palette).
- `src/styles/skins/gsx.header.css` – Header glass polish & enlarged hit-area (requires `with-grandstar`).
- `src/styles/skins/gsx.buttons.css` – Optional button presets (`.gsx-btn*`).
- `src/styles/skins/fsx.sidebar.css` – Flat Sidebar drawer skin (requires `with-sidebar-flat`).

## How to wire it temporarily
```tsx
// e.g. app/layout.tsx
import '@/styles/skins/gsx.tokens.css'
import '@/styles/skins/gsx.header.css'
import '@/styles/skins/gsx.buttons.css'
import '@/styles/skins/fsx.sidebar.css'
```

Activate skins per page or layout by decorating `<body>`:
```html
<body class="with-grandstar with-sidebar-flat fsx-light">
  <!-- regular app -->
</body>
```
- `with-grandstar` ⇒ tokens + header polish + button utilities.
- `with-sidebar-flat` ⇒ drawer skin (visual only).
- `fsx-light` / `fsx-dark` ⇒ choose drawer palette (dark falls back to tokens if `with-grandstar` is present).

Remove the flags (or the imports) to roll back instantly.

## Button utility quick reference (optional)
Always combine `.gsx-btn` with a type and size:
```html
<button class="gsx-btn -primary -md">Book Consultation</button>
<a class="gsx-btn -secondary -lg" href="#quote">Learn More</a>
<button class="gsx-btn -ghost -sm">Remind me later</button>
<button class="gsx-btn -danger -xs">Cancel task</button>
```
Types: `-primary`, `-secondary`, `-ghost`, `-link`, `-danger`, `-success`
Sizes: `-xs`, `-sm`, `-md`, `-lg`, `-xl`

## Notes
- No JavaScript is added; all behaviour remains untouched.
- Keep the total CSS import under the 30 KB gzip budget (current bundle ≈ 6 KB raw).
- Drawer z-index stays ≥ 10000, overlay ≥ 9999, header ≤ 9900 so floating CTAs remain on top.
