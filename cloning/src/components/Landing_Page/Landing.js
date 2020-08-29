// {useState, useEffect}
import React from 'react'
import './Landing.scss'
// import gif from './LandingPageGif.gif'
import logo from './VillageLogo.png'
import Login from '../Login/Login'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

export default function Landing() {
    return (
        <Router>
            <section>
                <div className="mainpage">
                    <Navbar />
                    <div className="login">
                        <header className="main">
                            <img className="logo" src={logo} alt="logo" />
                            {/* <img className="background" src={gif} alt="moving background"/> */}
                        </header>
                        <Switch>
                            <Route path="/" exact={true}>
                                <Login />
                            </Route>
                        </Switch>
                    </div>
                </div>
                <Footer />
            </section>
        </Router>
    )
}

