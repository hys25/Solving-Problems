// This program display all tags in the current HTML document.
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

window.addEventListener("load", function () {
  displayElements("*");
  console.log("");
});

function displayElements(tag) {
  let elements = document.getElementsByTagName(tag);
  let arr = [];
  for (let i = 0; i < elements.length; i++) {
    let element = elements[i];
    arr.push(element.tagName);
    console.log(element.tagName);  
  }
  document.getElementById("result").innerHTML = arr;
};