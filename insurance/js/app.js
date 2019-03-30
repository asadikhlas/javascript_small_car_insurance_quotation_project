//Variables

// Event Listeners
document.addEventListener("DOMContentLoaded", function() {
  // Create the <option> for the years
  const html = new HTMLUI();
  html.displayYears();
});

//Objects

function HTMLUI() {}

//Displays the latest 28 years in the selection

HTMLUI.prototype.displayYears = function() {
  //Max and Min years
  const max = new Date().getFullYear(),
  min = max - 20;
  console.log(min);
  console.log(max)
};
