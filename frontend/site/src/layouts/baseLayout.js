import { html } from 'lit';

export const layout = data => html`
<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width" />
    <link rel="stylesheet" href="../src/css/home.css">
  </head>
  <body>
    ${data.content()}
  </body>
</html>
`;