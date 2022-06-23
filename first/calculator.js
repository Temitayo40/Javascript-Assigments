var firstDigit;
var secDigit;

var question1 = prompt("Choose your math Operaions:\n" + "+ - / * ");
firstDigit = prompt("Input your first number");
secDigit = prompt("input your second number");


if(question1 == "+") {
  document.write(parseInt(firstDigit) + parseInt(secDigit))
} else if (question1 == "-") {
  document.write(parseInt(firstDigit) - parseInt(secDigit))
} else if (question1 == "/") {
    document.write(parseInt(firstDigit) / parseInt(secDigit))
}else {
  document.write(parseInt(firstDigit) * parseInt(secDigit))
}
