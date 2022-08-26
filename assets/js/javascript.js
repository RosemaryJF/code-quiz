var questions = [
    
    {
    question: "Commonly used data types DO NOT include:",
    answerOptions: ["1. alerts", "2. strings", "3. booleans", "4. numbers"],
    answer: "1. alerts"
    },

    {
    question: "The condition in an if/else statement is enclosed within _______.",
    answerOptions: ["1. parentheses", "2. curly brackets", "3. square brackets", "4. quotes"],
    answer: "1. parentheses",
    },

    {
    question: "Arrays in JavaScript can be used to store ________.",
    answerOptions: ["1. numbers & strings", "2. other arrays", "3. booleans", "4. all of the above"],
    answer: "4. all of the above",
    },

    {
    question: "String values must be enclosed within _______ when being assigned to variables.",
    answerOptions: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
    answer: "3. quotes",
    },

    {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    answerOptions: ["1. JavaScript", "2. terminal / bash", "3. for loops", "4. console.log"],
    answer: "4. console.log",
    },
];

var body = document.body;

var startCntnr = document.getElementById("starting-page");
var quizCntnr = document.getElementById("quiz");
var resultsCntnr = document.getElementById("results");

var startBtn = document.getElementById("starting-page");
var sumbitBtn = document.getElementById("submit-button");

var feedbackEl = document.getElementById("feedback");
var answerEl = document.getElementById("answer-options")

var timerEl = document.getElementById("time");
var timeLeft = (questions.length * 15);

var questionIndex = 0;

function setTimer (){
    var timerInterval = setInterval(function(){
        if (timeLeft > 0) {
        timerEl.textContent = timeLeft;
        timeLeft--
        } 
            // else if (timeLeft < 0) {
            //     clearInterval(timerInterval);
            //     results();
            // }
            // else if (results()) {
            //     clearInterval(timerInterval);
            // } 
            
    }, 1000)
};

function hideQuiz () {
    quizCntnr.setAttribute("style", "display: none");
    resultsCntnr.setAttribute("style", "display: none");
};
hideQuiz()
    
startBtn.addEventListener("click", function (event) {
    event.stopPropagation;
    if ("click") {
        quizCntnr.removeAttribute("style", "display: none");
        startCntnr.setAttribute("style", "display: none");
        getQuestion();
        
    }
});

function getQuestion() {
    
    for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[0];

    var questionEl = document.getElementById("quiz-question");
    questionEl.textContent = currentQuestion.question;

    // answerBTN.textContent = '';

    for (var i = 0; i < currentQuestion.answerOptions.length; i++) {
        
        // create new button for each choice
        var answerBTN = document.createElement("button");
        answerBTN.innerHTML = currentQuestion.answerOptions[i];
        document.body.appendChild(answerBTN);
        // var choice = currentQuestion.answerOptions[i];
        
    }


    
// so in this function youre going to pass in a event which check if the html element you have click is equal to 
// questions[currentQuestionIndex].answer 

        
    answerBTN.addEventListener("click", (event))
    
    function correctAnswerCheck() {
        var choiceEl = event.
        if (choiceEl.value !== currentQuestion.answer) 
            console.log('incorrect')
        
 }correctAnswerCheck()

}}

   
    //     
     
    //     
       
    // //penalize times
    
    
    // //feedback
    // feedbackEl.textContent = 'Incorrect!';
    // } else
    // feedbackEl.textContent = 'Correct!';
    // }




// function runQuiz() {

//     for (var i = 0; i = questions.length; i++)
//         var currentQuestion = questions[i];
//         console.log(currentQuestion)
//         questionEl.textContent = currentQuestion;

// };

// function getAnswers() {
//     for (var i = 0; i < answerOptions.length; i++) {
//         var answerBtn = document.getElementsByClassName("answer-button")[i];
//             answerBtn.textContent = answerOptions[i];
//     }
// };

