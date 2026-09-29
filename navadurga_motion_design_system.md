# Navadurga Temple Website — Professional Motion Design System

## Creative Direction

### Core Concept

**A Living Temple Carved in Time**

The website should feel like a cinematic journey through the Navadurga Peethakshetram—not a conventional event page, dashboard, or card-based landing page.

The visual language combines:

- Krishna Shila-inspired stone architecture
- Aged gold and temple brass
- Muted saffron, turmeric, sandalwood, and vermilion
- Cinematic documentary title sequences
- Adobe After Effects-inspired compositing
- Editorial typography
- Real temple photography
- Restrained, meaningful motion

The design must feel:

**Sacred · Architectural · Cinematic · Mature · Premium · Authentic · Immersive**

---

# 1. Design Principles

## 1.1 Composition Before Decoration

Every visual element must have a purpose.

Prioritize:

1. Focal point
2. Hierarchy
3. Negative space
4. Lighting
5. Depth
6. Material
7. Motion

Do not add particles, borders, icons, or ornaments merely to fill empty space.

## 1.2 Real Photography Is the Hero

Real temple and event photography must take priority over generated illustrations.

Avoid replacing photographs with:

- Cartoon illustrations
- Generic AI deity images
- Decorative placeholder art
- Excessive filters
- Oversaturated effects

Fallback states should remain elegant and quiet.

## 1.3 Motion Must Support Meaning

Each animation must communicate one of the following:

- Arrival
- Revelation
- Focus
- Continuity
- Transition
- Sacred atmosphere
- Completion

If an animation does not serve a clear purpose, remove it.

## 1.4 Restraint Creates Premium Quality

Do not animate every component.

Use elaborate effects only for:

- Hero introduction
- Temple reveal
- Major ceremony transitions
- Important devotional moments
- Closing sequence

---

# 2. Visual Material System

## 2.1 Color Tokens

Use colors as materials and lighting references, not as random gradients.

```css
:root {
  --stone-950: #090a0d;
  --stone-900: #111318;
  --stone-850: #181a20;
  --stone-800: #22242a;

  --krishna-shila: #171c25;
  --krishna-shila-highlight: #343b48;

  --aged-gold: #b18a48;
  --temple-gold: #d0aa63;
  --gold-highlight: #f0d59a;

  --saffron: #a95124;
  --muted-saffron: #c8793d;

  --turmeric: #c59a35;
  --sandalwood: #c6a47b;
  --vermilion: #a63c2d;

  --ivory: #eee5d5;
  --muted-ivory: #aaa294;
  --shadow: rgba(0, 0, 0, 0.45);
}
```

### Color Rules

- Use dark stone as the dominant surface.
- Use gold for hierarchy and sacred accents.
- Use saffron and vermilion sparingly.
- Keep body text ivory or muted ivory.
- Avoid neon colors.
- Avoid rainbow gradients.
- Avoid bright gold on every element.
- Gold should appear aged, brushed, engraved, or softly illuminated.

## 2.2 Surface Treatments

Use subtle layered surfaces:

- Fine stone grain
- Low-contrast noise
- Soft vignette
- Faint carved-line patterns
- Atmospheric haze
- Subtle radial illumination

Do not use a strong repeating texture that distracts from reading.

## 2.3 Lighting Model

Treat light as if it exists in a physical temple environment.

Lighting sources may include:

- Oil lamp glow
- Soft overhead moonlight
- Warm side lighting
- Golden rim light
- Diffused ceremonial illumination
- Very subtle volumetric haze

Lighting should be directional and restrained.

---

# 3. Typography System

## 3.1 Typography Personality

Typography should feel ceremonial and editorial, not playful.

Suggested roles:

- Telugu display: Ramabhadra or Peddana
- Telugu body: Noto Sans Telugu
- English display: Cinzel
- English body: Outfit or a similarly clean sans-serif

## 3.2 Hierarchy

