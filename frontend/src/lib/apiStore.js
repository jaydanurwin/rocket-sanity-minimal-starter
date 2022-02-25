import {client} from './sanityClient.js';

class Store {
  async getAllPosts() {
    const query = `*[_type == 'post']{categories[]->{slug, title}, ...} | order(publishedAt desc)`;
    const result = await client.fetch(query).catch(err => {console.log(err)});
    return result;
  }
}
export const apiStore = new Store();