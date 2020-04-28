import React from 'react';
import * as request from '../static/operation-script/request_user.js'
import Link from 'next/link'

const Navbar = () => (
    <nav id="nav">
        <ul id="nav-links">
            <Link href='/home'>
                <a id="tb-nav-title">The Block</a>
            </Link>
            <Link href='/explore'>
                <a className="tb-nav-link">Explore</a>
            </Link>
            <Link href='/account'>
                <a className="tb-nav-account" onClick={request.getUserInfo}><i className="fa fa-user block-icon"></i></a>
            </Link>
        </ul>
    </nav> 
);

export default Navbar;