```text
Display Title:
Large, spacious, high contrast, slow reveal

Section Title:
Strong but restrained

Event Title:
Editorial and readable

Metadata:
Small uppercase English or clear Telugu labels

Body:
Comfortable line-height and high contrast
```

## 3.3 Typography Animation

Use:

- Mask reveal
- Line-by-line reveal
- Subtle opacity transition
- Small vertical displacement
- Letter-spacing transition for short labels

Avoid:

- Typewriter effects for ceremonial headings
- Random character scrambling
- Excessive bounce
- Fast word-by-word animation
- Text moving over busy particles

---

# 4. Motion Language

## 4.1 Timing Categories

```ts
export const motionDurations = {
  micro: 0.18,
  quick: 0.35,
  standard: 0.65,
  cinematic: 1.2,
  reveal: 1.8,
  ceremonial: 2.8,
};
```

These are starting points. Adjust based on visual testing.

## 4.2 Easing

Prefer cinematic easing over default spring motion.

```ts
export const easings = {
  smooth: [0.22, 1, 0.36, 1],
  reveal: [0.16, 1, 0.3, 1],
  gentle: [0.25, 0.1, 0.25, 1],
  exit: [0.7, 0, 0.84, 0],
};
```

Use springs only for:

- Interactive drag
- Small responsive UI feedback
- Natural physical interactions

Do not use bouncing springs for major scene transitions.

## 4.3 Motion Rules

- Animate transform and opacity whenever possible.
- Avoid animating layout properties continuously.
- Use stagger sparingly.
- Keep movement slow enough to feel intentional.
- Avoid constant background motion.
- Use a clear beginning, transformation, and ending state.
- Avoid simultaneous movement of every layer.

---

# 5. Layered Scene Architecture

Each cinematic section should be structured into visual depth layers.

```text
Layer 0: Base background color
Layer 1: Stone texture / architectural silhouette
Layer 2: Atmospheric haze / distant dust
Layer 3: Background architectural details
Layer 4: Main photograph or focal object
Layer 5: Typography and metadata
Layer 6: Foreground particles / light accents
Layer 7: Navigation and controls
```

## Depth Rules

- Background layers move the least.
- Midground layers move moderately.
- Foreground layers move slightly more.
- Text should remain stable enough to read.
- Foreground effects must not obscure the focal image.
- Do not create exaggerated 3D tilt on every section.

---

# 6. Page-Level Storyboard

## Scene 1 — Opening Void

### Visual

- Nearly black Krishna Shila background
- Very subtle stone grain
- Sparse gold dust
- Faint architectural outline
- No immediate card grid

### Motion

1. Black screen begins almost still.
2. Low-intensity ambient light gradually appears.
3. Temple silhouette is revealed through a slow opacity and mask transition.
4. Main title emerges with a controlled mask reveal.
5. A subtle golden highlight passes across a key word.
6. Navigation appears only after the primary composition settles.

### Avoid

- Exploding particles
- Fast logo spins
- Bright glowing borders
- Multiple simultaneous text animations

## Scene 2 — Temple Revelation

### Visual

- Real temple photograph or architectural image
- Dark overlay for contrast
- Architectural frame inspired by stone carving
- Small location and celebration metadata

### Motion

- Slow camera push-in using scale and position
- Slight parallax between image and frame
- Light gradually reveals stone details
- Text remains editorial and stable

## Scene 3 — Invocation

### Visual

- Quiet composition
- Large Telugu invocation
- Minimal gold symbol or lamp
- Wide negative space

### Motion

- Text reveals through a vertical mask
- Very subtle lamp flicker
- Background dust remains almost imperceptible
- Hold the composition for a calm pause

## Scene 4 — Navaratri Introduction

### Visual

- Transition from architectural imagery to event photography
- Large date range
- 29-year legacy message
- Subtle ceremonial motif

### Motion

