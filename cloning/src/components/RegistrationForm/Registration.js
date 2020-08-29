import React, { useState } from "react";
import axios from "axios";
import "./RegistrationForm.css";
import { API_BASE_URL, ACCESS_TOKEN_NAME } from "../../constants/apiContants";
import { withRouter } from "react-router-dom";

function RegistrationForm(props) {
  const [state, setState] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    successMessage: null,
  });
  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };
  const sendDetailsToServer = () => {
    if (state.email.length && state.password.length) {
      props.showError(null);
      const payload = {
        email: state.email,
        password: state.password,
      };
      axios
        .post(API_BASE_URL + "/user/register", payload)
        .then(function (response) {
          if (response.status === 200) {
            setState((prevState) => ({
              ...prevState,
              successMessage:
                "Registration successful. Redirecting to home page..",
            }));
            localStorage.setItem(ACCESS_TOKEN_NAME, response.data.token);
            redirectToHome();
            props.showError(null);
          } else {
            props.showError("Some error ocurred");
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      props.showError("Please enter valid username and password");
    }
  };
  const redirectToHome = () => {
    props.updateTitle("Home");
    props.history.push("/home");
  };
  const redirectToLogin = () => {
    props.updateTitle("Login");
    props.history.push("/login");
  };
  const handleSubmitClick = (e) => {
    e.preventDefault();
    if (state.password === state.confirmPassword) {
      sendDetailsToServer();
    } else {
      props.showError("Passwords do not match");
    }
  };
  return (
    <div className="container">
      <div className="field is-horizontal" />
      <div className="field-label is-normal" />
      <div />
      <div className="field-body" />
      <div className="field" />
      <p className="control is-expanded has-icons-left" />
      <input className="input" type="text" placeholder="Name" />
      <span className="icon is-small is-left">
        <i className="fas fa-user"></i>
      </span>
      <p />
      <div />
      <div className="field" />
      <p className="control is-expanded has-icons-left has-icons-right" />
      <input
        className="input is-success"
        type="email"
        placeholder="Email"
        value="alex@smith.com"
      />
      <span className="icon is-small is-left">
        <i className="fas fa-envelope"></i>
      </span>
      <span className="icon is-small is-right">
        <i className="fas fa-check"></i>
      </span>
      <p />
      <div />
      <div />
      <div />

      <div className="field" />
      <p className="control has-icons-left" />
      <input className="input" type="password" placeholder="Password" />
      <span className="icon is-small is-left" />
      <i className="fas fa-lock" />
      <i />
      <span />
      <p />
      <div />

      <div className="field is-horizontal" />
      <div className="field-label" />
      <div />
      <div className="field-body" />
      <div className="field is-expanded" />
      <div className="field has-addons" />
      <p className="control" />
      <a className="button is-static" />
      <a />
      <p />
      <p className="control is-expanded" />
      <nput className="input" type="tel" placeholder="Your phone number" />
      <p />
      <div />
      <p className="help">Do not enter the first zero</p>
      <div />
      <div />
      <div />
      <div />
    </div>
  );
}

export default withRouter(RegistrationForm);
