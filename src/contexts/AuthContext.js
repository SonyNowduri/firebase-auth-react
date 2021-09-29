// import React,{ useContext,useState,useEffect} from 'react'
// import { authFirebase } from '../firebase'
// import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";

// export const AuthContext = React.createContext()

// export function useAuth(){
//     return useContext(AuthContext)
// }

// export function AuthProvider({children}) {
//     const [currentUser,setCurrentUser] = useState()

//     function login(email,password){
//         return authFirebase.createUserWithEmailAndPassword(email,password)
//     }

//     useEffect(() => {
//         authFirebase.onAuthStateChanged(user => {
//             setCurrentUser(user)
//         })
//     }, [])
    

    

//     const value = {
//         currentUser
//     }

    
//     return (
//         <AuthContext.Provider value={{value}}>
//             {children}
//         </AuthContext.Provider>
//     )
// }

