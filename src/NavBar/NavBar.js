import React from "react";
import "./navStyle.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="navHead">
        <ul className="nav-elements">
          <li>
            <NavLink to="/functional">Functional Search</NavLink>
          </li>
          <li>
            <NavLink to="/Class">Class Search</NavLink>
          </li>
          <li className="home">
            <NavLink to="/">Home</NavLink>
          </li>
        </ul>
      </div>
          </>
  );
};
export default NavBar;
