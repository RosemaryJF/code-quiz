var highScoreTable = document.getElementById("highscores");

function renderHighscores () {
    var name = JSON.parse(localStorage.getItem("name"));
    document.getElementsByTagName("table");
    highScoreTable.textContent = name;
    var score = JSON.parse(localStorage.getItem("score"));
    highScoreTable.textContent = score;
}

renderHighscores()