- Date enters first
- Supporting title follows with a stagger
- Image transitions using a slow crossfade or masked reveal
- Background lighting shifts from cool stone to warm gold

## Scene 5 — Ten-Day Program Journey

### Visual

Use an editorial timeline rather than repetitive rounded cards.

Possible composition:

- Date and day number on one side
- Large photograph in the main focal area
- Event details aligned to a stable reading column
- Small timeline marker
- Motif-specific atmosphere behind the scene

### Motion

- Active day enters focus through scale, contrast, and opacity
- Previous day recedes subtly
- Next day enters with restrained vertical movement
- Photo and metadata do not animate at unrelated speeds
- Keep the active event readable for several seconds of scroll

## Scene 6 — Ceremony Focus

Reserve stronger motion for major ceremonies:

- Maha Ooregimpu
- Deepotsavam
- Kumkumarchana
- Shata Chandi Havanam
- Maha Purnahuti
- Shobhayatra

Use one primary effect per scene:

- Procession: directional light trails
- Deepotsavam: staggered warm points of light
- Kumkumarchana: slow vermilion dust
- Havanam: subtle heat shimmer and ember particles
- Shobhayatra: controlled forward movement and ceremonial light

Do not combine every effect in one scene.

## Scene 7 — Donation and Participation

### Visual

The donation section must be trustworthy and clear.

Use:

- Calm background
- High contrast
- Simple donation categories
- Official receipt information
- Clear CTA
- No distracting particles behind financial information

Motion should be limited to:

- Gentle section reveal
- Button hover state
- Subtle focus transition
- Optional icon illumination

## Scene 8 — Closing Sequence

### Visual

- Temple image or silhouette
- Gratitude message
- Samithi name
- Contact information
- Quiet return to the stone palette

### Motion

- Gradual reduction in particles
- Slow fade toward darkness
- Final gold highlight
- No dramatic confetti or fireworks unless specifically appropriate to the ceremony

---

# 7. Particle System

## 7.1 Particle Categories

Create separate systems rather than one universal particle renderer.

```ts
type ParticleMode =
  | "ambientDust"
  | "goldenEmbers"
  | "lotusPetals"
  | "lampGlow"
  | "vermilionDust"
  | "sacredFire"
  | "lightTrails";
```

## 7.2 Ambient Dust

Characteristics:

- Very low density
- Slow drift
- Small opacity variation
- Multiple depth layers
- Soft blur for distant particles
- No sharp random flashing

Ambient dust should be almost invisible when the user is reading.

## 7.3 Golden Embers

Use for:

- Sacred fire
- Major transitions
- Warm ceremonial moments

Rules:

- Small number of particles
- Gentle upward movement
- Slightly varied velocity
- Occasional fade-out
- No constant explosions

## 7.4 Lotus Petals

Use for floral ceremonies.

Rules:

- Controlled spawn positions
- Slow rotation
- Limited depth range
- Natural gravity-like movement
- Avoid cartoon-like spinning

## 7.5 Lamp Glow

Do not render every lamp as a large glowing orb.

Use:

- Small warm light core
- Soft surrounding halo
- Slight flicker in intensity
- Staggered activation
- Limited bloom

## 7.6 Particle Performance

- Use `requestAnimationFrame`.
- Pause when the relevant section is not visible.
- Reduce particle count on mobile.
- Respect `prefers-reduced-motion`.
- Avoid creating new objects every frame.
- Reuse particle objects where possible.
- Keep text and key content outside the canvas.
- Use CSS effects for simple glows and transitions.

Suggested starting limits:

```ts
const particleLimits = {
  desktop: 180,
  tablet: 100,
  mobile: 45,
};
```

These are starting limits, not fixed requirements. Profile actual performance.

---

# 8. Scroll Choreography

## 8.1 Scroll Is a Camera

Treat scroll as controlling a virtual camera moving through a sequence of scenes.

Avoid making scroll merely trigger repeated fade-in-up animations.

## 8.2 Scene Timeline

