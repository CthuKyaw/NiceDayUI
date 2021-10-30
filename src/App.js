import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, HashRouter, BrowserRouter } from "react-router-dom";
import { useAuth } from './context/auth-context';
import Login from './components/login/login';
import NavBar from './components/layout/AppBar'
import Layout from './components/layout/Layout'
import CreateUser from './components/create-user/CreateUser';
import Dashboard from './components/dashboard/dashboard';
import CreateRoom from './components/video-chat/CreateRoom';
import Room from './components/video-chat/Room';


function App() {
  const { loggedIn, getCurrentUser } = useAuth();
  return (

    <Layout>
      {loggedIn && <NavBar />}
      <Route exact path="/" component={Login}></Route>
      <Route exact path="/dashboard" component={Dashboard}></Route>
      <Route exact path="/create" component={CreateUser}></Route>
      <Route exact path="/chat" component={CreateRoom}></Route>
      <Route path="/room/:roomID" component={Room} />
      </Layout>
  )
}

export default App;
