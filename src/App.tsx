import React from 'react';
import {Provider, useDispatch, useSelector} from "react-redux";
import ThemeProvider from "./Context/Theme/ThemeProvider";
import {Theme} from './Constants/@types';
import classnames from 'classnames';
import Router from './Pages/Router';
import { store } from './Redux/store';
import {setTheme} from './Redux/Reducers/themeReducer';
import ThemeSelectors from './Redux/Selectors/themeSelectors';


const App = () => {

  const dispatch = useDispatch();
  const theme = useSelector(ThemeSelectors.getTheme);

  const onCangeTheme = (value: Theme) => {
    dispatch(setTheme(value));
  };

  return (
    <ThemeProvider theme={theme} onChangeTheme={onCangeTheme}>
      <div className={classnames('main-container', { 'dark-theme' : theme === Theme.Dark })}>
        <Router />
      </div>
    </ThemeProvider>
  );
};

const AppWithStore = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
};

export default AppWithStore;
