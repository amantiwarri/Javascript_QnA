/* 
a. Print a triangle pattern, if the given input is 3 then the pattern should be similar to the given output
	   *
	   **
	   ***

b. Print a square pattern, if the input is 3 then the output should be similar to the given output
	   ***
	   ***
	   ***
c. Print a pyramid pattern, if the input is 3 then the output should be similar to the given output
	     *
	    ***
 	   *****
*/

function triangle(row) {
  for (let x = 1; x <= row; x++) {
    let col = [];
    for (let y = 0; y < x; y++) {
      col.push("*");
    }
    console.log(col);
    console.log("\n");
  }
}
//triangle(3);

function square(row) {
  for (let x = 1; x <= row; x++) {
    let col = [];
    for (let y = 1; y <= row; y++) {
      col.push("*");
    }
    console.log(col);
    console.log("\n");
  }
}
square(3);
