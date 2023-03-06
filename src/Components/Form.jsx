import React, { useRef, useState } from "react";
import Popup from "./Popup";

const Form = ({ jobs }) => {
  const [name, setName] = useState("");
  const [pro, setPro] = useState("PHP Dev");
  const [check, setCheck] = useState([]);
  const [gender, setGender] = useState(false);
  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    setCheck([ ...check, e.target.value]);
  };

  const submitValue = () => {
    console.log(name);
    console.log(pro);
    console.log(check);
    console.log(gender);
  };

  return (
    <>
      <div className="border rounded p-5 mt-5 border-2">
        <div className="row g-3">
          <div className="col-12 d-flex">
            <label className="form-label col-4">Enter Name</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="col-12 d-flex">
            <label className="form-label col-4">Select Job</label>
            <select
              name="job"
              className=" form-select"
              form="create"
              onChange={(e) => setPro(e.target.value)}
            >
              {jobs.map((job) => (
                <option key={job.id}>{job.name}</option>
              ))}
            </select>
          </div>
          <div className="col-12 d-flex">
            <label className="form-label col-4">
              Your Programming Languages
            </label>
            <input
              className="form-check-input me-2"
              type="checkbox"
              value="PHP"
              onChange={handleChange}
            />
            PHP
            <input
              className="form-check-input me-2"
              type="checkbox"
              value="Java"
              onChange={handleChange}
            />
            Java
            <input
              className="form-check-input me-2"
              type="checkbox"
              value="C#"
              onChange={handleChange}
            />
            C# 
          </div>
          <div className="col-12 d-flex">
            <label className="form-label col-4">Gender</label>
            <input
              className="form-check-input"
              type="radio"
              id="flexRadioDefault1"
              value="Female"
              onChange={(e) => setGender(e.target.value)}
            />
            <label class="form-check-label" htmlFor="flexRadioDefault1">
              Female
            </label>

            <input
              className="form-check-input ms-2"
              type="radio"
              id="flexRadioDefault2"
              value="Male"
              onChange={(e) => setGender(e.target.value)}
            />
            <label class="form-check-label" htmlFor="flexRadioDefault2">
              Male
            </label>
          </div>
          <div className="col-12 d-flex">
            <button
              className="btn btn-success w-100"
              value="submit"
              onClick={() => setOpen(true)}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      {open && <Popup name={name} pro={pro} check={check} gender={gender} setOpen={setOpen} />}
    </>
  );
};

export default Form;
