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