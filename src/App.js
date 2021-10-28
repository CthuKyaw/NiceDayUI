import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, HashRouter, BrowserRouter } from "react-router-dom";
import { useAuth } from './context/auth-context';
import Login from './components/login/login';
import NavBar from './components/layout/AppBar'
import Layout from './components/layout/Layout'
import CreateUser from './components/create-user/CreateUser';
import Dashboard from './components/dashboard/dashboard';
import ChatRoom from './components/video-chat/ChatRoom';


function App() {
  const { loggedIn, getCurrentUser } = useAuth();
  return (

    <Layout>
      {loggedIn && <NavBar />}
      <Route exact path="/" component={Login}></Route>
      <Route exact path="/dashboard" component={Dashboard}></Route>
      <Route exact path="/create" component={CreateUser}></Route>
      <Route exact path="/chatroom" component={ChatRoom}></Route>

      </Layout>
  )
}

export default App;
