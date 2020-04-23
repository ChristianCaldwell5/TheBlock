var initial = document.getElementById('initial');
var login = document.getElementById('login');
var register1 = document.getElementById('register1');
var register2 = document.getElementById('register2');
var register3 = document.getElementById('register3');
var username = 

//login option selected
document.getElementById('login-btn').addEventListener('click', function() { 
    clearClass(initial);
    clearClass(login);
    initial.classList.add('hide-element');
    login.classList.add('show-element--div');
 }, false);

//back button on LOGIN option is selected
document.getElementById('login-back-btn').addEventListener('click', function() { 
    clearClass(initial);
    clearClass(login);
    login.classList.add('hide-element');
    initial.classList.add('show-element--div');
 }, false);

 //register button is selected
 document.getElementById('register-btn').addEventListener('click', function() { 
    clearClass(initial);
    clearClass(register1);
    initial.classList.add('hide-element');
    register1.classList.add('show-element--div');
 }, false);

//next button on register1 is selected
document.getElementById('next1-btn').addEventListener('click', function() { 
   var username = document.getElementById('username-field').value;
   var password = document.getElementById('password-field').value;
   saveUserPass(username,password);
   clearClass(register1);
   clearClass(register2);
   register1.classList.add('hide-element');
   register2.classList.add('show-element--div');
}, false);

 //cancel button on register1 option is selected
 document.getElementById('cancel1-btn').addEventListener('click', function() { 
    clearClass(initial);
    clearClass(register1);
    register1.classList.add('hide-element');
    initial.classList.add('show-element--div');
 }, false);

 //next button on register2 is selected
 document.getElementById('next2-btn').addEventListener('click', function() { 
	var genderObj = document.getElementById('gender-field');
	var gender = genderObj.options[genderObj.selectedIndex].value;
	var countryObj = document.getElementById('countryId');
	var country = countryObj.options[countryObj.selectedIndex].value;
	var stateObj = document.getElementById('stateId');
	var state = stateObj.options[stateObj.selectedIndex].value;
	var cityObj = document.getElementById('cityId');
	var city = cityObj.options[cityObj.selectedIndex].value;
	var age = document.getElementById('age-field').value;


	saveDemographicInfo(gender,country,state,city,age);

   clearClass(register2);
   clearClass(register3);
   register2.classList.add('hide-element');
   register3.classList.add('show-element--div');
}, false);

//cancel button on register2 option is selected
document.getElementById('cancel2-btn').addEventListener('click', function() { 
   clearClass(initial);
   clearClass(register2);
   register2.classList.add('hide-element');
   initial.classList.add('show-element--div');
}, false);

//cancel button on register3 option is selected
document.getElementById('cancel3-btn').addEventListener('click', function() { 
   clearClass(initial);
   clearClass(register3);
   register3.classList.add('hide-element');
   initial.classList.add('show-element--div');
}, false);

function saveUserPass(userName,passWord){
	$.ajax({
		url: 'http://ec2-3-88-85-136.compute-1.amazonaws.com:3001/userPass',
		timeout: 10000000,
		data:{
			'username': userName,
			'password': passWord
		}
	}).done(function(){
		console.log("sent");
	});
}

function saveDemographicInfo(gender,country,state,city,age){

	$.ajax({
                url: 'http://ec2-3-88-85-136.compute-1.amazonaws.com:3001/demographics',
                timeout: 10000000,
                data:{
                        'gender': gender,
                        'country': country,
			'state':  state,
			'city': city,
			'age': age
                }
        }).done(function(){
                console.log("sent");
        });

}






