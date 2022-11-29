import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, signInWithPopup, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [loding, setLoding] = useState(true);
    const [user, setUser] = useState(null);
    const createAccout = (email, password) => {
        setLoding(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const login = (email,password)=>{
        setLoding(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = ()=>{
        setLoding(true)
        return signOut(auth)
    }
    const updateUer = name =>{
        return updateProfile(auth.currentUser, {
            displayName: name
          })
    }
    const signupWithGoogle = googleProvider => {
        setLoding(true)
        return signInWithPopup(auth, googleProvider)
    }
   const githubSignUp = githubProvider =>{
    setLoding(true);
    return signInWithPopup(auth, githubProvider)
   }
    useEffect(()=>{
        const unsubscribe =  onAuthStateChanged(auth, carrantUser =>{
              setUser(carrantUser)
              setLoding(false)
          })
          return ()=>unsubscribe;
      },[])
      

    const value = {
        user,
        loding,
        createAccout,
        setLoding,
        setUser,
        logOut,
        login,
        updateUer

        
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;