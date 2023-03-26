import React from 'react';

import Button, { ButtonTypes } from "./Components/Button";
import Navigation from "./Components/Navigation/Navigation";
import NewsListUnit from "./Components/NewsListUnit/NewsListUnit";
import NewsList from "./Components/NewsList/NewsList";
import {ArrowToLeftIcon, ArrowToRightIcon, FacebookIcon, MoreIcon, SearchIcon, TwitterIcon} from "./Assets/icons";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import ThemeSwitcher from "./Components/ThemeSwitcher/ThemeSwitcher";


const App = () => {

  return (
    <div className='main-container'>

      <Navigation/>

      <div className="container">

        <Header title={'Blog'} />

        <NewsList>
          <NewsListUnit/>
          <NewsListUnit/>
          <NewsListUnit/>
          <NewsListUnit/>
          <NewsListUnit/>
          <NewsListUnit/>
          <NewsListUnit/>
          <NewsListUnit/>
          <NewsListUnit/>
          <NewsListUnit/>
          <NewsListUnit/>
          <NewsListUnit/>
        </NewsList>

        <Button
          title={'Primary'}
          type={ButtonTypes.Primary}
          onClick={() => alert('Primary')}
        />
        <Button
          title={'Primary'}
          type={ButtonTypes.Primary}
          onClick={() => alert('Primary')}
          disabled
        />
        <Button
          title={'Secondary'}
          type={ButtonTypes.Secondary}
          onClick={() => alert('Primary')}
        />

        <ArrowToLeftIcon />
        <ArrowToRightIcon />
        <FacebookIcon />
        <TwitterIcon />
        <SearchIcon />
        <MoreIcon />

        <Footer />

      </div>

    </div>
  );
};

export default App;
