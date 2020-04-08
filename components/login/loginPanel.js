import React from 'react';

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
        <input className="the-block-inp--large clear" name="l-password" placeholder="Password"></input>
        <button id="login-submit-btn" className="the-block-btn--large clear">Login</button>
        <button id="login-back-btn" className="the-block-btn--large clear">Back</button>
    </div>
);
const SignUp = () => (
    <div id="register" className="hide-element">
        <h1 className="the-block-title">The Block - Register</h1>
        <hr id="login-hr"></hr>
        <input className="the-block-inp--large clear" name="username" placeholder="Create Username"></input>
        <input className="the-block-inp--large clear" name="password" placeholder="Create Password"></input>
        <input className="the-block-inp--large clear" name="password" placeholder="Re-type Password"></input>
        <h1 className="the-block-title">Connect to Music Service</h1>
	<a href="http://ec2-3-88-85-136.compute-1.amazonaws.com:8888/login"> Spotify Login </a>
	<hr id="login-hr"></hr>
	<button id="login-submit-btn" className="the-block-btn--large clear">Login</button>
        <button id="register-back-btn" className="the-block-btn--large clear">Back</button>
    </div>
);

const Panel = () => (
    <div id="login-panel">
        <Initial></Initial>
        <Login></Login>
        <SignUp></SignUp>
    </div>
);

export default Panel;
