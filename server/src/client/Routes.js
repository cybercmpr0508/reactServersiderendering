import React from "react";

import Home from './componets/Home'
import UserList ,{loadData}from './componets/UsersList'

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
        path: '/',
        component: Home,
        exact:true
    },
    {
        loadData,
        path: '/users',
        component: UserList,
         
    }
]