import React from "react";
import "./style.css";

function FilterDropDown({column}) {
  
  // let filterString = ""
  let isFilterStringEmpty = true;
  const filterIconClass = isFilterStringEmpty ? "fas fa-filter empty" : "fas fa-filter";

  // const [InputValue, setInputValue] = useState("");
  // const [filterIconClass, setFilterIconClass] = useState(getFilterIconClass());
  // const [isClearButtonDisabled, setIsClearButtonDisabled] = useState(true);
  
  // const applyFilter = () => props.filter({fieldName: props.fieldName, filterString: filterString});
  // const setIsFilterStringEmpty = () => isFilterStringEmpty = filterString === "";
  
  // const setFilterString = newFilterString => { 
  //   filterString = newFilterString;
  //   setIsFilterStringEmpty();
  //   setInputValue(newFilterString);
  //   setFilterIconClass(getFilterIconClass());
  //   setIsClearButtonDisabled(isFilterStringEmpty);
  //   applyFilter();
  // }

  // const onInputChange = event => setFilterString(event.target.value);
  
  return <span className="dropdown" aria-expanded="true">
      <button className="btn btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <span className={column.filterValue ? "fas fa-filter" : "fas fa-filter empty" }></span>
    </button>
    <div className="dropdown-menu">
      {column.render("Filter")}
    </div>
  </span>
}

export default FilterDropDown;
