var gameTally = 0;
var totalNumOfGames = 0;
var userChoice;
var computerChoice;
var userWins = 0;
var computerWins = 0;
var result;
var finalResult;
var cond = false;
var cond2 = false;
var cond3 = false;
var condOther = false;

function theGame() {
	if(gameTally < totalNumOfGames && !cond) {
		gameTally++;
		console.log("first one");
		$("#game-tally").text("Game #" + gameTally);
		computerChoice = Math.floor(Math.random() * 3);
		if(computerChoice === 0) {
			computerChoice = "rock";
		} else if(computerChoice === 1) {
			computerChoice = "paper";
		} else if(computerChoice === 2) { // didn't need to put an else if here... but I like it =D
			computerChoice = "scissor";
		}

		if(computerChoice === userChoice) {
			result = "You chose "+userChoice+" and the computer also chose "+computerChoice+", so it's a draw.";
			$("#result").text(result);
			score = "You: "+userWins+" Computer: "+computerWins;
			$("#score-board").text(score);
		} else if(userChoice === "rock") {
			if(computerChoice === "paper") {
				result = "Oh! You chose "+userChoice+" but the computer chose "+computerChoice+", so the computer won.";
				$("#result").text(result);
				computerWins++;
				score = "You: "+userWins+" Computer: "+computerWins;
				$("#score-board").text(score);
			} else if(computerChoice === "scissor") {
				result = "Yeah! You chose "+userChoice+" and the computer chose "+computerChoice+", so you win.";
				$("#result").text(result);
				userWins++;
				score = "You: "+userWins+" Computer: "+computerWins;
				$("#score-board").text(score);
			}
		} else if(userChoice === "paper") {
			if(computerChoice === "rock") {
				result = "Yeah! You chose "+userChoice+" and the computer chose "+computerChoice+", so you win.";
				$("#result").text(result);
				userWins++;
				score = "You: "+userWins+" Computer: "+computerWins;
				$("#score-board").text(score);
			} else if(computerChoice === "scissor") {
				result = "Oh! You chose "+userChoice+" but the computer chose "+computerChoice+", so the computer won.";
				$("#result").text(result);
				computerWins++;
				score = "You: "+userWins+" Computer: "+computerWins;
				$("#score-board").text(score);
			}
		} else if(userChoice === "scissor") {
			if(computerChoice === "rock") {
				result = "Oh! You chose "+userChoice+" but the computer chose "+computerChoice+", so the computer won.";
				$("#result").text(result);
				computerWins++;
				score = "You: "+userWins+" Computer: "+computerWins;
				$("#score-board").text(score);
			} else if(computerChoice === "paper") {
				result = "Yeah! You chose "+userChoice+" and the computer chose "+computerChoice+", so you win.";
				$("#result").text(result);
				userWins++;
				score = "You: "+userWins+" Computer: "+computerWins;
				$("#score-board").text(score);
			}
		}

		if(gameTally === totalNumOfGames && computerWins === userWins) {
			finalResult = "You should play one more game.";
			$("#final-result").text(finalResult);
			console.log("Extra game!");
			cond = true;
		} else {
			console.log("all good!");
		}
	} else if(cond && !cond2 && !condOther) {
		gameTally++;
		console.log("second one");
		$("#game-tally").text("Game #" + gameTally);
		computerChoice = Math.floor(Math.random() * 3);
		if(computerChoice === 0) {
			computerChoice = "rock";
		} else if(computerChoice === 1) {
			computerChoice = "paper";
		} else if(computerChoice === 2) { // didn't need to put an else if here... but I like it =D
			computerChoice = "scissor";
		}

		if(computerChoice === userChoice) {
			result = "You chose "+userChoice+" and the computer also chose "+computerChoice+", so it's a draw.";
			$("#result").text(result);
			score = "You: "+userWins+" Computer: "+computerWins;
			$("#score-board").text(score);
		} else if(userChoice === "rock") {
			if(computerChoice === "paper") {
				result = "Oh! You chose "+userChoice+" but the computer chose "+computerChoice+", so the computer won.";
				$("#result").text(result);
				computerWins++;
				score = "You: "+userWins+" Computer: "+computerWins;
				$("#score-board").text(score);
			} else if(computerChoice === "scissor") {
				result = "Yeah! You chose "+userChoice+" and the computer chose "+computerChoice+", so you win.";
				$("#result").text(result);
				userWins++;
				score = "You: "+userWins+" Computer: "+computerWins;
				$("#score-board").text(score);
			}
		} else if(userChoice === "paper") {
			if(computerChoice === "rock") {
				result = "Yeah! You chose "+userChoice+" and the computer chose "+computerChoice+", so you win.";
				$("#result").text(result);
				userWins++;
				score = "You: "+userWins+" Computer: "+computerWins;
				$("#score-board").text(score);
			} else if(computerChoice === "scissor") {
				result = "Oh! You chose "+userChoice+" but the computer chose "+computerChoice+", so the computer won.";
				$("#result").text(result);
				computerWins++;
				score = "You: "+userWins+" Computer: "+computerWins;
				$("#score-board").text(score);
			}
		} else if(userChoice === "scissor") {
			if(computerChoice === "rock") {
				result = "Oh! You chose "+userChoice+" but the computer chose "+computerChoice+", so the computer won.";
				$("#result").text(result);
				computerWins++;
				score = "You: "+userWins+" Computer: "+computerWins;
				$("#score-board").text(score);
			} else if(computerChoice === "paper") {
				result = "Yeah! You chose "+userChoice+" and the computer chose "+computerChoice+", so you win.";
				$("#result").text(result);
				userWins++;
				score = "You: "+userWins+" Computer: "+computerWins;
				$("#score-board").text(score);
			}
		}

		if(gameTally === (totalNumOfGames + 2) && computerWins === userWins) {
			finalResult = "You should play one more game.";
			$("#final-result").text(finalResult);
			console.log("Extra game!");
			cond2 = true;
			condOther = false;
		} else if(computerWins < userWins) {
			finalResult = "Congratulations! You defeated the computer.";
			$("#final-result").text(finalResult);
			condOther = true;
			$("#restart-button").fadeIn(1500);
		} else if(computerWins > userWins) {
			finalResult = "Sorry pal, the computer beated you. Better luck next time.";
			$("#final-result").text(finalResult);
			condOther = true;
			$("#restart-button").fadeIn(1500);
		}
	} else if(cond2 && !cond3 && !condOther) {
		gameTally++;
		console.log("third one");
		$("#game-tally").text("Game #" + gameTally);
		computerChoice = Math.floor(Math.random() * 3);
		if(computerChoice === 0) {
			computerChoice = "rock";
		} else if(computerChoice === 1) {
			computerChoice = "paper";
		} else if(computerChoice === 2) { // didn't need to put an else if here... but I like it =D
			computerChoice = "scissor";
		}

		if(computerChoice === userChoice) {
			result = "You chose "+userChoice+" and the computer also chose "+computerChoice+", so it's a draw.";
			$("#result").text(result);
			score = "You: "+userWins+" Computer: "+computerWins;
			$("#score-board").text(score);
		} else if(userChoice === "rock") {
			if(computerChoice === "paper") {
				result = "Oh! You chose "+userChoice+" but the computer chose "+computerChoice+", so the computer won.";
				$("#result").text(result);
				computerWins++;
				score = "You: "+userWins+" Computer: "+computerWins;
				$("#score-board").text(score);
			} else if(computerChoice === "scissor") {
				result = "Yeah! You chose "+userChoice+" and the computer chose "+computerChoice+", so you win.";
				$("#result").text(result);
				userWins++;
				score = "You: "+userWins+" Computer: "+computerWins;
				$("#score-board").text(score);
			}
		} else if(userChoice === "paper") {
			if(computerChoice === "rock") {
				result = "Yeah! You chose "+userChoice+" and the computer chose "+computerChoice+", so you win.";
				$("#result").text(result);
				userWins++;
				score = "You: "+userWins+" Computer: "+computerWins;
				$("#score-board").text(score);
			} else if(computerChoice === "scissor") {
				result = "Oh! You chose "+userChoice+" but the computer chose "+computerChoice+", so the computer won.";
				$("#result").text(result);
				computerWins++;
				score = "You: "+userWins+" Computer: "+computerWins;
				$("#score-board").text(score);
			}
		} else if(userChoice === "scissor") {
			if(computerChoice === "rock") {
				result = "Oh! You chose "+userChoice+" but the computer chose "+computerChoice+", so the computer won.";
				$("#result").text(result);
				computerWins++;
				score = "You: "+userWins+" Computer: "+computerWins;
				$("#score-board").text(score);
			} else if(computerChoice === "paper") {
				result = "Yeah! You chose "+userChoice+" and the computer chose "+computerChoice+", so you win.";
				$("#result").text(result);
				userWins++;
				score = "You: "+userWins+" Computer: "+computerWins;
				$("#score-board").text(score);
			}
		}

		if(gameTally === (totalNumOfGames + 3) && computerWins === userWins) {
			finalResult = "It's enough. This is clearly a draw!";
			$("#final-result").text(finalResult);
			console.log("Forced draw!");
			cond3 = true;
			$("#restart-button").fadeIn(1500);
		} else if(computerWins < userWins) {
			finalResult = "Congratulations! You defeated the computer.";
			$("#final-result").text(finalResult);
			cond3 = true;
			$("#restart-button").fadeIn(1500);
		} else if(computerWins > userWins) {
			finalResult = "Sorry pal, the computer beated you. Better luck next time.";
			$("#final-result").text(finalResult);
			cond3 = true;
			$("#restart-button").fadeIn(1500);
		}
	} else {
		console.log("You played enough!");

	}

	if(userWins > computerWins && gameTally === totalNumOfGames) {
		finalResult = "Congratulations! You defeated the computer.";
		$("#final-result").text(finalResult);
		$("#restart-button").fadeIn(1500);
	} else if(userWins < computerWins && gameTally === totalNumOfGames){
		finalResult = "Sorry pal, the computer beated you. Better luck next time.";
		$("#final-result").text(finalResult);
		$("#restart-button").fadeIn(1500);
	}
}

