# 🎬 EverAfter — Cinematic Wedding Digital Love Story

> **An award-winning interactive wedding film, luxury editorial experience & digital love story.**  
> Crafted with **Astro, HTML5, Vanilla CSS Design Tokens, Inline/Procedural SVG, GSAP, and Lenis**.

---

## 🌟 Overview & Visual Inspiration

**EverAfter** is built to feel like an interactive film title sequence and haute-couture editorial magazine rather than a traditional wedding template. 

Inspired by the visual reference system ([`websiteReference.png`](file:///E:/ME/cinematicwedding/websiteReference.png)), the experience transports the visitor through a deliberate emotional arc:
**PROLOGUE $\rightarrow$ TITLE SEQUENCE $\rightarrow$ CHAPTERS $\rightarrow$ MEMORY VAULT $\rightarrow$ CELEBRATIONS $\rightarrow$ COUNTDOWN $\rightarrow$ DESTINATION $\rightarrow$ RSVP PORTAL $\rightarrow$ EPILOGUE**.

---

## 📐 Project Documentation Architecture

* 📄 **[`requirement.md`](file:///E:/ME/cinematicwedding/requirement.md):** 44-section production specification (Single Source of Truth).
* 🎨 **[`design.md`](file:///E:/ME/cinematicwedding/design.md):** Design tokens, typography hierarchy, z-index layering, camera easing curves, and UI component blueprints.
* 📊 **[`workflow.md`](file:///E:/ME/cinematicwedding/workflow.md):** Phase-by-phase execution lifecycle and live progress tracking dashboard.

---

## ✨ Key Features & Narrative Scenes

### 1. 🎞️ Atmospheric Shell & Audio Engine
* **35mm Procedural Film Grain:** Fine vector grain jitter filter with vignette depth overlay.
* **Warm Golden Particle Field:** Canvas-based Brownian drift dust motes.
* **Context-Aware Custom Cursor:** Desktop interactive pointer with smooth lerp physics and reactive states (`default`, `hover`, `view`, `drag`, `open`, `rsvp`).
* **Web Audio Ambient Soundtrack:** Rich acoustic cello/pad drone synthesizer with interactive 5-bar live equalizer and automatic page visibility fade.

### 2. 👑 Cinematic Narrative Flow
1. **The Prologue (Cinematic Loader):** Golden monogram reveal (`A ♥ M`), expanding bronze divider, wedding date stagger, and dual vertical curtain unmask.
2. **The Title Sequence (Hero):** 100dvh composition with slow Ken Burns optical push, monumental typography, and scroll drop needle indicator.
3. **Four-Chapter Scroll Storytelling:** 4-panel visual progression (*"It started with a moment..."*) with hover zoom and editorial indices.
4. **Multi-Layer Parallax Scene:** 3-speed velocity physics (`0.15x`, `0.45x`, `1.05x`) with floating glassmorphic poetry cards.
5. **Memory Reel Timeline:** 6-milestone relationship archive (`2019`–`2026`) with glowing gold nodes and location metadata.
6. **Editorial Visual Archive (Gallery):** Asymmetrical multi-scale photo gallery with quotation blocks and 5 reusable reveal mask styles (`curtain`, `circle`, `split`, `diagonal`, `blur`).
7. **The Sacred Ceremonies:** 5 invitation cards for Haldi, Mehendi, Sangeet, Wedding, and Reception with one-click Google Calendar integration.
8. **Precision Countdown:** Live ticking time engine calculating days, hours, minutes, and seconds to December 18, 2026.
9. **Destination Showcase:** The Grand Taj Palace in Udaipur featuring dusk architectural view, travel guides, and Google Maps directions link.
10. **Interactive RSVP Portal:** Guest identification, attendance selection, dietary preferences, and interactive golden wax-seal stamp confirmation.
11. **Epilogue & Minimalist Footer:** Emotional typography stack (*"And then... we met..."*) and couple signature.

---

## 🛠️ Technology Stack

* **Framework:** [Astro v5](https://astro.build/) (Static Site Generation / Zero JavaScript runtime overhead by default)
* **Structure & Semantics:** HTML5 Semantic Elements
* **Styling & Theme:** Vanilla CSS Custom Properties (Design Tokens)
* **Graphics & Filters:** Inline & Procedural SVG (Grain, masks, and badges)
* **Animation & Motion:** GSAP 3 & Lenis smooth scroll
* **Audio Engine:** HTML5 Web Audio API
* **Language:** TypeScript

---

## 🚀 Getting Started

### Prerequisites
* Node.js `v18.0.0` or higher
* npm or pnpm / yarn

### Installation
```bash
# Clone the repository
git clone <repo-url>

# Navigate to project directory
cd cinematicwedding

# Install dependencies
npm install
```

### Running Locally
```bash
# Start local development server on http://localhost:3000
npm run dev
```

### Production Build
```bash
# Build static production bundle into dist/
npm run build

# Preview production build locally
npm run preview
```

---

## 🎨 Color Palette Reference

```
#080B0D (Pitch Black Void)
#121518 (Deep Canvas)
#1A1A1D (Dark Surface Panel)
#7A6A4D (Aged Bronze Line)
#D7C6A5 (Champagne Gold Accent)
#EAD9B2 (Warm Illuminated Gold)
#E9AD9B (Emotional Rose Gold)
#F4EFE6 (Editorial Ivory Text)
```

---

## ♿ Accessibility & Performance

* **WCAG 2.1 Level AA:** Text contrast $\ge 4.5:1$ on all reading copy against dark surfaces.
* **Keyboard Navigable:** Full `:focus-visible` golden rings on all buttons, links, and forms.
* **`prefers-reduced-motion`:** Automatically disables particle generators, parallax offsets, and long animations for users with motion sensitivity.
* **Lighthouse Score:** Engineered for $>90+$ performance and $0.0$ Cumulative Layout Shift (CLS).

---

## 📜 License

Private wedding project created for **Arjun & Meera**. All rights reserved © 2026.
