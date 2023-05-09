import React, {useEffect} from 'react';
import Header from "../../Components/Header";

import styles from './Post.module.scss';
import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {getSingleNews} from "../../Redux/Reducers/newsReducer";
import newsSelectors from "../../Redux/Selectors/newsSelectors";
import {PageNames} from "../../Constants/@types";
import {NavLink} from "react-router-dom";

const Post = () => {
  const params = useParams();
  const { id } = params;
  const dispatch = useDispatch();
  useEffect(() => {
    if (id) {
      dispatch(getSingleNews(id));
    }
  }, []);

  const news = useSelector(newsSelectors.getSingleNews);

  return news ? (
    <div className={styles['news-post-container']}>
      <div className={styles['news-post-nav']}>
        <div className={styles['news-post-nav-unit']}>
          <NavLink className={styles['news-post-nav-unit-link']} to={PageNames.Home}>{'Home'}</NavLink>
        </div>
        <div className={styles['news-post-nav-separator']}>
          /
        </div>
        <div className={styles['news-post-nav-unit']}>
          Post {news.id}
        </div>
      </div>
      <Header title={news.title} />

      <div className={styles['news-post-img-container']}>
        <img className={styles['news-post-img']} src={news.image} alt={news.image} />
      </div>
      <div className={styles['news-post-text-container']}>
        <p>
          {news.text}
        </p>
      </div>
    </div>
  ) : (
    <div className={styles['news-post-empty']}>{'News error!!!'}</div>
  );
};

export default Post;