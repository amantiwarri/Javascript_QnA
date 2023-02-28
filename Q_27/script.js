/* 
Write a program to print all the prime number between 0 to 100 (0 and 100 included)
*/

var prime = [];
function getPrime(num) {
  let maxDiv = Math.floor(num / 2);
  for (let i = 2; i <= maxDiv; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  prime.push(num);
}

(function getAllPrime() {
  for (let num = 2; num <= 100; num++) {
    getPrime(num);
  }
})();

console.log(prime);
