let colorSpan = document.getElementById("colorSpan");
let colorElements = document.querySelectorAll(".colorBlock");
let title = document.querySelector("h1");
let result = document.querySelector("#result");
let reset = document.querySelector("#stripe #reset");

// Get an array of 6 random rgb colors.
let colors = generateRandomColors(6);

function generateRandomColors(num){
  let colors = [];
  let r = function () { return Math.floor(Math.random()*256) };
  for(let i=0; i<num; i++){
    colors.push("rgb(" + r() + ", " + r() + ", " + r() + ")");
  }
  return colors;
};

colorSpan.textContent = pickColor();

function pickColor(){
  return colors[Math.floor(Math.random()*colors.length)];
}

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
    changeOthersColor(selectedColor);
    reset.textContent = "Play Again!"
  } else {
    this.style.backgroundColor = "black";
    result.textContent = "Try Again!"
  }
}

function changeOthersColor(rgbColorValue){
  for(let i=0; i<colorElements.length; i++){
    colorElements[i].style.backgroundColor = rgbColorValue;
  }
}

reset.addEventListener("click", function(){
  reset.textContent = "New Colors";
  colors = generateRandomColors(6);
  colorSpan.textContent = pickColor();
  title.style.backgroundColor = "";
  result.textContent = "";
  for(let i=0; i<colorElements.length; i++){
    colorElements[i].style.backgroundColor = colors[i];
  }
});