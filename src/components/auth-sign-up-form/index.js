import React, { useState } from "react";
import "./index.css";
import LabelAndInput from "../base-form-input";

function SignUpForm() {
    const [firstNameInput, setFirstNameInput] = useState("");
    const [lastNameInput, setLastNameInput] = useState("");
    const [usernameInput, setUsernameInput] = useState("");
    const [emailInput, setEmailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");


    return (
        <form className="sign-up-form">
            <h3 className="login-form-header">Sign Up</h3>
            <div className="first-last-name-input-container">
                <LabelAndInput labelName="First Name"
                  placeholder="Jon" inputType="text"
                  name="firstName" value={firstNameInput}
                  onChange={e => setFirstNameInput(e.value)}
                  inline="inline"
                />
                <LabelAndInput labelName="Last Name"
                  placeholder="Doe" inputType="text"
                  name="lastName" value={lastNameInput}
                  onChange={e => setLastNameInput(e.target.value)}
                  inline="inline"
                />
            </div>
            <LabelAndInput labelName="Username"
              placeholder="user123" inputType="text"
              name="username" value={usernameInput}
              onChange={e => setUsernameInput(e.target.value)}
            />
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
            <button className="form-button">Sign Up</button>
        </form>
    )
}

export default SignUpForm;