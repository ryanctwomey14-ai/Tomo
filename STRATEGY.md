# Tomo Tomo Acquisitions — Website Strategy

**Business:** Multifamily real estate investment fund / syndicator (value-add apartments)
**Primary conversion:** Request access (email + accreditation status) → Call with a principal → Offering review → Subscription
**Build:** `site/` (static HTML/CSS/JS, ready to port to Webflow, WordPress or Next.js)

> ⚠️ **Compliance comes first.** You're offering securities, so the whole site has to fit your SEC exemption. Sort this out before anything goes live (see §9).

---

## 1. Ideal Customer

### Primary persona: "The Busy Accredited Professional"
| Attribute | Detail |
|---|---|
| Who | Physicians, dentists, CRNAs, attorneys, tech leaders, engineers, business owners |
| Age | 38–62 |
| Financial profile | $250k–$1M+ household income, $1M–$10M net worth, accredited |
| Current portfolio | Heavy in 401(k), index funds and RSUs. Maybe 1–3 rental homes they manage themselves |
| Tax situation | High W-2 or K-1 income with top marginal brackets. Looking hard for legal shelter |
| Time | Very little. Long clinical or work hours, family commitments |
| Mindset | Analytical, skeptical, reads the fine print. Wants to understand before committing |
| Check size | $50k–$250k per deal, recurring once trust is built |

### Secondary personas
- **The Burned-Out Landlord.** Owns 2–10 doors and is tired of "toilets, tenants and trash." Wants to trade active for passive.
- **The Liquidity-Event Investor.** Recently sold a business, got an equity payout or inheritance. Needs to put capital to work carefully.
- **The Retirement-Account Diversifier.** Wants real assets in a self-directed IRA or Solo 401(k).
- **Family offices and RIAs** (later stage). Want institutional-grade reporting and larger allocations.

---

## 2. Pain Points
1. **Volatility fatigue.** "My net worth swung 20% last year and I did nothing wrong."
2. **Tax drag.** "I pay 40%+ of every raise to taxes and my CPA has no ideas."
3. **No time.** "I know real estate builds wealth, but I can't be a landlord."
4. **Bad past experiences.** Rentals that bled cash, a sponsor who went dark, a deal that never distributed.
5. **Information asymmetry.** "I don't know how to evaluate a sponsor or a deal. What questions should I even ask?"
6. **Concentration risk.** Too much in one employer's stock, one market or one asset class.
7. **Fear of the rate environment.** Heard about floating-rate syndications that blew up in 2023–2024.

## 3. Buying Triggers
| Trigger | What happens | How the site responds |
|---|---|---|
| Tax season | CPA bill arrives | Tax-benefits content, cost-segregation explainer, "Depreciation 101" guide |
| Market drop | Portfolio falls | "Why multifamily" content, low correlation data |
| Liquidity event | Bonus, RSU vest, business sale | "Deploying capital" guide, intro call CTA |
| Peer referral | Colleague mentions passive income | Referral landing page, investor testimonials |
| Rental burnout | Bad tenant or big repair | "Active vs. passive" comparison |
| New offering email | Deal announcement | Access list receives offering notices first |
| Year-end planning | Q4 tax-loss planning | Seasonal content and webinar |

## 4. Objections and How the Site Answers Them
| Objection | Answer on site | Where |
|---|---|---|
| "Who are you? Why trust you?" | Team bios, track record, co-investment, third-party admin | About, Home trust bar |
| "What if the deal goes bad?" | Conservative underwriting rules, fixed-rate debt, reserves, stress tests | Strategy, "Risk is managed, not ignored" |
| "Syndications blew up with floating debt." | Explicit policy on debt: fixed or capped rates, loan-to-value (LTV) caps | Strategy, FAQ |
| "My money is locked up." | Clear hold period (5–7 years), plain-language liquidity terms | How It Works, FAQ |
| "Fees are hidden." | A full fee table in plain English | How It Works |
| "How do I get paid?" | Distribution cadence, sample investor report, portal preview | How It Works |
| "I don't understand the taxes." | K-1 explainer, depreciation walkthrough, "talk to your CPA" framing | How It Works, Insights |
| "Minimum is too high." | State the minimum up front. Mention IRA eligibility | How It Works, FAQ |
| "Am I even eligible?" | Accreditation definitions and a self-check | FAQ, Invest |
| "Your alignment?" | GP co-invests; preferred return means investors get paid first | Home, How It Works |

