import React from 'react';

import {BrowserRouter, Route, Routes} from "react-router-dom";
import {PageNames} from "../../Constants/@types";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import PagesWrapper from "../PagesWarpper";
import NotFound from "../NotFound";
import RegistrationConfirm from "../RegistrationConfirm";
import RegistrationSuccess from "../RegistrationSuccess";
import Post from "../Post";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PageNames.Home} element={<PagesWrapper />}>
          <Route path={PageNames.NewsPage} element={<Post />} />
          <Route path={PageNames.SignIn} element={<SignIn />} />
          <Route path={PageNames.SignUp} element={<SignUp />} />
          <Route path={PageNames.RegistrationConfirm} element={<RegistrationConfirm />} />
          <Route path={PageNames.ActivateUser} element={<RegistrationSuccess />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;