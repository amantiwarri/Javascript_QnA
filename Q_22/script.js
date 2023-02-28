/* 
The following is an array of 10 students ages:
    => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
    - Sort the array and find the min and max age
    - Find the median age(one middle item or two middle items divided by two)
    - Find the average age(all items divided by number of items)
    - Find the range of the ages(max minus min)
    - Compare the value of (min - average) and (max - average), use abs() method
*/

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort();
let minAge = ages[0];
let maxAge = ages[ages.length - 1];
let averageAge = ages.reduce((sum, item) => sum + item) / ages.length;
let range = maxAge - minAge;

const median = function (arr) {
  if (arr.length % 2 === 0) {
    let index = Math.floor(arr.length / 2);
    return (arr[index - 1] + arr[index]) / 2;
  } else {
    let index = Math.floor(arr.length / 2);
    return arr[index] / 2;
  }
};

console.log("Min Age :" + minAge);
console.log("Max Age :" + maxAge);
console.log("Median :" + median(ages));
console.log("Average Age :" + averageAge);
console.log("Range  :" + range);
