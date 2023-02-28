/* 
  Write a program to check that the number given by the user is a prime number or not.
*/

function getPrime(num) {
  let maxDiv = Math.floor(num / 2);
  for (let i = 2; i <= maxDiv; i++) {
    if (num % i == 0) {
      return `${num} is a Not Prime`;
    }
  }
  return `${num} is a Prime`;
}

console.log(getPrime(3));
