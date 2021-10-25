
import React, { useEffect, useState, useContext } from 'react'
import Popup from "./Popup";
import DataTable from "./DataTable";

import { Button, Alert, Stack } from '@mui/material';
import axios from "axios";
import { useAuth } from '../../context/auth-context';
import { Redirect } from 'react-router';
import notiSound from '../../sounds/notification-sound.wav';

export default function Dashboard() {

    const { loggedIn, getCurrentUser } = useAuth();
    const [dataList, setDataList] = useState(null);
    const [openModal, setOpenModal] = useState(false);
    const [msg, setMessage] = useState("");
    const [reqStatus, setReqStatus] = useState(false);
    

    useEffect(() => {
        if(loggedIn){
            getData();
        }
    }, [])

    
    function setMsg(val){
        setMessage(val);
        const notiAudio = new Audio(notiSound);
        notiAudio.play();
    }

    async function getData() {
        
        let currentUser = getCurrentUser();
        
        const data = {
            userId: currentUser.data.id,
            role: currentUser.data.role
            
        }
        let token = currentUser.token;
        const config = { 
            headers: { Authorization: `Bearer ${token}` },
            params: data 
        };

        await axios.get("http://156.67.216.116/api/workout", config)
            .then((response) => {
                if (response.data.success > 0) {
                    setDataList(response.data.rows);
                }
                else {
                    setReqStatus(false);
                    setMsg(response.data.message);
                }
                

            }).catch((err) => {
                setReqStatus(false);
                //let errMsg = ;
                setMsg(err.message.toString());
            });

    }

    /*
    Suspend or Unsuspend User
    ***/
    async function suspend(id,activeStatus){
        
        let currentUser = getCurrentUser();

        const data = {
            id: id,
            active: activeStatus
        };

        let token = currentUser.token;
        const config = { headers: { Authorization: `Bearer ${token}` } };

        await axios.patch("http://156.67.216.116/api/users/suspend", data, config)
            .then((response) => {
                if (response.data.success > 0) {
                    setReqStatus(true);
                }
                else {
                    setReqStatus(false);

                }
                setMsg(response.data.message);
                getData();
            }).catch((err) => {
                setReqStatus(false);
                //let errMsg = ;
                setMsg(err.message.toString());
            });
    }


    async function submit(status,note) {

        let currentUser = getCurrentUser();

        const data = status == 0?{
            userId: currentUser.data.id,
            status: status
        }: {
            userId: currentUser.data.id,
            status: status, 
            note: note
        };

        let token = currentUser.token;
        const config = { headers: { Authorization: `Bearer ${token}` } };

        await axios.post("http://156.67.216.116/api/workout", data, config)
            .then((response) => {
                if (response.data.success > 0) {
                    setReqStatus(true);
                }
                else {
                    setReqStatus(false);

                }
                setMsg(response.data.message);
                getData();
            }).catch((err) => {
                setReqStatus(false);
                //let errMsg = ;
                setMsg(err.message.toString());
            });


    }

    return (

        loggedIn ?
            <div>
                {msg != "" && <Alert severity={`${reqStatus ? "success" : "error"}`}>{msg}</Alert>}
                <br />
                <Stack spacing={2} direction="row">
                    <Button variant="contained" onClick={() => { submit(0) }}>Register</Button>
                    <button><Popup variant="outlined" onSubmit={submit}></Popup></button>
                </Stack>
                <br />
                {openModal && <Popup closeModal={setOpenModal} />}
                {dataList ? <DataTable results={dataList} onSuspend={suspend} loginUserRole={getCurrentUser().data.role}/> : null}

            </div> : <Redirect to="/" />


    )

}