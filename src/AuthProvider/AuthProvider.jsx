import React, { createContext, useState } from 'react';
import app from '../Firebase/firebase.config';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

export const AuthContex = createContext(null);
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();
const gihubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [displayError,SetError]= useState(null)
    const singUpWithEmail = (email,password)=>{
        createUserWithEmailAndPassword(auth,email,password)
        .then(result=>{
            setUser(result.user)
        })
        .catch(error=>{
            SetError(error.message)
            console.log(error.message);
        });
    }
    // SignIn With Email and password
    const SignInExitingUser=(email,password)=>{
        signInWithEmailAndPassword(auth,email,password)
        .then(result=>{
            console.log('Login User SuccesFully ', result.user);
            SetError(null)
        })
        .catch(error=>{
            SetError(error.message);
        })
    }
    // ContinueWithGoogle
    const ContinueWithGoogle = ()=>{
        signInWithPopup(auth,googleProvider)
        .then(result=>{
            console.log('Login User SuccesFully ', result.user);
            SetError(null)
        })
        .catch(error=>{
            SetError(error.message);
        })
    }

    // continueWithGithub
    const ContinueWithGithub = ()=>{
        signInWithPopup(auth,GithubAuthProvider)
        .then(result=>{
            console.log('Login User SuccesFully ', result.user);
            SetError(null)
        })
        .catch(error=>{
            SetError(error.message);
        })

    }



    const AuthInfo = {
        singUpWithEmail,
        SignInExitingUser,
        displayError,
        user,
        ContinueWithGoogle,
        ContinueWithGithub
        
    }

    return (
       <AuthContex.Provider value={AuthInfo}>
            {children}
       </AuthContex.Provider>
    );
};

export default AuthProvider;