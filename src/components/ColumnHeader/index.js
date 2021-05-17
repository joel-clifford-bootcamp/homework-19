import React, {useState} from "react"
import FilterDropdown from "../FilterDropdown"

const sortDirections = ["none", "ascending", "descending"]; 

const getNextSortDirection = currentDirection => 
    currentDirection === "descending" ? 
        "none" : 
        sortDirections[sortDirections.indexOf(currentDirection) + 1];    

const sortDirectionClassNameMap = {
    "descending": "fas fa-sort-down",
    "ascending": "fas fa-sort-up",
    "none": "fas fa-sort"
}


function ColumnHeader(props){

    let sortDirection = props.sortDescription.fieldName === props.fieldName ? 
        props.sortDescription.direction : "none";

    const toggleSort = () =>  {
        let nextSortDirection = getNextSortDirection(sortDirection);
        props.sort({fieldName: props.fieldName,  direction: nextSortDirection});
        props.updateCollection();
    }

    return <th scope="col">
        <span>
            {props.columnName}
            {" "}
            <button className="btn btn-sm" onClick={() => toggleSort()}>
                <span className={sortDirectionClassNameMap[sortDirection]}></span>
            </button>
            <FilterDropdown fieldName={props.fieldName} filter={props.filter}/>
        </span>
    </th>
}

export default ColumnHeader