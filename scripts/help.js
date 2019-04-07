/* 
    Responsible for "clippy" help on the bottom right
    When mouse hovers on clippy the text appears
*/

var clippy = document.getElementById("help");
clippy.addEventListener("mouseover", clippyHover);
clippy.addEventListener("mouseout", clippyNormal);

var clippyText = document.getElementById("helpText");
clippyText.style.opacity = "0";

function clippyHover() {
    clippyText.style.opacity = "1";
}

function clippyNormal() {
    clippyText.style.opacity = "0";
}