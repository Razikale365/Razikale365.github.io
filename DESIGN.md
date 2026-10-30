# João Paulo Navarro — design system

## 0. Direction
- Private operational systems are the principal evidence; no private records or source dumps are published.
- Warm editorial rhythm, hairline structure, muted surfaces and readable product evidence. Geist Sans and Newsreader replace proprietary fonts.
- Short hero, then substantial proof, then progressively deeper content; compact metadata stays separate from the narrative.
- No generated project imagery: deterministic architecture diagrams show the real software. The chosen direction is warm engineering fieldnotes, not a screenshot gallery.

## 1. Atmosphere & Identity
A carefully edited engineering fieldbook. Warm paper, charcoal ink, forest-green links, numbered work and small annotations. Signature: large serif statement paired with a compact index of real systems, followed by diagrams showing the rules each system protects. Product evidence dominates biography. Recruiter sees role/contact/work immediately; manager gets architecture and tradeoffs on dedicated case pages.

## 2. Color
CSS tokens: --paper #f7f6f2; --surface #ffffff; --ink #242824; --muted #5e645e; --line #d8ddd5; --accent #245b45; --accent-hover #173e2f; --tint #e7eee5; --blue #244f70; --blue-tint #eaf0f5; --amber #72521c; --amber-tint #f4eddf. Dark theme (screen only; print always uses the light tokens): --paper #161a17; --surface #1f2420; --ink #e8ebe6; --muted #a6aea5; --line #363d37; --accent #82c7a4; --accent-hover #a9dcc1; --tint #22352b; --blue #9fc6e6; --blue-tint #1d2a35; --amber #e2c07f; --amber-tint #332a1a. It follows `prefers-color-scheme` unless the header toggle stored a choice (`data-theme` on the root element). All text must meet AA in both themes. Status is always written, never conveyed by color alone.

## 3. Typography
Self-hosted Geist Sans, weights 400/500/600; Newsreader variable normal for display. Sans fallback Arial; serif fallback Georgia. Body 16px/1.65; lead 20px/1.6; small 14px/1.5; eyebrow 12px/1.5 with .1em tracking; display clamp(44px,6vw,80px)/1.04, tracking -.045em; section clamp(32px,4vw,48px)/1.12; project 28px/1.2; subheading 20px/1.35. Text max 65ch.

## 4. Spacing & Layout
4px base. Tokens --s1 4px, --s2 8px, --s3 12px, --s4 16px, --s5 20px, --s6 24px, --s8 32px, --s10 40px, --s12 48px, --s16 64px, --s20 80px, --s24 96px. Container 1184px, responsive gutters clamp(20px,5vw,64px). Main document owns scrolling. Hero 7:4 split above 900px, work rows 1:1, case body 2:1. All become single-column at 768px. Nav wraps naturally; no hamburger needed for three links. No full-height empty hero. Test 375/768/1280/1536 and 320px.

## 5. Components
- Link: real anchor, inline/nav/button variants. 44px button height. Hover underline or accent shift, active darkening, 3px focus outline with 4px offset. No disabled fake links.
- LanguageSwitch: a nav of three real anchors (EN / PT-BR / SV) to the same page in each language. 44px targets; the current language is filled with ink and marked `aria-current="page"`. Works without JavaScript.
- ThemeToggle: 44px icon button with a fixed accessible name ("Dark theme", translated) and `aria-pressed`. It stays hidden until its inline script runs, so there is never a dead control without JavaScript.
- Badge: span, green/blue/amber status variants, 14px text. No interaction.
- SectionHeading: eyebrow + h2, optional brief introduction. Semantic heading order.
- ProjectRow: numbered metadata, h3 link, outcome statement, compact tags, architecture figure; one clear case-study link. Article not clickable div.
- Flow: labeled figure with ordered steps, connecting rules and figcaption. Real HTML, one column on mobile; explicitly architecture rather than a screenshot.
- EvidenceNote: aside with title and concise technical explanation, tinted surface.
- CaseLayout: shared page shell + metadata, problem, decisions, diagram, validation/current state, next case navigation.
- EvidenceCapture: genuine product screenshot inside the existing figure treatment, linked to full size. Explicit source and demo captions; no altered product output. Desktop capture max-width 791px; mobile capture max-width 320px. Secondary gallery uses a 2.3:1 grid, existing spacing tokens and a single column below 768px. These widths preserve screenshot text rather than stretch it.
- Primitives are checked at mobile/tablet/desktop before product composition. Static primitives have no loading/error states. Links are checked for keyboard, focus, hover, active.

## 6. Motion & Interaction
No entry or scroll animation; all evidence immediately visible. Native navigation and native details where useful. Link state changes immediate. Reduced-motion query disables smooth scrolling; default scrolling remains native. No decorative motion.

## 7. Depth & Surface
Tonal paper → white and quiet 1px borders. Radius 4px buttons, 8px evidence panels. No glass, gradients or heavy shadows. Diagram layers carry information through sequence and annotations. No decorative raster assets.

## 8. Accessibility Constraints & Accepted Debt
Target WCAG 2.2 AA: keyboard reachable anchors, skip link, visible focus, 4.5:1 normal text, 3:1 large text, meaningful figure descriptions, one h1 per page, 44px main touch targets. Content available without JavaScript; 200% zoom and reduced motion supported. No consent banner because no tracking/cookies. No accepted accessibility debt.

The Study Brain case preserves the editorial system. Recruiters can skim the three project roles; technical reviewers can inspect the synthetic PDF, evidence JSON and full-size captures. Screenshot text is supplementary: semantic prose and downloadable text evidence explain the same claims. Fictional content is labeled before the captures. Crops remove unrelated history; labels and output remain unchanged.

## 9. A4 print (résumé)
Each language's résumé is rendered to a single A4 page via `src/styles/resume.css` print rules. The tight-but-readable spacing uses: page margins `10mm 12mm`; body `10pt` with `line-height: 1.3`; display `25pt` with `4pt` bottom margin; lead `13pt` with `4pt` bottom; section `8pt` top margin and `5pt` padding; `h2` `14pt` with `4pt` bottom; `h3` `10pt` with `1pt` bottom; paragraphs `4pt` bottom; list items `2pt` padding; lists `3pt` vertical margin; project blocks `5pt`; contact/small `9pt`; links in sections never wrap. Portuguese and Swedish are longer than English. When a translation pushes the page over, tighten the wording rather than the spacing.
