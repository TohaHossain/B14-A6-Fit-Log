# FitLog — Workout Library

FitLog is a dark, responsive workout companion for finding lifts, creating a focused five-exercise daily plan, and saving workouts for later. It is built around the FitLog exercise API and works cleanly on mobile, tablet, and desktop screens.

## Live functionality

- Browse all twelve API-supplied workouts in a responsive card library.
- Search workouts by lift name or muscle group and sort by duration, calories, or rating.
- View detailed lift files with media, key specs, instructions, and workout statistics.
- Add workouts to Today’s Plan (up to five) or save them for later, with immediate toast feedback.
- Track live plan metrics for exercise count, minutes, and calories.
- Mark planned workouts complete, remove entries, and jump back to each workout’s details.
- Persist plan, saved, and completion state across browser reloads with `localStorage`.
- Use friendly loading, empty, not-found, and error states throughout the app.

## Technology

- [Next.js 16](https://nextjs.org/) with the App Router and TypeScript
- [React 19](https://react.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/) and [daisyUI](https://daisyui.com/)
- [React Toastify](https://fkhadra.github.io/react-toastify/) for notifications
- [Lucide](https://lucide.dev/) icons
- [FitLog API](https://api.abcz.workers.dev/api/fitlog) for workout content

## Run locally

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000). For a production validation, run `npm run build`.

## Main routes

| Route | Purpose |
| --- | --- |
| `/` | Workout library, hero, search, and sorting |
| `/workouts/[id]` | Individual workout details and actions |
| `/my-plan` | Today’s Plan, saved workouts, metrics, and workout log |
| Any unknown route | Custom FitLog 404 page |

