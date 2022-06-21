import React from 'react';
import { MdLogout } from 'react-icons/md';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import { setAuthUser } from '../../actions/authUser.action';
import navStyle from './Navbar.module.scss';

const Navbar = (props) => {
  const menuItems = [
    { label: 'HOME', url: '/' },
    { label: 'NEW QUESTION', url: '/add' },
    { label: 'LEADER BOARD', url: '/leaderboard' },
  ];

  const { user, authUser } = props;

  const handleLogOut = (e) => {
    e.preventDefault();

    const { dispatch } = props;

    dispatch(setAuthUser(null));
    props.history.push('/login');
  };

  return (
    <div className={navStyle['navbar']}>
      <nav>
        <ul>
          {menuItems.map((item) => (
            <li key={item.label}>
              <NavLink
                to={item.url}
                exact={item.url === '/'}
                activeClassName={navStyle['active']}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className={navStyle['user-section']}>
        {authUser ? (
          <>
            <div className={navStyle['user-info']}>
              <p>Hello, {user.name.split(' ')[0]}</p>
              <img
                src={user.avatarURL}
                alt={user.name}
                className={navStyle['user-avatar']}
              />
            </div>
            <button className={navStyle['icon-btn']} onClick={handleLogOut}>
              <MdLogout />
            </button>
          </>
        ) : null}
      </div>
    </div>
  );
};

const mapStateToProps = ({ authUser, users }) => {
  return {
    user: users[authUser],
    authUser,
  };
};

export default withRouter(connect(mapStateToProps)(Navbar));
