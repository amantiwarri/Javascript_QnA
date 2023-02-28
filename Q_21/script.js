/* 
In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
*/

const countries = [
  "India",
  "USA",
  "Japan",
  "Russia",
  "Ethiopiaa",
  "France",
  "Germany",
];

console.log(
  countries.includes("Ethiopia")
    ? countries[countries.indexOf("Ethiopia")].toUpperCase()
    : countries.push("Ethiopia")
);

console.log(countries.find(item => item === "Ethiopia").toUpperCase());
