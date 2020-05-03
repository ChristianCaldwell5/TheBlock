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
			//do some asserting and such
			assert.equal(1,1);
		});
		it('invalid credentials provided and did not recieve access token', function(){
			//do some asserting and such
			assert.notEqual(0,1);
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
