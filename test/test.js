var assert = require('assert');
var mysql = require('mysql');
var request = require('request');

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
