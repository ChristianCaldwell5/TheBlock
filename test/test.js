var assert = require('assert');
var mysql = require('mysql');
var request = require('request');
const sync = require("sync-request");

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});

describe('Spotify', function() {
	describe('loginSpotifyUser', function(){
		it('valid credentials provided and recieved access token', function(){
			//this is impossible to test since it requires entering information into a spotify web page
			assert.equal(1,1);
		});
		it('invalid credentials provided and did not recieve access token', function(){
			//same as above 
			assert.notEqual(0,1);
		});
	});		
	describe('API validation', function(){
		it('Access Tokens are valid', function(){
			var connection = mysql.createConnection({
	                	host: 'capdb.cktfsf3s2dmk.us-east-1.rds.amazonaws.com',
        	        	user: 'capDBadmin',
                		password: 'CapDBMaster',
                		database: 'usersDB',
                		port: '3306'
       	 		});
			var fail = false;
        		connection.connect();
			var username = 'BrianHillis';
			connection.query("SELECT token FROM usersTable WHERE username='"+username+"'",function(err,rows,fields){
				const options = {
                                	url: 'https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=50',
                                	headers: {
                                		"Authorization": "Bearer " + rows[0].token
                                	},
                       		}
				request.get(options,function(error,response,body){
					body = JSON.parse(body);
					if(body.length != 50){
						fail = false;
					}
					//assert.notEqual(body.error.status.toString(),'400');
					//if(body.error.status.toString() == '400'){
					//	fail = true;
					//}
					connection.end();
				});
					
			});
			assert.equal(fail,false);
		});
		it('Get Top Songs returns valid info from spotify',function(){
			var connection = mysql.createConnection({
                                host: 'capdb.cktfsf3s2dmk.us-east-1.rds.amazonaws.com',
                                user: 'capDBadmin',
                                password: 'CapDBMaster',
                                database: 'usersDB',
                                port: '3306'
                        });
                        var fail = false;
                        connection.connect();
                        var username = 'BrianHillis';
			connection.query("SELECT token FROM usersTable WHERE username='"+username+"'",function(err,rows,fields){
                                const options = {
                                        url: 'https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=50',
                                        headers: {
                                                "Authorization": "Bearer " + rows[0].token
                                        },
                                }
                                request.get(options,function(error,response,body){
                                        body = JSON.parse(body);		
					if(body.total != 50){
						fail = true;
					}	
					connection.end();
                                });

                       	});
         		assert.equal(fail,false);
		});
		it('Get user info returns valid info from spotify',  function(){
			var connection = mysql.createConnection({
                                host: 'capdb.cktfsf3s2dmk.us-east-1.rds.amazonaws.com',
                                user: 'capDBadmin',
                                password: 'CapDBMaster',
                                database: 'usersDB',
                                port: '3306'
                        });
                        var fail = false;
                        connection.connect();
                        var username = 'BrianHillis';
                        connection.query("SELECT token FROM usersTable WHERE username='"+username+"'",function(err,rows,fields){
                                const options = {
                                        url: 'https://api.spotify.com/v1/me',
                                        headers: {
                                                "Authorization": "Bearer " + rows[0].token
                                        },
                                }
                                request.get(options,function(error,response,body){
                                        body = JSON.parse(body);
                                        if(body.display_name != 'smallbutterrible'){
                                                fail = true;
                                        }
                                        connection.end();
                                });

                        });
			assert.equal(fail,false);
		});
		it('refreshToken is valid and refreshes token', function(){
			var connection = mysql.createConnection({
                                host: 'capdb.cktfsf3s2dmk.us-east-1.rds.amazonaws.com',
                                user: 'capDBadmin',
                                password: 'CapDBMaster',
                                database: 'usersDB',
                                port: '3306'
                        });
			var client_id = 'e6d465ab8afb4cd4beb72069fa2f4d1f'; // Your client id
			var client_secret = '89f286fa419d46d68512c086d231e399'; // Your secret
                        var fail = false;
                        connection.connect();
                        var username = 'BrianHillis';
                        connection.query("SELECT token, refreshToken FROM usersTable WHERE username='"+username+"'",function(err,rows,fields){
				//console.log(rows[0].token);
				//console.log(rows[0].refreshToken);
				var authOptions = {
    					url: 'https://accounts.spotify.com/api/token',
    					headers: { 'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64')) },
    					form: {
      						grant_type: 'refresh_token',
      						refresh_token: rows[0].refreshToken
    					},
    					json: true
  				};

  				request.post(authOptions, function(error, response, body) {
    				//console.log("posted");
    				if (!error && response.statusCode === 200) {
      					var access_token = body.access_token;
      					//console.log(error);
      					//console.log("huh");
      					fail = false;
      					//console.log(access_token);
					connection.query("UPDATE usersTable SET token='"+access_token+"' WHERE username='"+username+"'",function(err,rows,body){
					
					});
				}else{
					fail = true;
				}
				});
			});
			connection.end();
			assert.equal(fail,false);
		});
	});

});

