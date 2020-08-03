import "./index.css";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function NavbarItem(props) {
    let parentIsHidden = useSelector(state => state.navbarReducers.sideNavbarIsHidden);

    return (
        <Link to={props.itemLinkPath} style={{"textDecoration": "none"}}>
            <li className="navbar-item-container" onClick={props.onClick}>
                <img className="navbar-item-image" 
                    src={props.itemImagePath} 
                    alt={props.itemImageAlt}
                />
                {parentIsHidden ? null : <span className="navbar-item-label">{props.itemLabel}</span>}
            </li>
        </Link>
    )

}

export default NavbarItem;