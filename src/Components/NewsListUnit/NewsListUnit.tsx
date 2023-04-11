import React, {FC} from 'react';

import styles from './NewsListUnit.module.scss';
import {NewsPost} from "../../Constants/@types";
import {useDispatch} from "react-redux";
import {setSelectedNews} from '../../Redux/Reducers/newsReducer';


type NewsListUnitProps = {
  newsPost: NewsPost;
}

const NewsListUnit: FC<NewsListUnitProps> = ({ newsPost }) => {
  const { title, date, image } = newsPost;

  const dispatch = useDispatch();

  const onUnitClick = () => {
    dispatch(setSelectedNews(newsPost));
  };

  return (
    <div className={styles["news-list-item-wrap"]} onClick={onUnitClick}>
      <div className={styles["news-list-item"]}>
        <div className={styles["news-list-item-pic"]}>
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