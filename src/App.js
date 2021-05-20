import React, {Component, useState} from "react";
import Wrapper from "./components/Wrapper/index"
import Title from "./components/Title/index"
import Table from "./components/Table"
import ReactTable from "./components/ReactTable"
import makeEmployees from "./utils/makeEmployees"
import SelectColumnFilter from "./components/SelectColumnFilter"
import FilterDropDown from "./components/FilterDropdown";

function App() { 

  let collectionSize = 15;

  const [collection, setCollection] = useState(makeEmployees(collectionSize));

  const changeCollectionSize = size => 
  {
    collectionSize = size;
    setCollection(makeEmployees(collectionSize));
  }

  const columns = React.useMemo(() => [
    {
      Header: "#",
      accessor: "employeeId",
      canFilter: false
    },
    {
      Header:  "First Name",
      accessor: "firstName",
    },
    {
      Header: "Last Name",
      accessor: "lastName"   
    },
    {
      Header: "Department",
      accessor: "department",
      Filter: SelectColumnFilter,
      filter: "equal"
    },
    {
      Header: "Phone",
      accessor:  "phoneNumber"
    }
  ],
  []);

    return (
      <Wrapper changeCollectionSize={changeCollectionSize} collectionSize={collectionSize}>
        <Title title="Employees"/>
        <ReactTable columns={columns} data={collection}/>
      </Wrapper> 
    )
};

export default App;
