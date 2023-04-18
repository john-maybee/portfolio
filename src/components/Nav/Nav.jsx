import React from "react";
import { Link } from "react-router-dom";
import { Work, Cottage } from "@mui/icons-material";
import { Tooltip } from "@mui/material";
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


function Nav() {
    return(
        <ThemeProvider theme={theme}>
            <div className="navContainer">
                <Tooltip title="Home" arrow>
                    <Link className="navLink" to="/home" >
                        <Cottage sx={{color: '#223651'}}/>
                    </Link>
                </Tooltip>
                {/* <Divider orientation="vertical" variant="middle" flexItem /> */}
                <Typography className="pageTitle" variant="h4" fontWeight={700} gutterBottom>jm</Typography>
                {/* <Divider orientation="vertical" variant="middle" flexItem /> */}
                <Tooltip title="Resumé" arrow>
                    <Link className="navLink" to="/about" >
                        <Work sx={{color: '#223651'}}/>
                    </Link>
                </Tooltip>
            </div>
        </ThemeProvider>
    )
}

export default Nav;