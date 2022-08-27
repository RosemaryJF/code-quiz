// Global variables for Highscores page
var userScore = document.getElementById("user-score");
var userName = document.getElementById("user-name");

// Function for rendering the highscores from local storage
function renderHighscores () {

    var initials = JSON.parse(localStorage.getItem("user-initial"));
    userName.textContent = initials;

    var score = JSON.parse(localStorage.getItem("score"));
    userScore.textContent = score;
}
renderHighscores()

// Global button variables
var goBackBtn = document.getElementById("go-back");
var clearScrsBtn = document.getElementById("clear-highscores");

// Event listener function for that happens when go back button is clicked
goBackBtn.addEventListener("click", function (event) {
    event.stopPropagation;
    if ("click") {
        location.href = 'C:/Users/lee/Desktop/BOOTCAMP/Challenges/code-quiz/index.html';
    }
});

// Event listener function for that happens when clear highscores button is clicked
clearScrsBtn.addEventListener("click", function (event) {
    event.stopPropagation;
    if ("click") {
        userName.textContent = "";
        userScore.textContent = "";
        localStorage.clear();
    }
});

