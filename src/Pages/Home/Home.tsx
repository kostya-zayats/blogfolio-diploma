import React from 'react';
import NewsList from "../../Components/NewsList";
import NewsListUnit from "../../Components/NewsListUnit";
import Header from "../../Components/Header";
import Tab from "../../Components/Tab";

const Home = () => {

  return (
    <>
      <Header title={'Blog'} />

      <Tab />

      <NewsList>
        <>
          <NewsListUnit title={'AstronautsAstronautsAstronautsAstronautsAstronautsAstronautsAstronautsAstronautsAstronautsAstronautsAstronautsAstronautsAstronautsAstronautsAstronautsAstronautsAstronautsAstronautsAstronautsAstronauts'}/>
          <NewsListUnit title={'Astronauts prep for new solar'}/>
          <NewsListUnit title={'Astronauts prep for new solar arrays on nearly seven-hour spacewalk Astronauts prep for new solar arrays on nearly seven-hour spacewalk'}/>
          <NewsListUnit title={'Astronauts prep for new solar arrays on nearly seven-hour spacewalk'}/>
          <NewsListUnit title={'Astronauts prep for new solar arrays on nearly seven-hour spacewalk'}/>
          <NewsListUnit title={'Astronauts prep for new solar arrays on nearly seven-hour spacewalk'}/>
          <NewsListUnit title={'Astronauts prep for new solar arrays on nearly seven-hour spacewalk'}/>
          <NewsListUnit title={'Astronauts prep for new solar arrays on nearly seven-hour spacewalk'}/>
          <NewsListUnit title={'Astronauts prep for'}/>
          <NewsListUnit title={'Astronauts prep for new solar arrays on nearly seven-hour spacewalk'}/>
          <NewsListUnit title={'Astronauts prep for new solar arrays on nearly seven-hour spacewalk'}/>
          <NewsListUnit title={'Astronauts prep for new solar arrays on nearly seven-hour spacewalk'}/>
        </>
      </NewsList>
    </>
  );
};

export default Home;