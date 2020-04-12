var express = require("express");
var app = express();
var request = require("request");
var cors = require("cors");
app.use(express.static(__dirname)).use(cors())
console.log("running");
var savedUser;

app.get("/userPass",function(req,res){
	console.log("begin");
	var mysql = require('mysql');
	var connection = mysql.createConnection({
		host: 'capdb.cktfsf3s2dmk.us-east-1.rds.amazonaws.com',
		user: 'capDBadmin',
		password: 'CapDBMaster',
        	database: 'usersDB',
        	port: '3306'
	});
	connection.connect();
	console.log("connected");
	var userName = req.query.username;
	var passWord = req.query.password;

	savedUser = userName;


	connection.query("INSERT INTO usersTable(username,password) VALUES ('"+userName+"','"+passWord+"')", function(err,rows,fields){
		if(err) throw err
                	console.log('saved stuff');
        	});
	connection.end();
	/*if(!err){
		console.log("work");
	}	
	else{
		console.log("trash");
	}*/
	res.send("it worked");
});

app.get("/demographics", function(req,res){
	console.log("saving demographic info");
	var mysql = require('mysql');
        var connection = mysql.createConnection({
                host: 'capdb.cktfsf3s2dmk.us-east-1.rds.amazonaws.com',
                user: 'capDBadmin',
                password: 'CapDBMaster',
                database: 'usersDB',
                port: '3306'
        });
        connection.connect();
        var gender = req.query.gender;
	var country = req.query.country;
	var state = req.query.state;
	var city = req.query.city;
	var age = req.query.age;
	var bandID = 0;
	var isSpotify = 1;
	var userName = savedUser;

	connection.query("UPDATE usersTable SET bandID='"+bandID+"', isSpotify='"+isSpotify+"', gender='"+gender+"', country='"+country+"', state='"+state+"', city='"+city+"', age='"+age+"' WHERE username='"+userName+"' ", function(err,rows,fields){
		if(err) throw err
		console.log("save complete");
	});

	res.send("it worked");
	connection.end();

});

app.get("/setSpotifyToken",function(req,res){
	console.log("starting token set");
	var mysql = require('mysql');
        var connection = mysql.createConnection({
                host: 'capdb.cktfsf3s2dmk.us-east-1.rds.amazonaws.com',
                user: 'capDBadmin',
                password: 'CapDBMaster',
                database: 'usersDB',
                port: '3306'
        });
        connection.connect();
	var access_token = req.query.access_token;
	console.log(access_token);
	connection.query("UPDATE usersTable SET token='"+access_token+"' WHERE username='"+savedUser+"'", function(err,rows,fields){
		if(err) throw err
		console.log("saved token");
	});

	res.send("{}");
	connection.end();	
});
app.listen(3001);
console.log("listening on 3001...")
	