## 5. Desired Outcomes (what they're really buying)
- **Predictable passive cash flow** that shows up without them lifting a finger
- **Tax-efficient wealth** that keeps more of what they earn
- **Diversification** into a tangible, essential asset
- **Peace of mind.** A partner they trust who communicates proactively.
- **Time freedom.** Wealth building that doesn't compete with career and family.
- **Identity.** Becoming an "investor," not just a high earner.

> **Messaging core:** *"Multifamily investment, institutionally managed."* Tomo Tomo acquires, repositions and operates Sunbelt apartment communities, co-investing alongside accredited investors and family offices with conservative leverage and full reporting transparency.
> **Brand idea:** the two halves of the logo stand for sponsor and investor. Show it through structure (co-investment, preferred return, independent oversight), not slogans. The meaning of "Tomo" (友, "friend") belongs on the About page, not the homepage. Confirm the name's origin with the founders.

### Voice and copy standards (HNW audience)
- **Write like a private-placement memorandum summary, not a funnel.** State facts, terms and process. Numbers over adjectives.
- **No** urgency or scarcity ("reserve your spot," "spots are limited"), no emotional agitation ("2 a.m. calls," "tired of taxes"), no flattery ("what the wealthy own"), no reassurance filler ("no pressure," "free to join").
- **Use industry vocabulary correctly:** net IRR, equity multiple, preferred return, NOI, DSCR, LTV, cost segregation, Schedule K-1, Rule 506(b)/(c).
- **Every performance figure** gets a date, a net-of-fees statement and a past-performance caveat.
- **State the trade-offs plainly** (illiquidity, hold period, UBTI, fees). Candor signals legitimacy.
- **Calls to action** are procedural: "Request access," "Schedule a call," "Request the paper."

---

## 6. Site Map

```
Home  /
├── Strategy  /strategy          (Why multifamily · Buy box · Value-add playbook · Risk management)
├── Portfolio /portfolio         (Current · Realized · Case study)
├── How It Works /how-it-works   (Process · Structure · Fees · Tax · Reporting · Estimator)
├── About /about                 (Story · Team · Principles · Partners)
├── Insights /insights           (Articles · Guides · Lead magnet)
├── FAQ /faq
├── Invest /invest               ← PRIMARY CONVERSION (Request access + schedule call)
├── Investor Portal ↗            (external: AppFolio IM / Juniper Square / SyndicationPro)
└── Legal: /disclosures · /privacy
```

**Why this structure:** It follows the investor's decision sequence. First *Why this asset?* (Strategy), then *Can you execute?* (Portfolio), *How does it work for me?* (How It Works), *Who are you?* (About), and *Am I ready?* (FAQ/Invest). No page is more than one click from the Invest CTA.

## 7. Navigation
- **Primary nav (6 items max):** Strategy · Portfolio · Investing · Firm · Research · **[Request access]** (bronze button)
- **Utility link:** Investor Login (top right, small). Existing LPs get routed out quickly and don't clutter the prospect journey.
- **Sticky header** that shrinks on scroll, so the CTA is always visible.
- **Mobile:** full-screen menu with the CTA pinned at the bottom.
- **Footer:** full sitemap, contact, a newsletter mini-form and a compliance disclaimer on every page.

## 8. User Journey and Funnel

