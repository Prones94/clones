import React, { useState, useEffect } from 'react'
import gif from './LandingPageGif.gif'
import logo from './VillageLogo.png'

export default function Landing() {

    return (
        <div>
            <div></div>
            <div className="">
                <div className="login">
                    <div className="navbar">
                    Navigation Bar
                    </div>
                    <header className="main">
                        <img src={logo} alt="logo image"/>
                        <img src={gif} alt="moving background"/>
                    </header>

                    <div className="Footer"></div>
                </div>
            </div>
        </div>
    )
}

