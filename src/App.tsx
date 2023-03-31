import React from 'react';

import Button, { ButtonTypes } from "./Components/Button";
import Navigation from "./Components/Navigation";
import NewsListUnit from "./Components/NewsListUnit";
import NewsList from "./Components/NewsList";
import {ArrowToLeftIcon, ArrowToRightIcon, FacebookIcon, MoreIcon, SearchIcon, TwitterIcon} from "./Assets/icons";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Input from "./Components/Input";
import Tab from "./Components/Tab";


const App = () => {

  return (
    <div className='main-container'>

      <Navigation/>

      <div className="container">

        <Header title={'Blog'} />

        <Tab />

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

        <Input type={'text'} title={'Your Name'} error={'Field is empty'} placeholder={'Your Name'} />
        <Input type={'text'} placeholder={'Your Surname'} />

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
