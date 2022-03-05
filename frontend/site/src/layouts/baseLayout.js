import { html } from 'lit';
// import { baseHead } from '../components/baseHead.js';

export const layout = data => html`
  <!DOCTYPE html>
  <html>
    <head>
      <!-- Global Metadata -->
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width" />
      <link rel="stylesheet" href="../src/css/home.css" />
    </head>
    <body>
      ${data.content()}
    </body>
  </html>
`;
