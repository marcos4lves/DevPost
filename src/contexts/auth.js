import React, { useState, createContext } from 'react'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
export const AuthContext = createContext({})

function AuthProvider({ children }) {

    async function signUp(name, email, password) {
        await auth().createUserWithEmailAndPassword(email, password)
        .then(async (value) => {
            let uid = value.user.uid
            await firestore().collection('users')
            .doc(uid).set({
                nome: name,
                createAt: new Date(),
            })
            .then (() => {
                let data = {
                    uid: uid,
                    nome: name,
                    email: value.user.email
                }

                setUser(data)
            })
        })
        .catch(() => {
            console.log(error)
        })
    }
    const [user, setUser] = useState(null)

    return(
        <AuthContext.Provider value = {{ signed: !!user, signUp }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;