/* 
  Even numbers are divisible by 2 and the remainder is zero. How do you check, 
  if a number is even or not using JavaScript? 
  Create a program which checks that the given number is even or odd
*/

function evenOdd(num) {
  if (num < 1) {
    console.log(`${num} is not consider for this operation`);
    return false;
  }

  num % 2 == 0
    ? console.log(`${num} is Even number`)
    : console.log(`${num} is Odd number`);
}

evenOdd(2);
