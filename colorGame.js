let colorSpan = document.getElementById("colorSpan");
let colorElements = getColorBlocks();
let title = document.querySelector("h1");
let result = document.querySelector("#result");
let reset = document.querySelector("#stripe #reset");
let blockNum = colorElements.length;
let modes = document.querySelectorAll(".mode");
// let easy = document.getElementById("easy");
// let hard = document.getElementById("hard");

function getColorBlocks(){
  return document.querySelectorAll(".colorBlock");
}

// Get an array of 6 random rgb colors.
let colors = generateRandomColors(6);
// Pick a random color from the arr to be guessed.
colorSpan.textContent = pickColor();

function generateRandomColors(num){
  let colors = [];
  let r = function () { return Math.floor(Math.random()*256) };
  for(let i=0; i<num; i++){
    colors.push("rgb(" + r() + ", " + r() + ", " + r() + ")");
  }
  return colors;
};

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

// Helper method
function changeOthersColor(rgbColorValue){
  for(let i=0; i<colorElements.length; i++){
    colorElements[i].style.backgroundColor = rgbColorValue;
  }
}

// Method for "New Colors" button.
reset.addEventListener("click", resetPage);

function resetPage(){
  reset.textContent = "New Colors";
  colors = generateRandomColors(blockNum);
  colorSpan.textContent = pickColor();
  title.style.backgroundColor = "";
  result.textContent = "";
  for(let i=0; i<blockNum; i++){
    colorElements[i].style.backgroundColor = colors[i];
  }
}

// Change difficulty
modes.forEach(function(el){
  el.addEventListener("click", toggleMode);
});

function toggleMode(){
  if (this.classList.contains("default")){
    resetPage();
  } else {
    modes.forEach(function(el){
      el.classList.toggle("default");
    });
    changeMode();
  }
}

// Helper method
function changeMode(){
  let allBlocks = document.getElementById("container").children;
  for (let i=3; i<allBlocks.length; i++){
    allBlocks[i].classList.toggle("colorBlock");
  }
  colorElements = getColorBlocks();
  blockNum = colorElements.length;
  resetPage();
}