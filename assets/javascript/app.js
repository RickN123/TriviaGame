///declares all the arrays
var timeleft = 30000;
var correctGuess = ["Q1A1", "Q2A4", "Q3A4"];
var incorrrectGuess = ["Q1A2", "Q1A3", "Q1A4", "Q2A1", "Q2A2", "Q2A3", "Q3A1", "Q3A2", "Q3A3"]
var correctGuessCount = 0;
var incorrectGuessCount = 0;
///decreases the time 
///decreases by 1 second
///continues with the second if and calls itself if still more time

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
    ///grabs the remaining time and delivers it onto the html and adjusts the timeleft to be inline with seconds remaining
    document.getElementById("TimeRemaining").innerHTML = (timeleft / 1000) + " seconds remaining";

}

///initializes all the variables for the timer and correct/incorrect counts
function initialize() {
    timeleft = 30000;
    correctGuessCount = 0;
    incorrectGuessCount = 0;
    setTimeout(
        decreaseTime, 1000
    )
}
// gets the users answer from th radio group-sets up a parameter through option name to grab the option ID if selected, if not it is viewed as incorrect
function getUserAnswer(optionName) {
    var selectedItem = document.querySelector('input[name="' + optionName + '"]:checked');
    if (selectedItem) {
        return selectedItem.id;
    }
    return "";
}

function finishtest() {
    ///pushing user guesses against the correct answers
    var userAnswers = [];
    userAnswers.push(getUserAnswer("Q1option"));
    userAnswers.push(getUserAnswer("Q2option"));
    userAnswers.push(getUserAnswer("Q3option"));
    ///counting correct and incorrect guesses
    for (var i = 0; i < correctGuess.length; i++) {
        if (correctGuess[i] === userAnswers[i]) {
            correctGuessCount += 1;
        } else {
            incorrectGuessCount += 1;
        }
    }
    ///Pushes alert for time expired
    alert("Time Expired!");
    updateTotalsOnUI()


}



function updateTotalsOnUI() {
    ///updating UI correct guess count
    $('#correctGuess').text(correctGuessCount);
    $('#incorrectGuess').text(incorrectGuessCount);

}


initialize();
