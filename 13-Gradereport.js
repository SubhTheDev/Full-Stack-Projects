/*Turn a numeric score into a grade report. The report should include the letter grade, whether the student passed, and a short feedback message.

Write these functions:
getLetterGrade(score) should return "A", "B", "C", "D", or "F" based on the score.
hasPassed(score) should return true when the score is 60 or higher.
getFeedback(grade) should return a short message for the grade.
createGradeReport(name, score) should return one object with name, score, grade, passed, and feedback.

Sample checks:
js
console.log(createGradeReport('Ava', 92));
console.log(createGradeReport('Noah', 48));
console.log(createGradeReport('Mina', 75));
console.log(createGradeReport('Sam', 60));
Expected output:

txt
{ name: "Ava", score: 92, grade: "A", passed: true, feedback: "Excellent work" }
{ name: "Noah", score: 48, grade: "F", passed: false, feedback: "Keep practicing" }
{ name: "Mina", score: 75, grade: "C", passed: true, feedback: "You passed" }
{ name: "Sam", score: 60, grade: "D", passed: true, feedback: "You passed" }

Use the grade from getLetterGrade when choosing the feedback. */
function getLetterGrade(score) {
  if (score < 40) {
    return "F";
  } else if (score > 40 && score < 60) {
    return "D";
  } else if (score > 60 && score < 70) {
    return "C";
  } else if (score > 70 && score < 80) {
    return "B";
  } else {
    return "A";
  }
}

function hasPassed(score) {
  if (score >= 60) {
    return "true";
  } else {
    return "false";
  }
}

function getFeedback(score) {
  if (score < 40) {
    return "Study harder!";
  } else if (score > 40 && score < 60) {
    return "Work hard";
  } else if (score > 60 && score < 70) {
    return "You passed";
  } else if (score > 70 && score < 80) {
    return "Keep on working";
  } else {
    return "Excellent work!";
  }
}

function createGradeReport(name, score) {
  const letter = getLetterGrade(score);
  const isPassed = hasPassed(score);
  const feedback = getFeedback(score);
  return `name: ${name}, score: ${score}, grade: ${letter}, passed: ${isPassed}, feedback: ${feedback}`;
}

console.log(createGradeReport("Ava", 92));
console.log(createGradeReport("Noah", 48));
console.log(createGradeReport("Mina", 75));
console.log(createGradeReport("Sam", 60));
