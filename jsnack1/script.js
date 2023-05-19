//Create an empty array
let numbersArray = [];

//Create a variable where the sum will be stored 
let sum = 0;

// Ask the user to insert a number until the sum of all numbers is less than 50
while(sum < 50) 
{
    // Ask the user to insert a number
    let number = parseInt(prompt("Insert a number: "));
    // Add the number to the array
    numbersArray.push(number);
    // Add the number to the sum
    sum += number;
    // Print the sum and the array to the console
    console.log("The sum of the numbers is: " + sum);
    console.log("The numbers are: " + numbersArray);

    // If the sum is greater than or equal to 50, exit the loop
    if(sum >= 50)
    {
        break;
    }
}

// Now, I print the final result in the HTML page
document.getElementById("result").innerHTML = "The sum of the numbers is: " + sum + "<br>" + "The numbers are: " + numbersArray;