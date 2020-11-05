// This program displays the current window size, screen size, and location information.
//
// References:
// https://en.wikibooks.org/wiki/JavaScript
// https://en.wikiversity.org/wiki/JavaScript_Programming/DOM_and_BOM
// https://en.wikipedia.org/wiki/Document_Object_Model
// https://en.wikipedia.org/wiki/Browser_Object_Model
// https://en.wikibooks.org/wiki/JavaScript/Introduction_to_the_Document_Object_Model_(DOM)
// https://www.youtube.com/watch?v=T_89UCU8PQU
// https://www.youtube.com/watch?v=YNXW5czcob8
// https://www.youtube.com/watch?v=QPC3d-zb8Yk
// https://www.youtube.com/watch?v=sWUT97Ne7V4
// https://www.youtube.com/watch?v=l-0nPnSvbX8

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