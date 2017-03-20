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

//The following event listener uses both the focus and blur form events to style the form input fields.  When the user "focuses" or clicks on the input fields, the background color changes from white to gray.  This allows the user to know which form field they are currently on.  I then use the blur form event to change the color back to white when the user "unfocuses."

var colorChange = document.getElementById('form');
colorChange.addEventListener('focus', function (color) {
    color.target.style.background = '#cccccc';
}, true);
colorChange.addEventListener('blur', function (color) {
    color.target.style.background = '';
}, true);

//This final event listener listens for the user to scroll.  Once the user scrolls, the header will change to white and "You scrolled!" will be logged to the console.  I am anxious to play with this feature more because I think it will be really versatile.

var bg = document.getElementById('h1');
document.addEventListener('scroll', function () {
    bg.style.color = 'white';
    console.log('You scrolled!');
});
