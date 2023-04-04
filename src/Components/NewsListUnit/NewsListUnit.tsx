import React, {FC} from 'react';

import styles from './NewsListUnit.module.scss';
import {NewsPost} from "../../Constants/@types";


type NewsListUnitProps = {
  newsPost: NewsPost;
}

const NewsListUnit: FC<NewsListUnitProps> = ({ newsPost }) => {

  const { title, date, image } = newsPost;

  return (
    <div className={styles["news-list-item-wrap"]}>
      <div className={styles["news-list-item"]}>
        <div className={styles["news-list-item-pic"]}>
          <div className={styles["news-list-item-pic-overlay"]}/>
          <img src={image} alt="news-bg"/>
        </div>
        <div className={styles["news-list-item-desc"]}>
          <div className={styles["news-list-item-desc-date"]}>{date}</div>
          <div className={styles["news-list-item-title"]}>{title}</div>
        </div>
      </div>
    </div>
  );
};

export default NewsListUnit;