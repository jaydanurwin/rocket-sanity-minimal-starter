import { html } from 'lit';
/* START - Rocket auto generated - do not touch */
export const sourceRelativeFilePath = 'index.rocket.html';
/* END - Rocket auto generated - do not touch */

import apiStore from '../src/lib/apiStore.js';
let data = await apiStore.getAllPosts();
const rocketAutoConvertedTemplate0 = html`
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Rocket</title>
  </head>
  <body>
    <h1>Rocket + Sanity</h1>
  </body>
</html>
`;
export default () => rocketAutoConvertedTemplate0;