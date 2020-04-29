//Load information by database
import React from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';

var name = Cookies.get("username");
var city = Cookies.get("city");
var state = Cookies.get("state");
var country = Cookies.get("country");
var age = Cookies.get("age");
var service = Cookies.get("service");

export function account_request(cookie){
    /*console.log(cookie);
    $.ajax({
        url: 'http://ec2-3-88-85-136.compute-1.amazonaws.com:3001/getUserInfo',
        data: {
                'username': cookie
        }
    }).done(function(data){
	console.dir(data);
        name = data.username;
        city = data.city;
        state = data.state;
        country = data.country;
        age = data.age;
        service = data.service;
    });*/
}

export function getUserInfo(){
	/*var cookie = Cookies.get('username');
	console.log("cookie: " + cookie);
	username = cookie;
	axios({
        url: 'http://ec2-3-88-85-136.compute-1.amazonaws.com:3001/getUserInfo',
        method: 'get',
        data:{
                userName: username
        }
    	}).then(function(response) {
        	console.dir(response);
   	});*/

}

/*export function getUserSongs(){
        console.log("test");
	console.log(Cookies.get("age"));
        axios({
                url: 'http://ec2-3-88-85-136.compute-1.amazonaws.com:3001/getSongs',
                params: {
                        username: name,
                        country: country,
                        state: state,
                        city: city,
                        age: age,
                        gender: Cookies.get("gender")
                }
        }).then(function(data){
                console.dir(data);
		console.dir(data.data);
		var i;
		for(i=0;i<data.data.length;i++){
			console.log(data.data[i].name);
		}
        });
}*/




export function request_account_details(x){
     var username = Cookies.get('username');

    if(x === 'name'){
        return name
    }
    else if(x === 'city'){
        return city
    }
    else if(x === 'state'){
        return state
    }
    else if(x === 'country'){
        return country
    }
    else if(x === 'age'){
        return age
    }
    else if(x === 'service'){
        if( service == 1 ){
            return 'Spotify'
        }
        else{
            return 'Apple'
        }
    }
    else{
        //error
        return;
    }
}
export function change_account_details(){
    //edit information here in the database
    //todo: keep the error checking but add the changes to database
    var new_country = document.getElementById('countryId').value;
    var new_state = document.getElementById('stateId').value;
    var new_city = document.getElementById('cityId').value;
    var new_age = document.getElementById('age-field').value;
    var tb_error = document.getElementById('tb-error-message');
    if( new_country == '' || new_state == '' || new_city == '' || new_age == ''){
        tb_error.style.display = 'block';
        tb_error.innerHTML = 'All or some fields were not changed. All are required.';
        return 0;
    }
    document.getElementById('a-location').innerHTML = 'Location: ' + new_city + ', ' + new_state + ', ' + new_country;
    document.getElementById('a-age').innerHTML = 'Age: ' + new_age; 
    //ensure error goes away
    tb_error.style.display = 'none';
    //reset account fields
    document.getElementById('countryId').value = '';
    document.getElementById('stateId').value = '';
    document.getElementById('cityId').value = '';
    document.getElementById('age-field').value = '';
    return 1;
}
//use database to change password with this function
export function change_password(){
    //edit information here in the database
    //todo: keep the error checking but add the changes to database
    var old_password = document.getElementById('old-pass').value;
    var new_pass = document.getElementById('new-pass').value;
    var re_pass = document.getElementById('password-confirm').value;
    var tb_error_pass = document.getElementById('tb-error-message-pass');
    if( old_password == '' || new_pass == '' || re_pass == '' ){
        tb_error_pass.style.display = 'block';
        tb_error_pass.innerHTML = 'All or some fields were not changed. All are required.';
        return 0;
    }
    else if( old_password == new_pass ){
        tb_error_pass.style.display = 'block';
        tb_error_pass.innerHTML = 'Your new password cannot be the same as your old password. Try again.';
        return 0;
    }
    else if( new_pass != re_pass ){
        tb_error_pass.style.display = 'block';
        tb_error_pass.innerHTML = 'Your new password and confirmed password do not match. Try again.';
        return 0;
    }
    //ensure error goes away
    tb_error_pass.style.display = 'none';
    //reset account fields
    document.getElementById('old-pass').value = '';
    document.getElementById('new-pass').value = '';
    document.getElementById('password-confirm').value = '';
    return 1;
}
