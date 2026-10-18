# Personal portfolio

A single-page personal portfolio with About, Research, and Awards sections. Sticky navigation scrolls to each section and highlights the current section as you scroll. Research includes two projects, three TNJSF photos, an uploaded demonstration video, eight PDF readers, and links to open the original documents separately. JSHS recognition and the TNJSF judging list are linked from both Research and Awards. Robotics awards are grouped newest first, including the 2026 Top 120 result and 2025 attendance at the VEX World Championships for Team 7405M. Dates supplied only as years remain year-only.

## Development

Requires Node.js 20.19+ or 22.12+ (Node 24 is supported).

```sh
npm ci
npm run dev
```

`npm run build` creates the production site in `dist`. `npm run preview` serves that build locally. Share section links using `/#about`, `/#research`, or `/#awards`. Existing `/research` and `/awards` links also scroll to the corresponding section when the host serves `index.html` for unknown paths.

## Personalize

General page content lives in `src/main.js`, including three résumé-based interest cards covering Robotics & Engineering, Dance & Choreography, and Coding & Community. The supplied portrait is in `public/images/guneet-kapur.webp`. Research content lives in `src/research.js`; original PDFs and the demonstration video are in `public/research`. The Awards section in `src/awards.js` presents 17 award entries from the supplied résumé and personal updates in a two-column grid across three categories, including the Congressional Award Silver Medal and STEM Star Award. Only the relevant résumé details are included; the résumé itself is not published.

Styles live in `src/style.css`. DM Sans is self-hosted through the pinned `@fontsource-variable/dm-sans` package, with system sans-serif fallbacks. Section and award headlines are bold. Award cards stack into a single column on mobile, and animations respect reduced-motion preferences. PDF support varies by browser; each reader includes a separate PDF link and a fallback message.

## Downloadable preview

Run `python3 scripts/create-preview.py` to refresh `/workspace/portfolio-preview.html`. It contains all documents and the video as embedded assets, so no server or publishing is needed. The file is approximately 16 MB. In browsers supporting inline PDFs, expand a reader to scroll through a document, or use its Open PDF link to read it separately.

## Casual saving deterrents

Images disable native dragging and image context menus within the page. Text context menus, normal links, and keyboard navigation remain available. Embedded and separately opened PDFs request hidden viewer toolbars through `#toolbar=0&navpanes=0`; support depends on the browser. These settings discourage casual saving but cannot prevent file downloads, screenshots, or direct access to public assets.
