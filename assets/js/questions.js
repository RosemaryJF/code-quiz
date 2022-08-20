// var timer = questionEl.length * 15;
var body = document.body;
var listEl = document.querySelectorAll("ol");
var questionEl = document.getElementById("quiz-questions");
var answersBtn = document.querySelectorAll("li");
var answersEl = document.getElementsByClassName("button");

questionEl.textContent ="Commonly used data types DO NOT include:";
answersEl.textContent = ["arrays", "strings", "booleans", "numbers"];
answersBtn.textContent = (answersEl[0]);

console.log(questionEl);
console.log(answersEl);

body.appendChild(questionEl);
body.appendChild(answersBtn);


// Example of quiz option using prompts
// var question = [
//     ["Commonly used data types DO NOT include:", "strings, booleans", "arrays"],
//     ["What is the capital of France?", "PARIS", "Remember the eiffel tower?"],
//     ["What is the capital of Canada?", "OTTAWA", "Lot of mooses there"]
//     ];
    
//     var correctAnswers = 0;
    
//     for (var i = 0; i < question.length; i++) {
//         var answer = prompt(question[i][0]);
//         if (answer.toUpperCase() == question[i][1]) {
//             alert("Correct! " + question[i][2]);
//             correctAnswers++;
//         }
//         else {
//             alert("incorrect, the correct answer was " + question[i][1]);
//         }
//     }