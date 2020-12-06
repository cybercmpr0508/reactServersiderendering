import React from 'react'
import { renderToString } from "react-dom/server";
import Home from "../client/componets/Home";

export default () => {
  const content = renderToString(<Home />);

  const Html =`
    <html>
    <head></head>
    <body>
    <div id="root">${content}</div>
    <script src="bundle.js"></script>
    </body>
    </html>
    `;
  return Html
};
