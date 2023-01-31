import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Detail = () => {
  const location = useLocation();
  const data = location.state.detail;
  console.log(data);

  return (
    <>
      <div>
        <h1>Detail - {data.id}</h1>
        <p>{data.title}</p>
      </div>
    </>
  );
};

export default Detail;
