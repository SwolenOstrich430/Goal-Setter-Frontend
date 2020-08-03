import React from "react";
import "./index.css";

function FormTextArea(props) {
    return (
        <div className="form-label-and-input-form" style={props.width}>
            <label className="form-label" >{props.labelName}</label>
            <textarea className="base-text-area" onChange={props.onChange}
             placeholder={props.placeholder} name={props.inputName} 
             rows={props.numRows} columns={props.numColumns} 
             onBlur={props.onBlur} value={props.inputValue}>
            </textarea> 
        </div>
    )
}

export default FormTextArea;