Each scene can use a normalized progress value:

```ts
type SceneProgress = {
  enter: number;  // 0.0–0.25
  focus: number;  // 0.25–0.75
  exit: number;   // 0.75–1.0
};
```

### Enter

- Background appears
- Image begins revealing
- Metadata enters subtly

### Focus

- Main image reaches maximum visual prominence
- Typography remains readable
- Particle mode is active

### Exit

- Image reduces contrast or opacity
- Scene transitions toward the next section
- Particle intensity decreases

## 8.3 Parallax Guidelines

Use restrained values:

```ts
const parallax = {
  backgroundY: 20,
  imageY: 8,
  foregroundY: -14,
  imageScaleStart: 1.02,
  imageScaleFocus: 1.06,
};
```

Do not use extreme movement that makes the website feel like a game.

---

# 9. Photo Treatment

## 9.1 Photo Presentation

Photos should feel like cinematic stills or archival documentary images.

Use:

- Controlled aspect ratios
- High-quality cropping
- Soft shadow
- Subtle stone or brass frame
- Gentle contrast adjustment
- Optional warm highlight

Avoid:

- Thick ornamental borders on every photo
- Excessive drop shadows
- Floating sticker-like frames
- Overly rounded image containers
- Heavy filters that distort real colors

## 9.2 Focus Behavior

When a photo becomes active:

- Increase scale slightly
- Improve contrast subtly
- Raise opacity
- Illuminate the frame minimally
- Bring associated metadata into focus

When inactive:

- Reduce contrast slightly
- Lower opacity modestly
- Avoid excessive blur that harms usability

---

# 10. Architectural Framing

## 10.1 Frame Language

The architectural frame should be inspired by:

- Stone pillar geometry
- Temple arches
- Carved floral borders
- Brass lamp details
- Traditional geometric reliefs

Use SVG or CSS for simple frame details.

Use real scanned or photographed textures only when licensing and performance are appropriate.

## 10.2 Rules

- Frames should not dominate the photograph.
- Decorative corners must remain aligned.
- Do not use ornamental borders around every text block.
- Frame complexity should vary by hierarchy.
- Hero and major ceremony scenes may receive more detail.
- Ordinary schedule entries should remain simpler.

---

# 11. Interaction Design

## Navigation

Use a minimal, stable navigation system:

- Brand / Samithi identity
- Telugu / English toggle
- Day navigation
- Sound toggle
- Donation CTA
- Share action

Do not make navigation compete with the hero.

## Sound

Audio must be:

- Opt-in
- Muted by default
- Clearly controllable
- Respectful of browser autoplay rules
- Disabled or reduced when requested

Do not force audio playback.

## Reduced Motion

Implement:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

Also reduce or disable Canvas animation through JavaScript.

---

# 12. Component Architecture

Suggested components:

```text
app/
  components/
    motion/
      MotionProvider.tsx
      SceneController.tsx
      useSceneProgress.ts
      useReducedMotion.ts

    atmosphere/
      ParticleCanvas.tsx
      AtmosphericDust.tsx
      LightSweep.tsx
      TempleHaze.tsx

    architecture/
      TempleFrame.tsx
      StoneTexture.tsx
      OrnamentalDivider.tsx

    scenes/
      HeroScene.tsx
      TempleRevealScene.tsx
      InvocationScene.tsx
      FestivalIntroScene.tsx
      CeremonyScene.tsx
      ClosingScene.tsx

    schedule/
      DailyScheduleSection.tsx
      DayScene.tsx
      SubProgramPhoto.tsx
      EventMetadata.tsx

    navigation/
      NavHeader.tsx
      DayNavigator.tsx
      LanguageToggle.tsx
      AudioToggle.tsx

    donation/
      DonationSection.tsx
      DonationModal.tsx
```

## Architecture Rules

