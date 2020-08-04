import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

const reducer = combineReducers({
    //reducers wil go here!
});

const store = configureStore({
    reducer,
});

export default store;
