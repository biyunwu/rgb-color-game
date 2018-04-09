function getRandomColors(){
  let colors = [];
  let r = function () { return Math.floor(Math.random()*256) };
  for(let i=0; i<6; i++){
    colors.push("rgb(" + r() + ", " + r() + ", " + r() + ")");
  }
  return colors;
}

// Get an array of 6 random rgb colors.
let colors = getRandomColors();

// Assign colors to colorBlocks.
let colorElements = document.querySelectorAll(".colorBlock");
function initializeColors(){
  for(let i=0; i<colorElements.length; i++){
    colorElements[i].style.backgroundColor = colors[i];
  }
}

// Choose a color's rgb value randomly and display in the h1 element.
let colorSpan = document.getElementById("colorSpan");
colorSpan.textContent = colors[Math.floor(Math.random()*colors.length)];

// Initialize colors for colorBlocks when loading and refreshing.
initializeColors();

// Check correctness when colorBlocks are clicked.
let title = document.querySelector("h1");
for (let i=0; i<colorElements.length; i++){
  colorElements[i].addEventListener("click", function(){
    // Get current colorBlock's background-clor value.
    let curColor = window.getComputedStyle(this).getPropertyValue("background-color");
    // Compare with rgb value in the title.
    console.log(curColor);
    let that = this;
    if (curColor === colorSpan.textContent){
      title.style.backgroundColor = curColor;
    } else {
      this.style.visibility = "hidden";
    }
  });
}