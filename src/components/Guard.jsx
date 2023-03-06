import React from 'react'
import { Navigate } from 'react-router-dom';


function Guard({children}) {
     const data= JSON.parse(localStorage.getItem("userData"));
     if(data?.token){
        return children;
     }
     else{
        return <Navigate to="/login"/>
     }
}

export default Guard
