/* START - Rocket auto generated - do not touch */
export const sourceRelativeFilePath = 'index.rocket.js';
import { html, baseHead, getSanityImageURL, layout } from './recursive.data.js';
export { html, baseHead, getSanityImageURL, layout };
/* END - Rocket auto generated - do not touch */

import { client } from '../src/lib/sanityClient.js';
const homePageQuery = `*[_type == 'homePage' && _id == 'homePage']`;
let homePageResponse = await client
  .fetch(homePageQuery)
  .catch((err) => console.log(err));
let homePageData = homePageResponse[0];

export const title = `${homePageData.heroTitle}`;
export const description = 'This is the homepage';
export const permalink = '/';

export default () => html`
  <div class="home-wrapper">
    <section class="left__section">
      <h1>${homePageData.heroTitle}</h1>
      <p>${homePageData.description}</p>
    </section>
    <section class="right__section">
      <picture>
        <source
          srcset="
            ${getSanityImageURL(homePageData.heroImage).format('webp').url()}
          "
          type="image/webp"
        />
        <img
          class="hero-image"
          src=${`${getSanityImageURL(homePageData.heroImage).url()}`}
          alt="${homePageData.heroTite}"
        />
      </picture>
    </section>
  </div>
`;
