import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
    name: "users",
    initialState: {
        users: []
    },
    reducers: {
        getUsers: (state, action) => {
            state.users = action.payload;
        },
        getUser: (state, action) => {
            state.users.forEach((user) => {
                user.id = action.payload;
            })
        },
        // createUser: (state, action) => 
    }
})