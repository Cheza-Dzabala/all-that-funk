import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../routes";

const NavBar = () => {
  return (
    <div className="navbar">
      <Link to="/">ALL THAT FUNK</Link>
      <div className="flex space-x-2">
        <Link to={routes.login}>LOGIN</Link>
        <Link to={routes.register}>REGISTER</Link>
      </div>
    </div>
  );
};

export default NavBar;
