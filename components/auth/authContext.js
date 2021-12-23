import React, { useState, createContext} from "react";

export const AuthContext = createContext();



export const AuthContextProvider = ({children}) => {

    const [user, setUser] = useState(localStorage.getItem('auth')? JSON.parse(localStorage.getItem('auth')): []);
    // const [Name, setName] = useState("");
    // const [email, setemail] = useState("");
    // const [password, setpassword] = useState("");


    return (
        <AuthContext.Provider value={[user, setUser]}>
            {children}
        </AuthContext.Provider>
    )
}

