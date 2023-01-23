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

// Variables to keep track of the quiz
let currentQuestion = 0;
let time = 0;
let timerId;

// Function to start the quiz
function startQuiz() {
    // Hide the start screen
    startButton.parentElement.classList.add("hide");

    // Show the questions div
    questionsDiv.classList.remove("hide");

    // Start the timer
    timerId = setInterval(function() {
        time++;
        timeSpan.textContent = time;
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
        // Show feedback
        feedbackDiv.textContent = "Correct!";
        feedbackDiv.classList.remove("hide");

        // Go to the next question
        currentQuestion++;

        // Check if there are more questions
        if (currentQuestion === questions.length) {
            endQuiz();
        } else {
            showQuestion();
        }
    } else {
        // Show feedback
        feedbackDiv.textContent = "Incorrect!";
        feedbackDiv.classList.remove("hide");
        time += 10;
    }

    // Hide the feedback after 2 seconds
    setTimeout(function() {
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
        localStorage.setItem(initials, score);
        window.location.href = "highscores.html";
    });
}

// Add event listener to start button
startButton.addEventListener("click", startQuiz);