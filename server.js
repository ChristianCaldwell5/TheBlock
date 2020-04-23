var express = require("express");
var app = express();
var request = require("request");
var cors = require("cors");
app.use(express.static(__dirname)).use(cors())
console.log("running");
var savedUser;
var secret = "420blazeit";
const jwt = require('jsonwebtoken');
const fs = require('fs');

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


	connection.query("INSERT INTO usersTable(username,password) VALUES ('"+userName+"', AES_ENCRYPT('"+passWord+"','"+secret+"'))", function(err,rows,fields){

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

const private_key = fs.readFileSync('static/apple-login/apple_private_key.p8').toString();
const team_id = '5N7B3W2HCH';
const key_id = '34T327V9KS';
const token = jwt.sign({}, private_key, {
  algorithm: 'ES256',
  expiresIn: '180d',
  issuer: team_id,
  header: {
    alg: 'ES256',
    kid: key_id
  }
});

//return true on unique username 
app.get("/validateUsername",function(req,res){
	var mysql = require('mysql');
        var connection = mysql.createConnection({
                host: 'capdb.cktfsf3s2dmk.us-east-1.rds.amazonaws.com',
                user: 'capDBadmin',
                password: 'CapDBMaster',
                database: 'usersDB',
                port: '3306'
        });
        connection.connect();
	var userName = req.query.username;
	var users = [''];
	var data;
	connection.query("SELECT username FROM usersTable", function(err,rows,fields){
		if(err) throw err;
		//console.log("hit");
		var i;
		var valid = true;
		data = rows;
		for(i=0;i<rows.length;i++){
			//console.log(rows[i].username);
			users[i] = rows[i].username;
			//console.log("each user: " + users[i]);
			if(userName.localeCompare(users[i]) == 0){
				res.send(false);
				valid = false;
				res.end();
			}
		}
		if(valid){
			res.send(true);
			res.end();
		}
	});
	connection.end();	
});

app.get("/validateLogin",function(req,res){
	var mysql = require('mysql');
        var connection = mysql.createConnection({
                host: 'capdb.cktfsf3s2dmk.us-east-1.rds.amazonaws.com',
                user: 'capDBadmin',
                password: 'CapDBMaster',
                database: 'usersDB',
                port: '3306'
        });
        connection.connect();
	var username = req.query.userName;
	var password = req.query.passWord;
	var users = [''];
	connection.query("SELECT username FROM usersTable", function(err,rows,fields){
                if(err) throw err;
                var i;
                var valid = false;
                data = rows;
                for(i=0;i<rows.length;i++){
                        users[i] = rows[i].username;
                        if(username.localeCompare(users[i]) == 0){
                                valid = true;
                        }
                }
		if(valid == true){
			connection.query("SELECT AES_DECRYPT(password,'"+secret+"') AS password FROM usersTable WHERE username='"+username+"'",function(err,row,fields){
				if(err) throw err;
				if(password.localeCompare(row[0].password) == 0){
					res.send(true);
				}else{
					res.send(false);
				}
			})
		}else{
		res.send("false");
		}
        });

});

app.get('/appleToken', (req, res) => res.send(JSON.stringify({token: token})))

app.listen(3001);
console.log("listening on 3001...")
