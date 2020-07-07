import React from "react";
import "./style.css";
import TableHeader from "../TableHeader"
import TableBody from "../TableBody"

import makeEmployees from "../../utils/makeEmployees"

class Table extends React.Component {

  employees = makeEmployees(5)
  sorts = [];
  filters = {};

  state = {
    employees: this.employees
  };

  filterColumns = (fieldName, filterValue) => {

    if(filterValue.length === 0){
      if(this.filters.hasKey(fieldName))
        delete this.filters[fieldName];
    }
    else{
      this.filters[fieldName] = filterValue
    }

    let employeesCopy = [...this.employees];

    for(var key in this.filters){
      employeesCopy = employeesCopy.filter(employee => {
        employee[key].toString().toLowerCase().includes(filterValue.toLowerCase());
      })
    }

    this.setState({employees: employeesCopy});
  }

  mapBySorts = (sortDefinition) => {
    let employeesCopy = [...this.employees]

    let currentDefinition = this.sorts.filter(item => item.fieldName === sortDefinition.fieldName);

    if(sortDefinition.direction === 0)
      this.sorts.splice(this.sorts.indexOf(currentDefinition),1)
    else
      this.sorts[this.sorts.indexOf(currentDefinition)].direction = sortDefinition.direction; 
      
    this.sorts.forEach(sort => {
      employeesCopy = employeesCopy
    })
    
  }

  render() {
    return (    
      <table className="table">
        <TableHeader columnNames={["#", "First Name", "Last Name"]} filterColumns={this.filterColumns} />
        <TableBody data={this.state.employees} />
      </table>
    )
  };
}

export default Table;
