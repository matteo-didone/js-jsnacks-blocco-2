//Create an empty array
const numbers = [];

// Create the <p> elements for number paragraph 
let numberParagraph = document.createElement('p');
numberParagraph.id = 'number-paragraph';

// Get the container div
const addingNumberToArrayContainer = document.querySelector('.adding-number-to-array-container');

// Append the <p> elements to the container
addingNumberToArrayContainer.appendChild(numberParagraph);

//Ask the user to provide a number for 6 times, then if the number's odd, add it to the array
for (let i = 0; i < 6; i++) 
{
    let numberProvided = prompt("Please provide a number: ");
    if (numberProvided % 2 !== 0) 
    {
        numbers.push(parseInt(numberProvided));
    }
}

//Print the array to the console
console.log(numbers);

//Print the array to the page
numberParagraph.innerHTML = "Odd numbers added to the array: " + numbers;



