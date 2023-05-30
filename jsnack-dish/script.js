//Given an input field and two buttons, the user populates a list of ingredients using the first button. Upon pressing the second button, a random image of a meal is generated in the center of the screen after 2 seconds for each ingredient in the recipe.

// 1. Create a function that takes the value of the input field and returns it as a string.
// 2. Create a function that, when executed, adds the value of the input field to the list of ingredients.
// 3. Create a function that, when executed, generates a random image from an array of images. Each image should be displayed for 2 seconds before the next one is generated.


// Create variables for the input field, the button and the list of ingredients.
let input = document.getElementById("input");
let inputValue = getInputValue(input);
let addButton = document.getElementById("btn-add");
let listOfIngredients = document.getElementById("list-of-ingredients");
let imageArray = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg","image5.jpg"];  

// Create a function that takes the value of the input field and returns it as a string.
function getInputValue(input) 
{
    return input.value;
}

// Create a function that, when executed, adds the value of the input field to the list of ingredients.
function addIngredient() 
{
    // Get the current value of the input field
    let inputValue = getInputValue(input);

    // Check if the input field is empty.
    if (inputValue !== "" || inputValue !== " ") 
    {
        // Create a list item and add the value of the input field to it.
        let li = document.createElement("li");
        // Add the text provided by the user to the list item.
        li.innerText = inputValue;
        // Add the list item to the list of ingredients.
        listOfIngredients.appendChild(li);
        // Clear the input field.
        input.value = "";
    }
}


// Create an event listener for the button that adds the value of the input field to the list of ingredients.
addButton.addEventListener("click", addIngredient);
//addIngriedient is not called, it's simply passed as a parameter to the event listener! That's the reason why it's not addIngredient().

// Create a function that, when executed, generates a random image from an array of images. Each image should be displayed for 2 seconds before the next one is generated.
function generateMealImage(ingredients) 
{
    let imageArray = []; 

}