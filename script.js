document.body.onload = randomBG();

var playButton = document.getElementById("play");
var pauseButton = document.getElementById("pause");
var filePath = "music/test.mp3";
var targetFile;

var reverbTime = document.getElementById("reverbTime");
var reverbDecay = document.getElementById("reverbDecay");
var reverbMix = document.getElementById("reverbMix");

var reverbSliders = document.getElementsByClassName("reverb");

var lowPassFrequency = document.getElementById("lowPassFrequency");
var lowPassPeak = document.getElementById("lowPassPeak");

var lowPassSliders = document.getElementsByClassName("lowPass");

var samples = document.getElementsByClassName("sample");

for(var i = 0; i < samples.length; i++){
    samples[i].addEventListener("click", setFilePath, false);
}

/* 
    setFilePath() is a function responsible for changing the value of the 
    filePath variable to whicever radio box is checked
*/
function setFilePath(){
    for(var i = 0; i < samples.length; i++){
        if(samples[i].checked){
            filePath = samples[i].value;
        }
    }
    setReverb();
    setLowPass();
}

/*
    randomBG() is responsible for setting the body's background-image css 
    property to a random url of a locally stored image.

    randomBG() is called once when the body is loaded

    Images can be found as images/lofiBG[i].gif, where i is the index
*/
function randomBG(){
    var bg = 'images/lofiBG' + Math.floor(Math.random() * Math.floor(4) + 1) + '.gif';
    document.body.style.backgroundImage='url('+bg+')';
}

playButton.addEventListener("click", play, false);
pauseButton.addEventListener("click", pause, false);


for(var i = 0; i < reverbSliders.length; i++){
    reverbSliders[i].addEventListener("input", setReverb, false);
}

for(var i = 0; i < lowPassSliders.length; i++){
    lowPassSliders[i].addEventListener("input", setLowPass, false);
}

var reverb = new Pizzicato.Effects.Reverb({
    volume: 1,
    time: 1.2,
    decay: 1.8,
    reverse: false,
    mix: 0.6
});

var lowPassFilter = new Pizzicato.Effects.LowPassFilter({
    frequency: 1000,
    peak: 10
});

/* 
    setReverb() will set all of the reverb effect's sub-variables to 
    the value of the sliders
*/
function setReverb(){ //Called when any reverb slider is moved
    console.log("Reverb Set");
    reverb.time = reverbTime.value/10; // Time is between 0 sec and 10 sec
    reverb.decay = reverbDecay.value/10; // Decay between 0 and 10
    reverb.mix = reverbMix.value/100; //Mix is between 0 and 1
}
/* 
    Similar to setReverb, setLowPass() sets all of the lowPassFilter variables to the
    slider values
*/
function setLowPass(){ //Called when any reverb slider is moved
    console.log("LowPass Set");
    lowPassFilter.frequency = lowPassFrequency.value/1;
    console.log("lowPassFrequency.value: " + lowPassFrequency.value + " lowPassFilter.frequency: " + lowPassFilter.frequency);
    lowPassFilter.peak = lowPassPeak.value/1;
}

/* 
    play() is a function responsible for creating the sound object (Pizzicato)
    adding the effects, and playing the object
*/
function play(){
    playButton.innerHTML = "play pressed";

    var targetFile = new Pizzicato.Sound({ 
        source: 'file',
        options: { path: filePath, loop: true }
    }, function() {
        console.log('sound file loaded!');
        targetFile.addEffect(lowPassFilter);
        targetFile.addEffect(reverb);
        targetFile.play();
    });
}

function pause(){
    pauseButton.innerHTML = "pause pressed lol";
    targetFile.pause();
}