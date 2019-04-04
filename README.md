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