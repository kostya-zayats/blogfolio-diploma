import React, {useState} from 'react';

import ThemeProvider from "./Context/Theme/ThemeProvider";
import {Theme} from './Constants/@types';
import classnames from 'classnames';
import Router from './Pages/Router';
import PagesWrapper from "./Pages/PagesWarpper";


const App = () => {

  const [theme, setTheme] = useState(Theme.Light);

  const onCangeTheme = (value: Theme) => {
    setTheme(value);
  };

  return (
    <ThemeProvider theme={theme} onChangeTheme={onCangeTheme}>
      <div className={classnames('main-container', { 'dark-theme' : theme === Theme.Dark })}>

        <PagesWrapper>
          <Router />
        </PagesWrapper>

      </div>
    </ThemeProvider>
  );
};

export default App;
