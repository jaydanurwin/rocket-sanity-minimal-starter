import {client} from './sanityClient'

class Store {
  async getAllPosts() {
    const query = `*[_type == 'post']{categories[]->{slug, title}, ...} | order(publishedAt desc)`;
    const result = await client.fetch(query).catch(err => {console.log(err)});
    return result;
  }
}
const apiStore = new Store();

export default apiStore;