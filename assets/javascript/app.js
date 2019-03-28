$(document).ready(function () {
	$("#start-button").on("click", gameStart.startTimer);
	console.log(gameStart);
})

let gameStart = {

	startTime: 60,

	startTimer: function () {
		$("#timer").text("Time remaining: " + gameStart.startTime);
		setInterval(gameStart.countdown, 1000);
		$("#start-game").hide();
		trivia.displayQuestions();
		console.log(start-game);
	},

	countdown: function () {
		gameStart.timeRemaining--;
		$("#timer").text("Time remaining: " + gameStart.timeRemaining);
		if (gameStart.timeRemaining === 0) {
			gameStart.stopTimer();
			$("timer").empty();
		}
	},
}