```
AWARENESS         CONSIDERATION              EVALUATION              CONVERSION         RETENTION
LinkedIn/Podcast → Home → Strategy/Insights → Portfolio/How It Works → Invest (access) → Principal call → Portal
SEO article     → Lead magnet (guide)      → Nurture email x7      → Book call     → Deal alert → Reinvest/refer
Referral        → Referral landing          → FAQ                  → Call booked
```

**Micro-conversions, low to high commitment:**
1. Request the research paper, "Evaluating Private Multifamily Sponsors" (email only)
2. Subscribe to quarterly market commentary
3. Request access (name, email, phone, accreditation, investment range)
4. Schedule a call with a principal (Calendly embedded after form submit)
5. Review an offering in the portal, then commit

**Tactic:** Every page ends in a CTA sized to how ready that page's reader is. Top-of-funnel pages offer the research paper. Bottom-of-funnel pages offer the call.

**Email nurture (7-part, post-opt-in):** Welcome and story → Why multifamily now → How we underwrite (with a deal we passed on) → Tax benefits → Case study → Meet the team (video) → Invitation to a call.

---

## 9. Compliance Architecture (must-read)
- **Rule 506(c)** permits public advertising, but every investor must be accredited and **verified** by a third party (e.g., VerifyInvestor, a CPA letter). *Recommended* if you want to market deals openly.
- **Rule 506(b)** allows up to 35 sophisticated non-accredited investors, but **no general solicitation**. You need a pre-existing substantive relationship, so live deals stay behind the access list and portal and are not shown publicly.
- The site as built works for **either**. Specific offering terms are never shown publicly. They sit behind the access request and portal.
- **Must-haves:** a disclaimer in every footer, a "past performance" caveat next to every figure, no guaranteed-return language ("targeted" or "projected" only), and hypothetical labels on the estimator.
- **Have securities counsel review all copy before launch.**
- **All figures on the built site are placeholders.** Anything marked with a dashed underline must be replaced with real, verifiable data. Never publish invented performance.

---

## 10. Page-by-Page Structure (and why each section converts)

### HOME `/` (revised for HNW voice)
| # | Section | Purpose |
|---|---|---|
| 1 | **Hero.** "Multifamily investment, institutionally managed." What the firm does, where, and for whom. CTA: Request access / Our approach | Passes the 5-second test with facts, not hooks. The split circle shows the sponsor/investor relationship |
| 2 | **Track record.** Units · Total capitalization · Communities · Full-cycle exits, dated and caveated | Scale and experience before the first scroll |
| 3 | **Investment thesis.** Housing shortfall · Sunbelt migration · Cost of owning vs. renting, each with a cited source | Leads with market conviction, which is what an allocator evaluates first |
| 4 | **Sources of return.** Current income · Operational value creation · Tax efficiency · Inflation linkage | Explains return drivers in allocator vocabulary |
| 5 | **Reporting.** Representative quarterly asset report (occupancy, trade-outs, NOI vs. budget, DSCR) plus reporting cadence | Transparency shown, not claimed |
| 6 | **Investment process.** Introduction → Offering review (PPM, data room) → Subscription | Sets diligence expectations and invites advisor review |
| 7 | **Representative transaction.** Before/after plus net IRR, equity multiple, rent growth, hold period, with net-of-fees footnote | Evidence of execution |
| 8 | **Structural comparison.** Direct ownership vs. public REITs vs. private multifamily, stated neutrally, including illiquidity | Portfolio-fit framing. The candor signals legitimacy |
| 9 | **Governance and principals.** Co-investment, preferred return, leverage limit, independent oversight. Principal bio with credentials. Service providers | Legitimacy through structure and named people |
| 10 | **Investor perspectives.** Statements about process and reporting quality, not returns | Third-party validation, compliant with the Marketing Rule |
| 11 | **Research.** Sponsor due diligence paper | Demonstrates expertise and captures early-stage interest |
| 12 | **FAQ.** Eligibility, structure, fees, distributions, risk, tax, retirement accounts/UBTI | Direct answers to diligence questions |
| 13 | **Investor access.** Request access / Schedule a call | One procedural next step |

