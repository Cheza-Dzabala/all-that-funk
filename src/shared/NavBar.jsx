import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <Link to="/">ALL THAT FUNK</Link>
      <div className="flex space-x-2">
        <Link to="/login">LOGIN</Link>
        <Link to="/register">REGISTER</Link>
      </div>
    </div>
  );
};

export default NavBar;
