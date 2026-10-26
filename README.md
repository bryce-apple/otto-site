# Otto website

Plain HTML and CSS. No framework, no build step. This repository is served by GitHub Pages from the main branch. Upload the contents of this folder to any static host (Netlify, GitHub Pages, Cloudflare Pages, Neocities, or any shared web host) and it works.

## Files
- index.html: home (the letter, pictures, promises, contents, download, changelog)
- how-it-works.html, download.html, about.html
- 404.html: most hosts pick this up by name automatically
- site-kit.html: the reusable pieces and design notes (you can leave this off the live site)
- fonts.css + fonts/: Space Grotesk, JetBrains Mono, Newsreader, self-hosted (SIL OFL; Latin and Latin Extended)
- assets/night, assets/parch: the brand line art, pre-coloured for each ground
- assets/og-night-1200x630.png, assets/og-parchment-1200x630.png: share images

## Before going live
- Fill in everything in [square brackets]: price, your name, trial length, file size, domain.
- Replace hello@example.com with your address, and the two "#" download/buy links with real ones.
- Swap the striped SCREENSHOT boxes for <img> tags at the same aspect ratio (export at 2× pixels).
- changelog.html holds the real release history; add an entry there and the three newest on index.html at each release.
- Make og:image an absolute URL (https://yourdomain/assets/og-night-1200x630.png) once you know the domain.

## The night / parchment switch
A small inline script in each page's <head> reads and stores the choice in localStorage. Parchment is the default.
