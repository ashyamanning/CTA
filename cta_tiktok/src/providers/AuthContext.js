import React, { createContext, useState, useEffect } from "react";
import firebase from "../firebase";
import { getFirebaseIdToken } from "../util/firebaseFunctions";
import { receiveToken } from "../token/tokenSlice";
import { useDispatch } from "react-redux";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState(null);
    const [token, setToken] = useState(null);

    const dispatch = useDispatch();

    const updateUser = (user) => {
        // dispatch(updateUser(user))
        if (user) {
            const { email, uid } = user;
            const lastLogin = user.metadata.lastLogin;
            setCurrentUser({email, lastLogin, id: uid});
            let fireBaseToken = getFirebaseIdToken().then((token) => {
                setToken(token);
                setLoading(false);
            });
            console.log(fireBaseToken);
            dispatch(receiveToken(fireBaseToken));
        } else {
            setCurrentUser(null);
            setLoading(false);
        }
    };

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged(updateUser);
        return unsubscribe;
    }, [])

    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <AuthContext.Provider value={{ currentUser, token }}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;