import React, {useState} from 'react';

import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";
import ThemeProvider from "./Context/Theme/ThemeProvider";
import {Theme} from './Constants/@types';
import classnames from 'classnames';
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp/SignUp";
import Post from "./Pages/Post/Post";
import Home from "./Pages/Home/Home";


const App = () => {

  const [theme, setTheme] = useState(Theme.Light);

  const onCangeTheme = (value: Theme) => {
    setTheme(value);
  };

  return (
    <ThemeProvider theme={theme} onChangeTheme={onCangeTheme}>
      <div className={classnames('main-container', { 'dark-theme' : theme === Theme.Dark })}>

        <Navigation/>

        <div className="container">

          {/*<Home />*/}

          {/*<Post />*/}

          <SignIn />

          {/*<SignUp />*/}

          <Footer />

        </div>

      </div>
    </ThemeProvider>
  );
};

export default App;
