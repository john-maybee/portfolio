import React from "react";
import { Link } from "react-router-dom";
import { Work } from "@mui/icons-material";

function Nav() {
    return(
        <div className="navContainer">
            <p>NAAAAVVVVV</p>
            <Link className="navLink" to="/about" >
                <Work sx={{color: '#223651'}}/>
            </Link>
        </div>
    )
}

export default Nav;