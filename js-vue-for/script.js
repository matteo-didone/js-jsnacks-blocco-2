// Generate two for loops with Vue:
// 1) Iterates over an array of four elements and prints them on the screen
// 2) Prints the first 10 numbers on the screen.

// We wrap the following code block in an immediately invoked function expression to avoid any conflict with the global scope variables.
(() => {

// We use the Vue createApp function to create a new Vue application.
// We use the Vue ref function to create a reactive variable.
const { createApp, ref } = Vue;

// createApp is a function provided by Vue.js that creates a new Vue application instance. It takes an options object as an argument 
createApp({

    // Inside the options object, we define a setup function that returns the data we want to use in our template.
    setup() {
        // Inside the setup function, we use the ref function to make the array and numbers variables reactive 
        const array = ref(['Item 1', 'Item 2', 'Item 3', 'Item 4']);
        // The numbers variable is initialized using the spread operator (...) and the Array.keys() method.
        // We use the Array.keys() method to generate an array of numbers from 0 to 9 and we use the ref function to make it reactive.
        const numbers = ref([...Array(10).keys()]);

        // Finally, we return an object containing the array and numbers variables from the setup function. This makes them accessible in the template.
        return {
            array,
            numbers
        };
    }
    
// The mount('#app') function is called on the Vue application instance to mount the Vue instance onto the element with the ID of 'app'. This connects the Vue application to the corresponding HTML element in the DOM.
}).mount('#app')

})();
