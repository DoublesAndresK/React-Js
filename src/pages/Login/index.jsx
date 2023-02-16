import React from "react";
import Button from "../../components/utils/Button";
import styles from "./Login.module.css";
import { BUTTON } from "../../constants/utils";
import Text from "../../components/utils/Text";
import Label from "../../components/utils/Label";
import Input from "../../components/utils/Input";
import Image from "../../components/utils/Image";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const API_URL = "https://dummyjson.com/auth/login";
  const navigate=useNavigate();
  const [email, setEmail] = useState("kminchelle");
  const [password, setPassword] = useState("0lelplR");
  const[isLoading,setIsLoading]=useState(false);


  const loginData = async (userData) => {
    const { data } = await axios.post(API_URL, userData);
    console.log(data);
    setIsLoading(false); 
    if(data){
      navigate('/home');
   
    }
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await loginData({ username: email, password });
  };

  return (
    <>
      <form action="" id="create" onSubmit={handleLogin}></form>
      <div className="container">
        <div className="row">
          <div className="col-3"></div>

          <div className="col-5">
            <div className={`{styles.logoImgContainer}`}>
              <Image src="/media/images/logo.png" alt="logo" />
            </div>

            <div>
              <Text>
                <h3 className={`${styles.loginTitle}`}>
                  Login to your account
                </h3>
              </Text>

              <Label
                htmlFor="email"
                labelText={"Email or Phone Number"}
                className="form-label mb-3"
              />

              <Input
                id="email"
                placeholder="example@gmail.com"
                className="form-control w-100 mb-3"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                form="create"
              />

              <Label
                htmlFor="password"
                labelText={"Password"}
                className="form-label"
              />

              <Input
                id="password"
                placeholder="......"
                className="form-control w-100 mb-2"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                form="create"
              />

              <div className="d-flex justify-content-between mb-2">
                <div className="form-check">
                  <Input
                    required
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Remember me
                  </label>
                </div>
                <span> Forgot Password? </span>
              </div>
                <Button
                  form="create"
                  className="mb-3"
                  btnTitle={isLoading ? "Loading...":"Log In"}
                  btnType={[BUTTON.DEFAULT]}
                />
            </div>
          </div>

          <div className="col-3"></div>
        </div>
      </div>
    </>
  );
};

export default Login;
