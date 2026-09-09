# João Navarro — design system

## 0. Research Log
- Repository audit precedes visual work. Private operational systems are the principal evidence; no private records or source dumps are published.
- Embedded shortlist: Notion, Claude, Vercel. Selected minimalist-skill + Notion for warm editorial rhythm, hairline structure, muted surfaces and readable product evidence. Geist Sans and Newsreader replace proprietary fonts.
- Lazyweb: two searches (editorial portfolio case study; notion marketing), two screens viewed (Notion landing, Product Hunt makers). Harvested short hero → substantial proof → progressively deeper content; compact metadata separate from narrative. Reference images stay ignored under output/research.
- Imagen-specific tool unavailable. No generated project imagery: deterministic architecture diagrams satisfy the user's preference for truthful software evidence. Concepts considered: dark technical journal, white product gallery, warm engineering fieldnotes. Selected warm fieldnotes for reading and differentiation; not a screenshot clone.

## 1. Atmosphere & Identity
A carefully edited engineering fieldbook. Warm paper, charcoal ink, forest-green links, numbered work and small annotations. Signature: large serif statement paired with a compact index of real systems, followed by diagrams showing the rules each system protects. Product evidence dominates biography. Recruiter sees role/contact/work immediately; manager gets architecture and tradeoffs on dedicated case pages.

## 2. Color
CSS tokens: --paper #f7f6f2; --surface #ffffff; --ink #242824; --muted #5e645e; --line #d8ddd5; --accent #245b45; --accent-hover #173e2f; --tint #e7eee5; --blue #244f70; --blue-tint #eaf0f5; --amber #72521c; --amber-tint #f4eddf. All text must meet AA. Status is always written, never conveyed by color alone.

## 3. Typography
Self-hosted Geist Sans, weights 400/500/600; Newsreader variable normal for display. Sans fallback Arial; serif fallback Georgia. Body 16px/1.65; lead 20px/1.6; small 14px/1.5; eyebrow 12px/1.5 with .1em tracking; display clamp(44px,6vw,80px)/1.04, tracking -.045em; section clamp(32px,4vw,48px)/1.12; project 28px/1.2; subheading 20px/1.35. Text max 65ch.

## 4. Spacing & Layout
4px base. Tokens --s1 4px, --s2 8px, --s3 12px, --s4 16px, --s5 20px, --s6 24px, --s8 32px, --s10 40px, --s12 48px, --s16 64px, --s20 80px, --s24 96px. Container 1184px, responsive gutters clamp(20px,5vw,64px). Main document owns scrolling. Hero 7:4 split above 900px, work rows 1:1, case body 2:1. All become single-column at 768px. Nav wraps naturally; no hamburger needed for three links. No full-height empty hero. Test 375/768/1280/1536 and 320px.

## 5. Components
- Link: real anchor, inline/nav/button variants. 44px button height. Hover underline or accent shift, active darkening, 3px focus outline with 4px offset. No disabled fake links.
- Badge: span, green/blue/amber status variants, 14px text. No interaction.
- SectionHeading: eyebrow + h2, optional brief introduction. Semantic heading order.
- ProjectRow: numbered metadata, h3 link, outcome statement, compact tags, architecture figure; one clear case-study link. Article not clickable div.
- Flow: labeled figure with ordered steps, connecting rules and figcaption. Real HTML, one column on mobile; explicitly architecture rather than a screenshot.
- EvidenceNote: aside with title and concise technical explanation, tinted surface.
- CaseLayout: shared page shell + metadata, problem, decisions, diagram, validation/current state, next case navigation.
- Primitives are checked at mobile/tablet/desktop before product composition. Static primitives have no loading/error states. Links are checked for keyboard, focus, hover, active.

## 6. Motion & Interaction
No entry or scroll animation; all evidence immediately visible. Native navigation and native details where useful. Link state changes immediate. Reduced-motion query disables smooth scrolling; default scrolling remains native. No decorative motion.

## 7. Depth & Surface
Tonal paper → white and quiet 1px borders. Radius 4px buttons, 8px evidence panels. No glass, gradients or heavy shadows. Diagram layers carry information through sequence and annotations. No decorative raster assets.

## 8. Accessibility Constraints & Accepted Debt
Target WCAG 2.2 AA: keyboard reachable anchors, skip link, visible focus, 4.5:1 normal text, 3:1 large text, meaningful figure descriptions, one h1 per page, 44px main touch targets. Content available without JavaScript; 200% zoom and reduced motion supported. No consent banner because no tracking/cookies. No accepted accessibility debt.
