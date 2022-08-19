var question = document.querySelectorAll("h2");
var answerBtn = document.querySelectorAll("button");

question.textContent = "Commonly used data types DO NOT include:";
console.log(question);
answerBtn.textContent = "arrays";
console.log(answerBtn);

var question = [
    ["Commonly used data types DO NOT include:", "strings, booleans", "arrays"],
    ["What is the capital of France?", "PARIS", "Remember the eiffel tower?"],
    ["What is the capital of Canada?", "OTTAWA", "Lot of mooses there"]
    ];
    
    var correctAnswers = 0;
    
    for (var i = 0; i < question.length; i++) {
        var answer = prompt(question[i][0]);
        if (answer.toUpperCase() == question[i][1]) {
            alert("Correct! " + question[i][2]);
            correctAnswers++;
        }
        else {
            alert("incorrect, the correct answer was " + question[i][1]);
        }
    }