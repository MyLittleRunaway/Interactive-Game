// Get elements from the HTML
const startButton = document.getElementById("start");
const questionsDiv = document.getElementById("questions");
const choicesDiv = document.getElementById("choices");
const feedbackDiv = document.getElementById("feedback");
const questionTitle = document.getElementById("question-title");
const endScreen = document.getElementById("end-screen");
const finalScore = document.getElementById("final-score");
const initialsInput = document.getElementById("initials");
const submitButton = document.getElementById("submit");
const timeSpan = document.getElementById("time");

// Create audio elements for correct and wrong answer sounds
const correctSound = new Audio('../assets/sfx/correct.mp3');
const wrongSound = new Audio('../assets/sfx/incorrect.mp3');

// Variables to keep track of the quiz
let currentQuestion = 0;
let time = 100; // change this line
let timerId;

// Function to start the quiz
function startQuiz() {
    // Hide the start screen
    startButton.parentElement.classList.add("hide");

    // Show the questions div
    questionsDiv.classList.remove("hide");

    // Start the timer
    timerId = setInterval(function() {
        time--;
        timeSpan.textContent = time;
        if (time <= 0) {
            endQuiz();
            alert("You ran out of time. Try again!");
        }
    }, 1000);

    // Show the first question
    showQuestion();
}

// Function to show the current question
function showQuestion() {
    // Get the current question object
    const question = questions[currentQuestion];

    // Update the title with the question text
    questionTitle.textContent = question.title;

    // Clear the previous choices
    choicesDiv.innerHTML = "";

    // Add the choices to the page
    question.choices.forEach(function(choice) {
        const choiceButton = document.createElement("button");
        choiceButton.textContent = choice;
        choiceButton.addEventListener("click", function() {
            checkAnswer(choice);
        });
        choicesDiv.appendChild(choiceButton);
    });
}

// Function to check the answer
function checkAnswer(answer) {
    // Get the correct answer
    const correctAnswer = questions[currentQuestion].answer;
  
    // Check if the answer is correct
    if (answer === correctAnswer) {
      // Stop the wrong sound if it is playing
      if (!wrongSound.paused) {
        wrongSound.pause();
        wrongSound.currentTime = 0;
      }
      // Play the correct sound
      correctSound.play();
      // Show feedback
      feedbackDiv.textContent = "Correct!";
      feedbackDiv.classList.remove("hide");
      time += 10; // add 10 seconds
    } else {
      // Stop the correct sound if it is playing
      if (!correctSound.paused) {
        correctSound.pause();
        correctSound.currentTime = 0;
      }
      // Play the wrong sound
      wrongSound.play();
      // Show feedback
      feedbackDiv.textContent = "Incorrect!";
      feedbackDiv.classList.remove("hide");
      time -= 10; // subtract 10 seconds
    }
  
    // Check if time has reached zero
    if (time <= 0) {
      endQuiz();
      alert("You ran out of time. Try again!");
    } else {
      // Go to the next question
      currentQuestion++;
  
      // Check if there are more questions
      if (currentQuestion === questions.length) {
        endQuiz();
      } else {
        showQuestion();
      }
    }
  
    // Hide the feedback after 2 seconds
    setTimeout(function () {
      feedbackDiv.classList.add("hide");
    }, 2000);
  }
  

// Function to end the quiz
function endQuiz() {
    // Stop the timer
    clearInterval(timerId);

    // Show the end screen
    endScreen.classList.remove("hide");

    // Show the final score
    finalScore.textContent = time;

    // add the score to the local storage
    submitButton.addEventListener("click", function(){
        let initials = initialsInput.value;
        let score = time;

        // Retrieve existing high scores from local storage or create a new array
        let highscores = JSON.parse(localStorage.getItem("quizHighscores")) || [];

        // Add the new high score to the array
        highscores.push({initials: initials, score: score});

        // Store the updated high scores array in local storage
        localStorage.setItem("quizHighscores", JSON.stringify(highscores));

        // Redirect to the highscores page
        window.location.href = "highscores.html";
    });

}

// Add event listener to start button
startButton.addEventListener("click", startQuiz);