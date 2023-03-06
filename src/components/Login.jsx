import axios from "axios";
import { stringify } from "postcss";
import React, { useState } from "react";
import {ImSpinner2} from 'react-icons/im';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [username, setUsername]=useState('kminchelle');
    const [password, setPassword]=useState('0lelplR');
    const [isLoading, setIsLoading]=useState(false);
    const navigate=useNavigate();

    const submitHandler= async(e)=>{
        e.preventDefault();
        setIsLoading(true);
        await loginHandler(username, password)
    }

    const loginHandler=async(username, password)=>{
        const userData={username, password};
        const {data}= await axios.post('https://dummyjson.com/auth/login', userData );
        setIsLoading(false);
        if(data){
            const getData = {
                name:  `${data?.firstName} ${data?.lastName}`,
                email: data?.email,
                token: data?.token,
                image: data?.image
            }
            localStorage.setItem('userData', JSON.stringify(getData))
            navigate('/');
        }
       
    }
    

  return (
    <>
        <form action="" id="create" onSubmit={submitHandler} />
      <div className="container mx-auto">
        <div className="hero min-h-screen bg-base-100">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Login now!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">User Name</span>
                  </label>
                  <input
                  value={username}
                  onChange={e=>setUsername(e.target.value)}
                    form="create"
                    type="text"
                    placeholder="username"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    value={password}
                    onChange={e=>setPassword(e.target.value)}
                    form="create"
                    type="text"
                    placeholder="password"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary" form="create" type="submit">
                    {isLoading ? <ImSpinner2 className="animate-spin" /> :"Login"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
