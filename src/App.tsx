import React, {useState} from 'react';

import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";
import ThemeProvider from "./Context/Theme/ThemeProvider";
import {Theme} from './Constants/@types';
import classnames from 'classnames';
import Router from './Pages/Router';


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

          <Router />

          <Footer />

        </div>

      </div>
    </ThemeProvider>
  );
};

export default App;
