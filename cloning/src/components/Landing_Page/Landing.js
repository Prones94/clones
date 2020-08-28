import React, { useState, useEffect } from 'react'
import './Landing.css'
// import gif from './LandingPageGif.gif'
import logo from './VillageLogo.png'

import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer'

export default function Landing() {
    return (
        <section>
            <div className="mainpage">
                    <div className="navbar level">
                    <Navbar />
                    </div>
                <div className="login">
                    <header className="main">
                        <img className="logo"src={logo} alt="logo image"/>
                        {/* <img className="background" src={gif} alt="moving background"/> */}
                    </header>

                    <div className="Footer">
                        <Footer />
                    </div>
                </div>
            </div>
        </section>
    )
}

