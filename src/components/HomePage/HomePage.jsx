import React from 'react';
import { Link } from "react-router-dom";
import self from './selfphoto.png';
import { Email, GitHub, LinkedIn, Work } from '@mui/icons-material';
import { Tooltip } from '@mui/material';


function HomePage() {
    return(
        <div className="container">
            <div className="headerContainer">
                <h2>Hi, I'm John Maybee</h2>
            </div>
            <div>
                <div className="selfImgContainer">
                    <img className='selfImg' src={self} alt='image of John Maybee' />
                </div>
                <div className="introContainer">
                    <h3>Software Developer</h3>
                    <p>trained in the full stack</p>
                    <p>driven learner and researcher</p>
                    <p>dedicated dog dad to Winnie</p>
                    <p><Email className='icon' fontSize="small" sx={{color: '#223651'}}/> john.d.maybee@gmail.com</p>
                    <p>visit my:
                        <a href='https://github.com/john-maybee'id='github link'>
                            <Tooltip title="Link to John's GitHub" arrow><GitHub className='githubIcon' fontSize="small" sx={{color: '#223651'}} /></Tooltip>
                        </a> 
                        <a href='https://www.linkedin.com/in/john-d-maybee/' id='linkedin link'>
                            <Tooltip title="Link to John's LinkedIn" arrow><LinkedIn className='linkedinIcon' fontSize="small" sx={{color: '#223651'}} /></Tooltip>
                        </a>
                        <Tooltip title="John's resumé" arrow>
                            <Link className="navLink" to="/about" >
                                <Work className='workIcon' fontSize="small" sx={{color: '#223651'}}/>
                            </Link>
                        </Tooltip>
                    </p>
                </div>
            </div>
        </div>
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