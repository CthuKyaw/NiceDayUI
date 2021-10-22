import React, { useEffect, useState, createContext } from "react";
import { Redirect, useHistory } from "react-router";

const AuthContext = createContext({});

const AuthProvider = props => {

    const [loggedIn,setLoggedIn] = useState(false);
    const [user,setUser] = useState({});
    const history = useHistory();

    useEffect(()=>{
        let user = localStorage.getItem('user')
        if(user){
            setUser(JSON.parse(user));
            setLoggedIn(true);
        }
    },[])

    const login = () => {
        setLoggedIn(true);
        history.push("/dashboard");
    }

    const logout = () => {
        localStorage.removeItem('user');
        setLoggedIn(false);
        history.push("/");
    }

    const getCurrentUser = () => {
        let user = localStorage.getItem('user')
        return JSON.parse(user);
        
    }
    
    const authContextValue = {
        login,
        loggedIn,
        logout,
        getCurrentUser
    };
    
    return <AuthContext.Provider value={authContextValue} {...props} />
};

const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth }
