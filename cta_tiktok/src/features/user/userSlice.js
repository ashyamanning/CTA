import { createSlice } from "@reduxjs/toolkit";
import { receiveToken } from "../token/tokenSlice";
import { getFirebaseIdToken } from "../util/firebaseFunctions";
import { apiURL } from "../../util/apiURL";

export const userSlice = createSlice({  
    name: "user",  
    initialState: null,  
    reducers: {    
        receiveUser: {
            reducer: (state, action) => action.payload    
        },
        userLogout: {
            reducer: (state) => null
        }
    },
});

export const asyncLogout = (dispatch) => {
    dispatch(userLogout());
};

export const updateUser = (user) => async (dispatch) => {
    try {
        if (user) {
            const { email, lastLogin, uid } = user;
            dispatch(receiveUser({ email, lastLogin, id: uid}));
            const token = await getFirebaseIdToken();
            dispatch(receiveToken(token));
        } else {
            dispatch(receiveUser(null))
        }
    } catch (err) {
        console.log(error)
    }
};

export const { receiveUser, userLogout } = userSlice.actions;
export default userSlice.reducer;