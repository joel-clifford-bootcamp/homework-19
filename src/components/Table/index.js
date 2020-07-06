import React from "react";
import "./style.css";
import TableHeader from "../TableHeader"
import TableBody from "../TableBody"

function Table(props) {
  return (
    <table className="table">
      <TableHeader columnNames={["#", "First Name", "Last Name"]} />
      <TableBody data={props.data} />
    </table>
  );
}

export default Table;
