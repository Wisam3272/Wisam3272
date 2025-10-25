# APKS Center

APKS Center turns your domain `apks.center` into a production-ready, multilingual APK hub builder. The new experience layers pro-level design, localization, SEO automation, and payment orchestration directly in the browser—no build step or backend required.

## Highlights
- 🌐 **Five-language experience** – ship English, Arabic, Spanish, French, and German interfaces with RTL support, localized copy, and instant preview switching.
- 🧭 **Enterprise-grade structure** – hero funnels, feature grids, curated category decks, testimonials, insights, and SEO checklists styled for a premium SaaS presence.
- 💡 **Advanced generator** – capture brand signals, tone, categories, highlighted apps, keywords, and export a multilingual HTML portal that embeds PayPal + Visa flows.
- 💳 **Payment-ready** – configure PayPal client IDs and Stripe (Visa) checkout links directly in the UI. Sandbox defaults are provided for rapid testing.
- 🔎 **SEO assets included** – canonical tags, OG/Twitter metadata, Organization JSON-LD, robots.txt, and sitemap.xml for apks.center.

## Getting started
1. Open `index.html` in your browser.
2. Select your interface language from the header switcher (default is English).
3. Provide hub details in the generator card (name, tagline, tone, categories, apps, keywords, support email).
4. Inspect the live preview, cycle through localized variants, then download the generated HTML when ready.
5. Update payment settings (PayPal client ID + Stripe checkout link) to connect your real merchant accounts.

All translations and payment keys are stored locally in the browser. Generated sites are self-contained HTML files that you can host on any static host.

## SEO & automation
- `robots.txt` and `sitemap.xml` are bundled for `https://apks.center/` and reference the key marketing sections.
- Structured data (Organization JSON-LD) and canonical alternates ship inside the landing page to boost discoverability.

## Payments
- **PayPal** – sandbox client ID `sb` is loaded by default. Replace it via the “Configure payment keys” modal to switch to production.
- **Visa / Cards** – update the Stripe Checkout or Payment Link URL to point to your live checkout experience. The main site and generated HTML both reuse this value.

## Tech stack
Pure HTML, CSS, and vanilla JavaScript. No frameworks, no build tooling—ideal for rapid deployment or integration into existing static hosting pipelines.
