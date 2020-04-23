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
