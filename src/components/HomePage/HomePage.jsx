import React from 'react';
import { Link } from "react-router-dom";
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

////////////////////////HomePage Images////////////////////////
// Self Image
import self from './selfphoto.png';
// To Tat Solo Project Images
import tatuser from './tatuserpage.png';
import createidea from './tatcreateidea.png';
import ideas from './tatideaspage.png';
import editidea from './tateditidea.png';
import createartist from './tatcreateartist.png';
import artists from './tatartistspage.png';
import about from './tataboutpage.png';
import tatregister from './tatregister.png';
// Movies Saga Project Images
import moviemain from './moviesagasmain.png';
import movieone from './moviesagadetails.png';
import movietwo from './moviesagadetailstwo.png';
import moviethree from './moviesagadetailsthree.png';
// React Gallery Project Images
import gallerymain from './reactgallery.png';
import galleryclicked from './reactgalleryclicked.png';
import gallerywarning from './reactgallerywarning.png';

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
                    {/* <div className='spaceContainer'></div>  */}
                    <div className="selfImgContainer">
                        <img className='selfImg' src={self} alt='image of John Maybee' />
                    </div>
                    {/* <div className='spaceContainer'></div> 
                    <div className='spaceContainer'></div> */}
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
                    {/* <div className='spaceContainer'></div> */}
                </div>
                <br />
                <br />
                <div className='projectContainer'>
                    {/* <div className='spaceContainer'></div>  */}
                    <div className='imageListContainer'>
                        <Typography variant="h5" fontWeight={400}>Full Stack Solo Project</Typography>
                        <ImageList sx={{width: 400, height: 500}} cols={1}>
                            <ImageListItem>
                                <img src={tatuser} alt='Image of the user home page from To Tat solo project' loading='lazy'/>
                                <Typography variant="subtitle1" fontWeight={300} gutterBottom>
                                    <ImageListItemBar 
                                        title='User Home Page'
                                        position='below'
                                    />
                                </Typography>
                            </ImageListItem>
                            <ImageListItem>
                                <img src={createidea} alt='Image of the create new idea page' loading='lazy'/>
                                <Typography variant="subtitle1" fontWeight={300} gutterBottom>   
                                    <ImageListItemBar 
                                        title='Create Idea Page'
                                        position='below'
                                    />
                                </Typography>
                            </ImageListItem>
                            <ImageListItem>
                                <img src={ideas} alt='Image of the user ideas page' loading='lazy'/>
                                <Typography variant="subtitle1" fontWeight={300} gutterBottom>    
                                    <ImageListItemBar 
                                        title='Ideas Page'
                                        position='below'
                                    />
                                </Typography>
                            </ImageListItem>
                            <ImageListItem>
                                <img src={editidea} alt='Image of the edit idea page' loading='lazy'/>
                                <Typography variant="subtitle1" fontWeight={300} gutterBottom>     
                                    <ImageListItemBar 
                                        title='Edit Idea Page'
                                        position='below'
                                    />
                                </Typography>
                            </ImageListItem>
                            <ImageListItem>
                                <img src={createartist} alt='Image of the create artist page' loading='lazy'/>
                                <Typography variant="subtitle1" fontWeight={300} gutterBottom>    
                                    <ImageListItemBar 
                                        title='Create Artist Page'
                                        position='below'
                                    />
                                </Typography>
                            </ImageListItem>
                            <ImageListItem>
                                <img src={artists} alt='Image of the user artists page' loading='lazy'/>
                                <Typography variant="subtitle1" fontWeight={300} gutterBottom> 
                                    <ImageListItemBar 
                                        title='Artists Page'
                                        position='below'
                                    />
                                </Typography>
                            </ImageListItem>
                            <ImageListItem>
                                <img src={about} alt='Image of the about To Tat page' loading='lazy'/>
                                <Typography variant="subtitle1" fontWeight={300} gutterBottom> 
                                    <ImageListItemBar 
                                        title='About Page'
                                        position='below'
                                    />
                                </Typography>
                            </ImageListItem>
                            <ImageListItem>
                                <img src={tatregister} alt='Image of the registration page' loading='lazy'/>
                                <Typography variant="subtitle1" fontWeight={300} gutterBottom>     
                                    <ImageListItemBar 
                                        title='Register Page'
                                        position='below'
                                    />
                                </Typography>
                            </ImageListItem>
                        </ImageList>
                    </div>
                    {/* <div className='spaceContainer'></div>                     */}
                    <div className='imageListContainer'>
                        <Typography variant="h5" fontWeight={400}>Movies Saga</Typography>
                        <ImageList sx={{width: 400, height: 500}} cols={1}>
                            <ImageListItem>
                                <img src={moviemain} alt='Image of the home page from a Movies Saga project' loading='lazy'/>
                                <Typography variant="subtitle1" fontWeight={300} gutterBottom>
                                    <ImageListItemBar 
                                        title='Movies Saga Home Page'
                                        position='below'
                                    />
                                </Typography>
                            </ImageListItem>
                            <ImageListItem>
                                <img src={movieone} alt='Example 1 of the Movies Saga details page with details about Avatar' loading='lazy'/>
                                <Typography variant="subtitle1" fontWeight={300} gutterBottom>   
                                    <ImageListItemBar 
                                        title='Movies Saga Details Page Example 1'
                                        position='below'
                                    />
                                </Typography>
                            </ImageListItem>
                            <ImageListItem>
                                <img src={movietwo} alt='Example 2 of the Movies Saga details page with details about The Life of Pi' loading='lazy'/>
                                <Typography variant="subtitle1" fontWeight={300} gutterBottom>    
                                    <ImageListItemBar 
                                        title='Movies Saga Details Page Example 2'
                                        position='below'
                                    />
                                </Typography>
                            </ImageListItem>
                            <ImageListItem>
                                <img src={moviethree} alt='Example 3 of the Movies Saga details page with details about The Martian' loading='lazy'/>
                                <Typography variant="subtitle1" fontWeight={300} gutterBottom>     
                                    <ImageListItemBar 
                                        title='Movies Saga Details Page Example 3'
                                        position='below'
                                    />
                                </Typography>
                            </ImageListItem>
                        </ImageList>
                    </div>
                    {/* <div className='spaceContainer'></div>  */}
                
                    <br />
                    <div className='imageListContainer'>
                        <Typography variant="h5" fontWeight={400}>React Gallery Project</Typography>
                        <ImageList sx={{width: 400, height: 500}} cols={1}>
                            <ImageListItem>
                                <img src={gallerymain} alt='Image of the home page from the React Gallery project' loading='lazy'/>
                                <Typography variant="subtitle1" fontWeight={300} gutterBottom>
                                    <ImageListItemBar 
                                        title='Gallery Page'
                                        position='below'
                                    />
                                </Typography>
                            </ImageListItem>
                            <ImageListItem>
                                <img src={galleryclicked} alt='Image of the React Gallery project when a photo is clicked' loading='lazy'/>
                                <Typography variant="subtitle1" fontWeight={300} gutterBottom>   
                                    <ImageListItemBar 
                                        title='React Gallery Photo Clicked'
                                        position='below'
                                    />
                                </Typography>
                            </ImageListItem>
                            <ImageListItem>
                                <img src={gallerywarning} alt='Image of the warning popup when the like button is clicked' loading='lazy'/>
                                <Typography variant="subtitle1" fontWeight={300} gutterBottom>    
                                    <ImageListItemBar 
                                        title='Popup When Image Is Liked'
                                        position='below'
                                    />
                                </Typography>
                            </ImageListItem>
                        </ImageList>
                    </div>
                </div>

            </div>
        </ThemeProvider>
    )
}

export default HomePage;

{/* <Link to={{ pathname:"https://github.com/john-maybee"}}></Link> */}
{/* <Link to={{ pathname:"https://www.linkedin.com/in/john-d-maybee/"}}></Link> */}