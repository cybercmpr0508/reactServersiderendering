import React from "react";

import HomePage from "./componets/pages/HomePage";
import UsersListPage, { loadData } from "./componets/pages/UsersListPage";
import App from "./App";

// export default () => {
//     return (
//         <div>
//             <Route exact path="/" component={Home} />
//             <Route exact path="/users" component={UserList} />

//         </div>
//     )
// }

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: "/",
        exact: true,
      },
      {
        ...UsersListPage,
        path: "/users",
      },
    ],
  },
];
