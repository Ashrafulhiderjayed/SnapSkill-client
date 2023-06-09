import { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.config';


export const AuthContext = createContext(null)

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

//     //registration
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // //login
    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)

    }

    // //google login
    const googleLogin = () =>{
       return signInWithPopup(auth, googleProvider)
    }

    //github login
    const GithubLogin = () =>{
        return signInWithPopup(auth, githubProvider)
    }

     //sign out
    const logOut = () =>{
        return signOut(auth)
    }

     // //observe auth state change (jate prottekbar notun kore login kora na lage.)
    useEffect(() =>{
       const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            // console.log('auth state changed', currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return () =>{
            unsubscribe()
        }
          }, [])
    
    //update user profile
    const updateUserProfile = (user, name ) =>{
        return updateProfile(user)
    }


    //value
    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        googleLogin,
        GithubLogin,
        logOut,
        updateUserProfile,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
            );
        };
        
        export default AuthProvider;