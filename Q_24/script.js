/* 
  Write a program to create two array "even" and "odd" having even and odd number between the 0 to 100 (0 and 100 included)
*/

function evenOdd() {
  const even = [];
  const odd = [];

  for (let index = 0; index <= 100; index++) {
    if (index % 2 == 0) {
      even.push(index);
    } else {
      odd.push(index);
    }
  }

  console.log(even);
  console.log(odd);
}

evenOdd();
