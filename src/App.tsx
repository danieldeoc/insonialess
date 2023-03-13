import React, {FC, useState, useEffect, useLayoutEffect} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import RegisterPage from './pages/register';
import InitiaPage from './pages/home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link} from "react-router-dom";
import LoginPage from './pages/login';

import { logOut } from './firebase/auth';

function App<FC>():JSX.Element{

    const [userID, setUserId] = useState<string | undefined>(undefined)
    const [userName, setUserName] = useState<string | undefined>(undefined)
    const [userEmail, setUserEmail] = useState<string | undefined>(undefined)
     
    useEffect( () => {
        const userAuth = sessionStorage.getItem('Auth User')
        if (userAuth) {
            console.log("au:", userAuth)
            setUserId(userAuth)
        }
        const userName = sessionStorage.getItem('User Name')
        if (userName) {
            console.log("aun:", userName)
            setUserName(userName)
        }
        const userEmail = sessionStorage.getItem('User E-mail')
        if (userEmail) {
            console.log("aue:", userEmail)
            setUserEmail(userEmail)
        }
    })

    return(   
        <Router>
            <nav className="navigator">
                <Link to="/">Home</Link>
                <Link to="/login">Sign-in</Link>
                <Link to="/register">Sign-up</Link>
                |
                <a onClick={ (event: React.MouseEvent<HTMLAnchorElement>) => {
                    logOut()
                }}>Log-out</a>
            </nav>
            {userID} / {userName} / {userEmail}
            <Routes>            
                <Route path="/" element={ <InitiaPage /> } />
                <Route path="/login" element={ <LoginPage /> } />
                <Route path="/register" element={ <RegisterPage /> } />
            </Routes>
        </Router> 
    )
}
  
export default App;  
 

