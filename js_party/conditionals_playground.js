/* To run the code in this file, run the command:
      node js_party/conditionals_playground.js
*/

console.log("conditionals_playground.js is running")


/* Exercise 1 - Voter Eligibility

Write a function checkVotingEligibility that takes an age as input and prints a message indicating whether the person is eligible to vote (age 18 and above) or not eligible to vote (below age 18).
*/

function checkVotingEligibility(age) {
  if (age >= 18) {
    console.log('You\'re old enough to vote!');
  } else {
    console.log('You\'re not old enough to vote');
  }
}

// Check your work by uncommenting each of these invocations:
checkVotingEligibility(19)
checkVotingEligibility(15)
checkVotingEligibility(18)


/* Exercise 2 - Password Strength Checker

Write a function checkPasswordStrength that takes a password as input and prints 'Weak', 'Medium', or 'Strong' based on the following criteria:

Weak: less than 6 characters
Medium: 6-12 characters
Strong: more than 12 characters
*/

function checkPasswordStrength(password) {
  if (password.length < 6) {
    console.log('This is a weak password');
  } else if (password.length < 12) {
    console.log('This is a medium password.');
  } else if (password.length > 12) {
    console.log('This is a strong password');
  }
}

// Check your work by uncommenting each of these invocations:
checkPasswordStrength("pz394Gw86wwmh1")
checkPasswordStrength("12345")
checkPasswordStrength("myPass1!")


/* Exercise 3 - Grade Calculator

Write a function calculateGrade that takes a numeric score (0-100) and returns the corresponding letter grade based on the following scale:

A: 90-100
B: 80-89
C: 70-79
D: 60-69
F: 0-59

*/

function calculateGrade(score) {
  if (score > 90) {
    console.log('A');
    } else if (score < 90 && score >= 80) {
      console.log('B');
    } else if (score < 80 && score >= 70) {
      console.log('C');
    } else if (score < 70 && score >= 60) {
      console.log('D');
    } else {
      console.log('F');
    }
}

// Check your work by uncommenting each of these invocations:
calculateGrade(95)
calculateGrade(86)
calculateGrade(79)
calculateGrade(61)
calculateGrade(52)

