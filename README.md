# Otto website

Plain HTML and CSS. No framework, no build step. This repository is served by GitHub Pages from the main branch. Upload the contents of this folder to any static host (Netlify, GitHub Pages, Cloudflare Pages, Neocities, or any shared web host) and it works.

## Files
- index.html: home (the letter, pictures, promises, contents, download, changelog)
- how-it-works.html, download.html, about.html
- changelog.html: every release, newest first
- 404.html: most hosts pick this up by name automatically
- site.css: the one stylesheet every page shares (see "Editing a page")
- site-kit.html: the reusable pieces and design notes (you can leave this off the live site)
- fonts.css + fonts/: Fraunces (headings), EB Garamond (body), Courier Prime (labels), Space Grotesk (the wordmark), self-hosted (SIL OFL; Latin and Latin Extended). Change a face once in each page's :root (--display, --mono, --body).
- assets/night, assets/parch: the brand line art, pre-coloured for each ground
- assets/shots: the screenshots
- assets/og-night-1200x630.png, assets/og-parchment-1200x630.png: share images

## Editing a page

The look of every element comes from a class in site.css, so a new
paragraph is just `<p>` and its words. The pieces, in the order they
appear in every section:

```html
<div class="stamp">Section name</div>        the little tilted label
<h2 class="heading">The sentence.</h2>         the section heading
<div class="row">                             one paragraph beside one margin note
  <p>Body text. Add as many of these as you like.</p>
  <aside><span class="arrow">←</span>A pencil note in the margin.</aside>
</div>
```

Inside a `.row`, a bare `<p>` is a body paragraph and a bare `<aside>` is
a margin note; an empty `<aside></aside>` keeps the column width with no
note. The letter on the front page is a `.letter` column, and its
paragraphs indent themselves. A note's tilt and nudge ride on the element
itself: `style="--tilt:0.7deg;--lift:9px;--shift:10px"` (leave them off
for a straight note). The top of site.css lists every class with a line
on what it is for.

The header and footer are pasted into each page (there is no template).
A change to either means the same edit in all six pages. The header
differs only in the current page's name, which is a plain `<span
class="here">` instead of a link.

## Before going live
- Fill in [Your name] on index.html and the bracketed paragraph on about.html.
- Replace meateaapple@gmail.com (six footers and the 404 page) with your address.
- changelog.html holds the release history; add an entry there and the three newest on index.html at each release.
- Make og:image an absolute URL (https://yourdomain/assets/og-night-1200x630.png) once you know the domain.

## The night / parchment switch
A small inline script in each page's <head> reads and stores the choice in localStorage. Parchment is the default.
