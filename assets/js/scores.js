// Get the highscores list element
const highscoresList = document.getElementById("highscores");
const clear = document.getElementById("clear");

// Loop through the localStorage and create a list item for each high score
for (let i = 0; i < localStorage.length; i++) {
    // Get the key and value from the localStorage
    let initials = localStorage.key(i);
    if (initials != 'loglevel') {
        let score = localStorage.getItem(initials);
        let listItem = document.createElement("li");
        listItem.textContent = initials + " - " + score;
        highscoresList.appendChild(listItem);
    }
}

// Check if there are no high scores
if(localStorage.length === 0){
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
