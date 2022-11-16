import { combineReducers } from "redux";
import { userListDataReducer } from "../user/userReducer";
// import components reducer 
export const rootReducer = combineReducers({
    //key : value
    userListDataReducer: userListDataReducer
})