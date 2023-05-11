import React, {useState} from 'react';

import styles from './UserName.module.scss';
import {NavLink} from "react-router-dom";
import {PageNames} from "../../Constants/@types";
import {useSelector} from "react-redux";
import authSelectors from '../../Redux/Selectors/authSelectors';
import classnames from "classnames";


const UserName = () => {
  const isLoggedIn = useSelector(authSelectors.getLoggedIn);
  const username = useSelector(authSelectors.getUserName);
  const initials = username[0];

  const [isOpened, setOpened] = useState(false);
  const toggleIsOpened = () => {
    setOpened(!isOpened);
  };

  return (
    <div className={styles["nav-user"]} onClick={toggleIsOpened}>
      {isLoggedIn ? <div className={styles["nav-user-initials"]}>{initials}</div> : null}
      {isLoggedIn ? <><div className={styles["nav-user-name"]}>{username}</div><div className={classnames(styles['nav-user-logout'], {[styles.show]: isOpened})}>Log Out</div></> : <NavLink to={PageNames.SignIn}>Sign In</NavLink>}
    </div>
  );
};

export default UserName;