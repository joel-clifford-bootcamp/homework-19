import React, {useState} from "react"
import FilterDropdown from "../FilterDropdown"

const sortDirections = ["none", "ascending", "descending"]; 

const getNextSortDirection = currentDirection => 
    currentDirection === "descending" ? 
        "none" : 
        sortDirections[sortDirections.indexOf(currentDirection) + 1];    


function ColumnHeader(props){

    // let sortDirection = props.sortDescription.fieldName === props.fieldName ? 
    //     props.sortDescription.direction : "none";

    // const toggleSort = () =>  {
    //     let nextSortDirection = getNextSortDirection(sortDirection);
    //     props.sort({fieldName: props.fieldName,  direction: nextSortDirection});
    //     props.updateCollection();
    // }
    const column = props.column;

    return <th scope="col">
        <span>
            {props.children}
            {" "}
            <button className="btn btn-sm" {...column.getHeaderProps(column.getSortByToggleProps())}>
                <span className={column.isSorted
                      ? column.isSortedDesc
                      ? 'fas fa-sort-down'
                      : 'fas fa-sort-up'
                      : 'fas fa-sort'}></span>
            </button>
                {column.canFilter ? <FilterDropdown column={column}></FilterDropdown> : null}
        </span>
    </th>
}

export default ColumnHeader