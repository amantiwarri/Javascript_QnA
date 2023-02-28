let num1 = prompt("Enter First Number");
let num2 = prompt("Enter Second Number");

let operator = prompt(
  "1 for Addition, 2 for Subtraction, 3 for Multiplication and 4 for Division"
);

alert(calculator(parseInt(num1), parseInt(num2), parseInt(operator)));

function calculator(num1, num2, operator) {
  if (operator == 1) {
    return num1 + num2;
  } else if (operator == 2) {
    return num1 - num2;
  } else if (operator == 3) {
    return num1 * num2;
  } else if (operator == 4) {
    return num1 / num2;
  } else {
    return "Invalid operator";
  }
}

/* while (typeof num2 !== "number") {
  num2 = prompt("Enter Second Number");
} */
/* while (NaN(num2)) {
  num1 = prompt("Enter First Number");
}
NaN; */
