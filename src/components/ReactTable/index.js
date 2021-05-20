import React from "react";
import { useFilters, useSortBy, useTable } from "react-table/dist/react-table.development";
import ColumnHeader from "../ColumnHeader";
import DefaultColumnFilter from "../DefaultColumnFilter";

//import matchSorter from "match-sorter";

// function fuzzyTextFilterFn(rows, id, filterValue) {
//   return matchSorter(rows, filterValue, { keys: [row => row.values[id]] })
// }

function ReactTable({columns, data}){
  const filterTypes = React.useMemo(
    () => ({
      // Add a new fuzzyTextFilterFn filter type.
      //fuzzyText: fuzzyTextFilterFn,
      // Or, override the default text filter to use
      // "startWith"
      text: (rows, id, filterValue) => {
        return rows.filter(row => {
          const rowValue = row.values[id]
          return rowValue !== undefined
            ? String(rowValue)
                .toLowerCase()
                .startsWith(String(filterValue).toLowerCase())
            : true
        })
      },
    }),
    []
  )



  const defaultColumn = React.useMemo(
    () => ({
      // Let's set up our default Filter UI
      Filter: DefaultColumnFilter,
    }),
    []
  )

const {
    getTableProps,
    getTableBodyProps,
    headers,
    rows,
    prepareRow
    
} = useTable({
    columns,  
    data,
    defaultColumn,
    filterTypes
  },
  useFilters,
  useSortBy);

return (
    <table className="table" {...getTableProps()}>
      <thead>
        <tr>
            {headers.map(column => (
              <ColumnHeader {...column.getHeaderProps()} column={column}>
                {column.render('Header')}
              </ColumnHeader>
            ))}
          </tr>
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
};

export default ReactTable;