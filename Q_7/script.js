/* 
Declare an array containing the multiple values and 
use lastIndexOf to determine the position of the first and last occurrence of a word "pw skills".
*/

const skills = [
  "pw skills",
  "javascript",
  "java",
  "pw skills",
  "CplusPlus",
  "dot net",
  "pw skills",
  "iNeuron",
];

let index = skills.lastIndexOf("pw skills");
//console.log(index); // last occurence

let indexes = [];

while (index !== -1) {
  indexes.push(index);
  index = index > 0 ? skills.lastIndexOf("pw skills", index - 1) : -1;
}
console.log(indexes); // All occurence
