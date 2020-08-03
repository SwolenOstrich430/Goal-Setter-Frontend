import React, { useState } from "react";
import "./index.css";
import LabelAndInput from "../base-form-input";
import { connect } from "react-redux";
import { attemptAuthentication } from "../../actions/authActions";
import PropTypes from "prop-types";

function LoginForm(props) {
    const [emailInput, setEmailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");

    const attemptSubmit = event => {
      event.preventDefault();
  
      return props.attemptAuthentication({
        password: passwordInput, 
        email: emailInput
      });
    }

    return (
        <form className="login-form" onSubmit={attemptSubmit}>
            <h3 className="login-form-header">Login</h3>
            <LabelAndInput labelName="Email"
              placeholder="person@gmail.com" inputType="text"
              name="email" value={emailInput}
              onChange={e => setEmailInput(e.target.value)}
            />
            <LabelAndInput labelName="Password"
              placeholder="secret123" inputType="password"
              name="password" value={passwordInput}
              onChange={e => setPasswordInput(e.target.value)}
            />
            <button className="form-button">Login</button>
        </form>
    )
}

LoginForm.propTypes = {
  attemptAuthentication: PropTypes.func.isRequired
}

export default connect(null, { attemptAuthentication })(LoginForm);