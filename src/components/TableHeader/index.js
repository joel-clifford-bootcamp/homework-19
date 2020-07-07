import React from "react"
import ColumnHeader from "../ColumnHeader"

function getFieldName(columnName)
{
    let columnNameWords = columnName.split(' ');
    columnNameWords[0] = columnNameWords[0].toLowerCase()
    return columnNameWords.join('');
}


function TableHeader(props){
    return <thead>
        <tr>
            {props.columnNames.map(columnName => 
                <ColumnHeader 
                    key={props.columnNames.indexOf(columnName)}
                    columnName={columnName}
                    fieldName={getFieldName(columnName)}
                    filterColumns={props.filterColumns}/>
                )}
        </tr>
    </thead>
}

export default TableHeader