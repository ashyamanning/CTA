import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({  
    name: "user",  
    initialState: null,  
    reducers: {    
        receiveUser: (state, action) => {      
            return action.payload;    
        },  
    },
});

export const { receiveUser } = userSlice.actions;
export default userSlice.reducer