import React, {Component} from "react";
import Wrapper from "./components/Wrapper/index"
import Title from "./components/Title/index"
import Table from "./components/Table"

import makeEmployees from "./utils/makeEmployees"

class App extends Component { 

  employees = [];

  state = {
    collection: this.employees
  };

  // Populate list with employees when component mounts
  componentDidMount(){
    this.employees = makeEmployees(15);
    this.setState( { collection: this.employees } );
  }

  render() {
    return (
      <Wrapper>
        <Title title="Employees"/>
        <Table collection={this.state.collection} changeCollection={this.setState}/>
      </Wrapper> 
    )
  }
};

export default App;
