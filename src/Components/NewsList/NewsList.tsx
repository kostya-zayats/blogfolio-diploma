import React, {FC} from 'react';

import styles from './NewsList.module.scss';
import {NewsPostsList} from "../../Constants/@types";
import NewsListUnit from "../NewsListUnit/NewsListUnit";

type NewsListProps = {
  newsList: NewsPostsList;
};

const NewsList: FC<NewsListProps> = ({newsList}) => {

  return (
    <div className={styles["news-list"]}>
      {
        newsList.map((newsListUnit) => {
          return <NewsListUnit key={newsListUnit.id} newsPost={newsListUnit} />
        })
      }
    </div>
  );
};

export default NewsList;