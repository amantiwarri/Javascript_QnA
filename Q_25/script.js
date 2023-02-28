/* 
Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. 
Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
    - The same groups apply to both men and women.
    - Underweight: BMI is less than 18.5
    - Normal weight: BMI is 18.5 to 24.9
    - Overweight: BMI is 25 to 29.9
    - Obese: BMI is 30 or more
*/

function calculateBmi(height, weight) {
  if (typeof weight === "number" && typeof height === "number") {
    let bmi = Math.floor((weight / Math.pow(height, 2)) * 10) / 10;

    if (bmi >= 30) {
      console.log(`Obese : BMI is ${bmi}`);
    } else if (bmi >= 25 && bmi <= 29.9) {
      console.log(`Overweight: BMI is ${bmi}`);
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      console.log(`Normal: BMI is ${bmi}`);
    } else if (bmi <= 18.5) {
      console.log(`Underweight: BMI is ${bmi}`);
    }
  } else {
    console.log("Invalid Parameters");
  }
}

calculateBmi(1.65, 68);
