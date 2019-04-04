
$(document).ready(function () {

    var totalScore;
    var initialRandomScore;
    var wins = 0;
    var losses = 0;


    function initialize() {

        totalScore = 0;
        initialRandomScore = Math.floor(Math.random() * 101) + 19;
        updateTotalsOnUI();
    }

    function userGuess() {
        $("p1").onclick


    }

    function updateTotalsOnUI() {

        $('#Wins').text("Wins: " + wins);
        $('#Losses').text("Losses: " + losses);

        $("#RandomScore").text("Random Score: " + initialRandomScore);

    }
    function CorrectGuess() {
        UserGuess = CorrectGuess;

        $("#CorrectGuess").text(CorrectGuess);

        if (UserGuess > initialRandomScore) {

            losses += 1;

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