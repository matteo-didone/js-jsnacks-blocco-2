//Given an input field and two buttons, the user populates a list of ingredients using the first button. Upon pressing the second button, a random image of a meal is generated in the center of the screen after 2 seconds for each ingredient in the recipe.

// 1. Create a function that takes the value of the input field and returns it as a string.

let input = document.getElementById("input");
let inputValue = getInputValue(input);

let addButton = document.getElementById("btn-add");


function getInputValue(input) 
{
    this.input = input;
    let inputValue = input.value;
    return inputValue;
}