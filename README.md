# Interactive Javascript Quiz

## This week, we were tasked with making an interactive Javascript quiz. This is what it looks like:

![Screenshot of the app](./assets/img/markdown.png "My App")

[Link to the app](https://drgunbot.github.io/Interactive-Game/index.html)


## How to use:



### Simply press "Start Quiz" and be presented with some questions on how we develop code with JavaScript!  
### *But beware!* Get a question wrong and I'll add extra time to your score - so be on your A game.  



## What did I do to create the JavaScript logic for this game?  


The logic.js is used to control the quiz's functionality and interact with elements on the HTML page. It first grabs the different elements on the HTML page that are necessary for the quiz, such as the questions div, choices div, and feedback div. Then, it declares variables to keep track of the current question, the timer, and the timer ID. The code has a function named "startQuiz" that is called when the user clicks on the start button. This function hides the start button and shows the questions div, starts the timer, and shows the first question. The timer is set to increment the time variable by 1 every second using setInterval. The code also has a function named "showQuestion" that is called to show the current question. This function updates the title with the question text, clears the previous choices, and adds the new choices to the page. The code has a function named "checkAnswer" that is called when the user clicks on an answer choice. This function checks if the user's answer is correct and displays feedback accordingly. If the answer is correct, it goes to the next question, if not it adds 10 seconds to the time. The code also has a function named "endQuiz" that is called when the quiz ends. This function stops the timer, shows the end screen, and shows the final score. It also stores the final score and the user's initials in the local storage and redirects to the highscores page. Finally, the code adds an event listener to the start button to start the quiz when clicked. All in all, this script is responsible for controlling the flow of the quiz and handling the interactions with the user.  

## What did I do to manage the high scores for this game?

The code is used to display the highscores that are stored in the local storage and also allows the user to clear the highscores. The code starts by getting the highscores list element from the HTML page, and a clear button. Then it loops through the local storage, getting the key and value of each highscore, creating a list item for each and appending it to the highscores list element. It also checks if the value of the key is not 'loglevel' before appending it to the list, this is to make sure that no other unwanted key-value pair is added to the highscore list. The code also checks if there are no high scores in the local storage, it sets the textContent of the highscoresList to "No high scores to display.". And if it detects that the local storage is not accessible, it sets the textContent of the highscoresList to "Local storage not accessible, please check browser settings." Finally, it adds an event listener to the clear button, when clicked it clears all the highscores from the local storage and resets the highscores list. This allows the user to clear the highscores when they want.
