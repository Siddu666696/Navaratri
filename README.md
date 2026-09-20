# Sharannavaratri Utsavams 2026: Sri Navadurga Peethakshetram, Jagtial

A cinematic, bilingual (Telugu / English) landing page that tells devotees what
is happening on each of the ten days, when, and where. Built with Next.js
(App Router), React, TypeScript and Framer Motion.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## What to edit

| Task                                   | File                              |
| -------------------------------------- | --------------------------------- |
| Phone / WhatsApp / e-mail, site URL    | `src/data/site.ts`                |
| Any wording (Telugu and English)       | `src/data/copy.ts`                |
| Daily programme, times, ceremonies     | `src/data/schedule.ts`            |
| Which effect a ceremony uses           | `src/lib/scene.ts`                |
| Colours, fonts, spacing                | `src/app/globals.css`             |
| Photographs                            | `public/images/` (see README there) |

Empty contact fields are hidden automatically. The donation button calls the
Samithi once `contact.phone` is set; until then it points to the Visit section.

## Structure

```
src/
  app/                 layout (fonts, providers) and page (scene order)
  components/
    motion/            MotionProvider, useSceneProgress, TextReveal
    atmosphere/        ParticleCanvas + particleModes (dust, embers, lamps,
                       vermilion, petals, sacred fire, light trails)
    architecture/      StoneTexture, TempleSilhouette, TempleFrame
    scenes/            Hero, TempleReveal, Invocation, FestivalIntro, Visit, Closing
    schedule/          DailyScheduleSection, DayScene, DayNavigator, PhotoFrame ...
    navigation/        NavHeader, LanguageToggle
    donation/          DonationSection
  data/                site, copy, schedule (typed, no animation code)
  context/             LanguageContext
  lib/                 motion tokens, formatting, ceremony -> effect mapping
```

## Motion and performance notes

- Scroll acts as a camera: pinned temple reveal, slow push-in, restrained parallax.
- Only days with a major ceremony (1, 5, 6, 8, 10) run a strong effect, and only
  one effect per scene. Quiet days use faint dust or none.
- Particle canvases pause when off-screen or when the tab is hidden, use pooled
  particles and pre-rendered sprites, and scale down on tablet and mobile
  (180 / 100 / 45 budget).
- `prefers-reduced-motion` is honoured: transforms snap, CSS animation and
  transitions are near-instant, and canvases draw a single still frame.
- Nothing is required for reading: with JavaScript animation disabled the
  content and schedule remain fully usable.

## Content notes

- Dates, timings and programme text come from the 2026 programme list.
- Tithi names for days 2, 3, 4, 6, 7 and 10 follow the sequence from the days the
  list names explicitly (Padyami, Lalitha Panchami, Durgashtami). Please verify
  against the panchangam.
- The programme does not give a phone number, bank or UPI details, so none are
  shown. Add them in `src/data/site.ts`.
- Sound is not included; if you add temple audio, make it opt-in and muted by default.
# Navaratri
