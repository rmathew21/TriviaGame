$(document).ready(function () {
	$("#start-button").on("click", gameStart.startTimer);
	
})

let gameStart = {

	startTime: 60,

	startTimer: function () {
		$("#timer").text("Time remaining: " + gameStart.startTime);
		setInterval(gameStart.countdown, 1000);
		$("#start-game").hide();
		trivia.displayQuestions();
		
	},

	countdown: function () {
		gameStart.startTime--;
		$("#timer").text("Time remaining: " + gameStart.startTime);
		if (gameStart.startTime === 0) {
			gameStart.stopTimer();
			$("timer").empty();
		}
	},

	stopTimer: function () {
		clearInterval();
		trivia.checkAnswers();
	},

	showEnd: function (numCorrect, numIncorrect, numUnanswered) {
		$("#end").show();
		$("#questions").empty();
		$("#timer").empty();
		$("#timer").hide();
		$("#correct-answers").text("Correct answers: " + numCorrect);
		$("#incorrect-answers").text("Incorrect answers: " + numIncorrect);
		$("#unanswered").text("Skipped questions: " + numUnanswered);
	}
}

let trivia = {

	displayQuestions: function () {
		let divContainer = $("#questions");
		let answerGroup = $(".form-check");
		divContainer.append('<h2>Answer the following questions:</h2>');

		for (var i=0; i <questionBank.length; i++) {

			divContainer.append('<div id="questions">' + questionBank[i].question + '</div>');

			let answer1 = questionBank[i].answers[0];
			let answer2 = questionBank[i].answers[1];
			let answer3 = questionBank[i].answers[2];

			divContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group' + i + '" id="radio' + i + '"><label class="form-check-label" id="radio' + i + 'label" for="radio' + i + '">' + answer1 + '</label></div>');
			divContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group' + i + '" id="radio' + i + '"><label class="form-check-label" id="radio' + i + 'label" for="radio' + i + '">' + answer2 + '</label></div>');
			divContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group' + i + '" id="radio' + i + '"><label class="form-check-label" id="radio' + i + 'label" for="radio' + i + '">' + answer3 + '</label></div>');
		}
		let doneButton = '<button class="btn btn-primary" id="done-button" type="submit">Done</button>';
		divContainer.append(doneButton);
		$("#done-button").on("click", gameStart.stopTimer);
	},

	checkAnswers: function () {
		let correctAnswer;
		let userAnswer;
		let numCorrect = 0;
		let numIncorrect = 0;
		let numUnanswered = 0;

		for (var i = 0; i < questionBank.length; i++) {
			correctAnswer = questionBank[i].correct;
			userAnswer = $('input[id=radio' + i + ']:checked + label').text();

			if (userAnswer === correctAnswer) {
				numCorrect++;
			} else if (userAnswer === "") {
				numUnanswered++;
			} else if (userAnswer !== correctAnswer) {
			 {
				numIncorrect++;
			 }
			}
		}

		gameStart.showEnd(numCorrect, numIncorrect, numUnanswered);
	},
}

let questionBank = 
	[
		{
			question: "What is the name of the book that Michael Scott 'wrote'?",
			answers: ["Always be closing, Stupid", "Somehow I manage", "Threat Level Midnight"],
			correct: "Somehow I manage"
		},
		{
			question: "What is the name of the security guard at Dunder Mifflin?", 
			answers: ["Elliot", "Chief", "Hank"],
			correct: "Hank"
		},
		{
			question: "Which brand of ladies suits does Michael accidentally buy?", 
			answers: ["Missterious", "Le Suit", "Anne Klien"],
			correct: "Missterious"
		},
		{
			question: "During the Office Olympics, who wins Flonkertin?",
			answers: ["Stanley", "Phyllis", "Kevin"],
			correct: "Phyllis"
		},
		{
			question: "Who complains about the men's bathroom being white's only?",
			answers: ["Stanley", "Michael", "Creed"],
			correct: "Creed"
		},
	]
  