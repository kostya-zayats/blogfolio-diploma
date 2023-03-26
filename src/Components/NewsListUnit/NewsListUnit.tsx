import React from 'react';

import styles from './NewsListUnit.module.scss';

const NewsListUnit = () => {

  return (
    <div className={styles["news-list-item-wrap"]}>
      <div className={styles["news-list-item"]}>
        <div className={styles["news-list-item-pic"]}>
          <div className={styles["news-list-item-pic-overlay"]}/>
          <img src="https://media.istockphoto.com/id/1264074047/vector/breaking-news-background.jpg?s=1024x1024&w=is&k=20&c=OQpfeXBSwFZZ-OI08FautEpYI-3iUAJHlZTOTxRS3xE=" alt="news-bg"/>
        </div>
        <div className={styles["news-list-item-desc"]}>
          <div className={styles["news-list-item-desc-date"]}>April 20, 2021</div>
          <div className={styles["news-list-item-title"]}>Astronauts prep for new solar arrays on nearly seven-hour
            spacewalk
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsListUnit;