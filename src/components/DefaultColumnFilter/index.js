import React from "react"

function DefaultColumnFilter({
    column: {filterValue, preFilteredRows, setFilter}
}){

    return <div className="d-flex">
    <input className="form-control" 
      type="text" 
      placeholder="Filter by" 
      value={filterValue || ''}
      onChange={e => {
        setFilter(e.target.value || undefined) // Set undefined to remove the filter entirely
      }}
    ></input>
    <button className="btn" onClick={() => setFilter(undefined)}>Clear</button>
  </div>
}

export default DefaultColumnFilter;