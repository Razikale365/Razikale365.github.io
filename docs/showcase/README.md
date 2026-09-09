# Development-only component showcase

`primitives.astro` is the original, verified component harness, archived outside production routes. Its imports are intentionally relative to `src/pages/`.

To revisit component states, temporarily copy it to `src/pages/primitives.astro`, run the development server on port 4321, then run `node scripts/qa-primitives.mjs`. Remove that temporary route before a production build. The normal product check is `pnpm test` against the production preview on port 4322.
