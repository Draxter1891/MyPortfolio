# Rishabh Portfolio — Design System
**Version:** 1.0
**Status:** Initial Design System
**Design Direction:** Editorial × Product Design × Premium SaaS

---

## 1. Brand Direction

### Positioning
**Product Engineer**
Builds modern digital products from idea to deployment.

### Brand Personality
- Premium
- Creative
- Reliable
- Product-focused
- Technical
- Minimal
- Human

### Visual Direction
The visual identity combines:
- Editorial design
- Premium SaaS aesthetics
- Modern product interfaces
- Minimal typography
- Subtle motion
- Strong visual hierarchy

### The portfolio should feel
> Creative enough to be memorable, professional enough to be trusted.

### Avoid
- Cyberpunk aesthetics
- Neon-heavy visuals
- Excessive gradients
- Excessive glassmorphism
- Generic developer illustrations
- Floating technology logos everywhere
- Excessive 3D decoration
- Animation without purpose
- Visual clutter
- Template-like layouts

---

# 2. Color System

The portfolio supports two themes:

1. Warm Light — Default
2. Deep Green Dark — Alternate

The light theme is the primary visual identity.
The dark theme should feel like a sibling of the light theme rather than a simple color inversion.

---

## 2.1 Light Theme

| Token | Hex | Usage |
|---|---|---|
| `--bg-primary` | `#F1DEC4` | Main page background |
| `--bg-secondary` | `#E8D2B3` | Alternate sections and surfaces |
| `--bg-dark` | `#344334` | Dark surfaces |
| `--text-primary` | `#344334` | Main headings and important text |
| `--text-secondary` | `#667064` | Supporting text |
| `--text-muted` | `#8A8D7F` | Metadata and low-priority text |
| `--accent` | `#BD4444` | Primary CTA and important highlights |
| `--highlight` | `#73976A` | Secondary emphasis |
| `--brand-dark` | `#677E61` | Large decorative elements |
| `--border` | `#D8C3A6` | Default borders |
| `--border-strong` | `#C7B294` | Strong borders |

### Color usage ratio
Approximately:
- 60–70% — Cream backgrounds
- 15–20% — Deep green
- 5–10% — Sage
- ≤5% — Terracotta accent

### Important rule
The terracotta accent should feel **precious**.
Do not use it everywhere.

Use it primarily for:
- Primary CTA
- Active navigation
- Important links
- Selected states
- Small visual highlights

---

## 2.2 Dark Theme

| Token | Hex | Usage |
|---|---|---|
| `--bg-primary` | `#1C211C` | Main background |
| `--bg-secondary` | `#252B24` | Sections and surfaces |
| `--bg-elevated` | `#2D342C` | Elevated cards |
| `--text-primary` | `#F1DEC4` | Main text |
| `--text-secondary` | `#B8BBAF` | Supporting text |
| `--text-muted` | `#8F9688` | Metadata |
| `--accent` | `#C94E4E` | Primary accent |
| `--highlight` | `#82A579` | Secondary highlight |
| `--border` | `#3A4238` | Borders |

### Dark theme personality
- Deep
- Cinematic
- Technical
- Calm
- Premium

The dark theme should preserve the visual identity of the light theme.

---

## 2.3 Semantic Colors

| Token | Hex | Usage |
|---|---|---|
| `--success` | `#4F7654` | Success states |
| `--warning` | `#B47A3C` | Warning states |
| `--error` | `#9F3838` | Error states |

### Semantic color rule
Semantic colors should only communicate system states.
Do not use them as decorative brand colors.

---

# 3. Typography

## 3.1 Font Family

Primary font:

```css
--font-sans:
  "Helvetica Neue",
  -apple-system,
  BlinkMacSystemFont,
  "Segoe UI",
  Arial,
  sans-serif;
```

## 3.2 Font Weights

Only use these weights:

| Token | Weight | Usage |
|---|---|---|
| `--weight-regular` | 400 | Body text |
| `--weight-medium` | 500 | Labels, navigation, buttons |
| `--weight-semibold` | 600 | Headings |
| `--weight-bold` | 700 | Display headings |

Avoid unnecessary use of 800/900 weights.

## 3.3 Type Scale

### Desktop

