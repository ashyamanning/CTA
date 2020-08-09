import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import usersReducer from "../user/usersSlice";
import tokenReducer from "../../token/tokenSlice";
import authReducer from "../../token/authSlice";


const reducer = combineReducers({
    //reducers wil go here!
    users: usersReducer,
    token: tokenReducer,
    // auth: authReducer
});

export default configureStore({
    reducer,
    middleware: [...getDefaultMiddleware()]
});

