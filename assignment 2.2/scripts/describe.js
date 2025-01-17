// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// Declaring a variable called name and assigning a string value of Dane to the variable.
// Checking to see if name variable is Mary (exact match only).
// We console.log 'Hi, Mary' if true.
// Otherwise, we console.log 'How do you do?' if condition is false.

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// Declaring variables named secret and code with code having numerical value of 123.
// Checking to see if variable code is 123 (exact match only) and if it is- give secret string value of 'super' while code is multiplied by 2.
// Checking to see if result of variable code multiplied by 2 is less than 250. If it is- change secret string value to 'duper'.
// We console.log 'secret'.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// Declaring variables named isStudent with a boolean value of true, age with numerical value of 34, and zip with numerical value of 55407.
// Checking to see if variable isStudent is true (exact match only) and if variable zip is greater than 80000. We console.log `You're a student on the West Coast!` if conditions are true.
// Checking to see if variable isStudent is false (exact match only) or age is less than 30. We console.log 'What are your hobbies?'
// Checking to see if variable isStudent is true (exact match only). We console.log 'Welcome to Prime'.
// Otherwise, we console.log 'How about the weather?'

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

// FIX - variable value-- 
// Should be - let colorOne = 'blue';
// Should be - let colorTwo = 'red';
// FIX - result--
// Should be colorOne and colorTwo = 'purple'; (separately).
// Add console.log and then we console.log 'colorOne', 'colorTwo', 'mix' to see all the correct values

if (mix === true) {
  colorOne = 'purple';
  colorTwo = 'purple';
}

console.log(colorOne, colorTwo, mix);
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

// FIX - compound conditionals--
// Should not be || because it means "or" and the question asks for "and" which would be &&.
// We console.log 'throw away the food!' 

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

// FIX - console.log--
// Adding console.log - We console.log 'no entry' if age is greater than or equal to minAge.
// Otherwise, we console.log 'enter'

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

