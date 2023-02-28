/* 
    Write a program which tells the number of days in a month, now consider leap year
*/

function numberOfDays(year, month) {
  let monthNames = [
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
  let days = new Date(year, month + 1, 0).getDate();
  console.log(`${monthNames[month]} ${year} have ${days} days`);
}

for (let index = 0; index < 12; index++) {
  numberOfDays(2024, index);
}
