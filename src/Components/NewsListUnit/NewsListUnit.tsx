import React, {FC} from 'react';

import styles from './NewsListUnit.module.scss';

type InputProps = {
  title: string;
}

const NewsListUnit: FC<InputProps> = ({title}) => {

  return (
    <div className={styles["news-list-item-wrap"]}>
      <div className={styles["news-list-item"]}>
        <div className={styles["news-list-item-pic"]}>
          <div className={styles["news-list-item-pic-overlay"]}/>
          <img src="https://media.istockphoto.com/id/1264074047/vector/breaking-news-background.jpg?s=1024x1024&w=is&k=20&c=OQpfeXBSwFZZ-OI08FautEpYI-3iUAJHlZTOTxRS3xE=" alt="news-bg"/>
        </div>
        <div className={styles["news-list-item-desc"]}>
          <div className={styles["news-list-item-desc-date"]}>April 20, 2021</div>
          <div className={styles["news-list-item-title"]}>{title}</div>
        </div>
      </div>
    </div>
  );
};

export default NewsListUnit;