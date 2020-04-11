var initial = document.getElementById('initial');
var login = document.getElementById('login');
var register1 = document.getElementById('register1');
var register2 = document.getElementById('register2');
var register3 = document.getElementById('register3');

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
