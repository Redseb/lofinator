document.body.onload = randomBG();

var bgButton = document.getElementById("bgButton");
bgButton.addEventListener("click", randomBG, false);
/*
    randomBG() is responsible for setting the body's background-image css 
    property to a random url of a locally stored image.

    randomBG() is called once when the body is loaded

    Images can be found as images/lofiBG[i].gif, where i is the index
*/
function randomBG() {
    var bg = './images/lofiBG' + Math.floor(Math.random() * Math.floor(9) + 1) + '.gif';
    document.body.style.backgroundImage = 'url(' + bg + ')';
}