# EasyWebinar Fumadocs beta v1

259 documentation pages, 623 detailed sections (571 inventory parameters + 52 supplemental product controls), 103 source help links. Maximum route depth: four.

## Run and build

Use Node 20.9 or later. Run `npm ci`, `npm run dev` for a local preview, `npm run check` for TypeScript and `npm run build` for the static export in `out/`. The site uses genuine Fumadocs RootProvider, DocsLayout, DocsPage and a custom content/page-tree adapter on Next.js.

## Edit content

`lib/content.json` is the canonical app content source. Edit its pages, parameters, statuses, explanations and source notes, then rebuild. The `content/docs/` Markdown pages and `public/downloads/` files are review exports; editing those files alone does not change rendered content. The source archive contains every rendered explanation and its metadata.

The full draft, URL map, metadata CSV and review worksheet are available in `public/downloads/`. The search index is `public/search-index.json`; update it when you change the canonical content. Keep related microfeatures under a shared capability page and preserve parameter IDs and section anchors.

## Review before production

The beta is public to anyone with the link but requests no indexing through robots.txt and page metadata. Product statuses reflect dated sources, not fresh tests. Reconcile partial, unconfirmed, unavailable and roadmap claims. The pricing reference is dated 16 September 2026. No ratings, guaranteed results, current prices or certification claims are manufactured.

For production, set `NEXT_PUBLIC_SITE_URL` and `NEXT_PUBLIC_BASE_PATH` in the build environment; approve claims, enable the chosen indexing policy and regenerate sitemap.xml and llms.txt. Review whether unknown pages should stay internal, merge into limitations or become supported capability pages. The exhaustive beta architecture is not a recommendation to publish every proposed page unchanged.

## Access and feedback

No login is required to read the beta. There is no comments backend. Use the downloaded CSV worksheet and permanent section links to return corrections to the team. Public beta access does not permit editing the source.

## Consolidation proposal

The review downloads include a 259-row page decision map, a 623-row parameter migration map, beta versus proposed production category counts, and the 130 proposed production URLs. Seven proposed shared-page URLs do not exist as separate beta routes yet; those are explicit future content destinations. No beta URLs have been deleted or redirected.

## GitHub Pages deployment and branding

The live site publishes from the gh-pages branch with GitHub Pages. The main branch contains editable source. After editing, build with the environment below, run verification, then publish the contents of out/ to gh-pages with a .nojekyll file. GitHub automatically redeploys that branch. A GitHub Actions workflow example is included in docs/github-pages-workflow.yml.example for future setup with credentials that allow workflow updates.

For a manual local build, set NEXT_PUBLIC_BASE_PATH=/easywebinar-product-docs and NEXT_PUBLIC_SITE_URL=https://krishna-kaanth.github.io/easywebinar-product-docs before running npm run build and python3 scripts/verify-export.py.

The UI uses the original EasyWebinar black and white SVG assets from easywebinar.com, the production Inter font, and neutral white and black themes. scripts/prepare-site.mjs generates unique page titles, meta descriptions, canonical URLs, breadcrumbs and individual JSON-LD graphs for all 259 URLs. Download the metadata CSV and schema JSON from the Review coverage page. The schema describes draft documentation; it does not manufacture product prices, ratings or support claims.
