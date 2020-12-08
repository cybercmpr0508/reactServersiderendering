import { combineReducers } from "redux";
import userReducers from "./userReducers";
import authReducer  from './authReducers'
export default combineReducers({
    users: userReducers,
    auth: authReducer
})