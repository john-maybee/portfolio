import React from 'react';
import { Link } from "react-router-dom";
import self from './selfphoto.png';
import { Email, GitHub, LinkedIn, Work } from '@mui/icons-material';
import { Tooltip } from '@mui/material';
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

function HomePage() {
    return(
        <ThemeProvider theme={theme}>
            <div className="container">
                <br />
                <div className="headerContainer">
                    <Typography variant="h4" gutterBottom>Hi, I'm John Maybee</Typography>
                </div>
                <br />
                <div className='intro'>
                    <div className="selfImgContainer">
                        <img className='selfImg' src={self} alt='image of John Maybee' />
                    </div>
                    <div className="introContainer">
                        <Typography variant="h5" fontWeight={500} gutterBottom>About me:</Typography>
                        <Typography variant="h6" fontWeight={400} gutterBottom>Software Developer</Typography>
                        <Typography variant="body1" fontWeight={300} gutterBottom>trained in the full stack</Typography>
                        <Typography variant="body1" fontWeight={300} gutterBottom>driven learner and researcher</Typography>
                        <Typography variant="body1" fontWeight={300} gutterBottom>dog dad to Winnie</Typography>
                        <Typography variant="body1" fontWeight={300} gutterBottom>
                            <Email className='icon' fontSize="small" sx={{color: '#262D3D'}}/>
                            john.d.maybee@gmail.com
                        </Typography>
                        <Typography variant="body1" fontWeight={300} gutterBottom>visit my:
                            <a href='https://github.com/john-maybee'id='github link'>
                                <Tooltip title="Link to John's GitHub" arrow>
                                    <GitHub className='githubIcon' fontSize="small" sx={{color: '#39AB63'}} />
                                </Tooltip>
                            </a> 
                            <a href='https://www.linkedin.com/in/john-d-maybee/' id='linkedin link'>
                                <Tooltip title="Link to John's LinkedIn" arrow>
                                    <LinkedIn className='linkedinIcon' fontSize="small" sx={{color: '#39AB63'}} />
                                </Tooltip>
                            </a>
                                <Tooltip title="John's resumé" arrow>
                                    <Link to="/about" >
                                        <Work className='workIcon' fontSize="small" sx={{color: '#39AB63'}}/>
                                    </Link>
                                </Tooltip>
                        </Typography>
                    </div>
                </div>
            </div>
        </ThemeProvider>
    )
}

export default HomePage;

{/* <Link to={{ pathname:"https://github.com/john-maybee"}}></Link> */}


// import {Box} from '@mui/material';

/* height={{xs: '35vh', md: '40vh'}}
              borderRadius={'50%'} p={'0.75rem'} mb={{xs: '1rem', sm: 0}} mr={{xs: 0, md: '2rem'}} */
              /* style={{background: info.gradient}} */
              /* width={{xs: '35vh', md: '40vh'}} */

              /* component={'img'} */

              /* <Box classname='selfimg' src={self} alt={'image of John Maybee'} /> */