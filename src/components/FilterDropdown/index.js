import React from "react";
import "./style.css";

function FilterDropDown(props) {

  return <span className="dropdown">
      <button className="btn btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <span className="fas fa-filter"></span>
    </button>
    <div className="dropdown-menu">
    <input className="form-control" 
      type="text" 
      placeholder="Filter by" 
      onChange={() => props.filterColumns(props.fieldName, "a")}></input>
    </div>
  </span>
}

export default FilterDropDown;
