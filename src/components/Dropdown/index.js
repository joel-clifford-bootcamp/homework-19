import React from "react";
import "./style.css";

function Dropdown(props) {

    return (   
        
        <div className="form-group">
        <label>Last Name Sort Order</label>
        <select className="form-control" onChange={props.change}>
            <option>-</option>
            <option>A - Z</option>
            <option>Z - A</option>
        </select>
        </div>  
    )
}

export default Dropdown;
