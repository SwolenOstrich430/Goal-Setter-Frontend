import "./index.css";
import React from "react";
import PropTypes from "prop-types";
import { toggleSideNavbar } from "../../actions/navbarActions.js";
import { logoutUser } from "../../actions/authActions";
import { useSelector, connect } from "react-redux";
import { useHistory } from "react-router-dom";
import NavbarItem from "../navbar-item";
import NavbarOpenIcon from "../navbar-open-icon";
import icons from "../../helpers/icons.js";

const hiddenWidth = "5vw";
const fullWidth = "20vw";

function SideNavbar(props) {
    let history = useHistory();
    const isHidden = useSelector(state => state.navbarReducers.sideNavbarIsHidden);
    
    const containerStyle = {
        "width": isHidden ? hiddenWidth : fullWidth
    }

    const attemptLogout = () => {
        props.logoutUser();
        history.push("/");
    }

    return (
        <ul style={containerStyle} className="navbar-container">
            <NavbarOpenIcon onClick={props.toggleSideNavbar} />
            {icons.map(icon => {
                if(icon.itemImageAlt === "sign-out-icon") {
                    return <NavbarItem onClick={attemptLogout} {...icon} key={icon.itemImageAlt}/>
                }
                return <NavbarItem {...icon} key={icon.itemImageAlt}/>

            })}
        </ul>
    )
}

SideNavbar.propTypes = {
    toggleSideNavbar: PropTypes.func.isRequired, 
    logoutUser: PropTypes.func.isRequired
}

export default connect(null, { toggleSideNavbar, logoutUser })(SideNavbar);

