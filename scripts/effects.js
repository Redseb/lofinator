//Sliders
    //Reverb
var reverbTime = document.getElementById("reverbTime");
var reverbDecay = document.getElementById("reverbDecay");
var reverbMix = document.getElementById("reverbMix");
var reverbSliders = document.getElementsByClassName("reverb");
        //Reverb sliders functionality
for(var i = 0; i < reverbSliders.length; i++){
    reverbSliders[i].addEventListener("input", setReverb, false);
}
    //Low Pass Frequency
var lowPassFrequency = document.getElementById("lowPassFrequency");
var lowPassPeak = document.getElementById("lowPassPeak");
var lowPassSliders = document.getElementsByClassName("lowPass");
        //Low Pass Frequency sliders functionality
for(var i = 0; i < lowPassSliders.length; i++){
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