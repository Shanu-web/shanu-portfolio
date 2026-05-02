# Portfolio Rebuild Plan — v2

**Owner:** Shanu Choudhary
**Date:** 2 May 2026
**Direction picked:** Hybrid positioning (senior brand + open to consulting and full-time) · Full reimagination · Premium B2B / enterprise-trust aesthetic

---

## 1. Why we're rebuilding

The current site is technically modern (React 18 + Vite 5 + Tailwind 3 + Framer Motion + React Router 6, deployed via gh-pages). What it actually fails at:

- **Positioning is fuzzy.** The hero reads as a resume bullet, not a hook. A visitor cannot tell in 5 seconds what to hire you for.
- **No business-model surface.** You asked for "business plans" — the current site has zero engagement-model clarity (advisory vs. project vs. fractional vs. audit).
- **Case studies are thin.** Ghumastic and PashuGuru have nice metrics (120 req/min, 35% infra savings, 1000+ daily queries) but no narrative — what was the problem, why did the architecture choices matter, what did the customer get?
- **Differentiation is generic.** "Reliable, privacy-first, observable integrations" is what every senior integration engineer says. Your real edge — *the rare person who can rip out a legacy SAP/Workday integration AND ship a LangGraph agent on top of it* — never lands cleanly.
- **No social proof.** JP Morgan, AB InBev, Shell sit buried in employment history. They should be a "trusted by" strip above the fold.

So: keep the bones, replace everything that talks to the visitor.

---

## 2. Positioning rewrite

### Headline (final — Builder framing)
> **I build integration and AI systems that survive production.**

### Sub-pitch (one line under hero)
> Eight years writing the integration layer for global enterprises. I make things on the side — Amelytic, AmelyticForge, PashuGuru. Once a week, I open my calendar to students for free.

(Note: never name a current employer in the same paragraph as the side-project list. The four employers belong in the Career trust strip only. See the JPMC scrubbing rule in memory.)

### What makes you different (3 pillars to repeat across the site)
1. **Enterprise discipline** — OAuth2.0/JWT, observability, governance, the boring stuff that actually matters at scale.
2. **AI that ships** — not demos. LangGraph agents, RAG pipelines, voice flows that handle real traffic with real SLOs.
3. **Cross-vertical fluency** — finance (JPMC), CPG (AB InBev), energy (Shell), agritech (PashuGuru), travel (Ghumastic). Pattern recognition across industries.

---

## 3. Information architecture

```
/                  Home — hero, trust strip, metric tiles, featured work, services teaser, CTA dual
/work              Case studies index — Ghumastic, PashuGuru, Enterprise Kits, JPMC/AB InBev/Shell anonymized
/work/:slug        Deep case study — problem, architecture, decisions, metrics, lessons
/services          NEW — engagement models: Advisory, Architect, Build, Audit. Pricing posture, not exact rates.
/writing           NEW — MDX-powered notes/blog. Even 3 strong posts establish point of view.
/about             Story, philosophy, timeline, certifications, languages
/contact           Form + calendar booking + response SLA
```

### Navigation
Top nav: Work · Services · Writing · About · Contact + dark/light toggle + EN/HI toggle

---

## 4. Visual system (Premium B2B / enterprise-trust)

### Typography
- **Display & headings:** Inter Tight (700/600/500) — modern, geometric, enterprise-friendly
- **Body:** Inter (400/500) — workhorse, ATS-readable
- **Mono accents:** JetBrains Mono — for code, metrics, technical labels

### Color (light-first, dark mode mandatory)
- `--bg`: #FBFBFD (off-white, less harsh than pure white)
- `--surface`: #FFFFFF
- `--ink`: #0A0E1A (near-black, not pure)
- `--ink-muted`: #4A5568
- `--accent`: #1E40AF (deep enterprise blue) — primary CTAs, links
- `--accent-soft`: #DBEAFE (background tints)
- `--gold`: #B8860B (rare, for premium accents only — case study dividers, CTA highlights)
- `--success`: #047857
- `--border`: rgba(10,14,26,0.08)
- Dark mode: invert with #0A0E1A canvas, #161B26 surfaces, #93C5FD accent

### Motion
- Subtle scroll-driven reveals (Framer Motion `whileInView`)
- Soft parallax on hero
- View Transitions API for page changes (modern, no library)
- Hero accent: animated SVG/Canvas network of integration nodes — not gimmicky, low-opacity, decorative

### Components needed
- `LogoStrip` — JP Morgan, AB InBev, Shell, MuleSoft, Azure, AWS, OpenAI (all monochrome, hover desat→full)
- `MetricTile` — large number + label + sub-label (7+ years · 500+ APIs · 4 Fortune 500s · 3 verticals)
- `CaseStudyCard` v2 — cover image/visual, vertical, role, 1-line outcome, 3 chip tags
- `CaseStudyDeep` — MDX layout: problem → constraints → architecture (diagram) → decisions → outcomes (metrics) → lessons
- `ServiceCard` — engagement type, what's included, ideal-for, starting-from posture
- `Testimonial` (placeholder) — quote, name, role, company, photo
- `Pillar` — icon, title, paragraph (the 3-pillars block)
- `WritingCard` — date, title, reading time, excerpt
- `CTABand` — full-width band with dual CTA (Book a call · Email me)

---

## 5. Tech additions

| Add | Why | Cost |
|-----|-----|------|
| `@mdx-js/rollup` + `remark-gfm` | MDX-powered case studies and writing | low |
| `@react-three/fiber` + `drei` | Subtle WebGL hero accent (optional, can ship without) | medium |
| `lucide-react` | Consistent icon system | low |
| `clsx` + `tailwind-merge` | Sane className composition | trivial |
| `@vercel/og` or static OG images | Per-page social cards | low |
| Schema.org JSON-LD | SEO for Person + WorkExperience | trivial |
| `vite-plugin-sitemap` | Auto sitemap.xml | trivial |
| Plausible or Umami snippet | Privacy-friendly analytics | trivial |

