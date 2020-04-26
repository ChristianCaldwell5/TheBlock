const cron = require("node-cron");
const express = require("express");
const fs = require("fs");
const ajaxrequest = require("ajax-request");

var request = require('request'); 

var client_id = 'e6d465ab8afb4cd4beb72069fa2f4d1f'; // Your client id
var client_secret = '89f286fa419d46d68512c086d231e399'; // Your secret
var data;

var app = express();

/*cron.schedule("15 * * * * *", function(){
	console.log("-----------------");
	console.log("Running Scheduled Job");
	
	var mysql = require('mysql');
        var connection = mysql.createConnection({
                host: 'capdb.cktfsf3s2dmk.us-east-1.rds.amazonaws.com',
                user: 'capDBadmin',
                password: 'CapDBMaster',
                database: 'usersDB',
                port: '3306'
        });
        connection.connect();
	

	
	//select access tokens where service = spotify 
	connection.query("");

	console.log("Done!");
	
});*/
var numUsers;
var refresh_tokens = [];
var access_tokens = [''];

//refresh spotify tokens
cron.schedule("* 0 * * * *", function(){
	//var refresh_tokens = [];
        //var access_tokens = [];
	
	ajaxrequest({
		url: 'http://ec2-3-88-85-136.compute-1.amazonaws.com:3001/getSpotifyTokenPairs',
		method: 'GET',
		dataType: 'application/json',
		json: true
  	},function(err,res,body){
		console.log("req sent ------------"); 
		data = body;
		numUsers = data.length;
  		var i;
		//var refresh_tokens = [];
		//var access_tokens = [];
  		for(i=0;i<numUsers;i++){
			//console.log("hit");
        		refresh_tokens[i] = data[i].refreshToken;
       			console.log(refresh_tokens[i]);	
			ajaxrequest({
				url: "http://ec2-3-88-85-136.compute-1.amazonaws.com:8888/refresh_token",
				dataType: 'application/json',	
				data: {
					'refresh_token': refresh_tokens[i]
				}
			}, function(err,res,body){
				data1 = JSON.parse(body);
				//refresh_token = data[i].refreshToken;
				//access_tokens[i] = data1.access_token.toString();
				access_tokens.push(data1.access_token);
				//console.log("AT in 2 i= "+ i + "AT: " + access_tokens[i]);	
			});
  		}
		});

		setTimeout(function(){
 			var i;
                        for(i=0;i<numUsers;i++){
				//console.log(access_tokens.length);
				//console.dir(access_tokens);
				//console.log("in timeout " + access_tokens[i]);
                                ajaxrequest({
                                        url: "http://ec2-3-88-85-136.compute-1.amazonaws.com:3001/updateTokenPairs",
                                        method: 'GET',
                                        json: true,
                                        data: {
                                                'access_token': access_tokens[i+1],
                                                'refresh_token': refresh_tokens[i]
                                        }
                                }, function(err,res,body){
                                        console.log(error);
                                });
                        
			}
			//console.log("done");
			
		},10000);	
});


