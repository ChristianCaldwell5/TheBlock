var initial = document.getElementById('initial');
var login = document.getElementById('login');
var register = document.getElementById('register');

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
    clearClass(register);
    initial.classList.add('hide-element');
    register.classList.add('show-element--div');
 }, false);

 //back button on REGISTER option is selected
 document.getElementById('register-back-btn').addEventListener('click', function() { 
    clearClass(initial);
    clearClass(register);
    register.classList.add('hide-element');
    initial.classList.add('show-element--div');
 }, false);
