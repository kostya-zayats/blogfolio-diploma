import React, {FC} from 'react';
import {NewsPost} from "../../Constants/@types";

import styles from './NewsListUnit.module.scss';
import {useNavigate} from "react-router";


type NewsListUnitProps = {
  newsPost: NewsPost;
}

const NewsListUnit: FC<NewsListUnitProps> = ({ newsPost }) => {
  const { title, date, image, id } = newsPost;

  const navigate = useNavigate();
  const onNewsClick = () => {
    navigate(`/news/${id}`);
  };

  return (
    <div className={styles["news-list-item-wrap"]}>
      <div className={styles["news-list-item"]}>
        <div onClick={onNewsClick} className={styles["news-list-item-pic"]}>
          <img src={image} alt="news-bg"/>
          <div className={styles["news-list-item-pic-overlay"]}/>
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