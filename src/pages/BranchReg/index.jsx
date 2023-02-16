import React, { useContext, useEffect, useState } from "react";
import Label from "../../components/utils/Label";
import styles from "./branchReg.module.css";
import Input from "../../components/utils/Input";
import Select from "../../components/utils/Select";
import Button from "../../components/utils/Button";
import { BUTTON } from "../../constants/utils";
import Textarea from "../../components/utils/Textarea";
import Template from "../../components/Template";
import DataContext from "../../Context/DataContext";
import { useNavigate } from "react-router-dom";

const BranchReg = () => {
  const { state, dispatch1, newBranchInfo, setNewBranchInfo } =
    useContext(DataContext);
  const [relatedBankName, setRelatedBankName] = useState("");
  const [branchName, setBranchName] = useState("");
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate("/home");

  const submitHandler = (e) => {
    e.preventDefault();
    addBranchInfo(relatedBankName, branchName, location, phone);
  };

  const addBranchInfo = (relatedName, branchName, location, phone) => {
    dispatch1({
      type: "ADD_BRANCH",
      payload: {
        id: Date.now(),
        bankName: relatedName,
        branchName,
        location,
        phone,
      },
    });
    setRelatedBankName("");
    setBranchName("");
    setLocation("");
    setPhone("");
  };

  const updateBranchInfo = (newBranchInfo) => {
    dispatch1({
      type: "UPDATE_BRANCH",
      payload: {
        id: newBranchInfo.id,
        bankName: newBranchInfo.bankName,
        branchName: newBranchInfo.branchName,
        location: newBranchInfo.location,
        phone: newBranchInfo.phone,
      },
    });
    setNewBranchInfo("");
    navigate("/home");
  };
  return (
    <>
      <Template>
        {newBranchInfo ? (
          <form action="" onSubmit={(e) => e.preventDefault()} id="create">
            <div className="row position-fixed">
              <div className="col-2"></div>
              <div className={`col-10 justify-content-center ${styles.row}`}>
                <div className="row mt-3">
                  <div className="col-md-5 col-lg-3 p-2">
                    <Label
                      htmlFor="relate branch name"
                      labelText={"Related Branch Name"}
                      className="form-label mb-3 m-2"
                    />
                  </div>
                  <div className="col-12 col-md-9 col-lg-6">
                    <select
                      form="create"
                      defaultValue={newBranchInfo.bankName}
                      onChange={(e) =>
                        setNewBranchInfo({
                          ...newBranchInfo,
                          bankName: e.target.value,
                        })
                      }
                      style={{ height: "40px" }}
                      id="bankName"
                      className={`form-select ${styles.container}`}
                    >
                      {state.map((s) => (
                        <option key={s.id}>{s.name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="row mt-1">
                  <div className="col-md-5 col-lg-3 p-2">
                    <Label
                      htmlFor="branch name"
                      labelText={"Branch Name"}
                      className="form-label mb-3 m-2"
                    />
                  </div>
                  <div className="col-12 col-md-9 col-lg-6">
                    <Input
                      value={newBranchInfo.branchName}
                      onChange={(e) =>
                        setNewBranchInfo({
                          ...newBranchInfo,
                          branchName: e.target.value,
                        })
                      }
                      form="create"
                      className="form-control"
                      id="branchname"
                      type="text"
                      placeholder="Enter Branch Name"
                    />
                  </div>
                </div>
                <div className="row mt-1">
                  <div className="col-md-5 col-lg-3 p-2">
                    <Label
                      htmlFor="location"
                      labelText={"Branch Location"}
                      className="form-label mb-3 m-2"
                    />
                  </div>
                  <div className="col-12 col-md-9 col-lg-6">
                    <Textarea
                      value={newBranchInfo.location}
                      onChange={(e) =>
                        setNewBranchInfo({
                          ...newBranchInfo,
                          location: e.target.value,
                        })
                      }
                      form="create"
                      id="address"
                      placeholder="Enter Your Address!"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-md-5 col-lg-3 p-2">
                    <Label
                      className="p-2 col-form-label"
                      labelText={"Branch Phone Number"}
                      htmlFor="phone"
                    />
                  </div>
                  <div className="col-12 col-md-9 col-lg-6">
                    <Input
                      value={newBranchInfo.phone}
                      onChange={(e) =>
                        setNewBranchInfo({
                          ...newBranchInfo,
                          phone: e.target.value,
                        })
                      }
                      form="create"
                      className="form-control"
                      id="phone"
                      type="number"
                      placeholder="Enter Your Phone Number"
                    />
                  </div>
                </div>
 
                <div>
                  <form className="m-3 mt-5">
                    {/* {renderFields(fields)} */}

                    <div className="row mt-5">
                      <div className="col-md-5 col-lg-3">
                        <Label labelText="" />
                      </div>
                      <div className="col-12 col-md-9 col-lg-6">
                        <Button
                          onClick={() => {
                            updateBranchInfo(newBranchInfo);
                          }}
                          form="create"
                          btnTitle="Update"
                          type="submit"
                          className="me-5"
                        />
                        <Button
                          form="create"
                          btnType={[BUTTON.CANCEL]}
                          btnTitle="Cancel"
                          onClick={() => {
                            setNewBranchInfo("");
                            navigate("/home");
                          }}
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </form>
        ) : (
          <form action="" onSubmit={submitHandler} id="create">
            <div className="row position-fixed">
              <div className="col-2"></div>
              <div className={`col-10 justify-content-center ${styles.row}`}>
                <div className="row mt-3">
                  <div className="col-md-5 col-lg-3 p-2">
                    <Label
                      htmlFor="relate branch name"
                      labelText={"Related Branch Name"}
                      className="form-label mb-3 m-2"
                    />
                  </div>
                  <div className="col-12 col-md-9 col-lg-6">
                    <select
                      required
                      form="create"
                      defaultValue={relatedBankName}
                      onChange={(e) => setRelatedBankName(e.target.value)}
                      style={{ height: "40px" }}
                      id="bankName"
                      className={`form-select ${styles.container}`}
                    >
                      {state.map((s) => (
                        <option key={s.id}>{s.name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="row mt-1">
                  <div className="col-md-5 col-lg-3 p-2">
                    <Label
                      htmlFor="branch name"
                      labelText={"Branch Name"}
                      className="form-label mb-3 m-2"
                    />
                  </div>
                  <div className="col-12 col-md-9 col-lg-6">
                    <Input
                      value={branchName}
                      onChange={(e) => setBranchName(e.target.value)}
                      form="create"
                      className="form-control"
                      id="branchname"
                      type="text"
                      placeholder="Enter Branch Name"
                      required
                    />
                  </div>
                </div>
                <div className="row mt-1">
                  <div className="col-md-5 col-lg-3 p-2">
                    <Label
                      htmlFor="location"
                      labelText={"Branch Location"}
                      className="form-label mb-3 m-2"
                    />
                  </div>
                  <div className="col-12 col-md-9 col-lg-6">
                    <Textarea
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      form="create"
                      id="address"
                      placeholder="Enter Your Address!"
                      className="form-control"
                      required
                    />
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-md-5 col-lg-3 p-2">
                    <Label
                      className="p-2 col-form-label"
                      labelText={"Branch Phone Number"}
                      htmlFor="phone"
                    />
                  </div>
                  <div className="col-12 col-md-9 col-lg-6">
                    <Input
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      form="create"
                      className="form-control"
                      id="phone"
                      type="number"
                      placeholder="Enter Your Phone Number"
                    />
                  </div>
                </div>

                <div>
                  <form className="m-3 mt-5">
                    <div className="row mt-5">
                      <div className="col-md-5 col-lg-3">
                        <Label labelText="" />
                      </div>
                      <div className="col-12 col-md-9 col-lg-6">
                        <Button
                          form="create"
                          btnTitle="Register"
                          type="submit"
                          className="me-5"
                        />
                        <Button
                          form="create"
                          btnType={[BUTTON.CANCEL]}
                          btnTitle="Cancel"
                          onClick={() => {
                            setRelatedBankName("");
                            setBranchName("");
                            setLocation("");
                            setPhone("");
                            navigate("/home");
                          }}
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </form>
        )}
      </Template>
    </>
  );
};

export default BranchReg;
