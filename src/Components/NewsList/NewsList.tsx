import React from 'react';

import styles from './NewsList.module.scss';

type NewsListProps = {
  children?: React.ReactNode;
};

const NewsList = (props: NewsListProps) => {

  return (
    <div className={styles["news-list"]}>
      {props.children}
    </div>
  );
};

export default NewsList;