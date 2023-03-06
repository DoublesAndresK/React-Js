import React from "react";

const Popup = ({name, pro, check, gender, setOpen}) => {
  return (
    <>
      <div className=" w-100 min-vh-100 fixed-top bg-dark bg-opacity-75">
        <div
          className="row h-100 justify-content-center"
          style={{ margin: "100px" }}
        >
          <div className="col-12 col-md-6 col-lg-4 " style={{ width: "350px" }}>
            <div
              className="col-12 bg-white mt-4  me-3 p-3 mb-2  position-relative"
              style={{ height: "300px" }}
            >
              {/* <i onClick={(_) => setOpen(false)} type="button" className= "bi bi-x-lg "></i> */}
              <h5>Please Check Information</h5>
              <hr />
              <label className="col-6 form-label">Your Name</label>
              <label className="col-6 form-label">{name}</label>

              <label className="col-6 form-label">Job</label>
              <label className="col-6 form-label">{pro}</label>
              
              <label className="col-6 form-label">Programming Languages</label>
              <label className="col-6 form-label">{check}</label>

              <label className="col-6 form-label">Gender</label>
              <label className="col-6 form-label">{gender}</label>


              <div className="position-absolute bottom-0">
                <button className="btn btn-success btn-lg justify-content-center" onClick={()=>setOpen(false)}>Ok</button>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Popup;
