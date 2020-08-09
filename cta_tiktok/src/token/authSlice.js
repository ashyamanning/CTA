import { createSlice } from "@reduxjs/toolkit";
import { receiveToken } from "../token/tokenSlice";
import { getFirebaseIdToken } from "../util/firebaseFunctions";
import { receiveUser } from "../features/user/usersSlice";
import { apiURL } from "../util/apiURL";

export const authSlice = createSlice({  
    name: "auth",  
    initialState: null,  
    reducers: {    
        authLogin: {
            reducer: (state, action) => action.payload    
        },
        authLogout: {
            reducer: (state) => null
        }
    },
});

export const updateUser = (user) => async (dispatch) => {
    try {
        if (user) {
            const { email, uid } = user;
            const lastLogin = user.metadata.lastSignInTime;
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

export const { authLogin, authLogout } = authSlice.actions;
export default authSlice.reducer;