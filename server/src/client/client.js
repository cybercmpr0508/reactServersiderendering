//Startup point for the client side application

import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import Routes from './Routes'



ReactDOM.render(
    <BrowserRouter>
    <Routes />
    </BrowserRouter>
    
    , document.querySelector('#root') )