// I declare the variables that will store the values provided by the user
let rangeStart;
let rangeEnd;
let numberElements;

// I need to make sure that:
// 1) The values provided by the user are numbers
// 2) The rangeStart is smaller than the rangeEnd
// 3) The numberElements is smaller than the rangeEnd - rangeStart + 1 (because the range includes the rangeStart and the rangeEnd)

// Check if the values provided by the user are numbers
while
(
    isNaN(rangeStart) || 
    isNaN(rangeEnd) || 
    isNaN(numberElements) || 
    rangeStart === "" || 
    rangeEnd === "" || 
    numberElements === "" ||
    rangeStart === null ||
    rangeEnd === null ||
    numberElements === null ||
    rangeStart > rangeEnd || 
    (rangeEnd - rangeStart + 1) < numberElements
)    
{
    // Ask the user for the range of numbers and the number of elements in the set
    rangeStart = parseInt(prompt("What's the number from which you'd want the range to start?")); // The first number in the range
    rangeEnd = parseInt(prompt("What's the number from which you'd want the range to end?")); // The last number in the range
    numberElements = parseInt(prompt("How many elements would you like to have in the new array?")); // The number of elements in the set
}

// Generate a set of random numbers that are different from each other
const setOfNumbers = set(rangeStart, rangeEnd, numberElements); // Call the function set()

// Print the random set to the console
console.log(setOfNumbers);

// Print the set to the HTML page
const setElement = document.getElementById("set");
setElement.innerHTML = setOfNumbers;

// Function to generate a set of random numbers that are different from each other
function set(rangeStart, rangeEnd, numberElements) 
{
    const beginningSet = [];

    // Populate the array with numbers from rangeStart to rangeEnd
    for (let i = rangeStart; i <= rangeEnd; i++) 
    {
        beginningSet.push(i);
    }

    // Create an array to add the set of random numbers that are different from each other
    const randomSet = [];

    // Generate a set of random numbers that are different from each other and add them to the array
    while (randomSet.length < numberElements) 
    {
        // Find a random number from the beginningSet (by using a random index) array and add it to the randomSet array
        const randomIndex = Math.floor(Math.random() * beginningSet.length);
        const randomElement = beginningSet[randomIndex];

        // Check if the random number is already in the randomSet array
        if (!randomSet.includes(randomElement)) 
        {
            // If the number is not in the randomSet array, add it to the randomSet array
            randomSet.push(randomElement);
        } 
        else // If the number is already in the randomSet array, find another random number
        {
            // Find a new random number from the beginningSet (by using a random index) array and add it to the randomSet array
            const newRandomIndex = Math.floor(Math.random() * beginningSet.length);
            const newRandomElement = beginningSet[newRandomIndex];

            // Check if the new random number is already in the randomSet array
            if (!randomSet.includes(newRandomElement)) 
            {
                // If the new random number is not in the randomSet array, add it to the randomSet array
                randomSet.push(newRandomElement);
            }
        }
    }

    // Return the random set of numbers
    return randomSet;
}
