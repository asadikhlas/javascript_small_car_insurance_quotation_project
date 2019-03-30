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
//   console.log(min);
//   console.log(max)

const selectYears = document.getElementById('year');

//print the value

for(let i= max; i > min; i--){
    const option = document.createElement('option')
    option.value = i;
    option.textContent = i;
    selectYears.appendChild(option)
}

};
