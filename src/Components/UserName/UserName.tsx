import React, {FC} from 'react';

import styles from './UserName.module.scss';
import {NavLink} from "react-router-dom";
import {PageNames} from "../../Constants/@types";
import {useSelector} from "react-redux";
import authSelectors from '../../Redux/Selectors/authSelectors';

type UserNameProps = {
  title: string;
};

const UserName: FC<UserNameProps> = ({title}) => {
  const initials = title[0].toUpperCase();
  const isLoggedIn = useSelector(authSelectors.getLoggedIn);

  return (
    <div className={styles["nav-user"]}>
      {isLoggedIn ? <div className={styles["nav-user-initials"]}>{initials}</div> : null}
      {isLoggedIn ? <div className={styles["nav-user-name"]}>{title}</div> : <NavLink to={PageNames.SignIn}>Sign In</NavLink>}
    </div>
  );
};

export default UserName;