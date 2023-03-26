import React, {FC} from 'react';

import styles from './UserName.module.scss';

type UserNameProps = {
  title: string;
};

const UserName: FC<UserNameProps> = ({title}) => {
  const initials = title[0] + title[title.lastIndexOf(' ') + 1].toUpperCase();

  return (
    <div className={styles["nav-user"]}>
      <div className={styles["nav-user-initials"]}>{initials}</div>
      <div className={styles["nav-user-name"]}>{title}</div>
    </div>
  );
};

export default UserName;