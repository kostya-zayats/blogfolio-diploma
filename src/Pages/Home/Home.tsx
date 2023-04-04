import React from 'react';
import NewsList from "../../Components/NewsList";
import NewsListUnit from "../../Components/NewsListUnit";
import Header from "../../Components/Header";
import Tab from "../../Components/Tab";
import {MOCK_NEWS_POSTS_LIST} from "../../Constants/const";


const Home = () => {

  return (
    <>
      <Header title={'Blog'} />

      <Tab />

      <NewsList newsList={MOCK_NEWS_POSTS_LIST} />
    </>
  );
};

export default Home;