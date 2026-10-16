//returns first & last name as a single string
function formatName() {
  const firstName = prompt("Enter your first name:");
  const lastName = prompt("Enter your last name:");
  const fullName = `${firstName} ${lastName}`;
  return fullName;
}

//returns a greet based on the time of the day
function getGreeting() {
  const timeOfDay = new Date().getHours();
  let greeting = "";
  if (timeOfDay >= 5 && timeOfDay <= 11) {
    greeting = "Good Morning";
  } else if (timeOfDay >= 12 && timeOfDay <= 18) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }
  return greeting;
}

//gives the user a greeting
function createGreeting(fullName, greeting) {
  return console.log(`${greeting}, ${fullName}`);
}

const userFullName = formatName();
const greetingMessage = getGreeting();
createGreeting(userFullName, greetingMessage);
