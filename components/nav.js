import React from 'react';
import Link from 'next/link'

const Navbar = () => (
    <nav id="nav">
        <ul id="nav-links">
            <a id="tb-nav-title">The Block</a>
            <a className="tb-nav-link">Explore</a>
            <Link href='/account'>
                <a className="tb-nav-account"><i className="fa fa-user block-icon"></i></a>
            </Link>
        </ul>
    </nav> 
);

export default Navbar;
