// returns a grade letter based on score
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

//returns pass/fail
function hasPassed(score) {
  if (score >= 60) {
    return "true";
  } else {
    return "false";
  }
}

//returns a feedback based on score
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

//creates the grade-report
function createGradeReport(name, score) {
  const letter = getLetterGrade(score);
  const isPassed = hasPassed(score);
  const feedback = getFeedback(score);
  return `name: ${name}, score: ${score}, grade: ${letter}, passed: ${isPassed}, feedback: ${feedback}`;
}

//output
console.log(createGradeReport("Ava", 92));
console.log(createGradeReport("Noah", 48));
console.log(createGradeReport("Mina", 75));
console.log(createGradeReport("Sam", 60));
