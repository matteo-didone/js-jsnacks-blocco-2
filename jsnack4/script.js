//Ask the user for a four-digit number 
let fourDigitNumber = prompt("Please provide a four-digit number: ");

// Keep prompting until a valid four-digit number is provided
while (fourDigitNumber.length !== 4 || isNaN(fourDigitNumber))
{
    fourDigitNumber = prompt("Please provide a valid four-digit number: ");
}

// Create the <p> elements for number paragraph 
let fourDigitNumberParagraph = document.createElement('p');
fourDigitNumberParagraph.id = 'four-digit-paragraph';

// Get the container div
const fourDigitSumContainer = document.querySelector('.four-digit-sum-container');

// Append the <p> elements to the container
fourDigitSumContainer.appendChild(fourDigitNumberParagraph);

//If the number is a four-digit number, add each digit to an array
//Create an empty array
const digit = [];

for(let i = 0; i < fourDigitNumber.length; i++)
{
    digit.push(parseInt(fourDigitNumber[i]));
}

//Print the array in the console
console.log(digit);

//Create a variable to store the sum of all the digits in the array
let sumOfArrayElements = 0;

//Add each digit in the array to the variable
for(let i = 0; i < digit.length; i++)
{
    sumOfArrayElements += digit[i];
}

//Print the sum of all the digits in the array
console.log("The sum of the digits you provided: " + sumOfArrayElements);

//Print the sum of all the digits in the array in the <p> element
fourDigitNumberParagraph.innerHTML = "The sum of the digits you provided: " + sumOfArrayElements;