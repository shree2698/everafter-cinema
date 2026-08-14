# Cinematic Wedding Website: Design System & Visual Architecture (`design.md`)

> **Document Type:** Visual Design System, Motion Choreography & UI Architecture  
> **Role & Authority:** Creative Director, Senior Motion Designer & Lead Visual Architect  
> **Companion Document:** [`requirement.md`](file:///E:/ME/cinematicwedding/requirement.md)  
> **Primary Reference Board:** [`websiteReference.png`](file:///E:/ME/cinematicwedding/websiteReference.png)  
> **Status:** Production Design Approved

---

## 1. Design Philosophy & Mood Canvas

### 1.1 The "Digital Love Film" Concept
The interface is conceived not as a website with cards and navigation, but as an **interactive cinematic motion picture** translated into a digital medium. The emotional cadence transitions through specific narrative movements:

```
[ THE PROLOGUE ] ──► [ TITLE SEQUENCE ] ──► [ CHAPTERS ] ──► [ THE MEMORY VAULT ] ──► [ THE CELEBRATION ] ──► [ THE DESTINATION ] ──► [ THE SEAL ]
   (Atmosphere)         (Grandeur)           (Intimacy)           (Nostalgia)              (Joy & Honor)             (Majesty)            (Commitment)
```

### 1.2 Forbidden Tropes & Anti-Patterns
* **NO** flat white or pastel card containers.
* **NO** standard template grid galleries with rounded borders.
* **NO** high-saturation purple or blue gradient accents.
* **NO** bubbly cartoonish vector icons or standard emoji badges.
* **NO** confetti particle scripts or floating clipart balloons.
* **NO** jarring rapid popups or corporate modal dialogs.
* **NO** noisy, uncalibrated animations that hijack the viewer's natural reading pace.

---

## 2. Master Color Palette & Token System

The color palette is built on the interplay of low-luminance deep space, warm organic candlelit ivory, champagne gold accents, and deep antique bronze.

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                               MASTER COLOR PALETTE                                     │
├─────────────┬─────────────┬─────────────┬─────────────┬─────────────┬──────────────────┤
│  #080B0D    │  #121518    │  #1A1A1D    │  #7A6A4D    │  #D7C6A5    │  #EAD9B2 / #F4EFE6
│ Pitch Black │ Deep Canvas │ Dark Panel  │ Aged Bronze │  Champagne  │ Warm Gold/Ivory  │
│ (Base Void) │ (Surface 1) │ (Surface 2) │  (Dividers) │   (Accent)  │  (High Primary)  │
└─────────────┴─────────────┴─────────────┴─────────────┴─────────────┴──────────────────┘
```

### 2.1 CSS Custom Properties Token Map

```css
:root {
  /* ==========================================================================
     Surfaces & Canvas
     ========================================================================== */
  --surface-void: #080B0D;              /* 0% luminance base canvas */
  --surface-base: #0D1013;              /* Deep background tint */
  --surface-elevated-1: #121518;        /* Subtle section elevation */
  --surface-elevated-2: #1A1A1D;        /* Card & invitation panels */
  --surface-elevated-3: #222327;        /* Hover states & modals */
  --surface-glass: rgba(18, 21, 24, 0.72); /* Nav & HUD glassmorphism */
  
  /* ==========================================================================
     Typography Tints
     ========================================================================== */
  --text-hero: #F4EFE6;                 /* Warm antique ivory (100% readable) */
  --text-body: #DCD6CD;                 /* Soft editorial body */
  --text-gold: #D7C6A5;                 /* Champagne gold metadata & accents */
  --text-gold-light: #EAD9B2;           /* Bright illuminated gold highlights */
  --text-muted: #8E887E;                /* Subdued stone metadata */
  --text-faint: #54514B;                /* Index numbers & watermark timestamps */

  /* ==========================================================================
     Borders, Lines & Outlines
     ========================================================================== */
  --border-whisper: rgba(215, 198, 165, 0.08); /* Minimal panel separation */
  --border-fine: rgba(215, 198, 165, 0.18);    /* Standard editorial card border */
  --border-accent: rgba(215, 198, 165, 0.45);  /* Hover & active state border */
  --line-bronze: #7A6A4D;                      /* Geometric timeline & seal lines */

  /* ==========================================================================
     Accents & Emotional Tones
     ========================================================================== */
  --accent-rose-gold: #E9AD9B;          /* Soft emotional blush (whisper accents) */
  --accent-gold-glow: rgba(215, 198, 165, 0.22);
  --accent-gold-bright-glow: rgba(234, 217, 178, 0.45);

  /* ==========================================================================
     Shadows & Cinematic Depth
     ========================================================================== */
  --shadow-cinematic-deep: 0 32px 64px -16px rgba(0, 0, 0, 0.95);
  --shadow-gold-focus: 0 0 30px rgba(215, 198, 165, 0.18);
  --shadow-card-hover: 0 20px 40px -10px rgba(0, 0, 0, 0.7);
}
```

---

## 3. Typography Design Architecture

```
               ARJUN  &  MEERA
           [ DISPLAY SERIF (HERO) ]
           Cormorant Garamond Light, 88px, tracking: 0.18em

                 18 . 12 . 2026
           [ EDITORIAL SANS (METADATA) ]
           Montserrat Medium, 14px, tracking: 0.35em

              Forever starts here.
           [ ACCENT SCRIPT (SIGNATURE) ]
           Pinyon Script, 44px, italic, warm gold
```

### 3.1 Type Hierarchy & Specs Table

| Style Role | Font Family | Weight | Size (Desktop) | Size (Mobile) | Line Height | Tracking (Letter Spacing) | Transform |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Names** | Cormorant Garamond | 300 (Light) | `5.5rem` (88px) | `3.25rem` (52px) | `1.05` | `0.18em` | Uppercase |
| **Section Title** | Cormorant Garamond | 400 (Regular) | `3.5rem` (56px) | `2.25rem` (36px) | `1.15` | `0.14em` | Uppercase |
| **Scene Headline** | Cormorant Garamond | 300 (Light) | `2.5rem` (40px) | `1.75rem` (28px) | `1.25` | `0.12em` | Uppercase |
| **Editorial Quote**| Pinyon Script | 400 (Regular) | `2.75rem` (44px) | `2.00rem` (32px) | `1.20` | `0.02em` | None |
| **Body Narrative** | Montserrat / Inter | 300 (Light) | `1.05rem` (17px) | `0.95rem` (15px) | `1.80` | `0.04em` | Sentence |
| **Meta / Labels**  | Montserrat | 500 (Medium) | `0.75rem` (12px) | `0.70rem` (11px) | `1.40` | `0.30em` | Uppercase |
| **Countdown Big**  | Cormorant Garamond | 300 (Light) | `4.5rem` (72px) | `2.75rem` (44px) | `1.00` | `0.08em` | None |
| **Interactive CTA**| Montserrat | 500 (Medium) | `0.85rem` (13.5px)| `0.80rem` (13px) | `1.00` | `0.24em` | Uppercase |

---

## 4. Visual Layering & Spatial Architecture (Z-Index)

To prevent visual collisions during complex parallax and mask transitions, a strict 10-layer depth system is enforced:

```
[Layer 10] (z-index: 9999) ── Custom Cursor & HUD Status Ring
[Layer 09] (z-index: 8000) ── Fullscreen Modals, RSVP Drawer & Lightbox
[Layer 08] (z-index: 7000) ── Fixed Ambient Audio Controller & Skip Button
[Layer 07] (z-index: 6000) ── Fixed Glassmorphism Top Navigation Bar
[Layer 06] (z-index: 5000) ── Film Grain & Dust Particle Canvas Overlays
[Layer 05] (z-index: 4000) ── Foreground Parallax Elements & Text Overlays
[Layer 04] (z-index: 3000) ── Midground Photography & Masked Content Cards
[Layer 03] (z-index: 2000) ── Background Cinematic Photography / Video
[Layer 02] (z-index: 1000) ── Vignette & Radial Light Leak Overlays
[Layer 01] (z-index:    0) ── Base Canvas Solid Void (#080B0D)
```

---

## 5. Visual Component Specifications

### 5.1 Cinematic Intro Loader
* **Visual Structure:** Pure black screen with centralized geometric monogram (`A ♥ M`), 1px bronze expansion divider, animated date stamp, and golden dust particles floating in 3D depth.
* **Lighting:** Soft radial spotlight centered behind the monogram with pulse luminance.

```
       ✦  .                                  .  ✦
                  A      ♥      M
              ──────────────────────
                  18 . 12 . 2026
            A STORY WORTH REMEMBERING
```

### 5.2 Hero Title Sequence
* **Composition:** Full bleed 100dvh photography with low-key studio backlight, vignette edges, and centralized monumental typography.
* **Layout Geometry:**
  * Top Margin: 15vh
  * Center: Couple Names (`ARJUN & MEERA`) with golden ampersand
  * Date: `18 . 12 . 2026` enclosed in delicate 1px border lines
  * Bottom Indicator: Monospaced `SCROLL TO EXPLORE` with a vertical 40px pulsing needle line.

### 5.3 Four-Chapter Scroll Storytelling Panels
As defined in Panel 3 of [`websiteReference.png`](file:///E:/ME/cinematicwedding/websiteReference.png):

```
┌───────────────┬───────────────┬───────────────┬───────────────┐
│ 01            │ 02            │ 03            │ 04            │
│               │               │               │               │
│ IT STARTED    │ ONE           │ A             │ AND SOMEHOW,  │
│ WITH A        │ UNEXPECTED    │ CONVERSATION  │ EVERYTHING    │
│ MOMENT.       │ MEETING.      │ THAT LASTED   │ CHANGED.      │
│               │               │ LONGER THAN   │               │
│               │               │ EXPECTED.     │               │
│ [Hands Touch] │ [Silhouette]  │ [Candlelight] │ [Couple View] │
└───────────────┴───────────────┴───────────────┴───────────────┘
```
* **Card Frame:** Asymmetrical 4-column container with 1px border (`--border-fine`), subtle zoom on active panel, and numeric index (`01`–`04`) in faint gold.

### 5.4 Relationship Journey (Memory Film-Reel)
* **Desktop Reel:** Horizontal tracking path. A continuous 1px gold line across the screen with circular milestone nodes (`8px` diameter).
* **Hover State:** Hovering or scrolling to a milestone expands a floating 4:5 vertical photo frame with fine gold borders and smooth image rise (`translateY(-8px)`).
* **Mobile Transformation:** Vertical continuous path on the left axis with photo cards aligned to the right.

### 5.5 Multi-Mode Cinematic Gallery System

```
Mode A: Fullscreen Dissolve       Mode B: Layered Print Deck (Stacked)
┌──────────────────────────────┐  ┌──────────────────────────────┐
│                              │  │      ┌───────────────┐       │
│                              │  │   ┌──┴────────────┐  │ (-4°) │
│      [ FULL VIEWPORT ]       │  │   │  [ MAIN CARD ]│──┘       │
│     Cinematic cross-wipe     │  │   └──┬────────────┤ (+3°)    │
│                              │  │      └────────────┘          │
└──────────────────────────────┘  └──────────────────────────────┘

Mode C: Horizontal Filmstrip      Mode D: Editorial Magazine Grid
┌──────────────────────────────┐  ┌──────────────────────────────┐
│  ┌──────┐ ┌──────┐ ┌──────┐  │  │ ┌─────────┐   "Every picture │
│  │ 16:9 │ │ 16:9 │ │ 16:9 │  │  │ │  4 : 5  │    tells a       │
│  └──────┘ └──────┘ └──────┘  │  │ └─────────┘    story"        │
│  ────●─────────────────────  │  │      ┌─────────┐             │
│       [ Scroll / Drag ]      │  │      │  1 : 1  │             │
└──────────────────────────────┘  └──────────────────────────────┘
```

### 5.6 Image Reveal Masks & Visual FX

```
Curtain Reveal:       Circle Reveal:        Split Reveal:         Diagonal Reveal:
┌──────────────┐      ┌──────────────┐      ┌──────┬──────┐       ┌──────────────┐
│ ░░░░░░░░░░░░ │      │   ╭──────╮   │      │ ░░░░ │ ░░░░ │       │ ░░░░░░░░ ╱   │
│ ░░ SLIDE ░░░ │      │  │  OPEN │   │      │ ◄─── │ ───► │       │ ░░░░░░ ╱ ░   │
│ ░░░░░░░░░░░░ │      │   ╰──────╯   │      │ ░░░░ │ ░░░░ │       │ ░░░░ ╱ ░░░   │
└──────────────┘      └──────────────┘      └──────┴──────┘       └──────────────┘
```

### 5.7 Wedding Ceremony Invitation Panels
* **Card Anatomy:**
  * Background: `#1A1A1D` with 1px border (`rgba(215, 198, 165, 0.18)`).
  * Top Glyph: Custom minimalist gold vector icon (Mandap, Mehndi Palm, Champagne Flute, Royal Gate).
  * Ceremony Name: Display Serif 24px in `--text-gold`.
  * Date & Time: 12px tracking-expanded uppercase sans-serif.
  * Location: Muted stone label.
  * CTA: Subtle underlined `Add to Calendar` with arrow glyph.

### 5.8 Countdown Ticker Architecture
* **Layout:** Centered monumental block.
* **Numbers:** 72px Display Serif numbers with letterbox spacing.
* **Dividers:** 1px vertical antique bronze dividers separating Days, Hours, Minutes, and Seconds.
* **Labels:** 11px uppercase sans-serif labels placed directly beneath digits.

### 5.9 Venue Architecture: The Grand Taj Palace
* **Composition:** Split-screen editorial layout. Left: High-contrast atmospheric photo of palace architecture at dusk with golden reflection in water. Right: Typographic hierarchy with location metadata, romantic quote (*"A timeless place for a timeless celebration"*), and magnetic "View Location" button.

### 5.10 RSVP Interactive Portal
* **Visual Tone:** Private luxury invitation portal.
* **Inputs:** Minimalist dark inputs with bottom-only 1px gold border; active focus shifts border to bright champagne with soft glow.
* **Submit Action:** Magnetic gold pill button; on click, animates into a glowing circular wax seal stamped with couple monogram `A ♥ M`.

---

## 6. Motion Design & Animation Choreography

### 6.1 Easing Curves & Timing Tokens
All motion strictly utilizes custom cubic-bezier curves mimicking high-end optical camera rigs:

```css
:root {
  --ease-cinematic-out: cubic-bezier(0.22, 1, 0.36, 1);  /* Smooth decelerate */
  --ease-editorial-expo: cubic-bezier(0.16, 1, 0.3, 1);   /* Fast snap with long tail */
  --ease-camera-glide: cubic-bezier(0.65, 0, 0.35, 1);   /* Slow filmic pan */
  --ease-elastic-snap: cubic-bezier(0.34, 1.56, 0.64, 1);/* Magnetic hover snap */

  --duration-micro: 200ms;
  --duration-quick: 400ms;
  --duration-scene: 850ms;
  --duration-film: 1400ms;
  --duration-monumental: 2200ms;
}
```

### 6.2 Scroll Physics & Pinned Sequence
* **Scroll Dampening:** Powered by Lenis with smooth lerp factor of `0.085` on desktop.
* **Parallax Multipliers:**
  * Background landscape layers: `0.15×` scroll velocity.
  * Midground couple portraits: `0.50×` scroll velocity.
  * Foreground elements (typography, particles): `1.15×` scroll velocity.

---

## 7. Tactile Micro-Interactions & Custom Cursor

### 7.1 Cursor State Matrix (Desktop Only)

```
┌───────────────┬───────────────────────────────┬───────────────────────────────┐
│ CURSOR STATE  │ VISUAL PRESENTATION           │ TRIGGER CONTEXT               │
├───────────────┼───────────────────────────────┼───────────────────────────────┤
│ DEFAULT       │ 6px solid gold dot + 28px ring│ Default canvas interaction    │
│ VIEW          │ 64px expanded ring + "VIEW"   │ Hovering Gallery photographs  │
│ DRAG          │ 50px ring + horizontal arrows │ Hovering Timeline / Filmstrip │
│ OPEN          │ 48px circle + crosshair icon  │ Hovering Venue / Map preview  │
│ RSVP          │ Pill shape + "SEAL INVITATION"│ Hovering RSVP submit button   │
└───────────────┴───────────────────────────────┴───────────────────────────────┘
```

### 7.2 Magnetic Anchor Physics
* **Radius:** `40px` trigger boundary around primary CTA buttons.
* **Physics Formula:** $x = (\text{mouse}_x - \text{center}_x) \times 0.28$, $y = (\text{mouse}_y - \text{center}_y) \times 0.28$.
* **Return:** Spring decay with `--ease-elastic-snap` over `400ms` when cursor leaves boundary.

---

## 8. Atmospheric Shaders & Visual Texture

### 8.1 Analog Film Grain
* **Implementation:** Lightweight SVG procedural turbulence filter rendered into a fixed full-screen element with `mix-blend-mode: overlay` at `4.5%` opacity.
* **Performance:** Static SVG grain texture with low-frequency CSS translation jitter to eliminate CPU frame drops.

### 8.2 Ambient Particle Physics
* **Properties:** 20–30 microscopic warm-gold dust motes floating with slow upward Brownian drift.
* **Alpha Range:** `0.15` to `0.55` opacity with soft Gaussian blur.

---

## 9. Sound Design & Audio Landscape

* **Aesthetic:** Atmospheric neoclassical cello and warm acoustic piano piece (tempo $\approx 64$ BPM, master key in D-major/B-minor).
* **HUD Controller:** Fixed bottom-left widget with live 5-bar animated equalizer waveform.
* **Controls:** 
  * Play/Pause toggle with 1.5s volume crossfade.
  * Automatic mute when visitor minimizes browser tab or switches focus.

---

## 10. Responsive Design & Mobile Adaptations

```
┌────────────────────────────────────────────────────────┐
│               MOBILE VIEWPORT CHOREOGRAPHY             │
├──────────────────────────┬─────────────────────────────┤
│ Hero Scene               │ 100dvh portrait crop,       │
│                          │ centered typography stack   │
├──────────────────────────┼─────────────────────────────┤
│ Scroll Story             │ Single-card vertical swipe  │
│                          │ with active chapter dots    │
├──────────────────────────┼─────────────────────────────┤
│ Timeline                 │ Left vertical gold rail     │
│                          │ with right-stacked cards    │
├──────────────────────────┼─────────────────────────────┤
│ Gallery                  │ Horizontal swipe carousel   │
│                          │ with touch snap points      │
├──────────────────────────┼─────────────────────────────┤
│ Events                   │ Single-column cards with    │
│                          │ 48px minimum touch buttons  │
└──────────────────────────┴─────────────────────────────┘
```

---

## 11. Accessibility & Inclusive Design (a11y)

* **Contrast Ratios:** All primary text tokens exceed WCAG AA minimum ($> 4.5:1$ against `#080B0D` canvas).
* **Focus States:** 2px solid champagne gold focus ring with 3px offset (`:focus-visible`).
* **Motion Reduction (`prefers-reduced-motion: reduce`):**
  * Parallax translates are locked to standard flow.
  * Continuous zooms and particle generators are turned off.
  * Cursor reverts to standard OS pointer.
  * Transitions are replaced by clean 150ms opacity fades.

---

## 12. Design Asset Inventory

| Asset Name | Target Dimensions | Aspect Ratio | Tone / Mood |
| :--- | :--- | :--- | :--- |
| `hero-couple-main.jpg` | $2560\times 1440$ / $1080\times 1920$ | 16:9 / 9:16 | Warm sunset, backlit couple silhouette |
| `story-01-moment.jpg` | $1200\times 1500$ | 4:5 | Intimate candid macro (hands holding) |
| `story-02-meeting.jpg`| $1200\times 1500$ | 4:5 | Environmental landscape with couple |
| `story-03-dinner.jpg` | $1200\times 1500$ | 4:5 | Candlelit dinner, soft bokeh highlights |
| `story-04-changed.jpg`| $1200\times 1500$ | 4:5 | Cinematic close portrait of couple |
| `venue-taj-palace.jpg`| $2000\times 1250$ | 16:10 | Dusk architectural illumination over lake |
| `film-grain.svg` | Vector Pattern | Seamless | 35mm fine-grain analog emulation |
| `ambient-love-theme.mp3`| High-bitrate stereo | Audio | Warm cello & ambient piano romance |
