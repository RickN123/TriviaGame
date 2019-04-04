



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

    function updateTotalsOnUI() {

        $('#Wins').text("Wins: " + wins);
        $('#Losses').text("Losses: " + losses);

        $("#RandomScore").text("Random Score: " + initialRandomScore);

    }

    function makeRandomScore() {
        totalScore += Math.floor(Math.random() * 11) + 1;

        $("#TotalScore").text(totalScore);

        if (totalScore > initialRandomScore) {

            losses += 1;

            initialize();
        } else if (totalScore === initialRandomScore) {
            wins += 1;

            initialize();
        }
        updateTotalsOnUI();
    }


    $(".colorcrystal").on("click", makeRandomScore)

    initialize();
});