import React, {FC} from 'react';

import styles from './NewsList.module.scss';

type NewsListProps = {
  children?: React.ReactNode;
};

const NewsList: FC<NewsListProps> = ({children}) => {

  return (
    <div className={styles["news-list"]}>
      {children}
    </div>
  );
};

export default NewsList;