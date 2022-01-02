import React, { useContext, useState, useEffect } from "react"
import { auth } from "../firebase"
import firebase from "firebase/app"
// import { Navigate, useNavigate } from "react-router-dom";

// import { GoogleAuthProvider } from "firebase/auth";
// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";




const AuthContext = React.createContext();

// Create our own custom hook: useAuth()
export function useAuth() {
    return useContext(AuthContext)
}

export default function AuthProvider({ children }) {
    // use state hook to get and set current user
    const [currentUser, setCurrentUser] = useState(null)
    const [loading, setLoading] = useState(true)
    // const navigate = useNavigate()
    // create signup function using auth variable we created in firebase.js

    // function googleLogin() {
    //     const provider = new firebase.auth.GoogleAuthProvider();
    //     firebase.auth().signInWithPopup(provider)
    //         .then(result => {
    //             const user = result.user;
    //             console.log(user)
    //             // console.log("googleLogin in AuthContext got called and returned a fulfilled promise logging the user and running this last line of code.")
    //             console.log("2nd console.log in AuthContext.  Should have logged user already")
    //             console.log("3rd console.log in AuthContext.  Next line returns user")
    //             return user
    //             // navigate('/')
    //         })
    //         .catch(console.log)
    // }

    // function googleLogin(){
    //     return auth.signInWithPopup(provider)
    // }

    // function googleLogin(){
    //     const provider = new firebase.auth.GoogleAuthProvider();
    //     return provider

    // }

    function googleLogin() {
                const provider = new firebase.auth.GoogleAuthProvider();

        return auth.signInWithPopup(provider)
    }

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }

    function logout() {
        return auth.signOut()
    }

    function resetPassword(email) {
        return auth.sendPasswordResetEmail(email)
    }

    function updateEmail(email) {
        return currentUser.updateEmail(email)
    }

    function updatePassword(password) {
        return currentUser.updatePassword(password)
    }

    // sets current user to whoever logged in -- Firebase notifies us when 
    // something has changed so we're saying if something has changed, set that user to the current user
    // only want this to render once, hence the useEffect
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })

        return unsubscribe
    }, [])

    const value = {
        currentUser,
        login,
        signup,
        logout,
        resetPassword,
        updateEmail,
        updatePassword,
        googleLogin
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}