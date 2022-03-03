import {toHTML} from '@portabletext/to-html'

/**
 * @param {any} portabletext
 */
export function sanityPortableText(portabletext) {
  return toHTML(portabletext);
}