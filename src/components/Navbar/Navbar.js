import React from 'react';
import { MdLogout } from 'react-icons/md';
import './Navbar.scss';

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
      <div className="user-section">
        <div className="user-info">
          <p>Hello, user</p>
          <img
            src="https://demoda.vn/wp-content/uploads/2022/01/avatar-doremon.jpg"
            alt=""
            className="user-avatar"
          />
        </div>
        <MdLogout />
      </div>
    </div>
  );
};

export default Navbar;
