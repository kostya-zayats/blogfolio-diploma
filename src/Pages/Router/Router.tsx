import React from 'react';

import {BrowserRouter, Route, Routes} from "react-router-dom";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import Home from "../Home";
import {PageNames} from "../../Constants/@types";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PageNames.Home} element={<Home />} />
        <Route path={PageNames.SignIn} element={<SignIn />} />
        <Route path={PageNames.SignUp} element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;