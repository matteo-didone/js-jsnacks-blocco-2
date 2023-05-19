//I need to ask the guest for their name, check if their name is on the guest list, and print a message appropriate on the result of the check
const guestName = prompt("Please provide your name: ");
console.log("Guest Name: " + guestName);
var guestFound = false;

//Create an array of email addresses
const guestList = 
[
    "Jay Gatsby",
    "Daisy Buchanan",
    "Tom Buchanan",
    "Nick Carraway",
    "Jordan Baker",
    "Myrtle Wilson", 
    "George Wilson",
    "Owl Eyes",
    "Meyer Wolfsheim",
    "Klipspringer",
    "Catherine",
    "Henry C. Gatz",
    "Ewing Klipspringer",
    "Dan Cody", 
    "Chester McKee",
    "Lucille McKee",
    "Jayne Knope",
    "Grace Vanderbilt",
    "Patrick Callahan",
    "Amelia Astor",
    "Theodore Sinclair",
    "Penelope Harper",
    "Alexander Vanderbilt",
    "Isabella Preston",
    "Vivian Devereaux",
    "Benjamin Kingsley",
    "Olivia St. Clair",
    "Maximilian Rothschild",
    "Scarlett Worthington",
    "Sebastian Ashford",
    "Genevieve Montague",
    "Christopher Harrington",
    "Arabella Kensington",
    "Wesley Chambers",
    "Seraphina Fairfax",
    "Nathaniel Hartington",
    "Victoria Sinclair",
    "Christian Davenport",
    "Juliana Huntington",
    "Harrison Beaumont",
];

// Create the <p> elements for name provided and guest list presence
const guestNameParagragh = document.createElement('p');
guestName.id = 'guest-name';
const guestListPresence = document.createElement('p');
guestListPresence.id = 'guest-list-presence';

// Get the guest-list-container div
const guestListContainer = document.querySelector('.guest-list-container');

// Append the <p> elements to the container
guestListContainer.appendChild(guestNameParagragh);
guestListContainer.appendChild(guestListPresence);

//Display the guest's name in the document
guestNameParagragh.innerHTML = "Guest Name: " + guestName;


// Check if the guest name is on the guest list
for (let i = 0; i < guestList.length && !guestFound; i++) 
{
    if (guestList[i] === guestName) 
    {
        guestFound = true;
    }
}

// Determine the status and display appropriate message
if (guestFound === true) 
{
    const accessGranted = "Welcome to the party!";
    console.log(accessGranted);
    guestListPresence.innerHTML = accessGranted;
} 
else if (guestFound === false)
{
    const accessDenied = "I'm sorry, but your name doesn't appear in the guest list";
    console.log(accessDenied);
    guestListPresence.innerHTML = accessDenied;
}