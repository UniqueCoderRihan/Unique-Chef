import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.config';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const AuthContex = createContext(null);
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [displayError,SetError]= useState('')
    const [loader,setloader] = useState(true)
    const singUpWithEmail = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
        .then(result=>{
            setUser(result.user)
            SetError('')
            
            
        })
        .catch(error=>{
            SetError(error.message)
            console.log(error.message);
        });
        setloader(true)
    }
    // SignIn With Email and password
    const SignInExitingUser=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
        .then(result=>{
            console.log('Login User SuccesFully ', result.user);
            SetError('')
            
        })
        .catch(error=>{
            SetError(error.message);
        })
        setloader(true)
    }
    // ContinueWithGoogle
    const ContinueWithGoogle = ()=>{
        return signInWithPopup(auth,googleProvider)
        .then(result=>{
            console.log('Login User SuccesFully ', result.user);
            SetError('')
            
        })
        .catch(error=>{
            SetError(error.message);
        })
        setloader(true)
    }

    // continueWithGithub
    const ContinueWithGithub = ()=>{
        return signInWithPopup(auth,githubProvider)
        .then(result=>{
            console.log('Login User SuccesFully ', result.user);
            SetError('')
            
        })
        .catch(error=>{
            SetError(error.message);
        })
        setloader(true)
    }

    // forget PassWord 
    const handleForget = email=>{
        return sendPasswordResetEmail(auth,email)
        .then()
        .catch(error=>{
            SetError(error.message)
        })
    }
    // Logout User
    const LogoutUser=()=>{
        return signOut(auth)
        .then()
        .catch()
        setloader(true)
    }
    // updated Profile

    const updateProfileInfo=(imageLink,displayName)=>{
        return updateProfile(auth.currentUser, {
            displayName:{displayName},
            photoURL: {imageLink}
            .then(()=>{
                console.log('Updated,', displayName);
                setloader(true)
            })
            .catch(error=>{
                console.log(error.message);
            })
        })
    }
    useEffect(()=>{
        const unsubcrive = onAuthStateChanged(auth,loggedUser=>{
            console.log('Logged In User On ',loggedUser);
            setUser(loggedUser)
            setloader(false)
        })
        return unsubcrive;
    },[])


    const AuthInfo = {
        singUpWithEmail,
        SignInExitingUser,
        displayError,
        user,
        ContinueWithGoogle,
        ContinueWithGithub,
        SetError,
        handleForget,
        LogoutUser,
        updateProfileInfo,
        loader
        
    }

    return (
       <AuthContex.Provider value={AuthInfo}>
            {children}
       </AuthContex.Provider>
    );
};

export default AuthProvider;