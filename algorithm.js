const cron = require("node-cron");
const express = require("express");
const fs = require("fs");
const ajaxrequest = require("ajax-request");

var request = require('request'); 

var client_id = 'e6d465ab8afb4cd4beb72069fa2f4d1f'; // Your client id
var client_secret = '89f286fa419d46d68512c086d231e399'; // Your secret
var data;

var app = express();

var sUD = [];
var songs = [];

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
	

	var spotifyTokens = [];
	var appleTokens = [];
	//var songs = [];
	
	//select access tokens where service = spotify 
	connection.query("SELECT token FROM usersTable WHERE isSpotify='1'", function(err,rows,fields){
		if(err) throw err
		console.log("spotify tokens");
		console.dir(rows);
		spotifyTokens = rows;
	});
	connection.query("SELECT * FROM usersTable WHERE isSpotify='1'", function(err,rows,fields){
                if(err) throw err
                console.log("spotify info");
                console.dir(rows);
		console.log(rows.length);
                sUD = rows;
		console.log(sUD[1].gender);
		console.log(sUD[1].username);
        });

	//get apple tokens
	connection.query("SELECT token FROM usersTable WHERE isSpotify='0'", function(err, rows, fields){
		if(err) throw err
		console.log("apple tokens");
		console.dir(rows);
	});
	console.log("Tokens acquired");
	
	var data;
	setTimeout(function(){
		var i;	
		for(i=0;i<spotifyTokens.length;i++){
			console.log("off to spotify");
			console.log(spotifyTokens.length);
			const options = {
				url: 'https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=50',
				headers: {
			 	"Authorization": "Bearer " + spotifyTokens[i].token
				},
			}
			connection.query("DELETE FROM songsTable WHERE isSpotify='1'",function(err,rows,fields){
                                        if(err) throw err
                        });

			request.get(options,function(error,response,body){
				data = JSON.parse(body);
				//console.dir(response);
				//console.log(data.items[0].external_ids.isrc);
				//console.log(data.items.length);
			        //songs = data;
			        console.log(error);
			       	console.log("hit");
				setSongs(data);	
			});
			/*setTimeout(function(){
				console.log("after");
				//console.dir(songs);
				console.dir(sUD);
				
				console.log(sUD[0].age);
				var j;
                                for(j=0;j<songs.items.length;j++){
					console.log(i);
					console.log(j);
                                        //console.log(data.item[j].name);
                                        //console.log(data.items[j].external_ids.isrc);
                                        //console.log(data.items[j].album.images[0].url);
                                        //console.log(data.items[j].artists[0].name);
                                        //console.dir(songs.items);
                                        console.log(sUD[i].gender);
					console.log(sUD[i].age);
                                        connection.query("INSERT INTO songsTable(name, artist, image, isrc, popularity, age, gender,country,state,city) VALUES ('"+songs.items[j].name+"', '"+songs.items[j].artists[0].name+"', '"+songs.items[j].album.images[0].url+"','"+songs.items[j].external_ids.isrc+"', '0', '"+sUD[i].age+"', '"+sUD[i].gender+"', '"+sUD[i].country+"', '"+sUD[i].state+"', '"+sUD[i].city+"')",function(err,rows,fields){
                                        if(err) throw err
                                });
                                }
					
			},5000);*/
		}//for loop ends
		setTimeout(function(){
		var i;
		var j;
		sUD.reverse();
		console.log(sUD.length);
		console.log(i);
		console.log(songs[0].items.length);
		for(i=0;i<sUD.length;i++){
			for(j=0;j<songs[i].items.length;j++){
				 	console.log(i);
                                        console.log(j);
                                        //console.log(data.item[j].name);
                                        //console.log(data.items[j].external_ids.isrc);
                                        //console.log(data.items[j].album.images[0].url);
                                        //console.log(data.items[j].artists[0].name);
                                        //console.dir(songs.items);
                                        console.log(sUD[i].age);
                                        console.log(songs[i].items[j].name);
					if(songs[i].items[j].artists[0].name.includes("'")){
						songs[i].items[j].artists[0].name = songs[i].items[j].artists[0].name.replace("'","''");
					}
					if(songs[i].items[j].name.includes("'")){
                                                songs[i].items[j].name = songs[i].items[j].name.replace("'","''");
                                        }

                                        connection.query("INSERT INTO songsTable(name, artist, image, isrc, popularity, age, gender,country,state,city,isSpotify) VALUES ('"+songs[i].items[j].name+"', '"+songs[i].items[j].artists[0].name+"', '"+songs[i].items[j].album.images[0].url+"','"+songs[i].items[j].external_ids.isrc+"', '"+songs[i].items[j].popularity+"', '"+sUD[i].age+"', '"+sUD[i].gender+"', '"+sUD[i].country+"', '"+sUD[i].state+"', '"+sUD[i].city+"', '1')",function(err,rows,fields){
                                        if(err) throw err
                                });	
			}
		}
		},15000);
		console.log("done");
	},10000);

	
	
});

function setsUD(data){
	sUD = data;
}

function setSongs(data){
	console.log(songs.length);
	if(songs.length == 0){
		console.log("length=0");
		songs[0] = data;
	}else{
		songs[songs.length] = data;
	}
	console.log("songs:");
	console.dir(songs);
}

var numUsers;
var refresh_tokens = [];
var access_tokens = [''];

//refresh spotify tokens
cron.schedule("45 * * * * *", function(){
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


