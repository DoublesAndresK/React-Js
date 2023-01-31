import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/firstpage">First Page</NavLink>
        <NavLink to="/secondpage">Second Page</NavLink>
      </nav>
    </>
  );
};

export default NavBar;
