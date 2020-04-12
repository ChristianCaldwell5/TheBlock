import React from 'react';

const Navbar = () => (
    <nav id="nav">
        <ul id="nav-links">
            <a id="tb-nav-title">The Block</a>
            <a className="tb-nav-link">Explore</a>
            <a className="tb-nav-account"><i className="fa fa-user block-icon"></i></a>
        </ul>
    </nav>
);

export default Navbar;
