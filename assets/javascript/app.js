var timeleft = 30000;
var correctGuess = ["Q1A1", "Q2A4", "Q3A4"];
var incorrrectGuess = ["Q1A2", "Q1A3", "Q1A4", "Q2A1", "Q2A2", "Q2A3", "Q3A1", "Q3A2", "Q3A3"]
var correctGuessCount = 0;
var incorrectGuessCount = 0;


function decreaseTime() {
    if (timeleft > 0) {
        timeleft -= 1000
    }
    if (timeleft > 0) {
        setTimeout(
            decreaseTime, 1000
        )
    }
    else {
        finishtest()
    }
    document.getElementById("TimeRemaining").innerHTML = (timeleft / 1000) + " seconds remaining";

}

function initialize() {
    timeleft = 30000;
    correctGuessCount = 0;
    incorrectGuessCount = 0;
    setTimeout(
        decreaseTime, 1000
    )
}
function getUserAnswer(optionName) {
    var selectedItem = document.querySelector('input[name="' + optionName + '"]:checked');
    if (selectedItem) {
        return selectedItem.id;
    }
    return "";
}

function finishtest() {
    var userAnswers = [];
    userAnswers.push(getUserAnswer("Q1option"));
    userAnswers.push(getUserAnswer("Q2option"));
    userAnswers.push(getUserAnswer("Q3option"));
    for (var i = 0; i < correctGuess.length; i++) {
        if (correctGuess[i] === userAnswers[i]) {
            correctGuessCount += 1;
        } else {
            incorrectGuessCount += 1;
        }
    }
    alert("Time Expired!");
    updateTotalsOnUI()


}



function updateTotalsOnUI() {
    $('#correctGuess').text(correctGuessCount);
    $('#incorrectGuess').text(incorrectGuessCount);

}


initialize();
