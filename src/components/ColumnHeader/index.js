import React, {useState} from "react"
import FilterDropdown from "../FilterDropdown"

function ColumnHeader(props){
    const [sortDirection, setSortDirection] = useState(0)

    // console.log(props.fieldName)

    const toggle = (direction) => setSortDirection(direction => {
        if(direction === 0)
            return 1;
        else if (direction === 1)
            return -1
        else
            return 0
    })

    const getArrow = direction => {
        if(direction === -1)
            return "fas fa-sort-down";
        else if (direction === 1)
            return "fas fa-sort-up"
        else
            return "fas fa-sort"
    }

    return <th scope="col">
        <span>
            {props.columnName}
            {" "}
            <button className="btn btn-sm" onClick={() => toggle(sortDirection)}>
                <span className={getArrow(sortDirection)}></span>
            </button>
            <FilterDropdown  fieldName={props.fieldName} filterColumns={props.filterColumns}/>
        </span>
    </th>
}

export default ColumnHeader