import React from 'react';
import { MdLogout } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  const menuItems = [
    { label: 'HOME', url: '/' },
    { label: 'NEW QUESTION', url: 'new' },
    { label: 'LEADER BOARD', url: '/leaderboard' },
  ];
  return (
    <div className="navbar">
      <nav>
        <ul>
          {menuItems.map((item) => (
            <li key={item.label}>
              <NavLink
                to={item.url}
                exact={item.url === '/'}
                activeClassName="active"
              >
                {item.label}
              </NavLink>
            </li>
          ))}
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
