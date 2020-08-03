import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getGoals } from "../../actions/goalsActions";
import "./index.css";


function Main(props) {
    useEffect(() => {
        props.getGoals();
    })

    return (
        <div style={{marginLeft: "5vw", width: "95vw", height: "100vh"}} className="page-container">
            {props.children}
        </div>
    )
}


export default connect(null, { getGoals })(Main);