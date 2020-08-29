import React, { useState } from 'react'
import axios from 'axios';
// import {API_BASE_URL, ACCESS_TOKEN_NAME} from '../../constants/apiContants';
// import { withRouter } from "react-router-dom";
import './Login.scss'


export default function Login(props) {
    const [state, setState] = useState({
        email:"",
        password: ""
    })
    const handleChange = (e) => {
        const { id, value } = e.target
        setState(prevState => ({
                ...prevState,
                [id]:value
        }))
    }
    const handleSubmitClick = (e) => {
        e.preventDefault();
        if(state.password === state.confirmPassword){
            sendDetailsToServer();
        } else {
            props.showError('Passwords do not match');
        }
    }
    const sendDetailsToServer = () => {
        if(state.email.length && state.password.length) {
            props.showError(null);
            const payload={
                "email":state.email,
                "password":state.password,
            }
        }
        //     axios.post(API_BASE_URL+'/user/register', payload)
        //         .then(function (response) {
        //             if(response.status === 200){
        //                 setState(prevState => ({
        //                     ...prevState,
        //                     'successMessage' : 'Registration successful. Redirecting to home page..'
        //                 }))
        //                 // redirectToHome();
        //                 props.showError(null)
        //             } else{
        //                 props.showError("Some error ocurred");
        //             }
        //         })
        //         .catch(function (error) {
        //             console.log(error);
        //         });    
        // } else {
        //     props.showError('Please enter valid username and password')    
        // } 
    }
    return (
        <section className="base-container">
            <div className="field">
                <p className="control has-icons-left has-icons-right">
                    <input type="email" 
                        className="input is-success" 
                        placeholder="Email" 
                        value={state.email}
                        onChange={handleChange}    
                    />
                        <span className="icon is-small is-left">
                            <i className="fas fa-envelope"></i>
                        </span>
                        <span className="icon is-small is-right">
                            <i className="fas fa-check"></i>
                        </span>
                </p>
            </div>
                <div className="field"/>
                    <p className="control has-icons-right"/>
                        <input type="password"
                                className="input is-primary"  
                                placeholder="Password"
                                value={state.password}    
                                onChange={handleChange}
                            />
                            <span className="icon is-small">
                                <i className="fas fa-lock"></i>
                            </span>
                            
                            <p/>
                            <div/>
                    <div className="field is-right">
                        <p className="control">
                            <button className="button is-pulled-right" type="submit" onClick={handleSubmitClick}>
                                Login
                            </button>
                        </p>
                    </div>
                
        </section>
    )
}