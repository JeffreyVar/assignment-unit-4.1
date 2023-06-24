console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'

function helloName(name) {
  return `Hello, ${name}!`;
}
// Remember to call the function to test

console.log(helloName('Your Name'));


// 3. Function to add two numbers together & return the result


function addNumbers(a, b) {
   return a + b;
}
console.log(addNumbers(3, 6));
console.log(addNumbers(-1, 4));

// 4. Function to multiply three numbers & return the result

function multiplyThree(c, d, e) {
  return c * d * e;
}
console.log(multiplyThree(2, 3, 4));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise

function isPositive(number) {
  if (number > 0) {
    return true;
  } else {
      return false;
    }
}

// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log('Is 3 positive?', isPositive(3));
console.log('Is 0 positive?', isPositive(0));
console.log('Is -3 positive?', isPositive(-3));


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.

function getLast(array) {
  return array[array.length - 1];
}
console.log(getLast([1, 2, 3, 4]));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 


function find(value, array) {
   for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}

console.log('Finding 1: ',find(1, [1, 2, 3, 4]));
console.log('Finding 5: ',find(5, [1, 2, 3, 4]));


// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  for (let i = 0; i < string.length; i++) {
    if (string[0] === letter) {
      return true;
    }
  }
  return false;
}
console.log('isFirstLetter - should say true', isFirstLetter('a', 'apple'));
console.log('isFirstLetter - should say false', isFirstLetter('z', 'apple'));

// 9. Function to return the sum of all numbers in an array


function sumAll(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

  // TODO: loop to add items

  // TODO: return the sum
  console.log(sumAll([1, 2, 3, 4, 5]));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

function allPositive(array) {
  let newArray = []
  for (let i = 0; i < array.length; i++)
    if (array[i] > 0) {
      newArray.push(array[i]);
    } 
    return newArray;
  }
console.log(allPositive([0, 1, 2, 3, 4, -5, -6, -7, 8]));


// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!


// Write a function that converts hours into seconds. 

function howManySeconds(hours) {
  return hours * 3600
}

console.log(howManySeconds(4));
console.log(howManySeconds(1));
console.log(howManySeconds(24));
console.log(howManySeconds(10));
console.log(howManySeconds(100));

// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}