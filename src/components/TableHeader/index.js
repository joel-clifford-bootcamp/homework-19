import React from "react"
import ColumnHeader from "../ColumnHeader"

function TableHeader(props){
    return <thead>
        <tr>
            {props.columnNames.map(columnName => <ColumnHeader columnName={columnName}/>)}
        </tr>
    </thead>
}

export default TableHeader