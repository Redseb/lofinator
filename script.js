var playButton = document.getElementById("play");
var pauseButton = document.getElementById("pause");

playButton.addEventListener("click", play, false);
pauseButton.addEventListener("click", pause, false);

var reverb = new Pizzicato.Effects.Reverb({
    volume: 0.6,
    time: 1.26,
    decay: 1.79,
    reverse: false,
    mix: 0.6
});

var lowPassFilter = new Pizzicato.Effects.LowPassFilter({
    frequency: 1000,
    peak: 10
});

var flanger = new Pizzicato.Effects.Flanger({
    time: 0.45,
    speed: 0.2,
    depth: 0.1,
    feedback: 0.1,
    mix: 0.5
});

var dubDelay = new Pizzicato.Effects.DubDelay({
    feedback: 0.6,
    time: 0.7,
    mix: 0.5,
    cutoff: 700
});

function play(){
    playButton.innerHTML = "play pressed";

    var targetFile = new Pizzicato.Sound({ 
        source: 'file',
        options: { path: 'music/test.mp3' }
    }, function() {
        console.log('sound file loaded!');
        targetFile.addEffect(reverb);
        //targetFile.addEffect(lowPassFilter);
        targetFile.addEffect(dubDelay);
        //targetFile.addEffect(flanger);
        targetFile.play();
    });
    
}

function pause(){
    pauseButton.innerHTML = "pause pressed lol";
    targetFile.pause();
}