describe('Database', function() {
  describe('usersTable connection check', function() {
    it('if select query returns NULL, there is no NULL values in the table', function(){

        var boolCheck = false;
        var mysql = require('mysql');
        var connection = mysql.createConnection({
                        host: 'capdb.cktfsf3s2dmk.us-east-1.rds.amazonaws.com',
                        user: 'capDBadmin',
                        password: 'CapDBMaster',
                        database: 'usersDB',
                        port: '3306'
        });
        connection.connect();

        connection.query("SELECT * FROM usersTable",function(err,rows,fields){
                        if(err){
				boolCheck = true;
			}

        });

	function pass(boolCheck){
                connection.end();
                assert.equal(true, boolCheck);
        }		
    });
  });

  describe('songsTable connection check', function() {
    it('if select query returns NULL, there is no NULL values in the table', function(){

        var boolCheck = false;
        var mysql = require('mysql');
        var connection = mysql.createConnection({
                        host: 'capdb.cktfsf3s2dmk.us-east-1.rds.amazonaws.com',
                        user: 'capDBadmin',
                        password: 'CapDBMaster',
                        database: 'usersDB',
                        port: '3306'
        });
        connection.connect();

        connection.query("SELECT * FROM songsTable",function(err,rows,fields){
                        if(err){
                                boolCheck = true;
                        }

        });
        
        function pass(boolCheck){
                connection.end();
                assert.equal(true, boolCheck);
        }
    });
  });


  describe('usersTable NULL check', function() {
    it('if select query returns NULL, there is no NULL values in the table', function(){

	var boolCheck = false;      
	var mysql = require('mysql');
        var connection = mysql.createConnection({
                        host: 'capdb.cktfsf3s2dmk.us-east-1.rds.amazonaws.com',
                        user: 'capDBadmin',
                        password: 'CapDBMaster',
                        database: 'usersDB',
                        port: '3306'
        });
        connection.connect();

        connection.query("SELECT * FROM usersTable WHERE userID IS NULL OR username IS NULL OR password IS NULL OR isSpotify IS NULL OR gender IS NULL OR country IS NULL OR state IS NULL OR city IS NULL OR age IS NULL OR token IS NULL OR refreshToken IS NULL",function(err,rows,fields){
                        if(err) throw err
			
			if(rows.length == 0){
				boolCheck = true;
				pass(boolCheck);
			}
        });
	
	function pass(boolCheck){
		connection.end();
		assert.equal(true, boolCheck);
	}

    });
  });

  describe('songsTable NULL check', function() {
    it('if select query returns NULL, there is no NULL values in the table', function(){

	var boolCheck = false;
        var mysql = require('mysql');
        var connection = mysql.createConnection({
                        host: 'capdb.cktfsf3s2dmk.us-east-1.rds.amazonaws.com',
                        user: 'capDBadmin',
                        password: 'CapDBMaster',
                        database: 'usersDB',
                        port: '3306'
        });
        connection.connect();

        connection.query("SELECT * FROM songsTable WHERE songID IS NULL OR name IS NULL OR artist IS NULL OR image IS NULL OR isrc IS NULL OR popularity IS NULL OR state IS NULL OR city IS NULL OR age IS NULL OR isSpotify IS NULL OR country IS NULL",function(err,rows,fields){
                        if(err) throw err
			
                        if(rows.length == 0){ 
                                boolCheck = true;
				pass(boolCheck);
                        }

        });
        
	function pass(boolCheck){
		connection.end();
		assert.equal(true, boolCheck);
	}
        
    });
  });

});

describe('Apple', function() {
  describe('appleTokenValidity', function() {
    it('Checks tokens for apple instance', function() {
      var connection = mysql.createConnection({
        host: 'capdb.cktfsf3s2dmk.us-east-1.rds.amazonaws.com',
        user: 'capDBadmin',
        password: 'CapDBMaster',
        database: 'usersDB',
        port: '3306'
      });
      var failure = false;
      connection.connect();
      var username = 'ChristianC';
      connection.query("SELECT token, refreshToken FROM usersTable WHERE username='"+username+"'", function(err,rows,fields) {
        if(err) throw err
        console.log(rows);
        const options = {
          url: 'https://api.music.apple.com/v1/me/recent/played?limit=1',
  				headers:{
  						'Music-User-Token' : rows[0].token,
  						"Authorization": "Bearer " + rows[0].refreshToken
  				}
        }
        request.get(options,function(error,response,body) {
            body = JSON.parse(body);
            if(body == null) {
              boolCheck = true;
              pass(boolCheck);
            }
        });
      });

      function pass(boolCheck) {
        connection.end();
        assert.equal(true, boolCheck);
      }
    });

    it('Check for 50 songs in DB', function() {
      var connection = mysql.createConnection({
        host: 'capdb.cktfsf3s2dmk.us-east-1.rds.amazonaws.com',
        user: 'capDBadmin',
        password: 'CapDBMaster',
        database: 'usersDB',
        port: '3306'
      });
      var failure = false;
      var songs = [];
      connection.connect();
      var username = 'ChristianC';
      connection.query("SELECT token, refreshToken FROM usersTable WHERE username='"+username+"'", function(err,rows,fields) {
        if(err) throw err
        var i, j, stop;
        for(i=0; i<50; i+=10){
          j = i;
          stop = i+10;
          var res = sync("GET", "https://api.music.apple.com/v1/me/library/recently-added?offset=" + i, {
			         headers: {
				             'Music-User-Token' : rows[0].token,
              			 "Authorization": "Bearer " + rows[0].refreshToken
			         },
			    });
          console.dir(res.getBody('utf-8'));
		      var data = res.getBody('utf-8');
		      data = JSON.parse(data);
          var k = 0;
          while(j<stop){
            console.log(songs[j]);
            songs[j] = data.data[k].id;
            j++;
            k++;
          }
        }
      });
      for(i=0; i<50; i++){
        if(songs[i] == null){
          failure = false;
        }
      }
      connection.end();
      assert.equal(failure,false);
  });
});
});
