import React from 'react';
import self from './selfphoto.png';


function HomePage() {
    return(
        <div className="container">
            <h1>Portfolio</h1>
            
            <div className="selfImgContainer">
                <img className='selfImg' src={self} alt='image of John Maybee' />
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