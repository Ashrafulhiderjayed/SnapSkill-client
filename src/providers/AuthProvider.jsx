import { createContext, useState, useEffect } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
import axios from 'axios';


const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider()
export const AuthContext = createContext(null)


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    //registration
    const createUser =(email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //login
    const login = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    //sign out
    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

    //google login
    const googleLogin = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
     }

      //update profile
    const updateUserProfile = (name, photo) =>{
        return  updateProfile(auth.currentUser, {
              displayName: name, photoURL: photo
            })
      }

     //observe auth state
     useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
             console.log('Current User', currentUser)
             setUser(currentUser)

             //get and set token
            if(currentUser){
                axios.post('http://localhost:5000/jwt',{
                    email: currentUser.email
                })
                .then(data => {
                    // console.log(data.data.token)
                    localStorage.setItem('access-token', data.data.token)
                    setLoading(false)
                })
            }
            else{
                localStorage.removeItem('access-token')
            }
             setLoading(false)
         })
         return () =>{
             unsubscribe()
         }
           }, [])


    const authInfo = {
        user,
        loading,
        createUser,
        login,
        googleLogin,
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