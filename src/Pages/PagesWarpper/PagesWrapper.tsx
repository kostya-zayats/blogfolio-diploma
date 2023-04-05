import React, {FC, ReactElement} from 'react';
import Navigation from "../../Components/Navigation/Navigation";
import Footer from "../../Components/Footer/Footer";

type PagesWrapperProps = {
  children: ReactElement;
}

const PagesWrapper:FC<PagesWrapperProps> = ({children}) => {

  return (
    <>
      <Navigation/>

      <div className="container">

        {children}

        <Footer />

      </div>
    </>
  )
};

export default PagesWrapper;