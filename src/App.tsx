import React from 'react';

import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Home from "./Pages/Home";


const App = () => {

  return (
    <div className='main-container'>

      <Navigation/>

      <div className="container">

        <SignIn />

        <SignUp />

        <Home />

        <Footer />

      </div>

    </div>
  );
};

export default App;
