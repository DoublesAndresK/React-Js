import React, { useContext, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import DataContext from "../context/DataContext";

const NavBar = () => {
    const {state:{products}, search, setSearch}=useContext(DataContext);
    
    // console.log(search);
  return (
    <div className="flex justify-around p-7 shadow rounded items-center">
      <h2 className="text-xl text-gray-500">Comfity</h2>
      <div className="flex gap-3 ">
        <input type="text" className=" bg-zinc-600 text-white py-2 px-4 rounded" placeholder="search..." value={search} onChange={(e)=>setSearch(e.target.value)} /> 
        <div className="relative">
          <span className=" absolute left-6 bottom-5 text-2xl">{products.length}</span>
          <AiOutlineShoppingCart className="text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