### STRATEGY `/strategy`
Hero → **Why Multifamily** (with data: housing shortage, renter demand) → **Our Buy Box** (markets, vintage, unit count, price) → **Value-Add Playbook** (4-step process: Acquire → Improve → Operate → Exit) → **Risk Management Rules** (fixed-rate debt, ≤65–70% LTV, 12-mo reserves, stress test at +200 bps exit cap) → **Target Markets map/list** → CTA.
*Why:* Sophisticated investors buy the **process**, not the pitch. Spelling out hard rules signals discipline and handles the "syndications blew up" objection head-on.

### PORTFOLIO `/portfolio`
Summary stats → Filter (Current / Realized) → Property cards (photo, market, units, year acquired, strategy, status, realized metrics if exited) → Detailed case study → CTA "Request access."
*Why:* Proof of execution. Realized deals with actual returns are the strongest trust asset a sponsor has. Showing **status honestly** (including underperformers) earns credibility with analytical buyers.

### HOW IT WORKS `/how-it-works`
5-step investor process → Structure diagram (LP/GP, pref, split) → **Fee table** → Tax benefits (depreciation, cost seg, K-1) → Reporting and communication (monthly/quarterly cadence, portal preview) → **Hypothetical estimator** → Mini FAQ → CTA.
*Why:* Deals stall here. Full transparency about fees and structure removes the "hidden catch" suspicion. The estimator is an interactive engagement tool (with a clear hypothetical label) that makes the outcome feel real.

### ABOUT `/about`
Origin story (the "Tomo" meaning) → Mission → Principles (4) → Team with credentials and headshots → Advisors and partners (lender, property manager, CPA, fund admin logos) → By the numbers → CTA.
*Why:* People invest in people. Credentials plus third-party partner logos borrow authority. The story creates an emotional connection that spreadsheets can't.

### INSIGHTS `/insights`
Featured guide (gated) → Category filter (Multifamily 101 · Tax · Market Updates · Investor Education) → Article grid → Newsletter capture.
*Why:* The SEO engine and nurture tool. Each article targets a keyword and ends with a matching CTA.

### FAQ `/faq`
Grouped accordions: Getting Started · Returns & Distributions · Risk · Taxes · Liquidity · Accreditation. Includes FAQPage schema.
*Why:* Handles objections at scale, earns rich results in Google, and lets skeptics self-serve.

### INVEST `/invest` (primary conversion page)
Minimal nav distractions → Headline "Get first access to our next offering" → What you get (deal alerts, market letter, intro call) → **Form** (First, Last, Email, Phone, Accredited? Y/N/Unsure, Investment range, How did you hear about us) → Trust microcopy (no spam, secure, no obligation) → What happens next (3 steps) → Testimonial → Calendly after submit.
*Why:* Asking for accreditation and range qualifies leads and lets sales prioritize. The "what happens next" steps reduce anxiety about submitting. Privacy microcopy reduces form abandonment.

---

## 11. Trust Elements (sitewide)
- Hard numbers: units, AUM, investors, realized returns (with dates and caveats)
- GP co-investment stated plainly
- Named third parties: fund administrator, auditor or CPA firm, securities counsel, lender relationships, property manager
- Real team photos, LinkedIn links, credentials
- Testimonials with full names and professions (SEC Marketing Rule compliant)
- Sample investor report or portal screenshot
- Media, podcast and speaking logos ("As heard on")
- BiggerPockets / BBB / industry memberships (NMHC, local apartment associations)
- Honest risk disclosures. Counterintuitively, these *raise* trust with analytical buyers.
- Physical address and phone number in the footer