$(document).ready(function() {
	$("#actual-game").hide();
	$("#restart-button").hide();

	$(".header-title").hover(function(){
		$(".header-title-additional").addClass("black");
	}, function(){
		$(".header-title-additional").removeClass("black");
	});

	$("#best-of-three-button").click(function(){
		totalNumOfGames = 3;
		$("#preface").css("display","none");
		$("#actual-game").fadeIn(3000);
	});
	$("#best-of-six-button").click(function(){
		totalNumOfGames = 6;
		$("#preface").css("display","none");
		$("#actual-game").fadeIn(3000);
	});
	$("#best-of-ten-button").click(function(){
		totalNumOfGames = 10;
		$("#preface").css("display","none");
		$("#actual-game").fadeIn(3000);
	});
	$("#best-of-twenty-button").click(function(){
		totalNumOfGames = 20;
		$("#preface").css("display","none");
		$("#actual-game").fadeIn(3000);
	});

	
	$("#rock-game").hover(function(){
		$("#r-img").attr("src","rps rock red.png");
	}, function(){
		$("#r-img").attr("src","rps rock.png");
	});
	$("#paper-game").hover(function(){
		$("#p-img").attr("src","rps paper red.png");
	}, function(){
		$("#p-img").attr("src","rps paper.png");
	});
	$("#scissor-game").hover(function(){
		$("#s-img").attr("src","rps scissor red.png");
	}, function(){
		$("#s-img").attr("src","rps scissor.png");
	});

	$("#rock-game").click(function(){
		$("#r-img").attr("src","rps rock blue.png");
		userChoice = "rock";
		theGame();
	});
	$("#paper-game").click(function(){
		$("#p-img").attr("src","rps paper blue.png");
		userChoice = "paper";
		theGame();
	});
	$("#scissor-game").click(function(){
		$("#s-img").attr("src","rps scissor blue.png");
		userChoice = "scissor";
		theGame();
	});

	$("#restart-button").click(function(){
		gameTally = 0;
		userWins = 0;
		computerWins = 0;
		cond = false;
		cond2 = false;
		cond3 = false;
		condOther = false;
		$("#game-tally").text("");
		$("#result").text("");
		$("#score-board").text("");
		$("#final-result").text("");
		$(this).hide();
		$("#initial-sentence").css("display","none");
	})
	
});

