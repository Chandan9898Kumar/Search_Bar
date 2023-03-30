import React from "react";
import "./navStyle.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="navHead">
        <ul className={"nav-elements"}>
          <li>
            <NavLink
              to="/functional"
              className={({ isActive }) => (isActive ? "actives" : "inactive")}
            >
              Functional Search
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Class"
              className={({ isActive }) => (isActive ? "actives" : "inactive")}
            >
              Class Search
            </NavLink>
          </li>
          <li className="home">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "actives" : "inactive")}
            >
              Home
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};
export default NavBar;
