// Given an interval of numbers between 1 and 5 (included), 
// generate a set of four random numbers that are different from each other, 
// and print such set to the console. 

// Generate a random number between 1 and 5 included
const randomNumber = generateRandomNumber(1, 5);
// Math.random() generates a random number between 0 and 1 (excluded)
// Math.floor() rounds the number down to the nearest integer
// Times 5 to get a number between 0 and 5 (excluded)
// Plus 1 to get a number between 1 and 5 (included)

// Generate a set of three random numbers that are different from each other
const setOfFour = set(); //Call the function set()

// Print the random set to the console
console.log(setOfFour);


// Print the set to the HTML page
const setElement = document.getElementById("set");
setElement.innerHTML = setOfFour;

// Function to generate a set of four random numbers that are different from each other
function set () 
{
    const beginningSet = ['1','2','3','4','5']; // Create an array with the numbers 1 to 5
    const randomSet = []; // Create a new empty array to store the random numbers

    // While the length of the new array is less than 4
    while (randomSet.length < 4) 
    {
        // Generate a random index
        const randomIndex = Math.floor(Math.random() * beginningSet.length);
        // Get the element at the random index
        const randomElement = beginningSet[randomIndex];

        // Check if the randomElement is already present in randomSet
        if (!randomSet.includes(randomElement)) 
        {
            // If not present, then add it to randomSet
            randomSet.push(randomElement);
        }
        else if (randomSet.includes(randomElement))
        {
            // If present, then generate a new randomElement
            const randomIndex = Math.floor(Math.random() * beginningSet.length);
            const randomElement = beginningSet[randomIndex];
        }
    }
    return randomSet; //Return the new array
}

//Function to generate a random number between min and max
function generateRandomNumber(min, max) 
{
    //Returns a random integer between min and max
    return Math.floor(Math.random() * (max - min + 1) + min);
}
