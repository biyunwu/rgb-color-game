// Get an array of 6 random rgb colors.
let colors = function(){
  let colors = [];
  let r = function () { return Math.floor(Math.random()*256) };
  for(let i=0; i<6; i++){
    colors.push("rgb(" + r() + ", " + r() + ", " + r() + ")");
  }
  return colors;
}();

// Choose a color's rgb value randomly and display in the h1 element.
let colorSpan = document.getElementById("colorSpan");
colorSpan.textContent = colors[Math.floor(Math.random()*colors.length)];

let colorElements = document.querySelectorAll(".colorBlock");
let title = document.querySelector("h1");
let result = document.querySelector("#result");

for(let i=0; i<colorElements.length; i++){
  // Assign colors to colorBlocks.
  colorElements[i].style.backgroundColor = colors[i];
  // Check correctness and change background color when colorBlocks are clicked.
  colorElements[i].addEventListener("click", actions);
}

function actions(){
  let curColor = this.style.backgroundColor;
  // Compare with rgb value in the title.
  console.log(curColor);
  let selectedColor = colorSpan.textContent;
  if (curColor === selectedColor){
    title.style.backgroundColor = curColor;
    result.textContent = "Correct!"
    // Change other colorBlocks' background color.
    changeOthersColorAndRemoveEventListeners(selectedColor);
  } else {
    this.style.backgroundColor = "black";
    this.removeEventListener("click", actions);
    result.textContent = "Try Again!"
  }
}

function changeOthersColorAndRemoveEventListeners(rgbColorValue){
  for(let i=0; i<colorElements.length; i++){
    colorElements[i].style.backgroundColor = rgbColorValue;
    colorElements[i].removeEventListener("click", actions);
  }
}
