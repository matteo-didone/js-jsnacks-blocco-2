//Ask the user to insert a number for 10 times, and sum the numbers provided
let sum = 0;

for (let i = 0; i < 10; i++) 
{
    let number = parseInt(prompt("Insert a number: "));
    sum += number;
    console.log(sum);

    
}

// Now, I print the final result in the HTML page
document.getElementById("result").innerHTML = "The sum of the numbers is: " + sum;