/* 
Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
    - September, October or November, the season is Autumn.
    - December, January or February, the season is Winter.
    - March, April or May, the season is Spring
    - June, July or August, the season is Summer

*/

function getSeason(season) {
  if (season == "September" || season == "October" || season == "November") {
    console.log(`The Season is Autumn`);
  } else if (
    season == "December" ||
    season == "January" ||
    season == "February"
  ) {
    console.log(`The Season is Winter`);
  } else if (season == "March" || season == "April" || season == "May") {
    console.log(`The Season is Spring`);
  } else if (season == "June" || season == "July" || season == "August") {
    console.log(`The Season is Summer`);
  } else {
    console.log(`${season} is not valid input`);
  }
}

var monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
monthNames.forEach(element => {
  getSeason(element);
});
//getSeason("January");
