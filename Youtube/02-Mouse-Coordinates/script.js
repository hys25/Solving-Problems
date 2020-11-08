// TASK: Print the mouse coordinates relative to the block at the moment when the mouse cursor moves inside the block. Output the coordinates under the block.
"use strict";
document.getElementById('test').onmousemove = function(e) {
    document.getElementById('offX').innerHTML = e.offsetX;
    document.getElementById('offY').innerHTML = e.offsetY;
}
