var assert = require('assert');
//copy needed frontend functions here from request_user.js
function request_account_details(x, s){
    var service = s;

    if(x === 'name'){
        return 'name'
    }
    else if(x === 'city'){
        return 'city'
    }
    else if(x === 'state'){
        return 'state'
    }
    else if(x === 'country'){
        return 'country'
    }
    else if(x === 'age'){
        return 'age'
    }
    else if(x === 'service'){
        if( service == 1 ){
            return 'Spotify'
        }
        else{
            return 'Apple'
        }
    }
    else{
        //error
        return 0;
    }
}
function change_account_details(c, s, ci, a){
    //edit information here in the database
    //todo: keep the error checking but add the changes to database
    var new_country = c;
    var new_state = s;
    var new_city = ci;
    var new_age = a;
    if( new_country == '' || new_state == '' || new_city == '' || new_age == ''){
        return 0;
    }
    return 1;
}
function change_password(o, n, r){
    //edit information here in the database
    //todo: keep the error checking but add the changes to database
    var old_password = o;
    var new_pass = n;
    var re_pass = r;
    if( old_password == '' || new_pass == '' || re_pass == '' ){
        return 0;
    }
    else if( old_password == new_pass ){
        return 0;
    }
    else if( new_pass != re_pass ){
        return 0;
    }
    return 1;
}
//start test
describe('Account', function() {
    describe('Request user info', function(){
        it('Should get name successfully', function(){
            var result = request_account_details('name', 1);
            assert.equal('name', result);
        });
        it('Should get city successfully', function(){
            var result = request_account_details('city', 1);
            assert.equal('city', result);
        });
        it('Should get state successfully', function(){
            var result = request_account_details('state', 1);
            assert.equal('state', result);
        });
        it('Should get country successfully', function(){
            var result = request_account_details('country', 1);
            assert.equal('country', result);
        });
        it('Should get age successfully', function(){
            var result = request_account_details('age', 1);
            assert.equal('age', result);
        });
        it('Should get Spotify service successfully', function(){
            var result = request_account_details('service', 1);
            assert.equal('Spotify', result);
        });
        it('Should get Apple service successfully', function(){
            var result = request_account_details('service', 0);
            assert.equal('Apple', result);
        });
        it('Should return error', function(){
            var result = request_account_details('error', 0);
            assert.equal(0, result);
        });
    });
    describe('Edit account details', function(){
        it('Should have all fields entered', function(){
            var result = change_account_details('not null', 'not null', 'not null', 'not null');
            assert.equal(1, result);
        })
        it('Should have new country field missing', function(){
            var result = change_account_details('', 'not null', 'not null', 'not null');
            assert.equal(0, result);
        })
        it('Should have new state field missing', function(){
            var result = change_account_details('not null', '', 'not null', 'not null');
            assert.equal(0, result);
        })
        it('Should have new city field missing', function(){
            var result = change_account_details('not null', 'not null', '', 'not null');
            assert.equal(0, result);
        })
        it('Should have new age field missing', function(){
            var result = change_account_details('not null', 'not null', 'not null', '');
            assert.equal(0, result);
        })
    });
    describe('Change password', function(){
        it('Should have all fields entered and correct', function(){
            var result = change_password('old pass', 'new pass', 'new pass');
            assert.equal(1, result);
        })
        it('Should have old password field missing', function(){
            var result = change_password('', 'not null', 'not null');
            assert.equal(0, result);
        })
        it('Should have new password field missing', function(){
            var result = change_password('not null', '', 'not null');
            assert.equal(0, result);
        })
        it('Should have retyped password field missing', function(){
            var result = change_password('not null', 'not null', '');
            assert.equal(0, result);
        })
        it('Should have entered new password as old password', function(){
            var result = change_password('old pass', 'old pass', 're pass');
            assert.equal(0, result);
        })
        it('Should have mismatched new password with retyped password', function(){
            var result = change_password('old pass', 'new pass', 'oops, i retyped my password wrong');
            assert.equal(0, result);
        })
    });
});
