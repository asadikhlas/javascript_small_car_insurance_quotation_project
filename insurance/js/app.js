//Variables

const form = document.getElementById("request-quote");
const html = new HTMLUI();

// Event Listeners
eventListener();
function eventListener() {
  document.addEventListener("DOMContentLoaded", function() {
    // Create the <option> for the years

    html.displayYears();
  });

  //When the form is submitted
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    // Read the values from the form
    const make = document.getElementById("make").value;
    const year = document.getElementById("year").value;
    //Read the Radio button
    const level = document.querySelector('input[name="level"]:checked').value;

    //Checked that all the fields have something
    if (make === "" || year === "" || level === "") {
      html.displayError("All the fields are mandatory");
    } else {
      // Make the quotation
      const insurance = new Insurance(make, year, level);
      const price = insurance.calculateQuotation(insurance);

      //print the resu;t from htmlui
      html.showResults(price)
    }

    //   console.log(make)
    //   console.log(year)
  });
}
//Objects

//Everything related to the quotatio and calculation in insurance
function Insurance(make, year, level) {
  this.make = make;
  this.year = year;
  this.level = level;
}
//Calculate the price for the current quotation
Insurance.prototype.calculateQuotation = function(insurance) {
  let price;
  const base = 2000;

  //get the make
  const make = insurance.make;

  /*  
    1= American 15%
    2= asian 05%
    3= european 35%

    */
  switch (make) {
    case "1":
      price = base * 1.15;
      break;
    case "2":
      price = base * 1.05;
      break;
    case "3":
      price = base * 1.35;
      break;
  }
  //Get the year
  const year = insurance.year;

  const difference = this.getYearDifference(year);
  //Each year the cost of the insurance is fgoing to be 3% cheaper
  price = price - (difference * 3 * price) / 100;
 
  //Check the level of pritection
  const level = insurance.level;
  price = this.calculateLevel(price,level);
  return price;


  //Get the years difference
};
//Return the difference between year
Insurance.prototype.getYearDifference = function(year) {
  return new Date().getFullYear() - year;
};

//Adds the value based on the level of protection
Insurance.prototype.calculateLevel = function(price,level){
  /*
  Basic insurance is going to be increase the value by 3%
  complete Insurance is going to be increase the value of 50% 
  */
 if(level === 'basic'){
   price = price * 1.30;
 }else{
   price = price * 1.50;
 }

 return price

}


// Everything related to the HTML

function HTMLUI() {}

//Displays the latest 28 years in the selection

HTMLUI.prototype.displayYears = function() {
  //Max and Min years
  const max = new Date().getFullYear(),
    min = max - 20;
  //   console.log(min);
  //   console.log(max)

  const selectYears = document.getElementById("year");

  //print the value

  for (let i = max; i > min; i--) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    selectYears.appendChild(option);
  }
};

//Print an Erro

HTMLUI.prototype.displayError = function(message) {
  //Create a div
  const div = document.createElement("div");
  div.classList = "error";

  //insert the message
  div.innerHTML = `
    <p>${message}</p>
    `;
  form.insertBefore(div, document.querySelector(".form-group"));

  //Remove the error

  setTimeout(function() {
    document.querySelector(".error").remove();
  }, 3000);
};
