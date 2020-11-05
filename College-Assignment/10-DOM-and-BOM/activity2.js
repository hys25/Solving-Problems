// This program displays the nodeName and nodeType for all nodes in the current HTML in developer console.
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
  displayChildNodes(document, 0)
  console.log("");
});

function displayChildNodes(node, level) {
  console.log(`${" ".repeat(level * 4)}${node.nodeName}`)
  for(let i = 0; i < node.childNodes.length; i++) {
    displayChildNodes(node.childNodes[i], level + 1);
  }
}