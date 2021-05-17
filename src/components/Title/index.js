import React from "react";
import "./style.css";

function Title(props) {
  return <div className="jumbotron d-flex justify-content-between">
    <h1>{props.title}</h1>
    <button className="btn btn-primary align-self-center" data-toggle="modal" data-target="#modalForm">Change Employees</button>
    </div>;
}

export default Title;
