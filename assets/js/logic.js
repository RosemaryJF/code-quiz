var body = document.body;
var startCntnr = document.getElementById("starting-page");
var quizCntnr = document.getElementById("quiz");
var resultsCntnr = document.getElementById("results");

var startBtn = document.getElementById("starting-page");
var questionEl = document.getElementById("quiz-question");
var answerEl = document.getElementById("answer-options");
var sumbitBtn = document.getElementById("submit-button")
var answerOptions = document.querySelectorAll("answerOptions");
var questionsEl = document.getElementById("questions");
// var answerBtn01 = document.createElement("button");
// var answerBtn02 = document.createElement("button");
// var answerBtn03 = document.createElement("button");
// var answerBtn04 = document.createElement("button");
// var button = document.querySelectorAll("button");

// answerEl.setAttribute("class", "hide");
// body.appendChild(answerEl);

startBtn.addEventListener("click", function (event) {
    startBtn = event.target;
     if ("click")
     startCntnr.setAttribute("style", "display: none");
     resultsCntnr.setAttribute("style", "display: none");
     
     runQuiz()
    });
     
     
     
    function runQuiz() {
        var currentQuestion = questions[0];
        (console.log(currentQuestion));
        questionEl.textContent = currentQuestion.question;
    };

   
    function getAnswers() {
        answerEl.removeAttribute("class", "hide");
        var currentAnswers = questions[0];
            (console.log(currentAnswers));
            answerEl.textContent = currentAnswers.answerOptions;
        function makeButtons () {
                var answerButtons = document.createElement("button");
                for (i = 0; i < answerOptions.length; i++)
                answerButtons.setAttribute("class", "answerOptions");
                answerButtons.setAttribute("value", answerOptions);
        }
        makeButtons()
    };
    
   
   getAnswers();
    

    

    