| Element | Size | Weight |
|---|---|---|
| Display | 72px | 700 |
| H1 | 56px | 700 |
| H2 | 44px | 600 |
| H3 | 32px | 600 |
| H4 | 24px | 600 |
| Body Large | 20px | 400 |
| Body | 16px | 400 |
| Small | 14px | 400/500 |
| Caption | 12px | 500 |

### Responsive Display Sizes

- Desktop → ~72px
- Tablet → ~56px
- Mobile → ~42–48px

Major headings should use `clamp()` where appropriate.

Example:

```css
.hero-title {
  font-size: clamp(2.75rem, 6vw, 4.5rem);
}
```

## 3.4 Line Heights

Recommended:

| Element | Line Height |
|---|---|
| Display | 0.98–1.05 |
| H1 | 1.05 |
| H2 | 1.10 |
| H3 | 1.15 |
| H4 | 1.20 |
| Body Large | 1.50 |
| Body | 1.55–1.60 |
| Small | 1.40 |
| Caption | 1.30 |

## 3.5 Letter Spacing

**Large headings**
```css
letter-spacing: -0.035em;
```

Hero/display headings may use:
```css
letter-spacing: -0.04em;
```

**Body**
```css
letter-spacing: 0;
```

**Uppercase labels**
```css
letter-spacing: 0.06em;
```

## 3.6 Text Measure

Prevent excessively long lines.

| Context | Maximum Width |
|---|---|
| Hero description | ~45ch |
| Section description | ~55ch |
| Case study body | ~68ch |

Example:

```css
.hero-description {
  max-width: 45ch;
}
```

---

# 4. Spacing System

The primary spacing unit is 8px.

## 4.1 Spacing Scale

4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 80px, 96px, 128px, 160px

**CSS Tokens**

```css
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-5: 24px;
--space-6: 32px;
--space-7: 48px;
--space-8: 64px;
--space-9: 80px;
--space-10: 96px;
--space-11: 128px;
--space-12: 160px;
```

## 4.2 Spacing Rules

| Relationship | Recommended Spacing |
|---|---|
| Icon → text | 8–12px |
| Label → content | 12px |
| Heading → paragraph | 16–24px |
| Paragraph → CTA | 24–32px |
| Card internal padding | 24–32px |
| Card → card | 24–32px |
| Major section spacing | 128–160px |

### Principle
Small things stay close. Important things get space.

---

# 5. Grid System

## 5.1 Desktop
- 12 columns
- 24px column gap
- 32px horizontal gutters
- 1280px maximum container width

## 5.2 Tablet
- 8 columns
- 20px column gap
- 24px horizontal gutters

## 5.3 Mobile
- 4 columns
- 16px column gap
- 20px horizontal gutters

## 5.4 Container

```css
.container {
  width: min(1280px, calc(100% - 64px));
  margin-inline: auto;
}
```

Mobile:

```css
@media (max-width: 768px) {
  .container {
    width: calc(100% - 40px);
  }
}
```

## 5.5 Grid Usage

Do not force every section to use the entire grid.

**Hero** — Approximately:
- 6 columns → content
- 1 column → gap
- 5 columns → visual

**Featured Project** — Use asymmetric layouts such as:
- 7 columns → project visual
- 5 columns → project information

Reverse the arrangement for the following project to create visual rhythm.

---

# 6. Layout System

## 6.1 Container
Maximum width: 1280px

## 6.2 Navbar

**Desktop**
- Height: 72px
- Horizontal padding: 32px

**Mobile**
- Height: 64px
- Horizontal padding: 20px

## 6.3 Hero

Recommended:
- Top padding: ~96px
- Bottom padding: ~96px

## 6.4 Section Spacing

Use:
- Small section: 64px
- Medium section: 96px
- Large section: 128px
- Major section: 160px

Do not use 160px everywhere. Spacing should establish hierarchy.

---

# 7. Border Radius

- 6px → small elements
- 10px → controls
- 16px → standard cards
- 20px → featured cards
- 32px → large visual containers
- 9999px → pills

**CSS Tokens**

```css
--radius-sm: 6px;
--radius-md: 10px;
--radius-lg: 16px;
--radius-xl: 20px;
--radius-2xl: 32px;
--radius-full: 9999px;
```

**Default Card Radius:** 20px

Do not use the same radius for every element.

---

# 8. Buttons

