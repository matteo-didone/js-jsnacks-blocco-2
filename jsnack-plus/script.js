/**
 * Generate an unordered list using a function
 * In the HTML code, there is only an empty unordered list. 
 * Using a function, we create a single HTML li element
 * Then, we go on to add 10 li elements to the ul
 * 
 * BONUS:
 * If we click on the li text, the text will be crossed 
 * 
 * HINT:
 * We can use the class crossed to cross the text
 * 
 * EXTRA BONUS:
 * When clicking again on the li text, the text will be uncrossed
 */

// I need to store into a variable the ul-parent
const ulParent = document.getElementById("ul-parent");

// I need to create a function that creates a single li element
function createLiElement(text) 
{
    // Create the li element
    const liElement = document.createElement("li");
    // Add the text to the li element
    liElement.innerText = text;
    // Add the event listener to the li element
    liElement.addEventListener("click", function() 
    {
        // Add the class crossed to the li element
        liElement.classList.toggle("crossed");
    });
    // Return the li element
    return liElement;
}

// I need to add 10 li elements to the ul
for(let i = 0; i <10; i++) 
{
    ulParent.appendChild(createLiElement(prompt("Insert text: ")));
}





