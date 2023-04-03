import React from 'react';
import Header from "../../Components/Header";

import styles from './Post.module.scss';

const Post = () => {

  return (
    <>
      <div className={styles['news-post-container']}>
        <Header title={'Post Title'} />

        <div className={styles['news-post-img-container']}>
          <img className={styles['news-post-img']} src="https://media.istockphoto.com/id/1311148884/vector/abstract-globe-background.jpg?s=1024x1024&w=is&k=20&c=-AdIwLn-nIYlgctc95CZuJHnkku_ia-f8A8m2LFwl2A=" alt=""/>
        </div>
        <div className={styles['news-post-text-container']}>
          <p>
            The excitement surrounding this exhibition delighted longtime fans of the expressive painter while
            inspiring a legion of new devotees—a trend matched by Neel’s strengthening position in the art market,
            especially in the past year. In May, Neel’s 1966 canvas Dr. Finger’s Waiting Room roused a flurry of bids
            from the United States, Asia, and Europe at Christie’s New York, where it ultimately sold for just over
            $3 million, breaking both its high estimate and the artist’s auction record. Just hours earlier at
            Sotheby’s New York, Neel’s double portrait Henry and Sally Hope (1977), depicting an art historian
            and his wife, sold for just under $1.6 million, notching her third-highest auction result.
          </p>
        </div>
      </div>
    </>
  );
};

export default Post;