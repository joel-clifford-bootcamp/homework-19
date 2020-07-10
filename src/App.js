import React, {Component, useState} from "react";
import Wrapper from "./components/Wrapper/index"
import Title from "./components/Title/index"
import Table from "./components/Table"
import Input from "./components/Input"
import Dropdown from "./components/Dropdown"
import Form from "./components/Form"

import makeEmployees from "./utils/makeEmployees"

class App extends React.Component { 

  // Stores unfiltered and un-sorted employees list
  employees = [];

  // Stores sort direction
  sortDirection = 0;

  state = {
    employees: []
  };

  // Populate list with employees when component mounts
  componentDidMount(){
    this.employees = makeEmployees(5);
    this.setState({employees: this.employees});
  }

  // set sortDirection and then setState to sortedList
  handleDropdownChange = event => {

    switch(event.target.value){
      case 'A - Z':
        this.sortDirection = 1;
        break;
      case "Z - A":
        this.sortDirection = -1;
        break;
      default:
        this.sortDirection = 0;
        break
    }

    this.setState({employees: this.sortLastName(this.state.employees)});
  }

  // Sort employees by last name
  sortLastName = (employeesList) => {

    switch(this.sortDirection){
      case 1:
        return employeesList.sort((a, b) => (a.lastName > b.lastName) ? 1 : -1);
      case -1:
        return employeesList.sort((a, b) => (a.lastName > b.lastName) ? -1 : 1);
      default:
        return employeesList;
    }
  }

  // filter list, sort result and then update the state
  filterLastName = (text) => {
    
      if(text.length > 0){
        const filteredEmployees = this.state.employees.filter(employee => employee.lastName.includes(text));
        this.setState({employees: this.sortLastName(filteredEmployees)});
      }
      else{
        this.setState({employees: this.sortLastName(this.employees)});
      }
  }

  // Handle changes to the filter input
  handleInputChange = event => {
    const value = event.target.value;

    this.filterLastName(value);
  }

  render() {

    return (
      <Wrapper>
        <Title title="Employees"/>
        <Form>
          <Input change={this.handleInputChange}/>
          <Dropdown change={this.handleDropdownChange}/>
        </Form>
        <Table data={this.state.employees}/>
      </Wrapper> 
    )
  }
};

export default App;
