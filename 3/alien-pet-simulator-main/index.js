// Array of alien objects with their respective properties
const aliens = [
    { planet: 'Mars', specialAbility: 'Invisibility', mood: 100, hunger: 50 },
    { planet: 'Venus', specialAbility: 'Teleportation', mood: 75, hunger: 25 },
    { planet: 'Jupiter', specialAbility: 'Mind Control', mood: 110, hunger: 40 },
    { planet: 'Neptune', specialAbility: 'Super Strength', mood: 85, hunger: 60 },
    { planet: 'Saturn', specialAbility: 'Time Manipulation', mood: 120, hunger: 35 }
];

// Class definition for AlienPet
class AlienPet {
    constructor(alien) {
        this.mood = alien.mood;
        this.hunger = alien.hunger;
        this.planetOrigin = alien.planet;
        this.specialAbility = alien.specialAbility;
        this.isSleeping = false;
    }
}

// Function to handle actions based on button clicks
function handleAction(action) {
    if (pet.isSleeping && action !== 'Wake Up') {
        displayMessage('Your pet is sleeping. Wake it up first.');
        return;
    }

    switch (action) {
        case 'Feed':
            pet.hunger = Math.max(0, pet.hunger - 10);  // Decrease hunger, with a minimum of 0
            updatePetStatus();
            break;
        case 'Play':
            pet.mood = Math.min(150, pet.mood + 10);  // Increase mood, with a maximum of 150
            pet.hunger = Math.min(100, pet.hunger + 5);  // Increase hunger, with a maximum of 100
            updatePetStatus();
            break;
        case 'Use Special Ability':
            displayMessage(`Your pet uses ${pet.specialAbility}!`);  // Display the special ability message
            break;
        case 'Send to Sleep':
            pet.isSleeping = true;  // Set sleeping status to true
            displayPetStats();  // Update the Sleep Status immediately
            setTimeout(() => {
                pet.isSleeping = false;  // Set sleeping status to false after 10 seconds
                displayMessage('Your pet has woken up!');
                displayPetStats();
            }, 10000);  // Pet sleeps for 10 seconds
            displayMessage('Your pet is now sleeping...');
            break;
        case 'Wake Up':
            if (pet.isSleeping) {
                displayMessage('Your pet will wake up after its rest.');  // Display message if pet is sleeping
            } else {
                displayMessage('Your pet is already awake.');  // Display message if pet is awake
            }
            break;
        default:
            displayMessage('Invalid action.');
    }
}

// Function to increment hunger every 5 seconds if pet is not sleeping
function incrementHunger() {
    if (!pet.isSleeping) {
        pet.hunger = Math.min(100, pet.hunger + 1);
        displayPetStats();
    }
}

// Function to update pet status and display relevant messages
function updatePetStatus() {
    try {
        if (pet.hunger > 100) {
            throw new Error('Your pet is too hungry! Feed it quickly.');
        }
        if (pet.mood < 0) {
            throw new Error('Your pet is very upset! Play with it.');
        }
        displayPetStats();
    } catch (error) {
        displayMessage(error.message);
    } finally {
        checkPetHealth();
    }
}

// Function to check pet health and display messages
function checkPetHealth() {
    if (pet.hunger >= 100) {
        displayMessage('Your alien pet has left in search of food on another planet.');
        fadeOutImage();
    } else if (pet.mood <= 0) {
        displayMessage('Your alien pet is sad and has gone into hibernation.');
        fadeOutImage();  // Fade out the image when mood reaches 0
    }
}

// Function to fade out the alien image
function fadeOutImage() {
    let opacity = 1;  // Initial opacity (fully visible)
    const fadeRate = 0.05;  // How much to decrease the opacity each step
    const fadeInterval = setInterval(() => {
        opacity -= fadeRate;
        document.getElementById('alienImage').style.opacity = opacity;
        if (opacity <= 0) {
            clearInterval(fadeInterval);  // Stop the interval when the image is fully faded out
        }
    }, 100);  // Run every 100 milliseconds
}

// Function to display messages
function displayMessage(message) {
    document.getElementById('messageBox').textContent = message;
}

// Function to display pet stats
function displayPetStats() {
    document.getElementById('mood').textContent = pet.mood;
    document.getElementById('hunger').textContent = pet.hunger;
    document.getElementById('planetOrigin').textContent = pet.planetOrigin;
    document.getElementById('specialAbility').textContent = pet.specialAbility;
    document.getElementById('sleepStatus').textContent = pet.isSleeping ? 'Sleeping' : 'Awake';
    const alienImageSrc = './assets/' + pet.planetOrigin.toLowerCase() + '-alien.png';
    document.getElementById('alienImage').src = alienImageSrc;
}

// Function to decrement mood every 5 seconds if pet is not sleeping
function decrementMood() {
    if (!pet.isSleeping) {  // Only decrease mood if the pet is not sleeping
        pet.mood = Math.max(0, pet.mood - 2);  // Ensure mood doesn't go below 0
        displayPetStats();
    }
}

// Randomly select an alien type on page load and create a new AlienPet instance
const pet = new AlienPet(aliens[Math.floor(Math.random() * aliens.length)]);

// Display pet stats on page load
displayPetStats();

// Set up the intervals
setInterval(incrementHunger, 5000);
setInterval(decrementMood, 5000);
