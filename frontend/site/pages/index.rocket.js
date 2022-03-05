/* START - Rocket auto generated - do not touch */
export const sourceRelativeFilePath = 'index.rocket.js';
import { html, baseHead, getSanityImageURL } from './recursive.data.js';
export { html, baseHead, getSanityImageURL };
/* END - Rocket auto generated - do not touch */

import { client } from '../src/lib/sanityClient.js';
const homePageQuery = `*[_type == 'homePage' && _id == 'homePage']`;
let homePageResponse = await client
  .fetch(homePageQuery)
  .catch((err) => console.log(err));
let homePageData = homePageResponse[0];

const title = homePageData.title;
const description = homePageData.description;
const permalink = `/`;

export default () => html`
  <html lang="en">
    <head>
      ${baseHead({ title, description, permalink })}
      <style>
        body {
          margin: 0;
          padding: 0;
          font-family: Arial, Helvetica, sans-serif
        }
        h1 {
          font-size: 3rem;
        }
        .home-wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 100vh;
        }
        .hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .left__section {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          justify-content: center
        }
        @media (max-width: 768px) {
          .home-wrapper {
          grid-template-columns: 1fr;
          } 
        }
      </style>
    </head>
    <body>
      <main>
        <div class="home-wrapper">
          <section class="left__section">
          <h1>${homePageData.heroTitle}</h1>
            <p>${homePageData.description}</p>
            
          </section>
          <section class="right__section">
          <picture>
              <source srcset="${getSanityImageURL(homePageData.heroImage).format('webp').url()}" type="image/webp">  
              <img
                class="hero-image"
                src=${`${getSanityImageURL(homePageData.heroImage).url()}`}
                alt="${homePageData.heroTite}"
              />
            </picture>
          </section>
        </div>
      </main>
    </body>
  </html>
`;
