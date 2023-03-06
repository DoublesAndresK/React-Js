import React from "react";
import Navbar from "./Navbar";
import { BsSpeedometer } from "react-icons/bs";
import { DiApple } from "react-icons/di";
import { NavLink } from "react-router-dom";

const Layout = ({ children }) => {
  const cartItems = JSON.parse(localStorage.getItem("cartItems"));
  return (
    <>
      <div className="container mx-auto">
        <div className="drawer">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* <!-- Page content here --> */}
            <Navbar quantity={cartItems?.length}/>
            {children}
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer" className="drawer-overlay"></label>
            <div className="menu p-4 w-52 bg-base-100 text-base-content">
              <div className=" flex items-center gap-3">
                <BsSpeedometer />
                <p>Dashboard</p>
              </div>
              <NavLink to="/">
                <button className="btn btn-primary py-1 my-3 bg-base-200 w-full">
                  Dashboard
                </button>
              </NavLink>

              <div className=" flex items-center gap-3">
                <DiApple />
                <p>Products</p>
              </div>
              <NavLink to="/products">
                <button className="btn btn-primary py-1 my-2 bg-base-200 w-full">
                  Products
                </button>
              </NavLink>
              <NavLink to="/addProducts">
                <button className="btn btn-primary py-1 my-2 bg-base-200 w-full">
                  Add Products
                </button>
              </NavLink>
              <NavLink to="/cart">
                <button className="btn btn-primary py-1 my-2 bg-base-200 w-full">
                  Cart - {cartItems?.length}
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;


