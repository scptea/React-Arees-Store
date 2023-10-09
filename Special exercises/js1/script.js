// Array of words for the game
var words = ["intern", "apple", "banana", "cherry", "grape", "lemon", "orange",
    "water", "games", "ocean", "music", "pizza",
    "kitten", "books", "car", "beach", "piano", "cycle",
    "chair", "paint", "rains", "snows", "tiger", "whale", "zebra"];

// Select a random word from the array
const randomWord = words[Math.floor(Math.random() * words.length)];

// Initialize variables
let wordDisplay = "";
let guesses = [];

// Generate the initial word display
for (let i = 0; i < randomWord.length; i++) {
    wordDisplay += "-";
}

// Update the word display on the page
document.getElementById("word-display").textContent = wordDisplay;

// Handle the guess submission
document.getElementById("submit-btn").addEventListener("click", function () {
    const guessInput = document.getElementById("guess");
    const guess = guessInput.value.toLowerCase();

    // Check if the guess is valid
    if (guess.length !== randomWord.length) {
        alert("Please enter a word with " + randomWord.length + " letters.");
        return;
    }

    // Check if the guess has already been made
    if (guesses.includes(guess)) {
        alert("You already guessed that word.");
        return;
    }

    // Add the guess to the guess history
    guesses.push(guess);
    const guessHistory = document.getElementById("guess-history");
    const guessItem = document.createElement("p");
    guessItem.textContent = guess;
    guessHistory.appendChild(guessItem);

    // Check if the guess is correct
    if (guess === randomWord) {
        alert("Congratulations! You guessed the word correctly.");
        return;
    }

    // Update the word display based on the guess
    let newWordDisplay = "";
    for (let i = 0; i < randomWord.length; i++) {
        if (guess.includes(randomWord[i])) {
            newWordDisplay += randomWord[i];
        } else {
            newWordDisplay += "-";
        }
    }

    // Update the word display on the page
    wordDisplay = newWordDisplay;
    document.getElementById("word-display").textContent = wordDisplay;

    // Clear the guess input
    guessInput.value = "";
});