import React from "react";
import { MdLogout } from "react-icons/md";
import { NavLink } from "react-router-dom";
import navStyle from "./Navbar.module.scss";

const Navbar = () => {
  const menuItems = [
    { label: "HOME", url: "/" },
    { label: "NEW QUESTION", url: "new" },
    { label: "LEADER BOARD", url: "/leaderboard" },
  ];
  return (
    <div className={navStyle["navbar"]}>
      <nav>
        <ul>
          {menuItems.map((item) => (
            <li key={item.label}>
              <NavLink
                to={item.url}
                exact={item.url === "/"}
                activeClassName={navStyle["active"]}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className={navStyle["user-section"]}>
        <div className={navStyle["user-info"]}>
          <p>Hello, user</p>
          <img
            src="https://demoda.vn/wp-content/uploads/2022/01/avatar-doremon.jpg"
            alt=""
            className={navStyle["user-avatar"]}
          />
        </div>
        <MdLogout />
      </div>
    </div>
  );
};

export default Navbar;
