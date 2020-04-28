import React from 'react';
import Head from 'next/head';
import Navbar from '../components/nav';
import Spacer from '../components/spacer';
import Charts from '../components/home/charts';
import Footer from '../components/footer';
import * as request from '../static/operation-script/request_user.js'
import * as utility from '../static/operation-script/account_op.js'

//Begin request for account details
var name = request.request_account_details('name');
var city = request.request_account_details('city');
var state = request.request_account_details('state');
var country = request.request_account_details('country');
var age = request.request_account_details('age');
var service = request.request_account_details('service');
//for various request on this page
var success; //1 for valid input. Else, 0
//edit request
function editMade(){
    request.account_request();
    success = request.change_account_details();
    if( success == 0 ){
        return;
    }
    utility.closeModal();
}
//password change request
function passwordChange(){
    success = request.change_password();
    if( success == 0 ){
        return;
    }
    utility.closeModal();
}

export default function Account() {
    return(
        <div>
            <Head>
                <title>The Block - Home</title>
                <link href="/static/css/general.css" rel="stylesheet" />
                <link href="/static/css/the-block-login.css" rel="stylesheet" />
                <link href="/static/css/the-block-nav.css" rel="stylesheet" />
                <link href="/static/css/home.css" rel="stylesheet" />
                <link href="/static/css/charts.css" rel="stylesheet" />
                <link href="/static/css/account.css" rel="stylesheet" />
                <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
            </Head>
            <Spacer></Spacer>
            <Navbar></Navbar>
            {/* Edit Modal */}
            <div id='modal-container'>
                <div className='modal-content'>
                    <div id='tab-select-container'>
                        <div id='edit-tab' onClick={utility.eTab}>Edit Info</div>
                        <div id='password-tab' onClick={utility.pTab}>Change Password</div>
                    </div>
                    <div id='tab-content-1'>
                        <span id="tab-content-title">Change Information</span>
                        <span id='tb-error-message'></span>
                        <select name="country" className="countries the-block-slct--large" id="countryId">
                            <option value="">Select Country</option>
                        </select>
                        <select name="state" className="states the-block-slct--large" id="stateId">
                            <option value="">Select State</option>
                        </select>
                        <select name="city" className="cities the-block-slct--large" id="cityId">
                            <option value="">Select City</option>
                        </select>
                        <input id="age-field" type="number" className="the-block-inp--large clear" name="age" placeholder="Enter Age..."></input>
                        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script> 
                        <script src="//geodata.solutions/includes/countrystatecity.js"></script>
                        <button className="the-block-btn--large clear" onClick={editMade}>Confirm</button>
                        <button className="the-block-btn--large clear" onClick={utility.closeModal}>Cancel</button>
                    </div>
                    <div id='tab-content-2'>
                        <span id="tab-content-title">Change Password</span>
                        <span id='tb-error-message-pass'></span>
                        <input id="old-pass" type='password' className="the-block-inp--large clear" name="oldpass" placeholder="Old Password"></input>
                        <input id="new-pass" type="password" className="the-block-inp--large clear" name="password" placeholder="New Password"></input>
                        <input id="password-confirm" type="password" className="the-block-inp--large clear" name="re-password" placeholder="Re-type New Password"></input>
                        <button className="the-block-btn--large clear" onClick={passwordChange}>Confirm</button>
                        <button className="the-block-btn--large clear" onClick={utility.closeModal}>Cancel</button>
                    </div>
                </div>
            </div>
            <div id='account-info'>
                <div id='account-pic-wrap'>
                    <img id='account-img' src='/static/assets/default-user-image.png' alt='no user photo'></img>
                </div>
                <div id='user-info-wrap'>
                     {/* username */}
                    <span id='a-username' className='user-info'>Username: {name}</span>
                    {/* Location */}
                    <span id='a-location' className='user-info'>Location: {city}, {state}, {country}</span>
                    {/* Age */}
                    <span id='a-age' className='user-info'>Age: {age}</span>
                    {/* Service */}
                    <span id='a-service' className='user-info'>Service: {service}</span>
                </div>
                <div id='edit-info-wrap'>
                    <span className='edit-btn--large' onClick={utility.openModal}>Edit <i className="fa fa-edit"></i></span>
                </div>
            </div>
            <span id='top-ten' className='top-border'>Your Top 10</span>
            <Charts></Charts>
            <Footer></Footer>
	    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
            <script src="/static/utility_script/utility.js"></script>
            <script src='/static/operation-script/request_user.js'></script>
        </div>
    )
}
