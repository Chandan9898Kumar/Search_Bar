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
            <NavLink to="/functional">Class Search</NavLink>
          </li>
          <li className="home">
            <NavLink to="/">Home</NavLink>
          </li>
        </ul>
      </div>
      <div>
        <h1>Fixed Top Navigation Bar</h1>
        <h2>Scroll this page to see the effect</h2>
        <h2>
          The navigation bar will stay at the top of the page while scrolling
        </h2>

        <p>Some text some text some text some text..</p>
        <p>Some text some text some text some text..</p>
        <p>Some text some text some text some text..</p>
        <p>Some text some text some text some text..</p>
        <p>Some text some text some text some text..</p>
        <p>Some text some text some text some text..</p>
        <p>Some text some text some text some text..</p>
        <p>Some text some text some text some text..</p>
        <p>Some text some text some text some text..</p>
        <p>Some text some text some text some text..</p>
        <p>Some text some text some text some text..</p>
        <p>Some text some text some text some text..</p>
        <p>Some text some text some text some text..</p>
        <p>Some text some text some text some text..</p>
        <p>Some text some text some text some text..</p>
        <p>Some text some text some text some text..</p>
        <p>Some text some text some text some text..</p>
        <p>Some text some text some text some text..</p>
        <p>Some text some text some text some text..</p>
        <p>Some text some text some text some text..</p>
      </div>
    </>
  );
};
export default NavBar;
