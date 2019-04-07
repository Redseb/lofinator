var playButton = document.getElementById("play");
var pauseButton = document.getElementById("pause");
var filePath = "music/lofi1.wav";
var targetFile;

playButton.addEventListener("click", play, false);
pauseButton.addEventListener("click", pause, false);

input.onchange = function(e){ //File uploading
    filePath = URL.createObjectURL(this.files[0]);
}

/* 
    play() is a function responsible for creating the sound object (Pizzicato)
    adding the effects, and playing the object
*/
function play(isPaused) {

    targetFile = new Pizzicato.Sound({
        source: 'file',
        options: { path: filePath, loop: true }
    }, function () {
        targetFile.addEffect(lowPassFilter);
        targetFile.addEffect(reverb);
        targetFile.play();
        targetFile.setPlaybackRate();
    });
}

function pause() {
    targetFile.stop();
}