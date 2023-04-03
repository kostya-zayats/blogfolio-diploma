import React from 'react';

import Button, { ButtonTypes } from "./Components/Button";
import Navigation from "./Components/Navigation";
import NewsListUnit from "./Components/NewsListUnit";
import NewsList from "./Components/NewsList";
import {ArrowToLeftIcon, ArrowToRightIcon, FacebookIcon, MoreIcon, SearchIcon, TwitterIcon} from "./Assets/icons";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Input from "./Components/Input";
import Tab from "./Components/Tab";
import FormContainer from "./Components/FormContainer/FormContainer";


const App = () => {

  return (
    <div className='main-container'>

      <Navigation/>

      <div className="container">

        <FormContainer title={'Sign In'}>
          <Input type={'text'} title={'Surname'} placeholder={'Your Surname'} />
          <Input type={'text'} title={'Surname'} placeholder={'Your Surname'} />
        </FormContainer>

        {/*<Header title={'Blog'} />

        <Tab />

        <NewsList>
          <NewsListUnit title={'AstronautsAstronautsAstronautsAstronautsAstronautsAstronautsAstronautsAstronautsAstronautsAstronautsAstronautsAstronautsAstronautsAstronautsAstronautsAstronautsAstronautsAstronautsAstronautsAstronauts'}/>
          <NewsListUnit title={'Astronauts prep for new solar'}/>
          <NewsListUnit title={'Astronauts prep for new solar arrays on nearly seven-hour spacewalk Astronauts prep for new solar arrays on nearly seven-hour spacewalk'}/>
          <NewsListUnit title={'Astronauts prep for new solar arrays on nearly seven-hour spacewalk'}/>
          <NewsListUnit title={'Astronauts prep for new solar arrays on nearly seven-hour spacewalk'}/>
          <NewsListUnit title={'Astronauts prep for new solar arrays on nearly seven-hour spacewalk'}/>
          <NewsListUnit title={'Astronauts prep for new solar arrays on nearly seven-hour spacewalk'}/>
          <NewsListUnit title={'Astronauts prep for new solar arrays on nearly seven-hour spacewalk'}/>
          <NewsListUnit title={'Astronauts prep for'}/>
          <NewsListUnit title={'Astronauts prep for new solar arrays on nearly seven-hour spacewalk'}/>
          <NewsListUnit title={'Astronauts prep for new solar arrays on nearly seven-hour spacewalk'}/>
          <NewsListUnit title={'Astronauts prep for new solar arrays on nearly seven-hour spacewalk'}/>
        </NewsList>

        <Input type={'text'} title={'Your Name'} error={'Field is empty'} placeholder={'Your Name'} />
        <Input type={'text'} placeholder={'Your Surname'} />

        <Button
          title={'Primary'}
          type={ButtonTypes.Primary}
          onClick={() => alert('Primary')}
        />
        <Button
          title={'Primary'}
          type={ButtonTypes.Primary}
          onClick={() => alert('Primary')}
          disabled
        />
        <Button
          title={'Secondary'}
          type={ButtonTypes.Secondary}
          onClick={() => alert('Primary')}
        />

        <ArrowToLeftIcon />
        <ArrowToRightIcon />
        <FacebookIcon />
        <TwitterIcon />
        <SearchIcon />
        <MoreIcon />*/}

        <Footer />

      </div>

    </div>
  );
};

export default App;
