import React from "react";
import { MdLogout } from "react-icons/md";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <ul>
          <li>HOME</li>
          <li>NEW QUESTION</li>
          <li>LEADERBOARD</li>
        </ul>
      </nav>
      <div className="user-info">
        <p>Hello, user</p>
        <MdLogout />
      </div>
    </div>
  );
};

export default Navbar;
