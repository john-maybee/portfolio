import React from 'react';
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

function Footer() {
    return(
        <ThemeProvider theme={theme}>
            <div className='footer'>
                <Typography variant='body2' fontWeight={300}>&copy; John Maybee 2023</Typography>
            </div>
        </ThemeProvider>
    )
}

export default Footer;