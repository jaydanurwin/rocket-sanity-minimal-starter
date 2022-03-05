import { html } from 'lit';
import { baseHead } from '../components/baseHead.js';

export const layout = data => html`
  <!DOCTYPE html>
  <html>
    <head>
      ${baseHead(data)}
     <link rel="stylesheet" href="../src/css/home.css" />
    </head>
    <body>
      ${data.content()}
    </body>
  </html>
`;
