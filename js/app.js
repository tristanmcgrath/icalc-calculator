//Starting values are 0, false
let num = "0", storedValue1 = 0, storedValue2 = 0;
let operatorClicked = false, additionChecked = false, subtractionChecked = false,
    multiplicationChecked = false, divisionChecked = false;

//This clears the contents, resets flags
$('#ac').click(function() {
  $('.output').html("0");
  num = "0";
  $('.operator').toggleClass("operator-checked", false);
  additionChecked = false;
  subtractionChecked = false;
  multiplicationChecked = false;
  divisionChecked = false;
});

$('#one').click(function() {
  if (num === "0" || operatorClicked === true) {
    num = "1";
    $('.output').html(num);
    operatorClicked = false;
    $('.operator').toggleClass("operator-checked", false);
  } else {
  num += "1";
  $('.output').html(num);
  }
});

$('#two').click(function() {
  if (num === "0" || operatorClicked === true) {
    num = "2";
    $('.output').html(num);
    operatorClicked = false;
    $('.operator').toggleClass("operator-checked", false);
  } else {
  num += "2";
  $('.output').html(num);
  }
});

$('#three').click(function() {
  if (num === "0" || operatorClicked === true) {
    num = "3";
    $('.output').html(num);
    operatorClicked = false;
    $('.operator').toggleClass("operator-checked", false);
  } else {
  num += "3";
  $('.output').html(num);
  }
});

$('#four').click(function() {
  if (num === "0" || operatorClicked === true) {
    num = "4";
    $('.output').html(num);
    operatorClicked = false;
    $('.operator').toggleClass("operator-checked", false);
  } else {
  num += "4";
  $('.output').html(num);
  }
});

$('#five').click(function() {
  if (num === "0" || operatorClicked === true) {
    num = "5";
    $('.output').html(num);
    operatorClicked = false;
    $('.operator').toggleClass("operator-checked", false);
  } else {
  num += "5";
  $('.output').html(num);
  }
});

$('#six').click(function() {
  if (num === "0" || operatorClicked === true) {
    num = "6";
    $('.output').html(num);
    operatorClicked = false;
    $('.operator').toggleClass("operator-checked", false);
  } else {
  num += "6";
  $('.output').html(num);
  }
});

$('#seven').click(function() {
  if (num === "0" || operatorClicked === true) {
    num = "7";
    $('.output').html(num);
    operatorClicked = false;
    $('.operator').toggleClass("operator-checked", false);
  } else {
  num += "7";
  $('.output').html(num);
  }
});

$('#eight').click(function() {
  if (num === "0" || operatorClicked === true) {
    num = "8";
    $('.output').html(num);
    operatorClicked = false;
    $('.operator').toggleClass("operator-checked", false);
  } else {
  num += "8";
  $('.output').html(num);
  }
});

$('#nine').click(function() {
  if (num === "0" || operatorClicked === true) {
    num = "9";
    $('.output').html(num);
    operatorClicked = false;
    $('.operator').toggleClass("operator-checked", false);
  } else {
  num += "9";
  $('.output').html(num);
  }
});

$('#zero').click(function() {
  if (num === "0" || operatorClicked === true) {
    num = "0";
    $('.output').html(num);
    operatorClicked = false;
    $('.operator').toggleClass("operator-checked", false);
  } else {
  num += "0";
  $('.output').html(num);
  }
});

$('#decimal').click(function() {
  if (num === "0" || operatorClicked === true) {
    num = "0.";
    $('.output').html(num);
    operatorClicked = false;
    $('.operator').toggleClass("operator-checked", false);
  } else {
  num += ".";
  $('.output').html(num);
  }
});

//This function stores the value displayed on screen when an operator
//button (+,-,x,/) is clicked and causes the operator button which is
//clicked to stay visually clicked by way of the .operator-checked class
//until the first digit of the second number is clicked which removes
//the class if it is applied.
$('.operator').click(function(evt) {
  operatorClicked = true;
  storedValue1 = Number(num);
});

//The following four functions set a flag for their given operation
//which lets the equals click event function below know which operation
//to perform.
$('#addition').click(function() {
  if (subtractionChecked === false && divisionChecked === false && multiplicationChecked ===false) {
    additionChecked = true;
    $(this).toggleClass("operator-checked", true);
  }
});

$('#subtraction').click(function() {
  if (additionChecked === false && divisionChecked === false && multiplicationChecked ===false) {
    subtractionChecked = true;
    $(this).toggleClass("operator-checked", true);
  }
});

$('#division').click(function() {
  if (subtractionChecked === false && additionChecked === false && multiplicationChecked ===false) {
    divisionChecked = true;
    $(this).toggleClass("operator-checked", true);
  }
});

$('#multiplication').click(function() {
  if (subtractionChecked === false && divisionChecked === false && additionChecked ===false) {
    multiplicationChecked = true;
    $(this).toggleClass("operator-checked", true);
  }
});

//This is where the magic happens. When the equals button is clicked,
//operations between the two stored values will be performed based
//upon which operation flag was checked and then the result is returned.
$('#equals').click(function() {
  let total;
  storedValue2 = Number(num); //set to the value on screen just prior to click

  if (additionChecked === true) {
      total = storedValue1 + storedValue2;
      additionChecked = false;
  } else if (subtractionChecked === true) {
      total = storedValue1 - storedValue2;
      subtractionChecked = false;
  } else if (divisionChecked === true) {
      total = storedValue1 / storedValue2;
      divisionChecked = false;
  } else if (multiplicationChecked === true) {
      total = storedValue1 * storedValue2;
      multiplicationChecked = false;
  }
  if (Number.isInteger(total) === false) {
    total = total.toFixed(2);
  }
  num = total.toString();
  $('.output').html(num);
  operatorClicked = true;
  $('.operator').toggleClass("operator-checked", false);
});
