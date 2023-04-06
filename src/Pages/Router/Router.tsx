import React from 'react';

import {BrowserRouter, Route, Routes} from "react-router-dom";
import {PageNames} from "../../Constants/@types";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import PagesWrapper from "../PagesWarpper";
import NotFound from "../NotFound";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PageNames.Home} element={<PagesWrapper />}>
          <Route path={PageNames.SignIn} element={<SignIn />} />
          <Route path={PageNames.SignUp} element={<SignUp />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;