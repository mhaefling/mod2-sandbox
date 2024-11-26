/* To run the code in this file, run the command:
      node js_party/objects_playground.js
*/

console.log("objects_playground.js is running")

// PART 1: How do we access and update objects?

var mark = { name: 'Mark', program: 'BE', cohort: 2201 };

// 1a. First, predict what each console.log below is going to print to the console. Then, uncomment each console.log and check your predictions. Did anything suprise you? 

console.log(mark);

console.log(mark.name);

console.log(mark.program);

console.log(mark.cohort);

var julie = {
  name: 'Julie',
  program: 'FE',
  cohort: 1911
};

// 1b. Log the entire julie object to the console.

console.log(julie);

// 1c. Using the julie variable, log the string of Julie to the console.

console.log(julie.name);

// 1d. Using the julie variable, log Julie's cohort to the console.

console.log(julie.cohort);

// 1e. Mark has decided to join the frontend program! Check out the console log below. What happened?
// the value of 'program' which was BE was reassigend to a new value 'FE' inside the mark object.

mark.program = 'FE';
console.log(mark);

// 1f. Julie is changing cohorts. Reassign her cohort to 2001. Console log the julie object to make sure it worked!

julie.cohort = 2001;
console.log(julie);

// 1g. Uncomment the console log below. What happened?
mark.favTopic = 'parameters and arguments';
console.log(mark);

// 1h. Add a new key:value pair (property) to Julie's object.

julie.property = 'Million Dollars';
console.log(julie);

// PART 2: Creating Objects

// 2a. Create an object that represents your kitchen. Try to have ALL of the following data types represented in your object: string, number, boolean, array. (Spicy challenge: Can you have an object within your object??)

var myKitchen = {
  name: 'Matt\'s Kitchen',
  seats: 4,
  freeFood: false,
  utilities: ['stove', 'microwave', 'toaster', 'blender', 'airfryer', 'dishwasher', 'refrigerator'],
  food: {
    milk: 1,
    eggs: 2,
    OJ: 3,
    meat: 10
  },
  makeFood: function(foodName) {
    console.log(`Thanks for making me some ${foodName}!`)
  }
};

console.log(myKitchen);

// PART 3: Nested Objects

var school = {
  name: 'Turing School of Software & Design',
  remote: true,
  studentsEnrolled: 200,
  directors: {
    BE: 'Amy Holt',
    FE: 'Will Mitchell',
    Launch: 'Eric Weisman'
  },
};

// 3a. First, predict what each console.log below is going to print to the console. Then, uncomment each console.log and check your predictions. Did anything suprise you? 

console.log(school.directors.BE);
// returned expected Amy Holt

console.log(school.directors.fe);
// returns undefined, which isn't to surprising be that its called a lowercase 'fe' instead of 'FE'. case matters!

var petOwner = {
  name: 'Kayla',
  dog: {
    name: 'Cap',
    age: 2,
    favoriteTreat: {
      name: 'milkbones',
      price: 3.99
    }
  },
  cat: {
    name: 'Pepper',
    age: 10,
    favoriteTreat: {
      name: 'tuna',
      price: 0.99
    }
  }
};

// 3b. Using the petOwner variable, print the string of Kayla to the console.

console.log(petOwner.name)

// 3c. Using the petOwner variable, print the string of Cap to the console.

console.log(petOwner.dog.name)

// 3d. Using the petOwner variable, print Pepper's age to the console.

console.log(petOwner.cat.age)

// 3e. Using the petOwner variable, print the sting of tuna to the console.

console.log(petOwner.cat.favoriteTreat.name)

// 3f. Using the petOwner variable, print the cost of milkbones to the console.

console.log(petOwner.dog.favoriteTreat.price)

// PART 4: Methods!

// NOTE: Methods are functions that exist within an object.

var bowlingAlley = {
  name: 'Bowlero',
  totalLanes: 20,
  foodOptions: ['pretzels', 'nachos', 'hotdogs', 'chips'],
  welcomeCustomer: function(name) {
    console.log(`Welcome to Bowlero, ${name}!`);
  }, 
  sayByeToCustomer: function() {
    console.log('Thanks for coming! We hope to see you again!');
  }
};

// 4a. What do you think will happen if we invoke the welcomeCustomer method? Predict, and then try it (uncomment below)!

bowlingAlley.welcomeCustomer();
// returns 'undefined' because no argument was provided to the name parameter.
bowlingAlley.welcomeCustomer('Matt');

// 4b. Invoke the sayByeToCustomer method.

bowlingAlley.sayByeToCustomer();

// 4c. Go back to PART 2 and add a method to your kitchen object. Invoke it to make sure it works!

myKitchen.makeFood('eggs');

// PART 5: Bracket & Dot Notation

// So far, we've been using dot notation to access objects (i.e. person.name), but you can also use bracket notation (i.e. person['name'])

var vehicle = {
  type: 'motorcycle',
  wheels: 2,
  brand: 'harley davidson',
  isCool: true,
  miles: 8402,
};

// 5a. First, predict what each console.log below is going to print to the console. Then, uncomment each console.log and check your predictions. Did anything surprise you? 

console.log(vehicle.type);

console.log(vehicle['type']);

// console.log(vehicle[type]);

// 5b. Print the brand of the motorcycle using dot notation.

console.log(vehicle.brand);

// 5c. Print the brand of the motorcycle using bracket notation.

console.log(vehicle['brand']);



var currentProperty = 'wheels';

// 5d. First, predict what each console.log below is going to print to the console. Then, uncomment each console.log and check your predictions. Did anything surprise you? 

console.log('1', vehicle['currentProperty']);

console.log('2', vehicle[currentProperty]);

console.log('3', vehicle.currentProperty);

// 5e. When might we prefer to use dot notation? When might we need to use bracket notation?
// 1. when adding property to an object that are stored in a variable.
// 2. when an object property contains spaces or special characters 'My Name', '2Dogs'
// 3. when an object property is named a javascript keyword, such as 'default' or 'function'

// PART 6: Using objects in functions

var cap = {
  name: 'Cap',
  breed: 'terrier',
  energyLevel: 3
};

var luna = {
  name: 'Luna',
  breed: 'shepherd',
  energyLevel: 7
};

function walk(dog) {
  if (dog.energyLevel > 5) {
    return `Wow, ${dog.name} can walk far!`;
  } else {
    return `Hm, I think ${dog.name} is too tired to walk.`;
  }
};

// 6a. First, predict what each console.log below is going to print to the console. Then, uncomment each console.log and check your predictions. Did anything surprise you? 

console.log(walk(luna))

console.log(walk(cap))

var ironman = { name: 'Tony Stark', secretIdentity: false };

var captainAmerica = { name: 'Steve Rogers', secretIdentity: false };

var spiderman = { name: 'Peter Parker', secretIdentity: true };

// 6b. Complete the function below so that the following strings are logged for each invokation. 

function greetAvenger(hero) {
  if (hero.secretIdentity === false) {
    console.log(`Hello, ${hero.name}`);
  } else {
    console.log('I don\'t know who you are!');
  }
};

greetAvenger(ironman);
// should log --> 'Hello, Tony Stark.'

greetAvenger(captainAmerica);
// should log --> 'Hello, Steve Rogers.'

greetAvenger(spiderman);
// should log --> 'I don't know who you are!'