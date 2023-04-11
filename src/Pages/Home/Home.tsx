import React, {useState, useEffect} from 'react';
import NewsList from "../../Components/NewsList";
import Header from "../../Components/Header";
import Tab from "../../Components/Tab";
import {MOCK_NEWS_POSTS_LIST} from "../../Constants/const";
import {NewsPostsList} from '../../Constants/@types';
import SelectedNewsModal from "./SelectedNewsModal";


const Home = () => {
  const [newsList, setNewsList] = useState<NewsPostsList | null>(null);

  useEffect(() => {
    setNewsList(MOCK_NEWS_POSTS_LIST);
  }, []);

  return (
    <>
      <Header title={'Blog'} />
      <Tab />
      <NewsList newsList={newsList} />
      <SelectedNewsModal/>
    </>
  );
};

export default Home;