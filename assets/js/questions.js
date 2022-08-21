// Variable containg all code quiz questions, answer options, and answer as objects within.
var questions = [
    
    {
    question: "Commonly used data types DO NOT include:",
    answerOptions: ["1. alerts", "2. strings", "3. booleans", "4. numbers"],
    answer: "alerts"
    },

    {
    question: "The condition in an if/else statement is enclosed within _______.",
    answerOptions: ["1. parentheses", "2. curly brackets", "3. square brackets", "4. quotes"],
    answer: "parentheses",
    },

    {
    question: "Arrays in JavaScript can be used to store ________.",
    answerOptions: ["1. numbers & strings", "2. other arrays", "3. booleans", "4. all of the above"],
    answer: "all of the above",
    },

    {
    question: "String values must be enclosed within _______ when being assigned to variables.",
    answerOptions: ["1. commas", "2. curly brackets", "3. quotes", "4. parenthese"],
    answer: "quotes",
    },

    {
    question: "A very useful tool used during development and debugging for printing contect to the debugger is:",
    answerOptions: ["1. JavaScript", "2. terminal / bash", "3. for loops", "4. console.log"],
    answer: "console.log",
    },
];


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