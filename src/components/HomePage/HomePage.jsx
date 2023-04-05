import React from 'react';
import self from './selfphoto.png';
import { Email } from '@mui/icons-material';


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
                    <p></p>
                </div>
            </div>
        </div>
    )
}

export default HomePage;



// import {Box} from '@mui/material';

/* height={{xs: '35vh', md: '40vh'}}
              borderRadius={'50%'} p={'0.75rem'} mb={{xs: '1rem', sm: 0}} mr={{xs: 0, md: '2rem'}} */
              /* style={{background: info.gradient}} */
              /* width={{xs: '35vh', md: '40vh'}} */

              /* component={'img'} */

              /* <Box classname='selfimg' src={self} alt={'image of John Maybee'} /> */