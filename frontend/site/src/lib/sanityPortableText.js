import {html} from 'lit'
import {toHTML} from '@portabletext/to-html'

/**
 * @param {any} portabletext
 */
export function sanityPortableText(portabletext) {
  const convertedPortableText = toHTML(portabletext);
  // console.log(convertedPortableText);
  return html`<div>${convertedPortableText}</div>`;
}