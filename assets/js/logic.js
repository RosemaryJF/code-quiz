var body = document.body;
var startCntnr = document.getElementById("starting-page");
var startBtn = document.getElementsByClassName("start-button");
var questionEl = document.getElementById("quiz-question");
var answerEl = document.getElementById("answer-options");
var sumbitBtn = document.getElementById("submit-button")
var questionsEl = document.getElementById("questions");
// var answerBtn01 = document.createElement("button");
// var answerBtn02 = document.createElement("button");
// var answerBtn03 = document.createElement("button");
// var answerBtn04 = document.createElement("button");
// var button = document.querySelectorAll("button");


function getQuestion() {
    var output = [];
    questionsEl.forEach ( 
        (currentQuestion, questionNumber) => {
            var answers = [];

            for (Number in currentQuestion.answers){
                answers.push(
                    `<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${number} :
                    ${currentQuestion.answers[letter]}
                  </label>`
                  );
            }
                output.push(
                    `<div class="question"> ${currentQuestion.question} </div>
                    <div class="answers"> ${answers.join("")} </div>`
                );
            }
        )
    };


    getQuestion()



// questionEl.textContent = "Commonly used data types DO NOT include:";
// answerEl.textContent = ["alerts", "string", "booleans", "numbers"];

// answerBtn01.innerHTML = ("alerts");
// answerBtn02.innerHTML = ("strings");
// answerBtn03.innerHTML = ("booleans");
// answerBtn04.innerHTML = ("numbers");

// body.appendChild(questionEl);
// body.appendChild(answerEl);

// startBtn.addEventListener("click", function(runQuiz) {
//     runQuiz.preventDefault();
//     startCntnr.setAttribute("class:", "hide")
// })

// runQuiz();
// body.appendChild(answerBtn01);
// body.appendChild(answerBtn02);
// body.appendChild(answerBtn03);
// body.appendChild(answerBtn04);



// button.addEventListener("click", function () {
//     if ("click" === answerBtn01) {
//         console.log("Correct");
//     }
//     else if ("click" !== answerBtn01) {
//         console.log("Incorrect");
//     }
// })
    

// })

// var timer = questionEl.length * 15;

// var listEl = document.querySelectorAll("ol");
// var questionShownEl = document.getElementById("quiz-question");
// var answersBtn = document.querySelectorAll("li");
// var questionsEl = document.getElementById("questions");

// var answerOptionsEl = document.getElementById("options");
// var answersEl = document.getElementsByClassName("button");

// questionShownEl.textContent = getQuestion();
// answersEl.textContent = (questions[0(1)]);

// console.log(questionEl);
// console.log(answersEl);


// body.appendChild(answersEl);

// function getQuestion () {
//     var questionOptionsEl = document.getElementById("question");

//     for (i = 0; i = questions.length; i = ++) {
//         questionOptionsEl = 
//     }
//     var chosenQuestion = questions.length;
//     console.log(chosenQuestion);
//     questionShownEl.push(questionChars);


//     // for (i = 0; i < questions.length; i++) {
//         // chosenQuestion.push(questions);
//     // }
// }

// body.appendChild(questionShownEl);
