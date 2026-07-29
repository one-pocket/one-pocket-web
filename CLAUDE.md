# CLAUDE.md

Marketing site for **One Pocket** (the app lives in the sibling `one-pocket` repo — keep positioning in sync with its `CLAUDE.md`). Angular, prerendered to static HTML; pages are `src/app/pages/*`.

## Product context

One Pocket is a lightweight, minimalist budget tracker for managing a **bounded amount of money** without the complexity of a full budgeting app.

A **pocket** is money set aside for a period, a purpose, or both:

- A period — this week, this month, until payday
- A purpose — groceries, a trip, renovation, school expenses
- Both — July paycheck, weekly food allowance, December shopping

The core flow is _create a pocket → set the available amount → add expenses → see what remains → finish or archive it._

The primary question is always: **"How much is left in this pocket?"**

Positioning line: _Simple budgets for a paycheck, a period, or a purpose._

## Who it's for

Salary earners tracking spending between paychecks, anyone on a weekly or monthly allowance, someone budgeting groceries, someone tracking a trip, event, renovation, or school expenses — and anyone who finds full budgeting apps unnecessarily complicated.

**Do not frame the product as a goal, savings, travel, or event-budgeting app.** That older "one goal at a time" framing is retired; it made the product sound like a trip planner and invited purpose-specific features that don't belong.

## Product boundaries

One Pocket is not a personal-finance manager, a bank aggregator, an income-planning or accounting system, a recurring-bill tracker (that's Teiki's job), a category-driven budgeting system, or a trip/wedding/event planner.

Never describe or imply: bank connections, account reconciliation, credit cards, income allocation, nested categories, pocket-specific templates (no Travel → Flights, no Wedding → Catering), dense charts, or financial dashboards. A cross-pocket total is deliberately absent.

Categories are **not** central: optional, free-text, and fully ignorable. Don't give them billing in copy, headings, or image alt text.

## Copy rules

- Say what a pocket can be with a **balanced** mix of everyday and purpose-specific examples — paycheck and monthly spending alongside trip and renovation. Purpose-only lists ("a trip, a gift, a project") are the old framing.
- Archived pockets are **completed periods or purposes**, not only "memories" — the wording has to work for "July Paycheck" as well as "Japan Trip".
- Keep the strongest existing line: **what's left is the only headline.**
- Calm and plain. No hype, no feature-count bragging, no charts.

## Where copy lives

Home page title and description exist in **three** places that must stay in sync, or the page ships contradicting metadata:

1. [`src/index.html`](src/index.html) — static `<title>`, `<meta name="description">`, and the JSON-LD `description`
2. [`src/app/pages/home/home.ts`](src/app/pages/home/home.ts) — the `Seo.update()` call (drives canonical, Open Graph, Twitter)
3. [`src/app/pages/home/home.html`](src/app/pages/home/home.html) — the visible hero

Per-page SEO is set from each page component so values are baked into the prerendered HTML.

## Conventions

- Prettier is configured — match existing formatting.
- Theme: light/dark via `data-theme` on `<html>`, resolved before first paint in `index.html`. Both themes must stay complete; use the CSS custom properties in `src/styles.css`, never hardcoded colors.
- Features are hairline rows, not cards. Don't add card chrome, shadows, or illustration beyond the existing mascot.
- Images need `width`/`height` and `loading="lazy"` below the fold.
