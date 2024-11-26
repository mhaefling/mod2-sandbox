/* To run the code in this file, run the command:
      node js_party/functions_playground.js
*/

console.log("functions_playground.js is running")


// Let's start with the examples from the lesson.  

// Lesson Example 1
// Uncomment each function call (invocation) to see what it prints to the console.

function printGreeting(greeting) {
  console.log(greeting)
}

    printGreeting('hi')  
    
    printGreeting('sup')
    
    printGreeting('oh hello there darling!')
    
// Now call the function again yourself, passing through whatever greeting you'd like.  Make sure you pass the greeting as a string (it must be in quotes).

    printGreeting('Howdy')

// Lesson Example 2
// The function below is not printing anything to the console via console.log().  Instead, it is using the 'return' keyword to return a value each time the function is called.  To see the values being returned from the function invocations, we can console.log() the variables that are storing those values. 
//Uncomment the three console.log()s to see the values being stored in each variable.  These console logs have a helpful string to label each one so you can see it easier in the console.

function captureGreeting(greeting) {
  return greeting
}

var hiGreeting = captureGreeting('hi')  

var supGreeting = captureGreeting('sup')

var fancyGreeting = captureGreeting('oh hello there darling!')

console.log('hiGreeting: ', hiGreeting)
console.log('supGreeting: ', supGreeting)
console.log('fancyGreeting: ', fancyGreeting)



// Lesson Example 3
// The function below is doing the exact same thing as the one above. It is just written in the ES6 arrow function syntax.  
// Uncomment the console.log() below to see the value stored in the variable.  

var captureGreetingArrowSyntax = (greeting) => {
  return greeting
}

var helloGreeting = captureGreetingArrowSyntax('hello')  

console.log("helloGreeting: ", helloGreeting)


// NOTE FOR THE EXERCISES BELOW: "print" or "log" both mean to use a console.log()

/*  -- SECTION A: PRACTICING FUNCTIONS STRAIGHT UP -- */
//1A. Make a function called sayName that logs your first name

var sayName = (name) => {
  newGreeting = console.log(`Say my ${name}, say my ${name}`)
}

sayName('Matt')

//2A. Edit the sayName function above to create a variable inside of the function that is equal to a greeting. Change the console log to include the greeting concatenated with your name!


//3A. Make a function called watchShow that console logs "I am watching". Then call the logFavoriteMovie function after the console log.

function logFavoriteMovie() {
  console.log('idiocracy')
}

var watchShow = () => {
  console.log(`I am watching `);
  logFavoriteMovie();
}

watchShow()

/*  --  SECTION B: FUNCTIONS WITH PARAMETERS. -- */
//1B. Create a function takes in two numbers and logs the numbers added together. Invoke the function two times with different numbers.

function sumNumbers(num1, num2) {
  console.log(num1 + num2);
}

sumNumbers(4, 5)
sumNumbers(10, 31)

//2B. Create a function that takes in first name and last name and logs a greeting that greets somebody by first and last name. Call the function two times with different names.

function nameGreeting(firstName, lastName) {
  console.log(`Hi ${firstName} ${lastName}, I hope you're doing well!`);
}

nameGreeting('Matt', 'Haefling')

/*  -- SECTION C: FUNCTIONS WITH RETURNS, ARGS and PARAMS -- */
//1C. Make a function that takes in two numbers as arguments and returns the sum of those two numbers. 
// Create a variable called 'total' and assign the variable's value to be an invocation of your function (dont forget to pass in 2 numbers!)  Console log 'total'

var total = (num1, num2) => {
  return num1 + num2;
}

console.log(total(20, 10))

//2C. Make a function that takes in the name of a board game and a person's name and returns a string of "Do you want to play (board game name) with (persons name)?". Invoke the function with two different board game titles and names.

function boardGame(name, game) {
  var question = `Do you want to play ${game}, with ${name}?`
  return question
}

console.log(boardGame('Matt', 'Monopoly'))

//  *** CANT GET ENOUGH FUNCTION PRACTICE??  HERE'S SOME MORE!

// 1D. Create a function called printInfo. This function should take in 3 arguments: `name`, `age` and `hometown`. The function should print a string that states your name, age and hometown using interpolation.

function personalInfo(name, age, hometown) {
  console.log(`Hi my name is ${name}, I'm currently ${age} years old.  I was born in the town of ${hometown}.`)
}

personalInfo('Matt', 39, 'Tampa')

// 2D. Create a function called mathItUp. This function should take two parameters, both being numbers. The function should print the sum of the two numbers. It should also print a string that says `The value of the first parameter is ____ and value of the second parameter is _____.` The function should then return the product of these numbers + 100. 

function twoNumbers(num1, num2) {
  console.log(num1 + num2);
  console.log(`The value of the first parameter is ${num1}, and the value of the second parameter is ${num2}.`)
  return num1 + num2 + 100
}

twoNumbers(20, 10)
results = twoNumbers(20, 10)

console.log(results)