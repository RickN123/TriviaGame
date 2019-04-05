<!--
<!DOCTYPE html>
<html lang="en-us">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>TopGun Trivia</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href=assets/css/style.css> </head> <body>
///Standard set up for page - used framework from previous crystal game to start with bootstrap

///set up container for h1 and larger text
    <div class="container">

        <div class="width=100% p-3 mb-2 bg-primary text-white text-center">
            <h1>TopGun Trivia</h1>
            </nav>
        </div>

///build for timer - set to update UI
        <div id="content">
            <div TimeRemaining>Time Remaining 00:30
            </div>

///form method with radio button to highlight 1 when selected
///3 questions provided with multiple answers below and different button IDs for each
            <form method="POST">
                <input type="radio">
                <p1>Who was Maverick's WingMan?</p1>
                <br>
                <br>
                <button id="Answer-1">Goose</button><button id="Answer-2">Iceman</button><button
                    id="Answer-3">Hollywood</button><button id="Answer-4">Viper</button>
                <br>
                <br>
                <p3>Who shot Viper?</p3>
                <br>
                <br>
                <button id="Answer-5" Input type="Radio">Merlin</button><button id="Answer-6" Input
                    type="Radio">Sundown</button><button id="Answer-7" Input type="Radio">Hollywood</button><button
                    id="Answer-8" Input type="Radio">Maverick</button>
                <br>
                <br>
                <p5>Who does Iceman say can be his wingman anytime?</p5>
                <br>
                <br>
                <button id="Answer-9">Goose</button><button id="Answer-10">Hollywood</button><button
                    id="Answer-11">Viper</button><button id="Answer-12">Maverick</button>
                <br>
                <br>
                <br>
                <br>

///Correct guess, Incorrect Guess, Unanswered divs set
                <h3>Correct Guess:</h3>
                <div id="correctGuess">0</div>
                <h4>Incorrect Guess:</h4>
                <div id="incorrectGuess">0</div>
                <h5>Unanswered:</h5>
                <div id="unanswered">0</div>
        </div>

        </form>
        <br>

        <div id="scoreboard" class="bg-danger">
            <div class="row">
            </div>
        </div>

    </div>
    </div>
    <br>
    <br>

    <footer></footer>
    <script src="https://code.jquery.com/jquery-3.3.1.min.js"
        integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>

    <script src="assets/javascript/app.js"></script>
    </body>

</html>

---------------------------------------------------------------------------

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
    ///updating UI correct guess count and incorrect guess count
    $('#correctGuess').text(correctGuessCount);
    $('#incorrectGuess').text(incorrectGuessCount);

}


initialize();
