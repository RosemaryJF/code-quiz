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
        setTimer()
        runQuiz()
        getAnswers()
        return;
    }
});
  
function runQuiz() {
        var currentQuestion = questions[0].question;
        (console.log(currentQuestion));
        var questionEl = document.getElementById("quiz-question");
        questionEl.textContent = currentQuestion;
};

function getAnswers() {
    var answerOptions = questions[0].answerOptions;
    for (var i = 0; i < answerOptions.length; i++) {
    var answerBtn = document.getElementsByClassName("answer-button")[i];
    answerBtn.textContent = answerOptions[i];
            
        var correctAnswer00 = questions[0].answer;
        console.log(correctAnswer00);

        answerBtn.addEventListener("click", function(event) {
            event.stopPropagation()
            console.log(event.currentTarget.textContent);
            
            if (event.currentTarget.textContent === correctAnswer00){
                console.log("Correct!")
                nextQuestion();
                nextAnswer();
                return;
            }
                
            else if (event.currentTarget.textContent !== correctAnswer00) {
                console.log("Incorrect.")
                nextQuestion();
                nextAnswer();
                return;
                        // if (timeLeft > 0) {
                        //     timeLeft -= 15;
                        // }
                        // if (timeLeft === 0) {
                        //     results()
                        // }
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
    let answerOptions = questions[1].answerOptions;
    for (var i = 0; i < answerOptions.length; i++) {
    let answerBtn = document.getElementsByClassName("answer-button")[i];
    answerBtn.textContent = answerOptions[i];
            
        let correctAnswer01 = questions[1].answer;
        console.log(correctAnswer01);
            
        answerBtn.addEventListener("click", function(event) {
            event.stopPropagation();
            console.log(event.target.textContent);
                
            if (event.target.textContent === correctAnswer01){
                console.log("Correct");
                nextQuestion02();
                nextAnswer02();
                return;
            }
                
            else if (event.target.textContent !== correctAnswer01) { 
                console.log("Incorrect");
                nextQuestion02();
                nextAnswer02();
                return;
                
                        // if (timeLeft > 0) {
                        //     timeLeft -= 15;
                        // }
                        // if (timeLeft === 0) {
                        //     results()
                        // }
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

            if (event.currentTarget.textContent === correctAnswer02) {
                console.log("Correct") ;
                nextQuestion03();
                nextAnswer03();
            }

            else if (event.currentTarget.textContent !== correctAnswer02) {
                console.log("Incorrect");
                nextQuestion03();
                nextAnswer03();
                return;
                // if (timeLeft > 0) {
                // timeLeft -= 15;
                // }
                // if (timeLeft === 0) {
                // results()
                // }
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
           
            if (event.target.textContent === correctAnswer03) {
                console.log("Correct");
                nextQuestion04();
                nextAnswer04();
            }

            else if (event.target.textContent !== correctAnswer03) {
                console.log("Incorrect");
                nextQuestion04();
                nextAnswer04();
                return;
                    // if (timeLeft > 0) {
                    //     timeLeft -= 15;
                    // }
                    // if (timeLeft === 0) {
                    //     results()
                    // }
            }
        })
    }
};

function nextQuestion04() {
    var currentQuestion = questions[4];
    console.log(currentQuestion);
    var questionEl = document.getElementById("quiz-question");
    questionEl.textContent = currentQuestion.question; 
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
            
            if (event.target.textContent === correctAnswer04) {
                console.log("Correct") ;
                results();
            }

            else if (event.target.textContent !== correctAnswer04) {
                console.log("Incorrect");
                results();
                    // if (timeLeft > 0) {
                    //     timeLeft -= 15;
                    // }
                    // if (timeLeft === 0) {
                    //     results()
                    // }
            };
        })
    }
};


function results() {
    quizCntnr.setAttribute("style", "display: none");
    resultsCntnr.removeAttribute("style", "display: none");
       
    var scoreEl = document.getElementById("score");
        scoreEl.textContent = timeLeft;
            if (timeLeft < 0) {
                scoreEl.textContent = 0;
                localStorage.setItem("score", JSON.stringify(timeLeft));
            }
            
        
        // var userInitial = document.getElementById(input.value);
        //     console.log(userInitial);
        //     localStorage.setItem("user-initial", inputname.value);

};

function highscores() {
    var submitBtn = document.getElementById("submit-button");
        submitBtn.addEventListener("click", function(event) {
            event.preventDefault();
        })
};