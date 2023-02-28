/* 
Write a program which can give grades to students according to theirs scores:
    - 80-100, A
    - 70-79, B
    - 60-69, C
    - 50-59, D
    - 0-49, F

*/

function grades(score) {
  if (score >= 80 && score <= 100) {
    console.log(`Score : ${score} : Grade A`);
  } else if (score >= 70 && score <= 79) {
    console.log(`Score : ${score} : Grade B`);
  } else if (score >= 60 && score <= 69) {
    console.log(`Score : ${score} : Grade C`);
  } else if (score >= 50 && score <= 59) {
    console.log(`Score : ${score} : Grade D`);
  } else if (score >= 0 && score <= 49) {
    console.log(`Failed`);
  } else {
    console.warn(`${score} is not valid score`);
  }
}

grades(100);
grades(75);
grades(65);
grades(55);
grades(49);
grades(2);
grades(-48);
