import React from 'react';

import styles from './UserName.module.scss';
import {NavLink} from "react-router-dom";
import {PageNames} from "../../Constants/@types";
import {useSelector} from "react-redux";
import authSelectors from '../../Redux/Selectors/authSelectors';


const UserName = () => {
  const isLoggedIn = useSelector(authSelectors.getLoggedIn);
  const username = useSelector(authSelectors.getUserName);
  const initials = username[0];

  return (
    <div className={styles["nav-user"]}>
      {isLoggedIn ? <div className={styles["nav-user-initials"]}>{initials}</div> : null}
      {isLoggedIn ? <><div className={styles["nav-user-name"]}>{username}</div><div className={styles["nav-user-logout"]}>Log Out</div></> : <NavLink to={PageNames.SignIn}>Sign In</NavLink>}
    </div>
  );
};

export default UserName;