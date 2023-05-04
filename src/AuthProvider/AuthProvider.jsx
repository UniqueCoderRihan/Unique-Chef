import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.config';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContex = createContext(null);
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [displayError,SetError]= useState('')
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
    }

    useEffect(()=>{
        const unsubcrive = onAuthStateChanged(auth,loggedUser=>{
            console.log('Logged In User On ',loggedUser);
            setUser(loggedUser)
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
        LogoutUser
        
    }

    return (
       <AuthContex.Provider value={AuthInfo}>
            {children}
       </AuthContex.Provider>
    );
};

export default AuthProvider;