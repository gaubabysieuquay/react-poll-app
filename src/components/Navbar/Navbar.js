import React from "react";
import { MdLogout } from "react-icons/md";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import navStyle from "./Navbar.module.scss";

const Navbar = (props) => {
  const menuItems = [
    { label: "HOME", url: "/" },
    { label: "NEW QUESTION", url: "/new" },
    { label: "LEADER BOARD", url: "/leaderboard" },
  ];

  const { user } = props;

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
          <p>Hello, {user.name}</p>
          <img
            src={user.avatarURL}
            alt={user.name}
            className={navStyle["user-avatar"]}
          />
        </div>
        <MdLogout />
      </div>
    </div>
  );
};

const mapStateToProps = ({ authUser, users }) => {
  return {
    user: users[authUser],
  };
};

export default connect(mapStateToProps)(Navbar);
