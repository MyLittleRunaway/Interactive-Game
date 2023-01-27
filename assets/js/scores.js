// Get the highscores list element
const highscoresList = document.getElementById("highscores");
const clear = document.getElementById("clear");

// Create an empty array to store the high scores
let highscores = [];

// Loop through the localStorage and push each high score to the array
for (let i = 0; i < localStorage.length; i++) {
    // Get the key and value from the localStorage
    let initials = localStorage.key(i);
    if (initials != 'loglevel') {
        let score = localStorage.getItem(initials);
        highscores.push({initials: initials, score: score});
    }
}

// Sort the highscores by score
highscores.sort((a, b) => {
    return a.score - b.score;
});

// Loop through the sorted highscores and create a list item for each
for (let i = 0; i < highscores.length; i++) {
    let listItem = document.createElement("li");
    listItem.textContent = highscores[i].initials + " - " + highscores[i].score;
    highscoresList.appendChild(listItem);
}

// Check if there are no high scores
if(highscores.length === 0){
    highscoresList.textContent = "No high scores to display.";
}

// Check if local storage is accessible
if(localStorage === undefined || localStorage === null){
    highscoresList.textContent = "Local storage not accessible, please check browser settings.";
}

// Clear the highscores
clear.addEventListener("click", function() {
    localStorage.clear();
    highscoresList.innerHTML = "";
});