- Separate visual effects from business data.
- Keep event schedule data in typed structures.
- Do not hardcode event content inside animation components.
- Keep particle modes configurable.
- Ensure sections can render without Canvas.
- Ensure the website remains usable if animations fail.

---

# 13. Data Model for Scene Configuration

```ts
type CeremonyVisualMode =
  | "procession"
  | "bangles"
  | "lotus"
  | "flowers"
  | "shakambari"
  | "lamps"
  | "vermilion"
  | "fruits"
  | "sacredFire"
  | "bilva"
  | "shami"
  | "neutral";

type SceneConfig = {
  id: string;
  date: string;
  titleTe: string;
  titleEn: string;
  imageSrc?: string;
  visualMode: CeremonyVisualMode;
  intensity: "quiet" | "moderate" | "hero";
  focalScale?: number;
  particleDensity?: number;
};
```

The `intensity` value should control visual complexity, not simply increase every effect.

---

# 14. Quality Gate Before Accepting a Section

A section is not complete merely because it compiles.

Review each section against the following checklist:

## Art Direction

- Does it look cinematic rather than cartoonish?
- Is the focal point obvious?
- Is the composition balanced?
- Is there enough negative space?
- Does the material and lighting feel coherent?

## Motion

- Does every animation have a purpose?
- Is the easing smooth?
- Are transitions too fast?
- Are too many elements moving simultaneously?
- Does the scene have a clear entrance, focus, and exit?

## Content

- Is Telugu readable?
- Is event information easy to scan?
- Are photographs treated respectfully?
- Are timing and location details visible?
- Is the donation information clear?

## Performance

- Does the page remain responsive?
- Is Canvas paused when unnecessary?
- Does mobile use reduced particle density?
- Is reduced motion supported?
- Are layout shifts avoided?
- Does the page remain usable without animation?

---

# 15. Antigravity Implementation Workflow

Follow this order.

## Phase 1 — Visual Prototype

Implement only:

1. Hero scene
2. Temple reveal
3. One ceremony scene
4. One photo treatment
5. One particle mode

Do not build all ten days yet.

## Phase 2 — Motion Validation

Test:

- Desktop
- Tablet
- Mobile
- Reduced motion
- Slow devices
- Fast scrolling
- Keyboard navigation

## Phase 3 — Scene System

Extract reusable:

- Scene progress
- Layered parallax
- Typography reveal
- Particle mode switching
- Photo focus behavior
- Transition logic

## Phase 4 — Schedule Integration

Add the full event data and map each scene to a visual mode.

## Phase 5 — Performance and Accessibility

Run:

- `npm run build`
- Lighthouse
- Keyboard navigation checks
- Mobile performance testing
- Reduced-motion testing
- Contrast checks

---

# 16. Final Art Direction Prompt for Antigravity

Use this prompt whenever the generated output starts looking generic:

```text
Stop and reassess the visual direction.

The current output is becoming too cartoonish,
decorative, or template-like.

Return to the core concept:

"A Living Temple Carved in Time."

Use cinematic composition, Krishna Shila-inspired
materials, restrained gold lighting, real photography,
editorial typography, and purposeful motion.

Do not solve visual problems by adding more effects.

First improve:
1. Composition
2. Focal hierarchy
3. Typography
4. Lighting
5. Material consistency
6. Motion timing
7. Negative space

Use one strong visual idea per scene.

The website should feel like a professionally
art-directed cultural heritage film translated
into an interactive web experience.

If an effect looks like a demo, remove it.
If an animation looks playful, replace it.
If a decorative element does not improve
the composition, delete it.
```

---

# 17. Success Criteria

The final website should make visitors feel:

- They are entering a sacred architectural space.
- The temple has history and physical presence.
- The festival has a coherent visual narrative.
- Real photographs are important and respected.
- Motion is intentional rather than distracting.
- Information remains accessible and trustworthy.

The target is not maximum animation.

The target is:

**A calm, cinematic, culturally grounded, technically polished temple experience.**
