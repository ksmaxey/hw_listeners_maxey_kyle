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
