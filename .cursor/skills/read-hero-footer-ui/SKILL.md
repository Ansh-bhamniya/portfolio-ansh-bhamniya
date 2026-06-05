---
name: read-hero-footer-ui
description: Reads and applies the portfolio Hero and Footer UI patterns (typography, backgrounds, motion, forms, links). Use when building or editing hero/footer sections, matching page chrome to the homepage, header surface behavior, or when the user says to read hero and footer section UI.
---

# Read Hero & Footer UI

read my hero and footer section ui will use this later

## When to run

Before changing or adding UI that should match the homepage bookends:

1. Read source files (do not guess from memory):
   - `src/sections/Hero.tsx`
   - `src/sections/Footer.tsx`
   - `src/components/FooterWordmark.tsx`
   - `src/components/WordsPullUp.tsx` (hero headline animation)
   - `src/components/ui/noisy-gradient-backgrounds.tsx` (footer gradient + noise)
2. Skim [reference.md](reference.md) for tokens, layout, and reuse rules.
3. If header overlap matters, also read `src/hooks/useHeaderOnLightSurface.ts` and `data-header-surface` on sections.

## Workflow

```
Task Progress:
- [ ] Read Hero.tsx + WordsPullUp.tsx
- [ ] Read Footer.tsx + FooterWordmark.tsx + gradient component
- [ ] Confirm fonts, colors, and motion from reference.md
- [ ] Implement changes using same conventions (font-sf / font-serif, data-header-surface)
```

## Rules

- **Hero**: full-bleed background image, centered serif italic name with word pull-up, SF Pro tagline with framer fade-up. `data-header-surface="hero"`.
- **Footer**: `FooterWordmark` above `Footer`; sunset radial gradient + canvas noise; glass inputs; black pill submit; two link columns; copyright row. `data-header-surface="light"`.
- **Shared asset**: `https://www.anything.com/images/homepage-v2/anything-bg.jpg` — hero bg and wordmark text fill.
- **Typography**: `font-serif` = Instrument Serif italic; `font-sf` = SF Pro Display stack (see `tailwind.config.js`).
- **Do not** invent a new palette or font pairing for sections meant to match hero/footer without explicit user request.

## Additional resources

- Condensed UI spec: [reference.md](reference.md)
