import React from "react";
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import HeaderOption from "./HeaderOption.jsx";
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

function Header () {
    return(
        <div className="header">
              
            <div className="header__left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg" alt="Linkedin icon" />

                <div className="header__search">
                    <SearchIcon />
                    <input type="text" />
                </div>
            </div>

            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title="Home" />
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
                <HeaderOption Icon={ChatIcon} title="Messaging" />
                <HeaderOption Icon={NotificationsIcon} title="Notifications" />
                <AccountBoxIcon className="header__Avator"/>
            </div>
            
        </div>
    );
}

export default Header;