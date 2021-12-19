import React, { useContext, useState, useEffect } from 'react';
import { auth } from '../firebase';

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext) 
}

export function AuthProvider({children}) {
    // use state hook to get and set current user
    const [currentUser, setCurrentUser] = useState();

    // create signup function using auth variable we created in firebase.js
    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password) , 
    }

    // sets current user to whoever logged in -- Firebase notifies us when 
    // something has changed so we're saying if something has changed, set that user to the current user
    // only want this to render once, hence the useEffect
    // useEffect(() => {
    //     const unsubscribe = auth.onAuthStateChanged((user) => { 
        // setCurrentUser(user)
  
    //     });
    //     return unsubscribe; 
    // }, [])

    const value = {
        currentUser, 
        // signup
    };

    return (
        <div>
            <AuthContext.Provider value={value}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}