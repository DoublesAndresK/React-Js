import React from "react";
import { NavLink } from "react-router-dom";
import NavBar from "../components/NavBar";
import Detail from "./Detail";

const SecondPage = () => {
  const details = [
    { id: 1, title: "detail one title" },
    { id: 2, title: "detail two title" },
    { id: 3, title: "detail three title" },
    { id: 4, title: "detail four title" },
    { id: 5, title: "detail five title" },
  ];

  return (
    <div>
      <NavBar />
      <h2>Second Page</h2>

      {details.map((detail) => (
        <div key={detail.id} className="py-2 ml-2 ">
          <h1 className=" text-2xl">{detail.title}</h1>
          <NavLink to={`/secondpage/${detail.id}`} state={{ detail }}>
            <button className=" border-t-neutral-600 text-white bg-slate-700 shadow-xl px-2 py-4 rounded-md">
              Detail
            </button>
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default SecondPage;
