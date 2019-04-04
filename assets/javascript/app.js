window.onload = function () {

    $("#start").on("click", start);

    $(document).ready(function () {
        ;

        var CorrectGuess = ["Answer-1", "Answer-8", "Answer-12"]
        var IncorrectGuess = ["Answer-2", "Answer-3", "Answer-4", "Answer-5", "Answer-6", "Answer-7", "Answer-9", "Answer-10", "Answer-11"];


        function initialize() {

            CorrectGuess = 0;
            updateTotalsOnUI();
        }

        function updateTotalsOnUI() {

            $('#CorrectGuess').onclick("Wins: " + wins);
            $('#IncorrrectGuess').text("Losses: " + losses);

            $("#RandomScore").text("Random Score: " + initialRandomScore);

        }
        function CorrectGuess() {
            UserGuess = CorrectGuess;

            $("#CorrectGuess").text(CorrectGuess);

            if (UserGuess > initialRandomScore) {

                IncorrectGuess += 1;

                wins += 1;

                initialize();
            }
            updateTotalsOnUI();
        }


        $(".AnswerChoice").on("click", CorrectGuess)

        initialize();
    });