// Get the highscores list element
const highscoresList = document.getElementById("highscores");
const clear = document.getElementById("clear");

// Create an empty array to store the high scores
let highscores = [];

// Retrieve the high scores from local storage and parse the JSON string
let highscoresJSON = localStorage.getItem("quizHighscores");
if (highscoresJSON) {
    highscores = JSON.parse(highscoresJSON);
}

// Sort the highscores by score in descending order
highscores.sort((a, b) => {
    return b.score - a.score;
});

// Loop through the highscores array and create a list item for each score
for (let i = 0; i < highscores.length; i++) {
    let listItem = document.createElement("li");
    listItem.textContent = highscores[i].initials + ": " + highscores[i].score;
    highscoresList.appendChild(listItem);
}

// Check if there are no high scores
if (highscores.length === 0) {
    highscoresList.textContent = "No high scores to display.";
}

// Check if local storage is accessible
if (localStorage === undefined || localStorage === null) {
    highscoresList.textContent = "Local storage not accessible, please check browser settings.";
}

// Clear the highscores
clear.addEventListener("click", function () {
    localStorage.clear();
    highscoresList.innerHTML = "";
});
