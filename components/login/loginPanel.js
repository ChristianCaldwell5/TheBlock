import React, { Component } from 'react';

const Initial = () => (
    <div id="initial">
        <h1 className="the-block-title">The Block</h1>
        <hr id="login-hr"></hr>
        <button id="login-btn" className="the-block-btn--large clear">Sign In</button>
        <button id="register-btn" className="the-block-btn--large clear">Register</button>
        <a className="clear">About Us</a>
    </div>
);
const Login = () => (
    <div id="login" className="hide-element">
        <h1 className="the-block-title">The Block - Login</h1>
        <hr id="login-hr"></hr>
        <input className="the-block-inp--large clear" name="l-username" placeholder="Username"></input>
        <input type="password" className="the-block-inp--large clear" name="l-password" placeholder="Password"></input>
        <button id="login-submit-btn" className="the-block-btn--large clear">Login</button>
        <button id="login-back-btn" className="the-block-btn--large clear">Back</button>
    </div>
);
const SignUp_p1 = () => (
    <div id="register1" className="hide-element">
        <h1 className="the-block-title">The Block - Register</h1>
        <hr id="login-hr"></hr>
        <input className="the-block-inp--large clear" name="username" placeholder="Create Username"></input>
        <input type="password" className="the-block-inp--large clear" name="password" placeholder="Create Password"></input>
        <input type="password" className="the-block-inp--large clear" name="password" placeholder="Re-type Password"></input>
        <button id="next1-btn" className="the-block-btn--large clear">Next</button>
        <button id="cancel1-btn" className="the-block-btn--large clear">Cancel</button>
    </div>
);
const SignUp_p2 = () => (
    <div id="register2" className="hide-element">
        <h1 className="the-block-title">Demographic Info</h1>
        <hr id="login-hr"></hr>
        <select defaultValue="selectGender" name="gender" className="the-block-slct--large">
            <option disabled value="selectGender">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
        </select>
        <select name="country" className="countries the-block-slct--large" id="countryId">
            <option value="">Select Country</option>
        </select>
        <select name="state" className="states the-block-slct--large" id="stateId">
            <option value="">Select State</option>
        </select>
        <select name="city" className="cities the-block-slct--large" id="cityId">
            <option value="">Select City</option>
        </select>
        <input type="number" className="the-block-inp--large clear" name="age" placeholder="Enter Age..."></input>
        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
        <script src="//geodata.solutions/includes/countrystatecity.js"></script>
        <button id="next2-btn" className="the-block-btn--large clear">Next</button>
        <button id="cancel2-btn" className="the-block-btn--large clear">Cancel</button>
    </div>
);
const SignUp_p3 = () => (
    <div id="register3" className="hide-element">
        <h1 className="the-block-title">Connect to Music Service</h1>
        <hr id="login-hr"></hr>
        <a className="the-block-spotify--large" href="http://ec2-3-88-85-136.compute-1.amazonaws.com:8888/login"><i className="fa fa-spotify block-icon"></i>Spotify Login</a>
        <a className="the-block-apple--large" id="apple-login-btn" href="http://ec2-3-88-85-136.compute-1.amazonaws.com:8888/login"><i className="fa fa-apple block-icon"></i>Apple Login</a>
        <script src="https://js-cdn.music.apple.com/musickit/v1/musickit.js"></script>
        <script type="text/javascript" src="../../apple-login/musickit.js"></script>
        <button id="cancel3-btn" className="the-block-btn--large clear">Cancel</button>
    </div>
);

const Panel = () => (
    <div id="login-panel">
        <Initial></Initial>
        <Login></Login>
        <SignUp_p1></SignUp_p1>
        <SignUp_p2></SignUp_p2>
        <SignUp_p3></SignUp_p3>
    </div>
);

export default Panel;
