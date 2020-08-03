import React from "react";
import { useSelector, connect } from "react-redux";
import PropTypes from "prop-types";
import { setLoginSignUpStatus } from "../../actions/navbarActions";
import "./index.css";

function TopNavbar(props) {
    let loginSignUpStatus = useSelector(state => state.navbarReducers.loginSignUpStatus);
    let loginClass = (loginSignUpStatus === "login") ? "auth-light" : "auth-dark";
    let signupClass = (loginSignUpStatus === "signup") ? "auth-light" : "auth-dark"
 
    return (
        <nav className="top-navbar-container">
            <h3 className="top-navbar-header">Goal Setter</h3>
            <div className="auth-modal-buttons-container auth-margin-right">
                <button 
                  className={`auth-button auth-modal-button ${loginClass}`} 
                  onClick={() => props.setLoginSignUpStatus("login")}
                  >Login
                </button>
                <button 
                  className={`auth-button auth-modal-button ${signupClass}`}
                  onClick={() => props.setLoginSignUpStatus("signup")}
                  >SignUp
                </button>
            </div>
        </nav>
    )
}

TopNavbar.propTypes = {
    setLoginSignUpStatus: PropTypes.func.isRequired
}

export default connect(null, { setLoginSignUpStatus })(TopNavbar);