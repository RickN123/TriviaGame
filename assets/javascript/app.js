window.onload = function () {

    $("#start").on("click", start);

    $(document).ready(function () {
        ;

        var correctGuess = ["Answer-1", "Answer-8", "Answer-12"]
        var IncorrectGuess = ["Answer-2", "Answer-3", "Answer-4", "Answer-5", "Answer-6", "Answer-7", "Answer-9", "Answer-10", "Answer-11"];


        function initialize() {

            CorrectGuess = 0;
            updateTotalsOnUI();
        }

        function updateTotalsOnUI() {

            $('#correctGuess').onclick("Wins: " + wins);
            $('#incorrrectGuess').onclick("Losses: " + losses);

        }
        function correctGuess() {
            UserGuess = correctGuess;

            $("#correctGuess").text(correctGuess);

            if (UserGuess != CorrectGuess) {

                IncorrectGuess += 1;

                initialize();
            }
            updateTotalsOnUI();
        }


        $(".AnswerChoice").on("click", correctGuess)

        initialize();
    });