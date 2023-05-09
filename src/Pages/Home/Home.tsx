import React, {useState, useEffect} from 'react';
import NewsList from "../../Components/NewsList";
import Header from "../../Components/Header";
import Tab from "../../Components/Tab";
import {MOCK_NEWS_POSTS_LIST} from "../../Constants/const";
import {NewsPostsList} from '../../Constants/@types';
import {useDispatch, useSelector} from "react-redux";
import NewsSelectors from "../../Redux/Selectors/newsSelectors";
import { getNews } from "../../Redux/Reducers/newsReducer";


const Home = () => {
  const allNews = useSelector(NewsSelectors.getAllNews);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNews());
  }, []);

  return (
    <>
      <Header title={'Blog'} />
      <Tab />
      <NewsList newsList={allNews} />
    </>
  );
};

export default Home;