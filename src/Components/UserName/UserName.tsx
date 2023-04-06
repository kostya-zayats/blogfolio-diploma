import React, {FC} from 'react';

import styles from './UserName.module.scss';
import {NavLink} from "react-router-dom";
import {PageNames} from "../../Constants/@types";

type UserNameProps = {
  title: string;
};

const UserName: FC<UserNameProps> = ({title}) => {
  const initials = title[0] + title[title.lastIndexOf(' ') + 1].toUpperCase();
  const isLoggedIn = false;

  return (
    <div className={styles["nav-user"]}>
      {isLoggedIn ? <div className={styles["nav-user-initials"]}>{initials}</div> : null}
      {isLoggedIn ? <div className={styles["nav-user-name"]}>{title}</div> : <NavLink to={PageNames.SignIn}>Sign In</NavLink>}
    </div>
  );
};

export default UserName;