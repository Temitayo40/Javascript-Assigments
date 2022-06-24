// this is the detail assignment.

var full_name = "Adebowale Damilola";
var height = "6ft" + " tall";
var country = "Nigerian";

console.log(full_name);
console.log(height);
console.log(country);

//please ignore this, this is meant for the calculator assignment

var firstDigit;
var secDigit;

var question1 = prompt("Choose your math Operaions:\n" + "+ - / * ");
firstDigit = prompt("Input your first number");
secDigit = prompt("input your second number");

if (question1 == "+") {
  document.write(parseInt(firstDigit) + parseInt(secDigit));
} else if (question1 == "-") {
  document.write(parseInt(firstDigit) - parseInt(secDigit));
} else if (question1 == "/") {
  document.write(parseInt(firstDigit) / parseInt(secDigit));
} else {
  document.write(parseInt(firstDigit) * parseInt(secDigit));
}
