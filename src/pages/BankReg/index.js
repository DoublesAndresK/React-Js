import React, { useContext } from "react";
import { useState } from "react";
import Template from "../../components/Template";
import Button from "../../components/utils/Button";
import Input from "../../components/utils/Input";
import Label from "../../components/utils/Label";
import { BUTTON } from "../../constants/utils";
// import { DataProvider } from "../../Context/DataContext";
import styles from "./bankReg.module.css";
import DataContext from "../../Context/DataContext";
import { useNavigate } from "react-router-dom";

const BankReg = () => {
  const {dispatch, newBankInfo, setNewBankInfo}= useContext(DataContext);

  const[bankName, setBankName]=useState('');
  const[bankPhone, setBankPhone]=useState('');
  const navigate = useNavigate();


  const addBankInfo=(name, phone)=>{
    dispatch({
      type: 'addBankInfo',
      payload:{
        id:Date.now(),
        name,
        phone
      }
    })
    setBankName('');
    setBankPhone('');
  }

  const submitHandler=(e)=>{
    e.preventDefault();
    addBankInfo(bankName, bankPhone);
  }

  const updateBankInfo=(updateBankInfo)=>{
    dispatch({
      type : 'updateBakInfo',
      newBankData:{
        id: updateBankInfo.id,
        name: updateBankInfo.name,
        phone: updateBankInfo.phone
      }
    })
    setNewBankInfo('');
    navigate('/home');
  }

  return (
    <>
    <Template>
    {
      newBankInfo ? (
<form id="create" onSubmit={e=>e.preventDefault()}>
          <div className="row position-fixed">
            <div className="col-2"></div>
            <div className={`col-10 justify-content-center ${styles.row}`}>
              <div className="row mt-3">
                <div className="col-md-5 col-lg-3 p-2">
                  <Label
                    htmlFor="relate branch name"
                    labelText={"Enter Bank Name"}
                    className="form-label mb-3 m-2"
                  />
                </div>
                <div className="col-12 col-md-9 col-lg-6">
                  <Input
                  value={newBankInfo.name}
                  onChange={e=>setNewBankInfo({...newBankInfo, name: e.target.value})}
                    form="create"
                    className="form-control"
                    id="branchname"
                    type="text"
                    placeholder="Enter Bank Name"
                    required
                  />
                </div>
              </div>

              <div className="row mt-1">
                <div className="col-md-5 col-lg-3 p-2">
                  <Label
                    htmlFor="branch name"
                    labelText={"Enter Bank Phone"}
                    className="form-label mb-3 m-2"
                  />
                </div>
                <div className="col-12 col-md-9 col-lg-6">
                  <Input
                  value={newBankInfo.phone}
                  onChange={e=>setNewBankInfo({...newBankInfo, phone :e.target.value})}
                    form="create"
                    className="form-control"
                    id="branchname"
                    type="text"
                    placeholder="Enter Bank Phone"
                    required
                  />
                </div>
              </div>
 
              <div className="row mt-5">
                <div className="col-md-5 col-lg-3">
                  <Label labelText="" />
                </div>
                <div className="col-12 col-md-9 col-lg-6">
                  <Button
                  onClick={()=>updateBankInfo(newBankInfo)}
                    btnTitle="Update"
                    type="submit"
                    form="create"
                    className="me-5"
                  />

                  <Button btnType={[BUTTON.CANCEL]} btnTitle="Cancel" onClick={()=>{setNewBankInfo(""); navigate('/home')}} />
                </div>
              </div>
            </div>
          </div>
        </form>
      ):(
        <form id="create" onSubmit={submitHandler}>
        <div className="row position-fixed">
          <div className="col-2"></div>
          <div className={`col-10 justify-content-center ${styles.row}`}>
            <div className="row mt-3">
              <div className="col-md-5 col-lg-3 p-2">
                <Label
                  htmlFor="relate branch name"
                  labelText={"Enter Bank Name"}
                  className="form-label mb-3 m-2"
                />
              </div>
              <div className="col-12 col-md-9 col-lg-6">
                <Input
                value={bankName}
                onChange={e=>setBankName(e.target.value)}
                  form="create"
                  className="form-control"
                  id="branchname"
                  type="text"
                  placeholder="Enter Bank Name"
                  required
                />
              </div>
            </div>

            <div className="row mt-1">
              <div className="col-md-5 col-lg-3 p-2">
                <Label
                  htmlFor="branch name"
                  labelText={"Enter Bank Phone"}
                  className="form-label mb-3 m-2"
                />
              </div>
              <div className="col-12 col-md-9 col-lg-6">
                <Input
                value={bankPhone}
                onChange={e=>setBankPhone(e.target.value)}
                  form="create"
                  className="form-control"
                  id="branchname"
                  type="text"
                  placeholder="Enter Bank Phone"
                  required
                />
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-md-5 col-lg-3">
                <Label labelText="" />
              </div>
              <div className="col-12 col-md-9 col-lg-6">
                <Button
                  btnTitle="Register"
                  type="submit"
                  form="create"
                  className="me-5"
                />

                <Button btnType={[BUTTON.CANCEL]} btnTitle="Cancel"
                onClick={()=>{
                  setBankName(''); 
                  setBankPhone('')}} />
              </div>
            </div>
          </div>
        </div>
      </form>
      )
    }
      
       
      </Template>
    </>
  );
};

export default BankReg;
