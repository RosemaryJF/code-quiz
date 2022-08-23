var body = document.body;

var startCntnr = document.getElementById("starting-page");
var quizCntnr = document.getElementById("quiz");
var resultsCntnr = document.getElementById("results");

var startBtn = document.getElementById("starting-page");
var questionEl = document.getElementById("quiz-question");
var answerEl = document.getElementById("answer-options");
var sumbitBtn = document.getElementById("submit-button")
var answerOptions = document.getElementsByName("answerOptions");
var questionsOptions = document.getElementById("questions");

var timerEl = document.getElementById("time");
var timeLeft = (questions.length * 15)

var correctAnswer = document.querySelectorAll("questions.answer");

function setTimer (){
    var timerInterval = setInterval(function(){
        if (timeLeft > 0) {
        timerEl.textContent = timeLeft;
        timeLeft--
        } else if ("Incorrect") {
        timeLeft - 15; 
        } else if (results()) {
            clearInterval(timerInterval);
        } else if (timeLeft === 0) {
            clearInterval(timerInterval);
            results();
        };
    }, 1000)
}


function hideAnswers () {
quizCntnr.setAttribute("style", "display: none");
resultsCntnr.setAttribute("style", "display: none");
};
hideAnswers()

startBtn.addEventListener("click", function (event) {
    startBtn = event.target;
        if ("click")
            quizCntnr.removeAttribute("style", "display: none");
            startCntnr.setAttribute("style", "display: none");
        setTimer()
        runQuiz()
        getAnswers()
});
    
    function runQuiz() {
        var currentQuestion = questions[0];
        (console.log(currentQuestion));
        questionEl.textContent = currentQuestion.question;
        
    };

    function getAnswers() {
        var answerOptions = questions[0].answerOptions;
        console.log(answerOptions);
        for (var i = 0; i < answerOptions.length; i++) {
          console.log(answerOptions[i]);
      
            var answerBtn = document.getElementsByClassName("answer-button")[i];
            console.log(answerBtn);
            answerBtn.innerHTML = answerOptions[i];
            
            var correctAnswer = questions[0].answer;
            answerBtn.addEventListener("click", function(event) {
                console.log(event.target.textContent);
                if (event.target.textContent === correctAnswer){
                    console.log("Correct")
                }
                else if (event.target.textContent !== correctAnswer){ 
                    console.log("Incorrect")
                    timeLeft - 15
                }
                if (event.target.textContent === "Correct" || "Incorrect") {
                    nextQuestion01();
                    nextAnswer01();
                }
            })
        }
    };
    
    function nextQuestion01() {
        var currentQuestion = questions[1];
        console.log(currentQuestion);
        questionEl.textContent = currentQuestion.question; 
    };

    function nextAnswer01() {
        var answerOptions = questions[1].answerOptions;
        console.log(answerOptions);
        for (var i = 0; i < answerOptions.length; i++) {
          console.log(answerOptions[i]);
      
        var answerBtn = document.getElementsByClassName("answer-button")[i];
          answerBtn.textContent = answerOptions[i];

        var correctAnswer = questions[1].answer;
        answerBtn.addEventListener("click", function(event) {
            questions[1].answer = event.target;
            if (event.target.textContent)
            console.log("Correct") 
        
                else if (event.target.textContent !== correctAnswer) 
                console.log("Incorrect")

                if (console.log("Correct" || "Incorrect"));
                nextQuestion02()
                nextAnswer02()
        })
    }};
    
    function nextQuestion02() {
        var currentQuestion = questions[2];
        console.log(currentQuestion);
        questionEl.textContent = currentQuestion.question; 
    };

    function nextAnswer02() {
        var answerOptions = questions[2].answerOptions;
        console.log(answerOptions);
        for (var i = 0; i < answerOptions.length; i++) {
          console.log(answerOptions[i]);
      
        var answerBtn = document.getElementsByClassName("answer-button")[i];
          answerBtn.textContent = answerOptions[i];

        var correctAnswer = questions[2].answer;
        answerBtn.addEventListener("click", function(event) {
            questions[2].answer = event.target;
            if (event.target.textContent)
            console.log("Correct") 
        
                else if (event.target.textContent !== correctAnswer) 
                console.log("Incorrect")

                if (console.log("Correct" || "Incorrect"));
                nextQuestion03()
                nextAnswer03()
        })
    }};

    function nextQuestion03() {
        var currentQuestion = questions[3];
        console.log(currentQuestion);
        questionEl.textContent = currentQuestion.question; 
    };

    function nextAnswer03() {
        var answerOptions = questions[3].answerOptions;
        console.log(answerOptions);
        for (var i = 0; i < answerOptions.length; i++) {
          console.log(answerOptions[i]);
      
        var answerBtn = document.getElementsByClassName("answer-button")[i];
          answerBtn.textContent = answerOptions[i];

        var correctAnswer = questions[3].answer;
          answerBtn.addEventListener("click", function(event) {
            questions[3].answer = event.target;
            if (event.target.textContent)
            console.log("Correct") 
        
                else if (event.target.textContent !== correctAnswer) 
                console.log("Incorrect")

                if (console.log("Correct" || "Incorrect"));
                nextQuestion04()
                nextAnswer04()
        })
    }};

    function nextQuestion04() {
        var currentQuestion = questions[4];
        console.log(currentQuestion);
        questionEl.textContent = currentQuestion.question; 
    };

    function nextAnswer04() {
        var answerOptions = questions[4].answerOptions;
        console.log(answerOptions);
        for (var i = 0; i < answerOptions.length; i++) {
          console.log(answerOptions[i]);
      
        var answerBtn = document.getElementsByClassName("answer-button")[i];
          answerBtn.textContent = answerOptions[i];

        var correctAnswer  = questions[4].answer;
        answerBtn.addEventListener("click", function(event) {
            questions[4].answer = event.target;
            if (event.target.textContent)
            console.log("Correct") 
        
                else if (event.target.textContent !== correctAnswer) 
                console.log("Incorrect")

                if (console.log("Correct" || "Incorrect"));
                results()
        })
    }};


    function results() {

        quizCntnr.setAttribute("style", "display: none");
        resultsCntnr.removeAttribute("style", "display: none");
       
        var scoreEl = document.getElementById("score");
        scoreEl.textContent = timeLeft;
        localStorage.setItem("score", JSON.stringify(timeLeft));
        
        var userInitial = document.getElementById("user-input");
        console.log(userInitial);
        localStorage.setItem("name", JSON.stringify(userInitial));

    };

    function highscores() {
        var submitBtn = document.getElementById("submit-button");
        submitBtn.addEventListener("click", function(event) {
        event.preventDefault();
    })};