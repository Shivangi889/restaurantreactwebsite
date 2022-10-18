import React from 'react';
import { SubHeading } from '../../component';
// import {images} from '../../constants'
import welcome  from '../../assetss/welcome.png'

import './Header.css';

const Header = () => {
  return(
     <div className='app__header app__wrapper section__padding' id='home'>
<div className='app__wrapper_info'>
<SubHeading title = " Chase the new flavour"/>
<h1>The Key to Fine Dining</h1>
<p className='p__opensans' style={{margin:'2rem 0'}}>Here’s the flagship of the Bengali restaurant that’s brought good traditional cooking to tables across the country. In my opinion, the fish fry here is the best you’ll find anywhere and the mochar (banana flower) chop is one of the most interesting items available on any Bengali menu.</p>
<button type='button' className='custom__button'>Explore Menu</button>
</div>
    <div className='app__wrapper_img'>
      <img src={welcome} alt="header-img"/>
    </div>
  </div>

  );
 
};

export default Header;
