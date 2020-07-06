import React from "react"

function TableRow({item}){
    return <tr >
            <th scope="row">{item.employeeId}</th>
            <td >{item.firstName}</td>
            <td >{item.lastName}</td>
        </tr>
}

export default TableRow