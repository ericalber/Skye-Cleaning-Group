# UI Kits Wrappers

Premium wrappers extracted from design kits. Use these across hubs e spokes to ensure consistent elevation and motion.

- `Card` – angled-cut premium card with elevation. Accepts `as`, `active`, and `padding`. Content goes inside; defaults to `p-6`.
- `Pill` – rectangular chip for filters/bairros. Use `active` for selected state. Works as `button` or `span`.
- `Accordion` – utility for FAQs e serviços. Pass items `{ title, description?, content }`. Supports single or multi open states with the `allowMultiple` flag.
- `Button` – base CTA variants (`primary`, `secondary`, `ghost`) with hover movement.
- `Modal` – lightweight overlay. Provide a React element as `trigger` and any JSX for `children`. Optional `title`, `description`, `size`.
- `Motion.ts` – shared motion tokens (`tripTakerMotion`, `tripTakerSoftFade`).

Tip: wrap reusable compositions inside `src/components/blocks/` and compose with these building blocks.
