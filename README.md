# Personal portfolio

A three-page personal portfolio: About, Research, and Awards. Research includes two projects, an uploaded demonstration video, six PDF readers, and links to open the original documents separately.

## Development

Requires Node.js 20.19+ or 22.12+ (Node 24 is supported).

```sh
npm ci
npm run dev
```

`npm run build` creates the production site in `dist`. `npm run preview` serves that build locally. Configure a deployment host to serve `index.html` for unknown paths so `/research` and `/awards` work on direct visits.

## Personalize

General page content and remaining placeholders live in `src/main.js`. Research content lives in `src/research.js`; original PDFs and the demonstration video are in `public/research`. The photo, interests, and dedicated Awards page still await personalization.

Styles live in `src/style.css`. Typography uses system Arial/sans-serif with no external font dependency. Animations respect reduced-motion preferences. PDF support varies by browser; each reader includes a separate PDF link and a fallback message.

## Downloadable preview

Run `python3 scripts/create-preview.py` to refresh `/workspace/portfolio-preview.html`. It contains all documents and the video as embedded assets, so no server or publishing is needed. The file is approximately 16 MB. In browsers supporting inline PDFs, expand a reader to scroll through a document, or use its Open PDF link to read it separately.
