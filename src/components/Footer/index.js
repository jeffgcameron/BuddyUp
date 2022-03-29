// import { Link } from "react-router-dom";

import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

import "./style.css"

function Footer() {

    const [value, setValue] = React.useState(0);

return (
    <div className="footer-div">
          {/* <div className="footer-div">
              <Link>
              <HomeOutlinedIcon className="footer-icon"/>
              </Link>
              <AddBoxOutlinedIcon className="footer-icon" />
              <PersonOutlineOutlinedIcon className="footer-icon"/>
      </div> */}


      <BottomNavigation
      className="footer-div"
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction  className="footer-icon-div" icon={<HomeOutlinedIcon className="footer-icon"/>} />
        <BottomNavigationAction className="footer-icon-div" icon={<AddBoxOutlinedIcon className="footer-icon"/>} />
        <BottomNavigationAction  className="footer-icon-div" icon={<PersonOutlineOutlinedIcon className="footer-icon"/>} />
      </BottomNavigation>
    
    </div>
)

}

export default Footer