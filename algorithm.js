const cron = require("node-cron");
const express = require("express");
const fs = require("fs");

var request = require('request'); 

var client_id = 'e6d465ab8afb4cd4beb72069fa2f4d1f'; // Your client id
var client_secret = '89f286fa419d46d68512c086d231e399'; // Your secret


var app = express();

cron.schedule("15 * * * * *", function(){
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
	
});

//refresh spotify tokens
cron.schedule("* 0 * * * *", function(){
  var refresh_token = //db call
  var authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: { 'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64')) },
    form: {
      grant_type: 'refresh_token',
      refresh_token: refresh_token
    },
    json: true
  };

  request.post(authOptions, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      var access_token = body.access_token;
      //send access_token to DB 
    }
  });

});


