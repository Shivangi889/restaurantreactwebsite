import React from 'react';
// import G from 'G.png'
import G from '../../assetss/G.png';
import spoon from '../../assetss/spoon.png';
import knife from '../../assetss/knife.png'
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className='app__aboutus app__bg flex section__padding' id='about'>
      <div className='app__aboutus-overlay flex__center'>
        <img src={G} alt="gletter" />
      </div>


      <div className='app__aboutus-content flex__center '>
        <div className='app__aboutus-content_about'>
          <h1 className='headtext__cormorant'> About Us</h1>
          <img src={spoon} alt="about_spoon" className='spoon__images' />
          <p className='p__opensans'>We welcome you to sit back, unwind and appreciate the lovely sights and hints of the ocean while our best gourmet expert sets you up a scrumptious dinner utilizing the best and freshest ingredients.</p>
          <button type="button" className='custom__button'> Know More</button>
        </div>
        <div className='app__aboutus-content_knife flex__center'>
          <img src={knife} alt='about_knife' />
        </div>
        <div className='app__aboutus-content_history'>
          <h1 className='headtext__cormorant'> Our History</h1>
          <img src={spoon} alt="about_spoon" className='spoon__images' />
          <p className='p__opensans'>We welcome you to sit back, unwind and appreciate the lovely sights and hints of the ocean while our best gourmet expert sets you up a scrumptious dinner utilizing the best and freshest ingredients.</p>
          <button type="button" className='custom__button'> Know More</button>

        </div>
      </div>
    </div>
  );
};
export default AboutUs;