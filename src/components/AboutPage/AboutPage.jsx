import React from 'react';
import firstpage from './firstpage.png';
import secondpage from './secondpage.png';

function AboutPage() {
  return (
    <div className="container">
      <div className="headerContainer">
          <h2>My Resumé</h2>
      </div>
        <div className="resumeContainer">
          <div className="firstPageContainer">
            <a className="firstPageContainer" href='https://docs.google.com/document/d/1qkkafUKsDeeOftLImxXUNycmCfqZHXP2vlTfc4Gl3F0/edit?usp=sharing' id="resumeLink">
              <img className="firstPageImg" src={firstpage} alt='image of page 1 of my resumé' />
            </a>
          </div>
          <div className="secondPageContainer">
            <a className="secondPageContainer" href='https://docs.google.com/document/d/1qkkafUKsDeeOftLImxXUNycmCfqZHXP2vlTfc4Gl3F0/edit?usp=sharing' id="resumeLink">
              <img className='secondPageImg' src={secondpage} alt='image of page 2 of my resumé' />
            </a>
          </div>
        </div>
      
    </div>
  );
}

export default AboutPage;