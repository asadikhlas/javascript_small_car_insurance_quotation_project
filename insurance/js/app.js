

//Variables

const form = document.getElementById('request-quote')

// Event Listeners
eventListener();
function eventListener(){
    document.addEventListener("DOMContentLoaded", function() {
        // Create the <option> for the years
        const html = new HTMLUI();
        html.displayYears();
      });
      
      
      //When the form is submitted
      form.addEventListener('submit',function(e){
          e.preventDefault();
          const make = document.getElementById('make').value;
          const year = document.getElementById('year').value;

          console.log(make)
          console.log(year)

      })

}
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
