var body = document.body;
var startCntnr = document.getElementById("starting-page");
var quizCntnr = document.getElementById("quiz");
var resultsCntnr = document.getElementById("results");

var startBtn = document.getElementById("starting-page");
var questionEl = document.getElementById("quiz-question");
var answerEl = document.getElementById("answer-options");
var sumbitBtn = document.getElementById("submit-button")
var answerOptions = document.getElementsByName("answerOptions");
var questionsEl = document.getElementById("questions");

// var button = document.querySelectorAll("button");

startBtn.addEventListener("click", function (event) {
    startBtn = event.target;
        if ("click")
            startCntnr.setAttribute("style", "display: none");
            resultsCntnr.setAttribute("style", "display: none");
        runQuiz()
        getAnswers()
    });
     
    function runQuiz() {
        var currentQuestion = questions[0];
        (console.log(currentQuestion));
        questionEl.textContent = currentQuestion.question;
    };

    // function makeBtn () {
    //     var answerBtn = document.createElement("button");
    //     for (i = 0; i < answerOptions.length; i++);
    //     answerBtn = answerOptions.length;
    //     document.body.appendChild(answerEl);
    //     // answerEl.setAttribute("class", "answerOptions");
    //     // answerEl.setAttribute("value", answerOptions);
    // } makeBtn();
   
    function getAnswers() {
        for (i = 0; i = answerOptions.length; i++) {
            var currentAnswers = questions[answerOptions[i]];
            console.log(currentAnswers);
        var answerBtn = document.getElementsByClassName("answer-button");
            answerBtn.addEventListener("click", () => {
            if (answerBtn.innerText === "") {
            answerBtn.innerText = "answerOptions";
        }})


        // var currentAnswers 

        // // = questions.answerOptions[0];
        //     (console.log(currentAnswers));
        //     // answerBtn.textContent(answerOptions);
        //     answerBtn.textContent(answerOptions);
    }};


    // answerOptions.addEventListener("click", function() {
    //         if (click === "alerts") {
    //         console.log("Correct") 
    //     }
    //         else if (click !== "alerts") {
    //         console.log("Incorrect")
    //     }
    //     // nextQuestion()
    // })
    
    // function nextQuestion() {
    //     if (console.log("Correct" || "Incorrect"));
    //     var currentQuestion = questions[1];
    //     (console.log(currentQuestion));
    //     questionEl.textContent = currentQuestion.question;
    // };
