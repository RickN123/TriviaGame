var timeleft = 30000;
var correctGuess = ["Q1A1", "Q2A4", "Q3A4"]

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
    CorrectGuess = 0;
    setTimeout(
        decreaseTime, 1000
    )

}
function finishtest() {
    alert("Time Expired!")

}
window.onload = function () {
    initialize()

}






updateTotalsOnUI();
}

function updateTotalsOnUI() {

    $('#correctGuess').append("correctGuess" + correctGuess);
    $('#incorrrectGuess').append("incorrectGuess: " + incorrectGuess);

}
function correctGuess() {
    UserGuess = correctGuess;

    $("#correctGuess").text(correctGuess);

    if (UserGuess = correctGuess) {

        correctGuess += 1;
    }

    else if (UserGuess = incorrectGuess) {

        incorrectGuess += 1;
    }
    initialize();
}
updateTotalsOnUI();
}


$(".Userguess").on("click", correctGuess)

initialize();
