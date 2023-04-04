import React, {FC} from 'react';

import styles from './NewsList.module.scss';
import {NewsPostsList} from "../../Constants/@types";
import NewsListUnit from "../NewsListUnit/NewsListUnit";

type NewsListProps = {
  newsList: NewsPostsList | null;
};

const NewsList: FC<NewsListProps> = ({newsList}) => {

  return newsList && newsList.length > 0 ? (
    <div className={styles["news-list"]}>
      {
        newsList.map((newsListUnit) => {
          return <NewsListUnit key={newsListUnit.id} newsPost={newsListUnit} />
        })
      }
    </div>
  ) : (
    <div className={styles['news-empty']}>{'No news'}</div>
  )
};

export default NewsList;