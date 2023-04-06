import React from 'react';
import Navigation from "../../Components/Navigation/Navigation";
import Footer from "../../Components/Footer/Footer";
import {Outlet} from "react-router";

const PagesWrapper = () => {

  return (
    <>
      <Navigation/>

      <div className="container">

        <Outlet />

        <Footer />

      </div>
    </>
  )
};

export default PagesWrapper;