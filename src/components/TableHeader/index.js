import React from "react"
import ColumnHeader from "../ColumnHeader"

function getColumnName(fieldName)
{
    let columnNameWords = fieldName.split(' ');
    columnNameWords[0] = columnNameWords[0].toLowerCase()
    return columnNameWords.join('');
}

function TableHeader(props){
    return <thead>
        <tr>
            {props.columnNames.map(fieldName => 
                <ColumnHeader 
                    key={props.columnNames.indexOf(fieldName)}
                    columnName={getColumnName(fieldName)}
                    fieldName={fieldName}
                    updateCollection={props.updateCollection}
                    sortDescription={props.sortDescription}
                    sort={props.sort}
                    filter={props.filter}/>
                )}
        </tr>
    </thead>
}

export default TableHeader