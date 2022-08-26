var questions = [
    "Commonly used data types DO NOT include:",
    "The condition in an if/else statement is enclosed within _______.",
    "Arrays in JavaScript can be used to store ________.",
    "String values must be enclosed within _______ when being assigned to variables.",
    "A very useful tool used during development and debugging for printing content to the debugger is:"
];

var answerOptions = [
    ["1. alerts", "2. strings", "3. booleans", "4. numbers"],
    ["1. parentheses", "2. curly brackets", "3. square brackets", "4. quotes"],
    ["1. numbers & strings", "2. other arrays", "3. booleans", "4. all of the above"],
    ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
    ["1. JavaScript", "2. terminal / bash", "3. for loops", "4. console.log"]
];

var answer = [
    "1. alerts",
    "1. parentheses",
    "4. all of the above",
    "3. quotes",
    "4. console.log"
];

var body = document.body;

var startCntnr = document.getElementById("starting-page");
var quizCntnr = document.getElementById("quiz");
var resultsCntnr = document.getElementById("results");


var sumbitBtn = document.getElementById("submit-button");

var questionEl = document.getElementById("quiz-question");

// function setTimer (){
//     var timerInterval = setInterval(function(){
//         if (timeLeft > 0) {
//         timerEl.textContent = timeLeft;
//         timeLeft--
//         } 
//             // else if (timeLeft < 0) {
//             //     clearInterval(timerInterval);
//             //     results();
//             // }
//             // else if (results()) {
//             //     clearInterval(timerInterval);
//             // } 
            
//     }, 1000)
// };


function hideQuiz () {
quizCntnr.setAttribute("style", "display: none");
resultsCntnr.setAttribute("style", "display: none");
};
hideQuiz()

var startBtn = document.getElementById("start-button");
startBtn.addEventListener("click", function(event) {
    console.log(event.target);
        if ("click")
            quizCntnr.removeAttribute("style", "display: none");
            startCntnr.setAttribute("style", "display: none");
            runQuiz()
            getAnswers()
});

function runQuiz() {

    for (var i = 0; i = questions.length; i++)
        var currentQuestion = questions[i];
        console.log(currentQuestion)
        questionEl.textContent = currentQuestion;

};

function getAnswers() {
    for (var i = 0; i < answerOptions.length; i++) {
        var answerBtn = document.getElementsByClassName("answer-button")[i];
            answerBtn.textContent = answerOptions[i];
    }
};
