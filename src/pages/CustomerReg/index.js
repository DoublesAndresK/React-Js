import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Template from "../../components/Template";
import Button from "../../components/utils/Button";
import Input from "../../components/utils/Input";
import Label from "../../components/utils/Label";
import Select from "../../components/utils/Select";
import Textarea from "../../components/utils/Textarea";
import { BUTTON } from "../../constants/utils";
import DataContext from "../../Context/DataContext";
import styles from "./customerReg.module.css";

const CustomerRegister = () => {
  const { state, branch, dispatch2, newCusInfo, setNewCusInfo } =
    useContext(DataContext);
  const [cusName, setCusName] = useState("");
  const [NRC, setNRC] = useState("");
  const [phone, setPhone] = useState("");
  const [account, setAccount] = useState("");
  const [address, setAddress] = useState("");
  const [bankName, setBankName] = useState("");
  const [branchName, setBranchName] = useState("");
  const [gender, setGender]=useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addCusInfo(cusName, NRC, phone, account, address, gender, bankName, branchName);
  };

  const addCusInfo = (
    cusName,
    NRC,
    phone,
    account,
    address,
    gender,
    bankName,
    branchName
  ) => {
    dispatch2({
      type: "ADD",
      payload: {
        id: Date.now(),
        cusName,
        NRC,
        phone,
        account,
        address,
        gender,
        bankName,
        branchName,
      },
    });
    setCusName("");
    setNRC("");
    setPhone("");
    setAccount("");
    setAddress("");
    setGender("")
    setBankName("");
    setBranchName("");
  };

  const updateCusInfo = (newCusInfo) => {
    dispatch2({
      type: "UPDATE",
      payload: {
        id: newCusInfo.id,
        cusName: newCusInfo.cusName,
        NRC: newCusInfo.NRC,
        phone: newCusInfo.phone,
        account: newCusInfo.account,
        address: newCusInfo.address,
        gender: newCusInfo.gender,
        bankName: newCusInfo.bankName,
        branchName: newCusInfo.branchName,
      },
    });
    setNewCusInfo("");
  };

  // console.log(gender);

  return (
    <>
      <Template />
      {newCusInfo ? (
        <form id="create" onSubmit={(e) => e.preventDefault()}>
          <div className="row">
            <div className="col-3"></div>
            <div className={`col-9 justify-content-center ${styles.row}`}>
              <div className="row mt-3">
                <div className="col-md-5 col-lg-3 p-2">
                  <Label
                    className="p-2 col-form-label"
                    htmlFor="customerName"
                    labelText={"Enter Your Name"}
                  />
                </div>
                <div className="col-12 col-md-9 col-lg-6">
                  <Input
                    form="create"
                    value={newCusInfo.cusName}
                    onChange={(e) =>
                      setNewCusInfo({ ...newCusInfo, cusName: e.target.value })
                    }
                    type="text"
                    className="form-control"
                    id="customerName"
                    placeholder="Enter Your Name"
                  />
                </div>
              </div>
              <div className="row mt-1">
                <div className="col-md-5 col-lg-3 p-2">
                  <Label
                    className="p-2 col-form-label"
                    labelText={"Enter Your NRC"}
                    htmlFor="NRC"
                  />
                </div>
                <div className="col-12 col-md-9 col-lg-6">
                  <Input
                    form="create"
                    value={newCusInfo.NRC}
                    onChange={(e) =>
                      setNewCusInfo({ ...newCusInfo, NRC: e.target.value })
                    }
                    className="form-control"
                    id="NRC"
                    type="text"
                    placeholder="Enter Your NRC"
                  />
                </div>
              </div>
              <div className="row mt-1">
                <div className="col-md-5 col-lg-3 p-2">
                  <Label
                    className="p-2 col-form-label"
                    labelText={"Enter Your Phone Number"}
                    htmlFor="phNumber"
                  />
                </div>
                <div className="col-12 col-md-9 col-lg-6">
                  <Input
                    form="create"
                    value={newCusInfo.phone}
                    onChange={(e) =>
                      setNewCusInfo({ ...newCusInfo, phone: e.target.value })
                    }
                    className="form-control"
                    id="phNumber"
                    type="number"
                    placeholder="Enter Your Phone Number"
                  />
                </div>
              </div>
              <div className="row mt-1">
                <div className="col-md-5 col-lg-3 p-2">
                  <Label
                    className="p-2 col-form-label"
                    labelText={"Enter Your Account Number"}
                    htmlFor="account"
                  />
                </div>
                <div className="col-12 col-md-9 col-lg-6">
                  <Input
                    form="create"
                    value={newCusInfo.account}
                    onChange={(e) =>
                      setNewCusInfo({ ...newCusInfo, account: e.target.value })
                    }
                    className="form-control"
                    id="account"
                    type="text"
                    placeholder="Enter Your Account Number"
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-5 col-lg-3 p-2">
                  <Label
                    className="p-2 col-form-label"
                    labelText={"Enter Your Address"}
                    htmlFor="address"
                  />
                </div>
                <div className="col-12 col-md-9 col-lg-6">
                  <Textarea
                    id="address"
                    placeholder="Enter Your Address!"
                    form="create"
                    value={newCusInfo.address}
                    onChange={(e) =>
                      setNewCusInfo({ ...newCusInfo, address: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-5 col-lg-3 p-2">
                  <Label
                    className="p-2 col-form-label"
                    labelText={"Enter Your Gender"}
                  />
                </div>
                <div className="col-12 col-md-9 col-lg-6">
                  <input required type="radio" checked={newCusInfo.gender ? "true" : "false"} value="Male" name="gender" for="create" onChange={e=>setNewCusInfo({...newCusInfo, gender:e.target.value})} /> Male
                  <input required type="radio" checked={newCusInfo.gender ? "true" : "false"} value="Female" name="gender" for="create" onChange={e=>setNewCusInfo({...newCusInfo, gender:e.target.value})}/> Female
                  <input required type="radio" checked={newCusInfo.gender ? "true" : "false"} value="Other" name="gender" for="create" onChange={e=>setNewCusInfo({...newCusInfo, gender:e.target.value})} /> Rather Not To Say
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-5 col-lg-3 p-2">
                  <Label
                    className="p-2 col-form-label"
                    labelText={"Bank Name"}
                    htmlFor="bankName"
                  />
                </div>
                <div className="col-12 col-md-9 col-lg-6">
                  <select
                    form="create"
                    defaultValue={newCusInfo.bankName}
                    onChange={(e) =>
                      setNewCusInfo({ ...newCusInfo, bankName: e.target.value })
                    }
                    required
                    id="bankName"
                    style={{ height: "40px" }}
                    className={`form-select ${styles.container}`}
                  >
                    {state.map((s) => (
                      <option key={s.id}>{s.name}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-5 col-lg-3 p-2">
                  <Label
                    className="p-2 col-form-label"
                    labelText={"Branch Name"}
                    htmlFor="branchName"
                  />
                </div>
                <div className="col-12 col-md-9 col-lg-6">
                  <select
                    form="create"
                    defaultValue={newCusInfo.branchName}
                    onChange={(e) =>
                      setNewCusInfo({
                        ...newCusInfo,
                        branchName: e.target.value,
                      })
                    }
                    required
                    id="branchName"
                    style={{ height: "40px" }}
                    className={`form-select ${styles.container}`}
                  >
                    {branch.map((b) => (
                      <option key={b.id}>{b.branchName}</option>
                    ))}
                  </select>
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
                        btnTitle="Update"
                        type="submit"
                        className="me-5"
                        onClick={() => {
                          updateCusInfo(newCusInfo);
                          navigate("/home");
                        }}
                      />
                      <Button
                        btnType={[BUTTON.CANCEL]}
                        btnTitle="Cancel"
                        form="create"
                        onClick={() => {
                          setNewCusInfo("");
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
        <form id="create" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-3"></div>
            <div className={`col-9 justify-content-center ${styles.row}`}>
              <div className="row mt-3">
                <div className="col-md-5 col-lg-3 p-2">
                  <Label
                    className="p-2 col-form-label"
                    htmlFor="customerName"
                    labelText={"Enter Your Name"}
                  />
                </div>
                <div className="col-12 col-md-9 col-lg-6">
                  <Input
                    required
                    form="create"
                    value={cusName}
                    onChange={(e) => setCusName(e.target.value)}
                    type="text"
                    className="form-control"
                    id="customerName"
                    placeholder="Enter Your Name"
                  />
                </div>
              </div>
              <div className="row mt-1">
                <div className="col-md-5 col-lg-3 p-2">
                  <Label
                    className="p-2 col-form-label"
                    labelText={"Enter Your NRC"}
                    htmlFor="NRC"
                  />
                </div>
                <div className="col-12 col-md-9 col-lg-6">
                  <Input
                    required
                    form="create"
                    value={NRC}
                    onChange={(e) => setNRC(e.target.value)}
                    className="form-control"
                    id="NRC"
                    type="text"
                    placeholder="Enter Your NRC"
                  />
                </div>
              </div>
              <div className="row mt-1">
                <div className="col-md-5 col-lg-3 p-2">
                  <Label
                    className="p-2 col-form-label"
                    labelText={"Enter Your Phone Number"}
                    htmlFor="phNumber"
                  />
                </div>
                <div className="col-12 col-md-9 col-lg-6">
                  <Input
                    form="create"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="form-control"
                    id="phNumber"
                    type="number"
                    placeholder="Enter Your Phone Number"
                  />
                </div>
              </div>
              <div className="row mt-1">
                <div className="col-md-5 col-lg-3 p-2">
                  <Label
                    className="p-2 col-form-label"
                    labelText={"Enter Your Account Number"}
                    htmlFor="account"
                  />
                </div>
                <div className="col-12 col-md-9 col-lg-6">
                  <Input
                    form="create"
                    value={account}
                    onChange={(e) => setAccount(e.target.value)}
                    className="form-control"
                    id="account"
                    type="text"
                    placeholder="Enter Your Account Number"
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-5 col-lg-3 p-2">
                  <Label
                    className="p-2 col-form-label"
                    labelText={"Enter Your Address"}
                    htmlFor="address"
                  />
                </div>
                <div className="col-12 col-md-9 col-lg-6">
                  <Textarea
                    id="address"
                    placeholder="Enter Your Address!"
                    form="create"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-md-5 col-lg-3 p-2">
                  <Label
                    className="p-2 col-form-label"
                    labelText={"Enter Your Gender"}
                  />
                </div>
                <div className="col-12 col-md-9 col-lg-6">
                  <input required type="radio" value="Male" name="gender" for="create" onChange={e=>setGender(e.target.value)} /> Male
                  <input required type="radio" value="Female" name="gender" for="create" onChange={e=>setGender(e.target.value)}/> Female
                  <input required type="radio" value="Other" name="gender" for="create" onChange={e=>setGender(e.target.value)} /> Rather Not To Say
                </div>
              </div> 

              <div className="row mt-3">
                <div className="col-md-5 col-lg-3 p-2">
                  <Label
                    className="p-2 col-form-label"
                    labelText={"Bank Name"}
                    htmlFor="bankName"
                  />
                </div>
                <div className="col-12 col-md-9 col-lg-6">
                  <select
                    form="create"
                    defaultValue={bankName}
                    onChange={(e) => setBankName(e.target.value)}
                    required
                    id="bankName"
                    style={{ height: "40px" }}
                    className={`form-select ${styles.container}`}
                  >
                    {state.map((s) => (
                      <option key={s.id}>{s.name}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-5 col-lg-3 p-2">
                  <Label
                    className="p-2 col-form-label"
                    labelText={"Branch Name"}
                    htmlFor="branchName"
                  />
                </div>
                <div className="col-12 col-md-9 col-lg-6">
                  {/* <Select
                  style={{ height: "40px" }}
                  id="branchName"
                  options={[
                    {
                      text: "Hlaing",
                      value: "Hlaing",
                    },
                    {
                      text: "Natmauk",
                      value: "Natmauk",
                    },
                  ]}
                /> */}

                  <select
                    form="create"
                    defaultValue={branchName}
                    onChange={(e) => setBranchName(e.target.value)}
                    required
                    id="branchName"
                    style={{ height: "40px" }}
                    className={`form-select ${styles.container}`}
                  >
                    {branch.map((b) => (
                      <option key={b.id}>{b.branchName}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <form className="m-3 mt-5">
                  <div className="row mt-5">
                    <div className="col-md-5 col-lg-3">
                      <Label labelText="" />
                    </div>
                    <div className="col-12 col-md-6 col-lg-6">
                      <Button
                        form="create"
                        btnTitle="Register"
                        type="submit"
                        className="me-5"
                      />
                      <Button
                        btnType={[BUTTON.CANCEL]}
                        btnTitle="Cancel"
                        form="create"
                        onClick={() => {
                          setCusName("");
                          setNRC("");
                          setPhone("");
                          setAccount("");
                          setAccount("");
                          setBankName("");
                          setBranchName("");
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
    </>
  );
};

export default CustomerRegister;
