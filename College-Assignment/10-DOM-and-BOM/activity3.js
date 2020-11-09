"use strict";
window.addEventListener("load", function () {
  windowCharacteristics();
});

window.addEventListener("resize", function(){
  windowCharacteristics();
});

function windowCharacteristics() {
  document.getElementById("result").innerHTML = 
  `<b> Window size characteristics: </b><br>
  Window width is ${window.innerWidth} <br>
  Window height is ${window.innerHeight} <br><br>
  <b> Screen size characteristics: </b><br>
  Screen width is ${screen.width} <br> 
  Screen height is ${screen.height} <br><br>
  <b> Location information : </b><br>
  Location hostname: ${location.hostname} <br> 
  Location href: ${location.href}<br><br>
  <b> Navigator information : </b><br>
  Navigator platform: ${navigator.platform}<br>
  Navigator userAgent: ${navigator.userAgent}`
}