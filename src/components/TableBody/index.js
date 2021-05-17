import React from "react";
import "./style.css";
import TableRow from "../TableRow"

function TableBody(props) {
  
  return (
    <tbody>
      {props.collection.map(item => (
        <TableRow 
          key={item.employeeId}
          item={item} />
      ))}
    </tbody>
  );
}

export default TableBody;
