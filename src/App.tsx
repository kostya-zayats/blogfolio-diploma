import React from 'react';

import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Home from "./Pages/Home";
import Post from "./Pages/Post";
import NewsListUnit from "./Components/NewsListUnit/NewsListUnit";
import {MOCK_NEWS_POSTS_LIST} from "./Constants/const";


const App = () => {

  return (
    <div className='main-container'>

      <Navigation/>

      <div className="container">

        <NewsListUnit newsPost={MOCK_NEWS_POSTS_LIST} />

        {/*<SignIn />

        <SignUp />*/}

        <Home />

        {/*<Post />*/}

        <Footer />

      </div>

    </div>
  );
};

export default App;
