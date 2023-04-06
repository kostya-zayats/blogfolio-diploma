import React from 'react';
import Navigation from "../../Components/Navigation";
import Footer from "../../Components/Footer";
import {Outlet, useLocation} from "react-router";
import {PageNames} from "../../Constants/@types";
import Home from "../Home";

const PagesWrapper = () => {

  const { pathname } = useLocation();

  return (
    <>
      <Navigation/>

      <div className="container">

        {pathname === PageNames.Home ? <Home /> : <Outlet />}

        <Footer />

      </div>
    </>
  )
};

export default PagesWrapper;