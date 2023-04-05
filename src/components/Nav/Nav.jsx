import React from "react";
import { Link } from "react-router-dom";
import { Work, Cottage } from "@mui/icons-material";
import { Tooltip, Divider } from "@mui/material";


function Nav() {
    return(
        <div className="navContainer">
            <Tooltip title="Home" arrow>
                <Link className="navLink" to="/home" >
                    <Cottage sx={{color: '#223651'}}/>
                </Link>
            </Tooltip>
            {/* <Divider orientation="vertical" variant="middle" flexItem /> */}
            <h1>jm</h1>
            {/* <Divider orientation="vertical" variant="middle" flexItem /> */}
            <Tooltip title="Resumé" arrow>
                <Link className="navLink" to="/about" >
                    <Work sx={{color: '#223651'}}/>
                </Link>
            </Tooltip>
        </div>
    )
}

export default Nav;