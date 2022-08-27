var body = document.body;

var startCntnr = document.getElementById("starting-page");
var quizCntnr = document.getElementById("quiz");
var resultsCntnr = document.getElementById("results");

var startBtn = document.getElementById("starting-page");
var sumbitBtn = document.getElementById("submit-button");

var timerEl = document.getElementById("time");
var timeLeft = (questions.length * 15);

function setTimer() {
    var timerInterval = setInterval(function(){
        if (timeLeft > 0) {
        timerEl.textContent = timeLeft;
        timeLeft--
        } 
            else if (timeLeft < 0) {
                clearInterval(timerInterval);
                results();
            }
            
            else if (results()) {
                clearInterval(timerInterval);
            } 
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
        setTimer()
        getQuestion()
        checkAnswer()
        
    }
});
  
function getQuestion() {
    var currentQuestion = questions[0].question;
    console.log(currentQuestion);
    var questionEl = document.getElementById("quiz-question");
    questionEl.textContent = currentQuestion; 
}


function checkAnswer() {
    var answerOptions = questions[0].answerOptions;
    for (var i = 0; i < answerOptions.length; i++) {
    var answerBtn = document.getElementsByClassName("answer-button")[i];
    answerBtn.textContent = answerOptions[i];

        var correctAnswer  = questions[0].answer;
        console.log(correctAnswer);
            
        answerBtn.addEventListener("click", function(event) {
            event.stopPropagation();
            console.log(event.target.textContent);
            
            if (event.target.textContent !== correctAnswer) {
                console.log("Incorrect");
                nextQuestion();
                nextAnswer(); 
                if (timeLeft > 0) {    
                    timeLeft -= 15;
                }
                    
                if (timeLeft === 0 || timeLeft < 0) {
                    results()
                }
            }

            else {
                console.log("Correct!");
                nextQuestion();
                nextAnswer();
                return;
            }
        })
    }
};

function nextQuestion() {
    var currentQuestion = questions[1].question;
    console.log(currentQuestion);
    var questionEl = document.getElementById("quiz-question");
    questionEl.textContent = currentQuestion; 
};

function nextAnswer() {
    var answerOptions = questions[1].answerOptions;
    for (var i = 0; i < answerOptions.length; i++) {
    var answerBtn = document.getElementsByClassName("answer-button")[i];
    answerBtn.textContent = answerOptions[i];
            
        var correctAnswer01 = questions[1].answer;
        console.log(correctAnswer01);
            
        answerBtn.addEventListener("click", function(event) {
            event.stopPropagation();
            console.log(event.target.textContent);
                
            if (event.target.textContent !== correctAnswer01) {
                console.log("Incorrect");
                nextQuestion02();
                nextAnswer02 ();
                if (timeLeft > 0) {    
                    timeLeft -= 15;
                }
                    
                if (timeLeft === 0 || timeLeft < 0) {
                    results()
                }   
            }

            else {
                console.log("Correct!");
                nextQuestion02();
                nextAnswer02();
                return;
            }
        })
    }
};
    
function nextQuestion02() {
    var currentQuestion = questions[2].question;
    console.log(currentQuestion);
    var questionEl = document.getElementById("quiz-question");
    questionEl.textContent = currentQuestion; 
};

function nextAnswer02() {
    let answerOptions = questions[2].answerOptions;
    for (let i = 0; i < answerOptions.length; i++) {
    let answerBtn = document.getElementsByClassName("answer-button")[i];
    answerBtn.textContent = answerOptions[i];

        let correctAnswer02 = questions[2].answer;
        console.log(correctAnswer02);
        
        answerBtn.addEventListener("click", function(event) {
            event.stopPropagation();
            console.log(event.currentTarget.textContent);

            if (event.target.textContent !== correctAnswer02) {
                console.log("Incorrect");
                nextQuestion03();
                nextAnswer03();
                    if (timeLeft > 0) {    
                        timeLeft -= 15;
                    }
                    
                     if (timeLeft === 0 || timeLeft < 0) {
                        results()
                    }
            }

            else {
                console.log("Correct!");
                nextQuestion03();
                nextAnswer03();
                return;
                }
        })
    }
};

function nextQuestion03() {
    var currentQuestion = questions[3].question;
    console.log(currentQuestion);
    var questionEl = document.getElementById("quiz-question");
    questionEl.textContent = currentQuestion; 
};

function nextAnswer03() {
    var answerOptions = questions[3].answerOptions;
    for (var i = 0; i < answerOptions.length; i++) {
    var answerBtn = document.getElementsByClassName("answer-button")[i];
    answerBtn.textContent = answerOptions[i];

        var correctAnswer03 = questions[3].answer;
        console.log(correctAnswer03);

        answerBtn.addEventListener("click", function(event) {
            event.stopPropagation();
            console.log(event.target.textContent);
           
            if (event.target.textContent !== correctAnswer03) {
                console.log("Incorrect");
                nextQuestion04();
                nextAnswer04();
                if (timeLeft > 0) {    
                    timeLeft -= 15;
                }
                if (timeLeft === 0 || timeLeft < 0) {
                    results()
                }
            }

            else {
                console.log("Correct!");
                nextQuestion04();
                nextAnswer04();
                return;
            }
        })
    }
};

function nextQuestion04() {
    var currentQuestion = questions[4].question;
    console.log(currentQuestion);
    var questionEl = document.getElementById("quiz-question");
    questionEl.textContent = questions[4].question; 
};

function nextAnswer04() {
    var answerOptions = questions[4].answerOptions;
    for (var i = 0; i < answerOptions.length; i++) {
    var answerBtn = document.getElementsByClassName("answer-button")[i];
    answerBtn.textContent = answerOptions[i];

        var correctAnswer04  = questions[4].answer;
        console.log(correctAnswer04);
            
        answerBtn.addEventListener("click", function(event) {
            event.stopPropagation();
            console.log(event.target.textContent);
            
            if (event.target.textContent !== correctAnswer04) {
                console.log("Incorrect");
                results();
                if (timeLeft > 0) {    
                    timeLeft -= 15;
                }

                if (timeLeft === 0) {
                }    
            }

            else {
                console.log("Correct!");
                results();
                return;
            };
        })
    }
};

function results() {
    quizCntnr.setAttribute("style", "display: none");
    resultsCntnr.removeAttribute("style", "display: none");
       
    var scoreEl = document.getElementById("score");
        scoreEl.textContent = timeLeft 
            if (timeLeft < 0)
            scoreEl = 0
        localStorage.setItem("score", JSON.stringify(timeLeft));            

        initialsInput = document.getElementById("initials");

    var userInitial = initialsInput.value.toUpperCase();
        console.log(userInitial);
        localStorage.setItem("user-initial", JSON.stringify(initialsInput.value));

};