Keep: React 18, Vite 5, Tailwind 3, Framer Motion 11, React Router 6, the i18n dictionary, the theme context.

Drop: gh-pages config still works; the `legacy_static/` folder can be deleted after we confirm nothing references it.

---

## 6. Content blueprint

### Featured products (Builder framing — three live products)
1. **Amelytic** — agentic marketing workspace (Plan → Generate → Approve → Publish → Analytics across 13+ channels). Pashushala runs on it as a featured brand.
2. **AmelyticForge** — separate AI agent builder. Domain experts, 25+ languages in true script, MySQL/Postgres/Mongo connections, deploys to web/iframe/WhatsApp/voice.
3. **PashuGuru** — multilingual livestock advisor for farmers, voice in/out, 6 Indian languages, vet escalation under 15 min.

**Do not write employer case studies.** Anonymized JPMC / AB InBev / Shell case studies are out — they make the public site look like a paid-consulting prospectus from a current JPMC employee, which is the OBA-trigger we're scrubbing. The four employers appear ONLY as logos in the Career trust strip and as a sub-label on the "4 Fortune 500 employers" metric tile. Nowhere else.

For employer case studies, vet with each company's policy before publishing — anonymized framing usually fine, named outcomes need approval.

### Services — DROPPED entirely from the public site.
The earlier draft had five paid consulting tiers (Advisory / Architect / Build / Audit / Conversational AI). All five are killed. JPMC's Outside Business Activity policy makes selling paid engagements from a LinkedIn-linked site an active compliance risk while Shanu is employed there. The only "service" on v3 is **free office hours for students** — pro bono, low risk, on-brand for the Builder positioning. Revisit paid tiers post-JPMC.

Don't publish exact prices unless you want to. "Starting from" + a mailto form is enough — the goal is to qualify, not transact.

### Writing (seed posts)
1. *"What enterprise integration teams get wrong about LLM agents"* — opinion piece, 1200 words
2. *"MuleSoft + LangGraph: the orchestration patterns that actually work"* — technical, 1800 words
3. *"OAuth2.0 to JWT migration without taking down production"* — war story from Shell, 1500 words

Three solid posts > thirty thin ones.

---

## 7. Phased delivery

### Phase 0 — Plan & visual proof (this session)
- ✅ Audit current site
- ✅ This plan document
- ✅ Standalone HTML preview of new homepage (`preview/v2-homepage.html`)

### Phase 1 — Foundation (next session, 1–2 days)
- Set up new design tokens in `tailwind.config.js` (typography scale, color tokens, spacing rhythm)
- Add `lucide-react`, `clsx`, `tailwind-merge`
- New `Layout`, `Navbar`, `Footer` with refined IA
- New `Home` page with hero, logo strip, metric tiles, pillars, featured-work teaser, services teaser, CTA band
- Replace all hero/about copy

### Phase 2 — Case studies (1–2 days)
- Add MDX support to Vite
- Build `CaseStudyDeep` layout
- Migrate Ghumastic, PashuGuru into MDX
- Add 1 anonymized employer case study to validate the pattern

### Phase 3 — Services & writing (1 day)
- `Services` page with engagement-model cards + qualifier form
- `Writing` index + first post

### Phase 4 — Polish (1 day)
- WebGL hero accent (or polished SVG fallback)
- Page transitions, scroll reveals
- OG images per page
- JSON-LD, sitemap, analytics
- Lighthouse pass: target 95+ on all four metrics
- a11y pass: WCAG 2.1 AA

### Phase 5 — Launch
- Deploy to gh-pages on a preview branch
- Side-by-side QA against the old site
- Cut over

---

## 8. Decisions you still need to make

1. **Real client logos in the trust strip?** JP Morgan, AB InBev, Shell — using their marks is defensible since they're listed on your resume, but some employers have strict guidelines. Safer alternative: text-only "Previously at" strip in a refined typeface.
2. **Anonymized employer case studies — yes/no?** They massively strengthen the site, but each one needs a quick policy check. Recommendation: yes, with anonymized framing, no internal screenshots, no named systems beyond what's already public.
3. **Pricing visibility on services.** Three options: (a) exact prices, (b) "starting from", (c) "talk to me". Recommendation: (b) — qualifies leads without scaring off enterprise buyers.
4. **WebGL hero accent — yes/no?** Adds ~30KB and 1 day of polish. Beautiful when done well, distracting when half-done. Recommendation: ship Phase 1–3 first, decide based on how the rest looks.
5. **Domain.** Currently on `<username>.github.io/shanu-portfolio` — strongly recommend a custom domain (`shanu.dev` or `shanuc.com` or similar) before you put services pricing on it. Custom domain costs $10–$15/yr and signals seriousness.

---

## 9. Risks & mitigations

| Risk | Mitigation |
|------|------------|
| Employer logo/case study policy issues | Anonymize by default; check with each before naming |
| Over-design — losing the engineer-credibility signal | Premium B2B aesthetic chosen specifically for this; restraint over flash |
| Services page reads as "I'm leaving JP Morgan" | Frame as "I take select side projects" — hybrid positioning is the whole point |
| MDX migration complexity for case studies | Phase 2 — only do it after Phase 1 ships and proves value |
| Bilingual content drift (EN/HI) | Translate the navigation + hero only; case studies and writing English-only is fine |

---

*Next step: open `preview/v2-homepage.html` in a browser, react to the visual direction, then we kick off Phase 1.*
