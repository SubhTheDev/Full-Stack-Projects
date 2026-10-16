//checks if negative
function isNegative(number) {
  if (number < 0) {
    return console.log("negative: true");
  } else {
    return console.log("negative: false");
  }
}

//checks if positive
function isPositive(number) {
  if (number > 0) {
    return console.log("positive: true");
  } else {
    return console.log("positive: false");
  }
}

//checks if zero
function isZero(number) {
  if (number === 0) {
    return console.log("zero: true");
  } else {
    return console.log("zero: false");
  }
}

//checks if even
function isEven(number) {
  if (number % 2 == 0) {
    return console.log("even: true");
  } else {
    return console.log("even: false");
  }
}

//checks if odd
function isOdd(number) {
  if (number % 2 !== 0) {
    return console.log("odd: true");
  } else {
    return console.log("odd: false");
  }
}

//checks a given input number in the above functions
function describeNumber(input) {
  isPositive(input);
  isNegative(input);
  isZero(input);
  isEven(input);
  isOdd(input);
  return null;
}

//outputs
console.log(describeNumber(8));
console.log(describeNumber(-3));
console.log(describeNumber(0));
console.log(describeNumber(7));
