
$(document).ready(function () {
    ;
    var CorrectGuess = 0;
    var IncorrectGuess = 0;


    function initialize() {

        CorrectGuess = 0;
        updateTotalsOnUI();
    }

    function userGuess() {
        $("p1").onclick


    }

    function updateTotalsOnUI() {

        $('#CorrectGuess').text("Wins: " + wins);
        $('#Losses').text("Losses: " + losses);

        $("#RandomScore").text("Random Score: " + initialRandomScore);

    }
    function CorrectGuess() {
        UserGuess = CorrectGuess;

        $("#CorrectGuess").text(CorrectGuess);

        if (UserGuess > initialRandomScore) {

            IncorrectGuess += 1;

            initialize();
        } else if (totalScore === initialRandomScore) {
            wins += 1;

            initialize();
        }
        updateTotalsOnUI();
    }


    $(".AnswerChoice").on("click", CorrectGuess)

    initialize();
});