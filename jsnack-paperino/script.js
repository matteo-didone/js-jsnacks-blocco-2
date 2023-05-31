/**
 *
 *
 *
Given an array of strings, create a second array by formatting the strings from the first array in lowercase with an uppercase initial letter.

Example: ['pippo', 'PLUTO', 'PapERino'] => ['Pippo', 'Pluto', 'Paperino']

 */

// First array of strings
const stringsStart = ['pippo', 'PLUTO', 'PapERino'];

// I declare a new array of strings that will contain the strings of the first array formatted in lowercase with an uppercase initial letter 

//The map() function applies a provided callback function to each element of the array and creates a new array with the results of the callback function applied to each element. 
const stringsEnd = stringsStart.map((string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    // Inside the callback function, each string in the stringsStart array is transformed using the following steps:
    // string.charAt(0) retrieves the first character of the string.
    // .toUpperCase() converts the first character to uppercase.
    // string.slice(1) extracts the remaining part of the string starting from the second character.
    // .toLowerCase() converts the remaining part of the string to lowercase.
    }
);

//After the map() function iterates through all the strings in the stringsStart array, the stringsEnd array will contain the formatted strings with the first letter capitalized and the rest in lowercase.

// Print the second array of strings
console.log(stringsEnd); // ['Pippo', 'Pluto', 'Paperino']

// Bonus: Given the stringsStart Array, create a third array containing the strings of the first array formatted in the opposite case: so, it'll be "PIPPO", "pluto", "pAPerINO"

// I declare a new array of strings that will contain the strings of the first array formatted in the opposite case
const stringsOppositeFormat = stringsStart.map((string) => {
    // Inside the callback function, each string in the stringsStart array is transformed using the following steps:
    const oppositeCaseString = string
      .split('') // Split the string into an array of characters
        // The map() function applies a provided callback function to each element of the array and creates a new array with the results of the callback function applied to each element.
        .map((character) => {
            // If the character is uppercase, convert it to lowercase
            if (character === character.toUpperCase()) 
            {
                return character.toLowerCase();
            } 
            // If the character is lowercase, convert it to uppercase.
            else if (character === character.toLowerCase()) 
            {
                return character.toUpperCase();
            }
        })
        .join(''); // Join the array of characters back into a string

    // This will return the stringn array with the opposite case
    return oppositeCaseString;
});

console.log(stringsOppositeFormat); // ['PIPPO', 'pluto', 'pAPerINO']