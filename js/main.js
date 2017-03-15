//Clicks

var header = document.getElementById('h1');
var clicks = 0;

header.addEventListener('click', function () {
    var paragraph = document.createElement('paragraph');
    paragraph.innerHTML = '<p>This is click number</p>' + (++clicks);
    document.getElementById('h1').appendChild(paragraph);
});

//Submitted Info

var firstNameInput = document.getElementById('firstName');
var lastNameInput = document.getElementById('lastName');
var emailInput = document.getElementById('email');
var messageInput = document.getElementById('message');
document.addEventListener('submit', function (info) {
    info.preventDefault();
    console.log('The firstName is:', firstNameInput.value);
    console.log('The lastName is:', lastNameInput.value);
    console.log('The email is:', emailInput.value);
    console.log('The message is:', messageInput.value);
});
