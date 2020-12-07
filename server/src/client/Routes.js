import React from "react";

import HomePage from './componets/pages/HomePage'
import UsersListPage ,{loadData}from './componets/pages/UsersListPage'

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
        ...HomePage,
        path: '/',
        exact:true
    },
    {
        ...UsersListPage,
        path: '/users'
         
         
    }
]