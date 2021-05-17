import React, {useState} from "react";
import "./style.css";
import TableHeader from "../TableHeader"
import TableBody from "../TableBody"

function Table(props){

    let baseCollection = props.collection;

    const defaultfilterDescription = {
        fieldName: "",
        filterString: "",
    }

    const defaultSortDescription = {
      fieldName:  "",
      direction: "none"
    }

    const filterCollection = coll => {
      let fField = filterDescription.fieldName;
      let fString = filterDescription.filterString.toLowerCase();

      return coll.filter(item => item[fField].toLowerCase().includes(fString));
    }

    const sortCollection = coll => {
      var fName = sortDescription.fieldName;

      if(sortDescription.direction === 1)
        return coll.sort((a, b) => (a[fName] > b[fName]) ? 1 : -1);
      else if (sortDescription.direction === -1)
        return coll.sort((a, b) => (a[fName] > b[fName]) ? -1 : 1);
      
      return coll;
    }

    const updateCollection = () => {
        let coll = baseCollection;

        if(filterDescription.filterString !== "")
          coll = filterCollection(coll);
        
        if(sortDescription.direction !== 0)
          coll = sortCollection(coll);

        props.changeCollection({collection: coll});
    }

    const [filterDescription, setFilterDescription] = useState(defaultfilterDescription);
    const [sortDescription, setSortDescription] = useState(defaultSortDescription);

    let headers = baseCollection.length > 0 ? Object.keys(baseCollection[0]) : [];

    return (    
      <table className="table">
        <TableHeader columnNames={headers} 
          filter={setFilterDescription} 
          sortDescription={sortDescription} sort={setSortDescription}
          updateCollection={updateCollection}/>
        <TableBody collection={props.collection} />
      </table>
    )
}

export default Table;
