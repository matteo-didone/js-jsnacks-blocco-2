//Given an interval of numbers between 1 and 5 (included), 
//generate a set of three random numbers that are different from each other, 
//and print such set to the console. 

//Generate a random number between 1 and 5 included
const randomNumber = generateRandomNumber(1, 5);
//Math.random() generates a random number between 0 and 1 (excluded)
//Math.floor() rounds the number down to the nearest integer
//Times 5 to get a number between 0 and 5 (excluded)
//Plus 1 to get a number between 1 and 5 (included)

//Generate a set of three random numbers that are different from each other
const setOfFour = set(); //Call the function set()

//Print the set to the console
console.log(setOfFour);

//Print the set to the HTML page
const setElement = document.getElementById("set");
setElement.innerHTML = setOfFour;

function set () 
{
    const beginningSet = [1,2,3,4,5]; //create a new empty array
    const randomSet = []; //create a new empty array

    for (let i = 0; i < 4; i++) //loop four times
    {
        // Generate a random index within the array's length
        const randomIndex = Math.floor(Math.random() * array.length);

        // Access the element at the random index
        const randomElement = randomSet[randomIndex];

        // Push the element into the new array
        randomSet.push(randomElement);
    }

    // Print the new array to the console
    console.log(randomSet);
}

function generateRandomNumber(min, max) 
{
    return Math.floor(Math.random() * (max - min + 1) + min);
}
