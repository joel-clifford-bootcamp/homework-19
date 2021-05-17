import React, {useState} from "react";
import "./style.css";

function FilterDropDown(props) {
  
  let filterString = ""
  let isFilterStringEmpty = true;
  const getFilterIconClass = () =>  isFilterStringEmpty ? "fas fa-filter empty" : "fas fa-filter";

  const [InputValue, setInputValue] = useState("");
  const [filterIconClass, setFilterIconClass] = useState(getFilterIconClass());
  const [isClearButtonDisabled, setIsClearButtonDisabled] = useState(true);
  
  const applyFilter = () => props.filter({fieldName: props.fieldName, filterString: filterString});
  const setIsFilterStringEmpty = () => isFilterStringEmpty = filterString === "";
  
  const setFilterString = newFilterString => { 
    filterString = newFilterString;
    setIsFilterStringEmpty();
    setInputValue(newFilterString);
    setFilterIconClass(getFilterIconClass());
    setIsClearButtonDisabled(isFilterStringEmpty);
    applyFilter();
  }

  const onInputChange = event => setFilterString(event.target.value);
  
  return <span className="dropdown">
      <button className="btn btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <span className={filterIconClass}></span>
    </button>
    <div className="dropdown-menu">
      <div className="d-flex">
          <input className="form-control" 
            type="text" 
            placeholder="Filter by" 
            value={InputValue}
            onChange={onInputChange}></input>
          <button className="btn" onClick={() => setFilterString("")} disabled={isClearButtonDisabled}>Clear</button>
        </div>
    </div>
  </span>
}

export default FilterDropDown;
