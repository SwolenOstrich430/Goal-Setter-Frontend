import React from "react";
import "./index.css";

function FormTextInput(props) {
    return (
        <div className="form-label-and-input-form" style={props.width}>
            <label className="form-label" >{props.labelName}</label>
            <input 
              className={props.inline ? "form-input form-input-inline" : "form-input"}
              placeholder={props.placeholder} 
              type={props.inputType}
              name={props.inputName}
              value={props.inputValue}
              onChange={props.onChange}
              style={props.width}
              onBlur={props.onBlur}
            />
        </div>
    )
}

export default FormTextInput;