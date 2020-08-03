import React from "react";
import { useSelector } from "react-redux";
import "./index.css";

function NavbarOpenIcon(props) {
  const parentIsHidden = useSelector(state => state.navbarReducers.sideNavbarIsHidden);
  const rotation = parentIsHidden ? "rotate(0deg)" : "rotate(180deg)";
  const rotationStyle = {"transform": rotation};

  return (
      <div className="navbar-open-icon-container" onClick={props.onClick}>
          <svg style={rotationStyle} className="navbar-open-icon" viewBox="0 0 448 512">
            <path
              d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
              className="seconday"
            >
            </path>
            <path
              d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
              className="primary"
            ></path>
          </svg>
      </div>
    )
}

export default NavbarOpenIcon;