## 8.1 Primary Button
- Height: 48px
- Radius: 10px
- Horizontal padding: 20–24px
- Font size: 14px
- Font weight: 500
- Background: Accent

Used for:
- View Selected Work
- Contact
- Explore Project
- Primary actions

## 8.2 Secondary Button
- Height: 48px
- Radius: 10px
- Border: 1px
- Background: transparent
- Font size: 14px
- Weight: 500

## 8.3 Ghost Button
- No visible background
- No visible border

On hover, introduce a subtle surface background.

## 8.4 Button States

**Default** — Normal visual state.

**Hover**
```css
translateY(-2px)
```

**Active**
```css
translateY(0)
```

**Focus** — Use a clearly visible custom focus ring.

**Disabled** — Reduce opacity and remove interactive effects.

---

# 9. Cards

## 9.1 Standard Card
- Background: Secondary
- Border: 1px
- Radius: 20px
- Padding: 32px

## 9.2 Featured Project Card
- Radius: 24px
- Large project image
- Minimal border
- Minimal or no shadow

The project UI should be the visual focus.

## 9.3 Card Philosophy

Prefer:
1. Background contrast
2. Subtle border
3. Whitespace

...before relying on shadows.

---

# 10. Shadows

Use shadows sparingly.

**Small**
```css
0 2px 8px rgba(52, 67, 52, 0.06)
```

**Medium**
```css
0 8px 24px rgba(52, 67, 52, 0.08)
```

**Large**
```css
0 20px 50px rgba(52, 67, 52, 0.12)
```

### Rule
Default cards should generally have no shadow.

Use shadows for:
- Elevated elements
- Floating menus
- Modals
- Interactive states

---

# 11. Borders

- Default: `#D8C3A6`
- Strong: `#C7B294`

### Rule
Borders should define space without visually shouting.
Use whitespace instead of borders whenever possible.

---

# 12. Icons

### Icon Library
**Lucide**

Reasons:
- Minimal
- Consistent
- Lightweight
- Clean
- Matches the typography and visual style

### Icon Sizes
- 16px → metadata
- 20px → buttons
- 24px → navigation
- 32px → feature icons

### Icon Stroke
Approximately: **1.8px**

Keep icon usage restrained.

---

# 13. Tags and Badges

Used for:
- Technologies
- Project categories
- Status
- Small metadata

### Dimensions
- Height: 28–32px
- Horizontal padding: 12px
- Vertical padding: 6px
- Radius: 9999px
- Font size: 12–13px
- Font weight: 500

### Default Appearance
- Background: `#E8D2B3`
- Text: `#344334`

---

# 14. Inputs

## Standard Input
- Height: 52px
- Radius: 10px
- Padding: 16px
- Border: 1px
- Font size: 16px

## Textarea
- Minimum height: 140px

## Focus

Use the brand accent:

```
#BD4444
```

...with a subtle focus ring. Do not rely solely on the browser default outline.

---

# 15. Images

Project screenshots should follow a consistent treatment.

- Border radius: 20px
- Overflow: hidden

Avoid excessive device mockups. The actual product interface should be the visual focus.

---

# 16. Project Card Hover

Recommended subtle interaction:

**Image scale:** 1 → 1.02
**Card translation:** 0 → -4px
**Transition:** 400–500ms

Motion should be smooth and understated.

---

# 17. Cursor

**Default:** Use the normal browser cursor.

A custom cursor is optional and should only be introduced if it meaningfully improves the desktop experience. Never let a custom cursor interfere with usability.

---

# 18. Motion System

Motion is a core part of the portfolio but should never dominate the content.

## 18.1 Motion Hierarchy

**Level 1 — Functional**
- Button hover
- Focus states
- Navigation
- Page transitions
- Theme switching

**Level 2 — Storytelling**
- Scroll reveals
- Project image movement
- Parallax
- Section transitions
- Timeline animations

**Level 3 — Decorative**
- Particles
- Cursor effects
- Ambient movement
- Background effects

Level 3 should be used sparingly.

## 18.2 Motion Principle
Motion should guide attention, not demand attention.

## 18.3 Theme Transition

Theme switching should take approximately: **300–500ms**

Prefer CSS transitions for theme color changes rather than manually animating every property with JavaScript.

---

# 19. Theme System

The portfolio has two themes.

