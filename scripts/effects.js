//Sliders
//Master Volume
var volumeSlider = document.getElementById("volume");
volumeSlider.addEventListener("input", setVolume, false);

//Playback Rate
var playbackRateSlider = document.getElementById("playbackRate");
playbackRateSlider.addEventListener("input", setPlaybackRate, false);
//Reverb
var reverbTime = document.getElementById("reverbTime");
var reverbDecay = document.getElementById("reverbDecay");
var reverbMix = document.getElementById("reverbMix");
var reverbSliders = document.getElementsByClassName("reverb");
//Reverb sliders functionality
for (var i = 0; i < reverbSliders.length; i++) {
    reverbSliders[i].addEventListener("input", setReverb, false);
}
//Low Pass Frequency
var lowPassFrequency = document.getElementById("lowPassFrequency");
var lowPassPeak = document.getElementById("lowPassPeak");
var lowPassSliders = document.getElementsByClassName("lowPass");
//Low Pass Frequency sliders functionality
for (var i = 0; i < lowPassSliders.length; i++) {
    lowPassSliders[i].addEventListener("input", setLowPass, false);
}
//Effects
//Reverb
var reverb = new Pizzicato.Effects.Reverb({
    volume: 1,
    time: 1.2,
    decay: 1.8,
    reverse: false,
    mix: 0.6
});
//LowP Pass Filter
var lowPassFilter = new Pizzicato.Effects.LowPassFilter({
    frequency: 1000,
    peak: 10
});

//Functionality
/* 
    setVolume() sets Pizzicato's master volume to the volume slider's
    value
*/
function setVolume() {
    Pizzicato.volume = volumeSlider.value / 1;
}
/* 
    setPlaybackRate() sets the audio objects playbackrate (speed) to 
    the slider's value.
*/
function setPlaybackRate() {
    targetFile.sourceNode.playbackRate.value = playbackRate.value;
}
/* 
    setReverb() will set all of the reverb effect's sub-variables to 
    the value of the sliders
*/
function setReverb() { //Called when any reverb slider is moved
    reverb.time = reverbTime.value / 10; // Time is between 0 sec and 10 sec
    reverb.decay = reverbDecay.value / 10; // Decay between 0 and 10
    reverb.mix = reverbMix.value / 100; //Mix is between 0 and 1
}
/* 
    Similar to setReverb, setLowPass() sets all of the lowPassFilter variables to the
    slider values
*/
function setLowPass() { //Called when any reverb slider is moved
    lowPassFilter.frequency = lowPassFrequency.value / 1;
    lowPassFilter.peak = lowPassPeak.value / 1;
}