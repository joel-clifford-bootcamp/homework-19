import React, {Component, useState} from "react";
import Wrapper from "./components/Wrapper/index"
import Title from "./components/Title/index"
import Table from "./components/Table"

function App() {

  return (
    <Wrapper>
      <Title title="Employees"/>
      <Table />
    </Wrapper>
  )
};

export default App;
