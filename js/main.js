//Clicks

var header = document.getElementById('h1');
var clicks = 0;

header.addEventListener('click', function () {
    var paragraph = document.createElement('paragraph');
    paragraph.innerHTML = '<p>This is click number</p>';
    document.getElementById('h1').appendChild(paragraph);
});

var count = document.getElementById('h1');
count.onclick = function () {
    console.log(++clicks);
};

//Submitted Info

var firstNameInput = document.getElementById('firstName');
document.addEventListener('submit', function (info) {
    info.preventDefault();
    console.log('The firstName is:', firstNameInput.value);
});

var lastNameInput = document.getElementById('lastName');
document.addEventListener('submit', function (info) {
    info.preventDefault();
    console.log('The lastName is:', lastNameInput.value);
});

var emailInput = document.getElementById('email');
document.addEventListener('submit', function (info) {
    info.preventDefault();
    console.log('The email is:', emailInput.value);
});

var messageInput = document.getElementById('message');
document.addEventListener('submit', function (info) {
    info.preventDefault();
    console.log('The message is:', messageInput.value);
});
