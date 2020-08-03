import { createSlice } from "@reduxjs/toolkit";

export const tokenSlice = createSlice({
    name: "token",
    initialState: null,
    reducers: {
        receiveToken: (state, action) => action.payload
    }
});

export const { receiveToken } = tokenSlice.actions;
export default tokenSlice.reducer;