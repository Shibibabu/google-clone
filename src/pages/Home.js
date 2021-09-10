import React from 'react'
import "./Home.css";

import { Link } from "react-router-dom";
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core';
import Search from './Search';

function Home() {
    return (
        <div className="home">
            <div className="home_header">
                <div className="home_headerLeft">
                    {/* link */}
                    <Link to="/about">about</Link>
                    <Link to="/store">store</Link>
                </div>
                <div className="home_headerRight">
                    {/* links on right */}
                    <Link to="/gmail">Gmail</Link>
                    <Link to="/images">Images</Link>
                    {/* icons */}
                    <AppsIcon />
                    {/* avatar */}
                    <Avatar />
                </div>
            </div>
            <div className="home_body">
                <img src="https://brandlogos.net/wp-content/uploads/2015/09/Google-logo-1.png" alt="image"/>
                <div className="home_inputContainer">
                    {/* search */}
                    {/* <Search hiddenButton/> */}
                    <Search/>
                </div>
            </div>
        </div>
    )
}

export default Home
