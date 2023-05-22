//Calculate the average of the first 10 numbers provided by the user.

let sum = 0;
const numberOfTimes = 10;

//Start asking input to the user for 10 times 
for(let i = 0; i <= numberOfTimes; i++)
{
    let number = parseFloat(prompt("Enter a number: "));
    if(isNaN(number))
    {
        alert("You didn't enter a number. Try again.");
        i--;
        continue;
    }
    sum += number;
}

//Calculate the average
let average = sum / numberOfTimes;

//Print the average
console.log("The average is: " + average);

//Now, print it to the page 
document.getElementById("result").innerHTML = "The average is: " + average;
