import { html } from 'lit';

export function baseHead({ title, description, permalink, ogImage }) {
  return html`
    <!-- Global Metadata -->
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <!-- Primary Meta Tags -->
    <title-server-only>${title}</title-server-only>
    <meta name="title" content="${title}" />
    <meta name="description" content="${description}" />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${permalink}" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:image" content="${ogImage}" />

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&family=IBM+Plex+Sans:wght@400;700&display=swap"
    />
  `;
}
