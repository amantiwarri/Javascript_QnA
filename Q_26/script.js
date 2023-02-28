/* 
Write a program to print the table of any number given by the user. The format of the output should be smiliar to the below example-
	If the number given by the user is 2 then the output should look like this-
	2 * 1 = 2
	2 * 2 = 4
	2 * 3 = 6 and so on till 2 * 10 = 20.
*/

const printTable = function (num) {
  for (let index = 1; index <= 10; index++) {
    console.log(`${num} * ${index} = ${num * index}`);
  }
};

console.log(printTable(2));
