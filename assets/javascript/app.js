window.onload = function () {
    var timeleft = 30000;
    var downloadTimer = setInterval(function () {
        document.getElementById("TimeRemaining").innerHTML = timeleft + " seconds remaining";
        timeleft -= 1;
        if (timeleft <= 0) {
            clearInterval(downloadTimer);
            document.getElementById("TimeRemaining").innerHTML = "Finished"
        }
    }, 1000);

    window.onload = function () {
        $("#TimeRemaining").text("00:30")

        var clockRunning = true;

        if (!clockRunning) {
            intervalId = setInterval(decerement, -1000);
            clockRunning = true
        }
        ;

        var correctGuess = ["Answer-1", "Answer-8", "Answer-12"]
        var incorrectGuess = ["Answer-2", "Answer-3", "Answer-4", "Answer-5", "Answer-6", "Answer-7", "Answer-9", "Answer-10", "Answer-11"];


        function initialize() {

            CorrectGuess = 0;
            updateTotalsOnUI();
        }

        function updateTotalsOnUI() {

            $('#correctGuess').onclick("correctGuess" + correctGuess);
            $('#incorrrectGuess').onclick("incorrectGuess: " + incorrectGuess);

        }
        function correctGuess() {
            UserGuess = correctGuess;

            $("#correctGuess").text(correctGuess);

            if (UserGuess = correctGuess) {

                correctGuess += 1;

        else (UserGuess = incorrectGuess) {

                    incorrectGuess += 1;
                }
                initialize();
            }
            updateTotalsOnUI();
        }


        $(".Userguess").on("click", correctGuess)

        initialize();
    });