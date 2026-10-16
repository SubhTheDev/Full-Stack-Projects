//converts C to F
function celsiusToFahrenheit(celsius) {
  const fahrenheit = celsius * 1.8 + 32;
  return fahrenheit;
}

//converts F to C
function fahrenheitToCelsius(fahrenheit) {
  const celsius = (fahrenheit - 32) / 1.8;
  return celsius;
}

//takes a value and unit from user to convert a temp to another temp
function formatTemperature(value, unit) {
  if (unit === "C") {
    return `${celsiusToFahrenheit(value).toFixed(0)} ${unit}`;
  } else if (unit === "F") {
    return `${fahrenheitToCelsius(value).toFixed(0)} ${unit}`;
  } else {
    return "Error: Invalid temperature conversion";
  }
}

//checking output
console.log(formatTemperature(25, "C"));
console.log(formatTemperature(97, "C"));
console.log(formatTemperature(25, "F"));
console.log(formatTemperature(97, "F"));
