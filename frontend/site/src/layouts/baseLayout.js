import { html } from 'lit';

export const layout = data => html`
<!DOCTYPE html>
<html>
  <head>
    <title>${data.title}</title>
  </head>
  <body>
    ${data.content()}
  </body>
</html>
`;