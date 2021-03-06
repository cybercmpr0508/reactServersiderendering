import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Routes from "../client/Routes";
import { renderRoutes } from "react-router-config";
import serialize from 'serialize-javascript'
export default (req, store) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        <di>{renderRoutes(Routes)}</di>
      </StaticRouter>
    </Provider>
  );

  const Html = `
    <html>
    <head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    </head>
    <body>
    <div id="root">${content}</div>
    <script>
    window.INITIAL_STATE=${serialize(store.getState())}
    </script>
    <script src="bundle.js"></script>

    </body>
    </html>
    `;
  return Html;
};
