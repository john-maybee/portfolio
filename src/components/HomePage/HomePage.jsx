import React from 'react';
import { Link } from "react-router-dom";
import self from './selfphoto.png';
import tatuser from './tatuserpage.png';
import createidea from './tatcreateidea.png';
import ideas from './tatideaspage.png';
import editidea from './tateditidea.png';
import createartist from './tatcreateartist.png';
import artists from './tatartistspage.png';
import about from './tataboutpage.png';
import tatregister from './tatregister.png';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Email, GitHub, LinkedIn, Work } from '@mui/icons-material';
import { Tooltip } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

////////////////////////HomePage Theme////////////////////////
const theme = createTheme({
    typography: {
      fontFamily: [
        'Roboto',
      ],
    }
});


////////////////////////HomePage Component////////////////////////
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
                <div className='imageListContainer'>
                    <ImageList sx={{width: 400, height: 900}} cols={1}>
                        <ImageListItem>
                            <img src={tatuser} alt='Image of the user home page from To Tat solo project' loading='lazy'/>
                            <ImageListItemBar 
                                title='User Home Page'
                                position='below'
                            />
                        </ImageListItem>
                        <ImageListItem>
                            <img src={createidea} alt='Image of the create new idea page' loading='lazy'/>
                            <ImageListItemBar 
                                title='Create Idea Page'
                                position='below'
                            />
                        </ImageListItem>
                        <ImageListItem>
                            <img src={ideas} alt='Image of the user ideas page' loading='lazy'/>
                            <ImageListItemBar 
                                title='Ideas Page'
                                position='below'
                            />
                        </ImageListItem>
                        <ImageListItem>
                            <img src={editidea} alt='Image of the edit idea page' loading='lazy'/>
                            <ImageListItemBar 
                                title='Edit Idea Page'
                                position='below'
                            />
                        </ImageListItem>
                        <ImageListItem>
                            <img src={createartist} alt='Image of the create artist page' loading='lazy'/>
                            <ImageListItemBar 
                                title='Create Artist Page'
                                position='below'
                            />
                        </ImageListItem>
                        <ImageListItem>
                            <img src={artists} alt='Image of the user artists page' loading='lazy'/>
                            <ImageListItemBar 
                                title='Artists Page'
                                position='below'
                            />
                        </ImageListItem>
                        <ImageListItem>
                            <img src={about} alt='Image of the about To Tat page' loading='lazy'/>
                            <ImageListItemBar 
                                title='About Page'
                                position='below'
                            />
                        </ImageListItem>
                        <ImageListItem>
                            <img src={tatregister} alt='Image of the registration page' loading='lazy'/>
                            <ImageListItemBar 
                                title='Register Page'
                                position='below'
                            />
                        </ImageListItem>
                    </ImageList>
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