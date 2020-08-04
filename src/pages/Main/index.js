import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { getGoals } from "../../actions/goalsActions";
import SideNavbar from "../../components/navbar-side";
import "./index.css";


function Main(props) {
    const isAuthenticated = useSelector(state => state.authReducers.isAuthenticated);

    useEffect(() => {
        props.getGoals();
    })

    return (
        <div>
            {isAuthenticated &&
            <div>
                <SideNavbar/>
                <div className="page-container">
                    {props.children}
                </div>
            </div>
            }
        </div>
        
    )
}


export default connect(null, { getGoals })(Main);