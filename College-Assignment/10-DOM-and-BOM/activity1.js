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