import React from 'react';


import { SpecialMenu, AboutUs, Header, Cheff, Food, FindUs, Footer, Intro, Laurels } from './container';
import { Navbar } from './component';
import './App.css';

const App = () => {
  return (
    <div>

<Navbar />

       <Header />
      <AboutUs />
      <SpecialMenu />
      <Cheff />
      <Intro />
      <Laurels />
      <Food />
      <FindUs />
      <Footer /> 
    </div>

  );
};
export default App;