var highScoreTable = document.getElementById("highscores");
var userScore = document.getElementById("user-score");
var userName = document.getElementById("user-name");

function renderHighscores () {

    var initials = JSON.parse(localStorage.getItem("user-initial"));
    userName.textContent = initials;

    var score = JSON.parse(localStorage.getItem("score"));
    userScore.textContent = score;
}

renderHighscores()

var goBackBtn = document.getElementById("go-back");
var clearScrsBtn = document.getElementById("clear-highscores");

goBackBtn.addEventListener("click", function (event) {
    event.stopPropagation;
    if ("click") {
        location.href = 'C:/Users/lee/Desktop/BOOTCAMP/Challenges/code-quiz/index.html';
    }
});

clearScrsBtn.addEventListener("click", function (event) {
    event.stopPropagation;
    if ("click") {
        userName.textContent = "";
        userScore.textContent = "";
        localStorage.clear();
    }
});

