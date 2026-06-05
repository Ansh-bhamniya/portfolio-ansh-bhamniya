# Hero & Footer UI Reference

Snapshot of current portfolio patterns. Re-read source files if they drift.

## Hero (`src/sections/Hero.tsx`)

| Aspect | Value |
|--------|--------|
| Section id | `hero` |
| Header surface | `data-header-surface="hero"` |
| Height | `h-[800px] min-h-screen` → `tablet:h-[1000px]` → `lg:h-[1127px]` |
| Background | Full-cover image, `scale-[1.01]`, `blur-[2px]`, `object-center` |
| Content position | Centered, `pt-[28vh]` → `sm:30vh` → `md:32vh`, `max-w-2xl` / `sm:max-w-3xl` |
| H1 | White, tight leading `0.9`, responsive `text-5xl` → `xl:text-[7.5rem]` |
| Name style | `font-serif italic` + `<WordsPullUp text="Ansh Bhamniya" />` |
| Tagline | `font-sf`, `text-white/90`, `max-w-xl` / `md:max-w-2xl`, motion fade-up delay `0.4s` |
| Tagline copy | `Building pixel-perfect mobile apps with a sharp eye for design and smooth animations.` |

### WordsPullUp (`src/components/WordsPullUp.tsx`)

- Splits on spaces; each word animates `y: 20 → 0`, opacity `0 → 1`
- Stagger: `delay: index * 0.08`, duration `0.6`, ease `[0.16, 1, 0.3, 1]`
- `useInView` once; optional asterisk on last word ending in `a`

### Hero tagline motion

```tsx
initial={{ y: 16, opacity: 0 }}
animate={{ y: 0, opacity: 1 }}
transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
```

## Footer wordmark (`src/components/FooterWordmark.tsx`)

- Sits **above** `<footer>` (sibling, not inside footer)
- `data-header-surface="light"`, `aria-hidden`
- Text: `An` + `sh` (serif italic) + ` Bhamniya` (sf, not italic)
- Image clipped into text: same `anything-bg.jpg`, `bg-clip-text text-transparent`
- Size: `clamp(3rem,19vw,24rem)` with ResizeObserver shrink-to-fit (min 36px, edge inset 32px)

## Footer (`src/sections/Footer.tsx`)

| Aspect | Value |
|--------|--------|
| Header surface | `data-header-surface="light"` |
| Min height | `480px` / `sm:520px` |
| Background | `<GradientBackground gradientOrigin="bottom-middle" noiseIntensity={0.35} noisePatternAlpha={22} noisePatternSize={120} noisePatternRefreshInterval={4} />` |
| Max width | `max-w-6xl` content column |
| Contact email | `ansh.bhamniya@gmail.com` (mailto on submit) |

### Layout

- Top row: contact form (left, `max-w-xl`) + quick links + social (right on `sm+`)
- Bottom row: copyright left, “Available for work” right (`dark:text-primary`)

### Form copy & fields

- Headline: `Let's do great work together`
- Subhead: `Contact me`
- Inputs: glass style — `rounded-2xl`, `border-white/35`, `bg-white/15`, inset shadow, `backdrop-blur-xl`, dark variants on inputs
- Submit: `rounded-full bg-[#000000]`, `h-11`, `px-8`, `font-sf`

### Link styles

```txt
footerLinkClassName = font-sf text-sm text-stone-800/85 hover:opacity-70 dark:text-white/80
```

### Data

- Quick links: About `#about`, Experience `#experience`, FAQ `#faq`, Resume `/ansh_resume.pdf` (blank)
- Social: Instagram, LinkedIn, GitHub (external)

## Footer gradient (`FOOTER_SUNSET_GRADIENT`)

Radial “sunset” stops (orange → pink → lavender → blue). Default in `noisy-gradient-backgrounds.tsx`. Footer uses radial from `bottom-middle`, noise overlay on canvas.

## Typography (tailwind)

- `font-serif`: Instrument Serif
- `font-sf`: SF Pro Display, system-ui fallbacks

## Theme context

- Light body: `#f4f3ee`; dark body: `#000000` / text `#e1e0cc`
- Hero is always light-on-image (white text); footer supports `dark:` variants on text and inputs

## Header integration

- `#hero` + `getBoundingClientRect().bottom` drives header surface switch (`useHeaderOnLightSurface`)
- Footer sections use `data-header-surface="light"` for header styling on light backgrounds
