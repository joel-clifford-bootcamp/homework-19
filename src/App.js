import React, {Component, useState} from "react";
import Wrapper from "./components/Wrapper/index"
import Title from "./components/Title/index"
import Table from "./components/Table"

import makeEmployees from "./utils/makeEmployees"

function App() {

  const [employees, useEmployees] = useState(makeEmployees(5));

  return (
    <Wrapper>
      <Title title="Employees"/>
      <Table data={employees}/>
    </Wrapper>
  )
};

export default App;
