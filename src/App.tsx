import React from 'react';

import Button, { ButtonTypes } from "./Components/Button";
import Navigation from "./Components/Navigation/Navigation";
import NewsListUnit from "./Components/NewsListUnit/NewsListUnit";
import NewsList from "./Components/NewsList/NewsList";
import {ArrowToLeftIcon, ArrowToRightIcon, FacebookIcon, MoreIcon, SearchIcon, TwitterIcon} from "./Assets/icons";


const App = () => {

  return (
    <div className='main-container'>

      <Navigation/>

      <div className="container">

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

      </div>

    </div>
  );
};

export default App;
