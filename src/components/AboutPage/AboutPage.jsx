import React from 'react';
import firstpage from './firstpage.png';
import secondpage from './secondpage.png';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Roboto',
    ],
  }
});

function AboutPage() {
  return (
    <ThemeProvider theme={theme}>
      <div className="aboutContainer">
        <br />
        <div className="headerContainer">
          <Typography variant="h4" gutterBottom>My Resumé</Typography>
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
    </ThemeProvider>
  );
}

export default AboutPage;