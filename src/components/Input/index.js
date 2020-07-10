import React from "react";
import "./style.css";

function Input(props) {

    return (
        <div className="form-group">
            <label>Last Name Filter</label>
            <input className="form-control" onChange={props.change}/>
        </div>
    )
}

export default Input;
