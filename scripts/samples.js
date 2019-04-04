//Samples
    //samples list
    var samples = document.getElementsByClassName("sample");
    //add list functionality
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