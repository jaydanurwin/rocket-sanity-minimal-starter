/* START - Rocket auto generated - do not touch */
export const sourceRelativeFilePath = 'about.rocket.js';
import { html, baseHead, getSanityImageURL, layout } from './recursive.data.js';
export { html, baseHead, getSanityImageURL, layout };
/* END - Rocket auto generated - do not touch */

import { client } from '../src/lib/sanityClient.js';
import { sanityPortableText } from '../src/lib/sanityPortableText.js';
const query = `*[_type == 'aboutPage' && _id == 'aboutPage']`;
let response = await client.fetch(query).catch((err) => console.log(err));
let aboutPageData = response[0];

const title = aboutPageData.title;
const description = aboutPageData.description;
const permalink = `/`;

export default () => html`
  <html lang="en">
    <head>
      ${baseHead({ title, description, permalink })}
      <style>
        body {
          margin: 0;
          padding: 0;
          font-family: Arial, Helvetica, sans-serif;
        }
        main {
          margin: 0 auto;
          padding: 1rem;
          max-width: 960px;
        }
      </style>
    </head>
    <body>
      <main>
        <div class="home-wrapper">
          <h1>${aboutPageData.title}</h1>
          ${sanityPortableText(aboutPageData.bodyText)}
        </div>
      </main>
    </body>
  </html>
`;
