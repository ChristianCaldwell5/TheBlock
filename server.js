var express = require("express");
var app = express();
var request = require("request");
var cors = require("cors");
var cookieParser = require('cookie-parser');
app.use(express.static(__dirname)).use(cors())
app.use(cookieParser());
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

app.get("/getUserInfo", function(req,res){
	var mysql = require('mysql');
	var connection = mysql.createConnection({
			host: 'capdb.cktfsf3s2dmk.us-east-1.rds.amazonaws.com',
			user: 'capDBadmin',
			password: 'CapDBMaster',
			database: 'usersDB',
			port: '3306'
	});
	connection.connect();
	//var cookie = req.query.userName;
        //var a = cookie.split("=");
        //var username = a[1];
        var username = req.query.userName;
	console.log(username);

	connection.query("SELECT * FROM usersTable WHERE username='"+username+"'",function(err,rows,fields){
			if(err) throw err
			console.dir(rows);
			console.dir(fields);
			res.send(rows);
	});
	connection.end();
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
	var cookie = req.query.username;
	//var a = cookie.split("=");
	//var userName = a[1];
	var userName = cookie.replace(/(?:(?:^|.*;\s*)username\s*\=\s*([^;]*).*$)|^.*$/, "$1");
	console.log(userName);

	connection.query("UPDATE usersTable SET bandID='"+bandID+"', isSpotify='"+isSpotify+"', gender='"+gender+"', country='"+country+"', state='"+state+"', city='"+city+"', age='"+age+"' WHERE username='"+userName+"' ", function(err,rows,fields){
		if(err) throw err
		console.log("UPDATE usersTable SET bandID='"+bandID+"', isSpotify='"+isSpotify+"', gender='"+gender+"', country='"+country+"', state='"+state+"', city='"+city+"', age='"+age+"' WHERE username = '"+userName+"' ");
		console.log("save complete");
		console.log(rows);
		console.log(fields);
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
	var refresh_token = req.query.refresh_token;
	var username = req.query.username;
	//var cookie = req.query.username;
	//var userName = cookie.replace(/(?:(?:^|.*;\s*)username\s*\=\s*([^;]*).*$)|^.*$/, "$1");
	console.log(access_token);
	//need to update to set both tokens with correct username
	connection.query("UPDATE usersTable SET token='"+access_token+"', refreshToken='"+refresh_token+"' WHERE username='"+username+"'", function(err,rows,fields){
		if(err) throw err
		console.log("saved token");
	});
	res.send("{}");
	connection.end();
});

app.get("/getSpotifyTokenPairs",function(req,res){
	var mysql = require('mysql');
        var connection = mysql.createConnection({
                host: 'capdb.cktfsf3s2dmk.us-east-1.rds.amazonaws.com',
                user: 'capDBadmin',
                password: 'CapDBMaster',
                database: 'usersDB',
                port: '3306'
        });
        connection.connect();
	connection.query("SELECT token, refreshToken FROM usersTable WHERE isSpotify='1'",function(err,rows,fields){
		if(err) throw err
		console.log(rows);
		res.json(rows);
	});
	connection.end();
});


app.get("/updateTokenPairs",function(req,res){
        var mysql = require('mysql');
        var connection = mysql.createConnection({
                host: 'capdb.cktfsf3s2dmk.us-east-1.rds.amazonaws.com',
                user: 'capDBadmin',
                password: 'CapDBMaster',
                database: 'usersDB',
                port: '3306'
        });
	var refresh_token = req.query.refresh_token;
	var access_token = req.query.access_token;
        //console.log(access_token);
	//console.log(refresh_token);
	connection.connect();
        connection.query("UPDATE usersTable SET token='"+access_token+"' WHERE refreshToken='"+refresh_token+"'",function(err,rows,fields){
                if(err) throw err
                //console.log(rows);
        });
        connection.end();
});



app.get("/setAppleToken",function(req,res){
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
	var musicUserToken = req.query.token;
	var refreshToken = req.query.refreshToken;
	var cookie = req.query.username;
	console.dir(cookie);
	/*var a = cookie.split("=");
	var userName = a[1];*/
	var userName = cookie.replace(/(?:(?:^|.*;\s*)username\s*\=\s*([^;]*).*$)|^.*$/, "$1");
	console.dir(userName);
	console.log("test");
	console.log(userName);
	console.log(musicUserToken);
	console.dir(musicUserToken);
	connection.query("UPDATE usersTable SET token='"+musicUserToken+"', refreshToken= '"+refreshToken+"', isSpotify='0' WHERE username='"+userName+"'", function(err,rows,fields){
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
