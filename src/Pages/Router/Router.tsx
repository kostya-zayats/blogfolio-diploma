import React from 'react';

import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
//import Home from "../Home";
import {PageNames} from "../../Constants/@types";
import PagesWrapper from "../PagesWarpper/PagesWrapper";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/*<Route path={PageNames.Home} element={<Home />} />*/}
        <Route path={PageNames.Home} element={<PagesWrapper />}>
          <Route path={PageNames.SignIn} element={<SignIn />} />
          <Route path={PageNames.SignUp} element={<SignUp />} />
        </Route>
        <Route path='*' element={<Navigate to={PageNames.Home} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;