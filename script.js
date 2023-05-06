
// #1 Create an array called ages that containts the following values: 3,9,23,64,2,8,28,93.
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
let lastIndex = ages.length - 1;
let difference = ages[lastIndex] - ages[0];
console.log("The difference between the first and last elements is: " + difference);
ages.push(15);
lastIndex = ages.length - 1;
difference = ages[lastIndex] - ages[0];
console.log("The difference between the first and last elements (after adding a new age) is: " + difference);

// Use a loop to iterate throught
let sum = 0;
for (let i = 0; i < ages.length; i++) {
    sum += ages[i];
}
let average = sum / ages.length;
console.log("The average age is: " + average);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2.	Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
// 2a.	Use a loop to iterate through the array and calculate the average number of letters per name. 
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

let totalLetters = 0;
for (let i = 0; i < names.length; i++) {
  totalLetters += names[i].length;
}

let averageLetters = totalLetters / names.length;
console.log(`The average number of letters per name is: ${averageLetters}`);

// 2b.	Use a loop to iterate through the array again and concatenate all the names together, separated by spaces. 

let concatenatedNames = '';
for (let i = 0; i < names.length; i++) {
  concatenatedNames += names[i] + ' ';
}

console.log(`All the names concatenated together: ${concatenatedNames.trim()}`);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 3.	How do you access the last element of any array?
last_name = names[-1]
console.log("Last name in the array: ", last_name)

// 4.	How do you access the first element of any array?
first_name = names[0]
console.log("First name in the array: ", first_name)

//#5 Create a new array called nameLengths. Write a loop to iterate over the previously created names array
//and add the length of each name to the nameLengths array. 
let nameLengths = [];
for (let i = 0; i < names.length; i++) {
  nameLengths.push(names[i].length);
}
console.log(nameLengths); // Output: [3, 5, 3, 5, 4, 3]

// #6 Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array
for (let i = 0; i < nameLengths.length; i++) {
  sum += nameLengths[i];
}
console.log(sum);

//7.	Write a function that takes two parameters, word, and n, as arguments and returns the word concatenated to itself n several times. 
//(i.e., if I pass in ‘Hello’ and 3, I expect the function to return ‘HelloHelloHello’).

function concatenateWord(word, n) {
    let result = '';
    for (let i = 0; i < n; i++) {
      result += word;
    }
    return result;
  }
  console.log(concatenateWord('Hello', 3));

  //8.	Write a function that takes two parameters, firstName, and lastName, and returns a full name.  
  //The full name should be the first and the last name separated by a space.

  function getFullName(firstName, lastName) {
    return firstName + ' ' + lastName;
  }
  const fullName = getFullName('Jean Wilkens', 'Desjardins');
console.log(fullName);

//9.	Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

function isSumGreaterThan100(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum > 100;
  }
  const numbers = [20, 30, 100];
console.log(isSumGreaterThan100(numbers));

//10.	Write a function that takes an array of numbers 
//      and returns the average of all the elements in the array.

function calculateAverage(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum / numbers.length;
  }
console.log(calculateAverage(numbers));

//11.	Write a function that takes two arrays of numbers and returns true if the average of the elements in the first 
//      array is greater than the average of the elements in the second array.

function compareAverage(arr1, arr2) {
    const average1 = arr1.reduce((sum, num) => sum + num, 0) / arr1.length;
    const average2 = arr2.reduce((sum, num) => sum + num, 0) / arr2.length;
    console.log(`Average of arr1: ${average1}`);
    console.log(`Average of arr2: ${average2}`);
    const result = average1 > average2;
    console.log(`Result: ${result}`);
    return result;
}
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];

compareAverage(arr1, arr2);

//12.	Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, 
//      and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

function willBuyDrink(isHotOutside, moneyInPocket) {
    return isHotOutside && moneyInPocket > 10.50;
  }
  console.log(willBuyDrink(true, 5));
console.log(willBuyDrink(false, 15));
console.log(willBuyDrink(true, 15)); 

// 13.	Create a function of your own that solves a problem.   In comments, write what the function does and why you created it.

function findMaxElement(arr) {
    let maxElement = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }
    return maxElement;
}
const arr = [1, 5, 3, 8, 2];
const maxElement = findMaxElement(arr);
console.log(maxElement);