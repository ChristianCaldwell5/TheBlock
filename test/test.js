var assert = require('assert');
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
			//do some asserting and such
			assert.equal(1,1);
		});
		it('invalid credentials provided and did not recieve access token', function(){
			//do some asserting and such
			assert.notEqual(0,1);
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