## 12. CTA System
| Tier | CTA | Placement |
|---|---|---|
| Primary | **Request access** | Header, hero, end of every page |
| Secondary | **Schedule a call** (with a principal) | FAQ, Process, Portfolio, post-form |
| Tertiary | **Request the paper** (due diligence research) | Home mid-page, Research |
| Utility | Investor Login | Header utility |

**Copy rules:** procedural and plain ("Request access," "Schedule a call"). No "Submit." No "guaranteed." No urgency or scarcity language.

## 13. SEO Recommendations
**Keyword clusters**
- *Commercial/high intent:* "multifamily investment fund," "invest in apartment buildings passively," "multifamily syndication [city/state]," "real estate investment for doctors," "passive real estate investing for high earners"
- *Informational:* "what is a real estate syndication," "multifamily depreciation tax benefits," "cost segregation apartment," "preferred return explained," "accredited investor requirements," "how to vet a syndication sponsor," "K-1 real estate"
- *Local:* target markets (e.g., "Dallas apartment investing," "Midwest multifamily")

**Technical**
- Unique title (≤60 chars) and meta description (≤155) per page (already in the build)
- Schema: `FinancialService` / `Organization` (home), `FAQPage` (FAQ), `Article` (Insights), `BreadcrumbList`
- Core Web Vitals: static build, lazy-load images, WebP/AVIF, font `display=swap`
- XML sitemap and robots.txt. Keep `/invest/thank-you` and the portal noindexed.
- Internal linking: every article links to Strategy or How It Works and ends with a CTA
- Content calendar: 2 articles a month, plus 1 quarterly market report as a linkable asset
- E-E-A-T: author bios on articles, cite sources, show credentials
- Off-page: podcast guesting (the #1 channel for syndicators), BiggerPockets, LinkedIn thought leadership

## 14. Design Direction
**Concept: "Quiet institutional."** The site should feel like a private bank, not a get-rich-quick funnel. Calm confidence converts skeptical, high-net-worth buyers better than hype.

| Element | Direction |
|---|---|
| Palette (from logo) | Navy `#14233A` (authority) · Bronze `#B8894B` (warmth, value, used sparingly for CTAs and accents) · Cream `#F2EEE8` (paper, approachable) · Slate `#5A6A7A` (secondary text) |
| Type | **Bodoni Moda** display (luxury, private-bank; large sizes only, italics for the emotional half of each headline) · **Hanken Grotesk** body/UI · **IBM Plex Mono** for labels and figures, like an investor statement |
| Motif | The **split circle** as a recurring device: bullets, section markers, dividers. It stands for "two sides, one table." |
| Layout | Generous whitespace, strong typographic hierarchy, asymmetric editorial grids, thin bronze rules (from the logo underline) |
| Imagery | Real property photography at golden hour, real residents and communities, team portraits in natural light. **Avoid** stock "handshake" and skyscraper imagery. Placeholders in the build are line-art and must be swapped for real photos. |
| Data viz | Clean, navy with bronze highlights, always sourced and dated |
| Motion | Subtle fade/rise on scroll and counters on proof stats. Respects reduced-motion. |
| Tone of voice | Plain-spoken, precise, humble-confident. Numbers over adjectives. "We" and "you." |

---

## 15. Pre-Launch Checklist
- [ ] Decide on 506(b) vs 506(c) with counsel. Have counsel review all copy.
- [ ] Replace **every placeholder figure** (dashed underline) with real, verifiable data
- [ ] Real team bios, headshots and property photography
- [ ] Get testimonials with written consent (SEC Marketing Rule)
- [ ] Connect forms to your CRM (GoHighLevel / HubSpot) and embed Calendly on the Invest thank-you state
- [ ] Set up the investor portal URL (the Investor Login link)
- [ ] Build the lead magnet PDF and the 7-email nurture sequence
- [ ] GA4 and Meta pixel with conversion events: `guide_download`, `club_join`, `call_booked`
- [ ] Privacy policy, disclosures, cookie consent
- [ ] Get vector logo files (SVG) from the designer
