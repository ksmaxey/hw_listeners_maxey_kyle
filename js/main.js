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

//Event Listeners

//The following event listener listens for a click on the listener.jpg image.  Once the user reads the caption and clicks the image, the event listener will fire the fuction that contains an if statement, and the image will then change to a different image.

var change = document.getElementById('howitworks');
change.addEventListener('click', function () {
    if (change.src !== 'img/listener.jpg') {
        change.src = 'img/wow.jpg';
    }
});
