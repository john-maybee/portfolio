import React from 'react';
import firstpage from './firstpage.png';
import secondpage from './secondpage.png';

function AboutPage() {
  return (
    <div className="container">
      <div className="headerContainer">
          <h2>My Resumé</h2>
          <div className="resumeContainer">
            <div className="firstPageContainer">
                <img className='firstPageImg' src={firstpage} alt='image of page 1 of my resumé' />
            </div>
            <div className="secondPageContainer">
                <img className='secondPageImg' src={secondpage} alt='image of page 2 of my resumé' />
            </div>
          </div>
      </div>
    </div>
  );
}

export default AboutPage;