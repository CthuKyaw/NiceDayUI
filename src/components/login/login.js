
import React, { useState } from 'react';
import axios from "axios";
import { TextField, Button, Stack, Typography, Alert, Box } from "@mui/material";
import { useHistory, Redirect } from 'react-router-dom';

import { useAuth } from '../../context/auth-context';



const Login = () => {

    const {loggedIn, login} = useAuth();
    const history = useHistory();
    const [user_name, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState();
    const [msg, setMsg] = useState("");

    
    if(loggedIn){
        history.push("/dashboard");
    }

    function handleUserNameChange(val) {
        setUserName(val.target.value)
    }

    function handlePasswordChange(val) {
        setPassword(val.target.value);
    }

    function handleKeyPress(e) {
        if (e.charCode === 13) {
            handleSignIn();
        }
    }

    const handleSignIn = () => {
        const payLoad = { user_name, password };
        
        
        try {
            axios.post("http://156.67.216.116/api/users/login", payLoad).then((response) => {
                if (response.data.success > 0) {
                    setUser(response.data);
                    localStorage.setItem('user', JSON.stringify(response.data));
                    login();
                }
                else{
                    setMsg(response.data.message);
                }
                
                
            })
            .catch((err) => {
                setMsg(err.message);
            });
        }
        catch (err) {
            setMsg(err.message);
        }
        
        
    }

    return (
        <Box  sx={{ mt: 10, mb: 2 }}>
        <Stack spacing={2} direction="column">
            <Typography variant="h5" align="center">
                Sign In
            </Typography>
            <TextField label="user name" variant="outlined"
                onChange={handleUserNameChange} onKeyPress={handleKeyPress}></TextField>
            <TextField label="password" type="password" variant="outlined"
                onChange={handlePasswordChange} onKeyPress={handleKeyPress}></TextField>

            {msg != "" && <Alert severity="error">{msg}</Alert>}
            <br />
            <Button onClick={handleSignIn} variant="contained" color="primary">Sign In</Button>

        </Stack> 
        </Box>
    );
}

export default Login;
