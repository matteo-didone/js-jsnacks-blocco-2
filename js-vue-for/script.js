// Print a message on the screen within an h1 tag, using data.
// BONUS: Add an image taken from data as well.

(() => {
const { createApp } = Vue;

createApp({
    data() {
        return {
            message: 'Hello, Vue!',
            image: 'https://picsum.photos/200/300'
        }
    }
}).mount('#app')

})();
