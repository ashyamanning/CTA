import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
    name: "users",
    initialState: {
        users: []
    },
    reducers: {
        getUsers: (state, action) => {
            return state.users = action.payload;
        },
        getUser: (state, action) => {
            state.users.forEach((user) => {
                return user.id = action.payload;
            })
        },
        addUser: {
            reducer: (state, action) => { state.unshift(action.payload) },
            prepare: (user) => ({ payload: {id: id++,  }})
        }
    }
});

export const { getUsers, getUser, addUser } = usersSlice.actions;
export default usersSlice.reducer;