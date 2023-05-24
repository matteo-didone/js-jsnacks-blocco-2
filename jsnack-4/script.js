//Generate a random number between 1 and 100 included
const randomNumber = Math.floor(Math.random() * 100) + 1;
//Math.random() generates a random number between 0 and 1 (excluded)
//Math.floor() rounds the number down to the nearest integer
//Times 100 to get a number between 0 and 100 (excluded)
//Plus 1 to get a number between 1 and 100 (included)


//Create a variable to store the user's guess number
let userGuess = 0;
//Create a variable to store the number of guesses
let numberOfGuesses = 0;
//Create a variable to store whether the user has guessed the number correctly
let correctGuess = false;

//Keep asking the user to guess a number, up until the user exactly guesses the correct number
while(correctGuess === false)
{
    userGuess = parseInt(prompt("Guess a number between 1 and 100: "));
    numberOfGuesses++;

    if(userGuess === randomNumber)
    {
        console.log("Congratulations, you guessed the correct number!");
        console.log("Number of guesses: " + numberOfGuesses);
        correctGuess = true;
    }
    else if(userGuess < randomNumber)
    {
        console.log("Your guess is too low, try again");
    }
    else if(userGuess > randomNumber)
    {
        console.log("Your guess is too high, try again");
    }
}

// Create the <p> elements for name provided and guest list presence
const userGuessParagragh = document.createElement('p');
userGuessParagragh.id = 'user-guess';
const numberOfGuessesParagraph = document.createElement('p');
numberOfGuessesParagraph.id = 'number-of-guesses';

// Get the container div
const guessesContainer = document.querySelector('.guesses-container');

// Append the <p> elements to the container
guessesContainer.appendChild(userGuessParagragh);
guessesContainer.appendChild(numberOfGuessesParagraph);

//Display the guest's name in the document
userGuessParagragh.innerHTML = "Right guess: " + userGuess;
numberOfGuessesParagraph.innerHTML = "Number of guesses: " + numberOfGuesses;