/*Build a small password validator. Each rule should live in its own function, and the final validator should report which rules failed.

Write these functions:

hasMinimumLength(password) should return true when the password has at least 8 characters.

hasNumber(password) should return true when the password contains at least one number.

hasUppercaseLetter(password) should return true when the password contains at least one uppercase letter.

getFailedRules(password) should return an array of missing rule names.

validatePassword(password) should return an object with valid and failedRules.

Sample checks:

js

console.log(validatePassword('hello'));
console.log(validatePassword('Hello123'));
console.log(validatePassword('hello123'));
console.log(validatePassword('HELLOABC'));
Expected output:

txt

{ valid: false, failedRules: ["minimum length", "number", "uppercase letter"] }
{ valid: true, failedRules: [] }
{ valid: false, failedRules: ["uppercase letter"] }
{ valid: false, failedRules: ["number"] }
Use "minimum length", "number", and "uppercase letter" as the failed rule names. */