## Default — Warm Light
Cream + Deep Green + Sage + Terracotta

**Personality:** Warm, Editorial, Creative, Premium

## Alternate — Deep Green Dark
Deep Green + Warm Cream + Sage + Terracotta

**Personality:** Cinematic, Technical, Calm, Premium

## Theme Priority

```
Manual user choice
        ↓
Saved preference
        ↓
System preference
        ↓
Light default
```

The user's explicit choice should always take priority.

---

# 20. Accessibility

The visual system must remain accessible.

### Requirements
- Sufficient text contrast
- Visible keyboard focus states
- Semantic HTML
- Buttons must be actual `<button>` elements
- Links must be actual `<a>` elements
- Animations should respect `prefers-reduced-motion`
- Never rely on color alone to communicate state
- Images should have meaningful alt text where appropriate

---

# 21. Responsive Philosophy

The mobile version should not simply be a collapsed desktop layout.

Maintain:
- Visual hierarchy
- Whitespace
- Typography hierarchy
- Touch-friendly controls
- Clear navigation
- Project storytelling

### Breakpoints
- Mobile: <768px
- Tablet: 768–1023px
- Desktop: ≥1024px

---

# 22. Design Principles

**Principle 1 — Content First**
Projects are the stars. The UI exists to showcase them.

**Principle 2 — Restraint**
Not every element needs animation, color, shadow, or a border.

**Principle 3 — Consistency**
Use the design tokens instead of inventing new values for every component.

**Principle 4 — Hierarchy**
Size, weight, spacing, and color should establish a clear visual hierarchy.

**Principle 5 — Product Thinking**
The portfolio should feel like a product, not a résumé.

**Principle 6 — Motion With Purpose**

Every animation should either:
- Guide attention
- Explain something
- Provide feedback
- Improve perceived quality

If it does none of these, remove it.

**Principle 7 — Show, Don't Claim**

Don't say: *"I'm reliable."*
Show: Working products, live deployments, detailed case studies, clear engineering decisions, good documentation.

Don't say: *"I'm a team player."*
Show: Collaboration, process, communication, contributions, testimonials when available.

---

# 23. CSS Root Tokens

```css
:root {
  /* =========================
     Typography
     ========================= */

  --font-sans:
    "Helvetica Neue",
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Arial,
    sans-serif;

  --weight-regular: 400;
  --weight-medium: 500;
  --weight-semibold: 600;
  --weight-bold: 700;

  /* =========================
     Light Theme Colors
     ========================= */

  --bg-primary: #F1DEC4;
  --bg-secondary: #E8D2B3;
  --bg-dark: #344334;

  --text-primary: #344334;
  --text-secondary: #667064;
  --text-muted: #8A8D7F;

  --accent: #BD4444;
  --highlight: #73976A;
  --brand-dark: #677E61;

  --border: #D8C3A6;
  --border-strong: #C7B294;

  /* Semantic */

  --success: #4F7654;
  --warning: #B47A3C;
  --error: #9F3838;

  /* =========================
     Spacing
     ========================= */

  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --space-9: 80px;
  --space-10: 96px;
  --space-11: 128px;
  --space-12: 160px;

  /* =========================
     Radius
     ========================= */

  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 16px;
  --radius-xl: 20px;
  --radius-2xl: 32px;
  --radius-full: 9999px;

  /* =========================
     Shadows
     ========================= */

  --shadow-sm:
    0 2px 8px rgba(52, 67, 52, 0.06);

  --shadow-md:
    0 8px 24px rgba(52, 67, 52, 0.08);

  --shadow-lg:
    0 20px 50px rgba(52, 67, 52, 0.12);

  /* =========================
     Layout
     ========================= */

  --container-max: 1280px;

  --grid-gap: 24px;

  --gutter-desktop: 32px;
  --gutter-tablet: 24px;
  --gutter-mobile: 20px;

  --navbar-height: 72px;
}
```

---

# 24. Dark Theme Tokens

```css
[data-theme="dark"] {
  --bg-primary: #1C211C;
  --bg-secondary: #252B24;
  --bg-dark: #2D342C;

  --text-primary: #F1DEC4;
  --text-secondary: #B8BBAF;
  --text-muted: #8F9688;

  --accent: #C94E4E;
  --highlight: #82A579;

  --border: #3A4238;
}
```