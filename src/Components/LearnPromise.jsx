import React, { useEffect } from "react";

const LearnPromise = () => {
  const register = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve("Register Successful"), 4000);
    });
  };
  const login = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve("Login Successful"), 2000);
    });
  };
  const fetching = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve("Fetching Data..."), 3000);
    });
  };
  const goDB = () => console.log("Go Dashbord");

  //   register().then((rdata)=>{
  //     console.log(rdata);
  //     return login();
  //   }).then((ldata)=>{
  //     console.log(ldata);
  //     return fetching();
  //   }).then((fdata)=>{
  //     console.log(fdata);
  //     goDB();
  //   }).catch((error)=>console.log(error));

  useEffect(() => {
    async function showData() {
      try {
        const rdata = await register();
        console.log(rdata);
        const ldata = await login();
        console.log(ldata);
        const fdata = await fetching();
        console.log(fdata);
        goDB();
      } catch (error) {
        console.log(error);
      }
    }
    showData();
  }, []);

  return (
    <>
      <h1>Hello</h1>
    </>
  );
};

export default LearnPromise;
