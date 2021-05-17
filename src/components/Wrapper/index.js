import React from "react";
import "./style.css";

function Wrapper(props) {
  return <div className="container-fluid">
    {props.children}
    <div className="modal fade" id="modalForm" role="dialog">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalCenterTitle">Change Employees Collection</h5>
            <button type="button btn-md" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form className="form-inline">
              <label htmlFor="formControlRange">How Many Employees?</label>
              <input type="range" className="form-control-range" id="formControlRange"></input>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Update</button>
          </div>
        </div>
      </div>
    </div>
  </div>;
}

export default Wrapper;
