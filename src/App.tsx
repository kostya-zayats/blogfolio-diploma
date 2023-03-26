import React from 'react';

import Button, { ButtonTypes } from "./Components/Button";
import Navigation from "./Components/Navigation/Navigation";
import NewsListUnit from "./Components/NewsListUnit/NewsListUnit";
import NewsList from "./Components/NewsList/NewsList";


const App = () => {

  return (
    <div className='main-container'>

      <Navigation/>

      <div className="container">

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
      </div>

    </div>
  );
};

export default App;
