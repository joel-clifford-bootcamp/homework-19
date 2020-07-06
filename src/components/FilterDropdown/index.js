import React from "react";
import "./style.css";

function FilterDropDown(props) {
  return <span className="dropdown">
      <button class="btn btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <span className="fas fa-filter"></span>
    </button>
    <div class="dropdown-menu">
    <input class="form-control" type="text" placeholder="Filter by"></input>
    </div>
  </span>
}

export default FilterDropDown;
