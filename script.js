//global variables
$(document).ready(function () {

	var numbersArray = [];
	var wins = 0;
	var loss = 0;
	var currentScore = 0;

	//number to match
	var matchMe = Math.floor(Math.random() * 102 + 19)
	$("#match").text(" " +matchMe);

//functions

	//generates number for each crystal
	function crystalNumbers() {
		for (var i = 0; i < 4; i++) {
			var x = Math.floor(Math.random() * 12 + 1);
			numbersArray.push(x);
		}

	}

crystalNumbers();	

//debug
		console.log(numbersArray)
		console.log(matchMe)
	
//on click functions
	$("#black").on ('click', function () {
		currentScore = currentScore + numbersArray[0];
		$("#score").text(" " + currentScore)

		if (currentScore == matchMe) {
			winner();
		}

		else if (currentScore > matchMe) {
			loser();
		}
	})

	$("#blue").on ('click', function () {
		currentScore = currentScore + numbersArray[1];
		$("#score").text(" " + currentScore)

		if (currentScore == matchMe) {
			winner();
		}

		else if (currentScore > matchMe) {
			loser();
		}
	})

	$("#pink").on ('click', function () {
		currentScore = currentScore + numbersArray[2];
		$("#score").text(" " + currentScore)

		if (currentScore == matchMe) {
			winner();
		}

		else if (currentScore > matchMe) {
			loser();
		}
	})

	$("#red").on ('click', function () {
		currentScore = currentScore + numbersArray[3];
		$("#score").text(" " + currentScore)

		if (currentScore == matchMe) {
			winner();
		}

		else if (currentScore > matchMe) {
			loser();
		}
	})

//game conditions
	
	//win
	function winner(){
		wins++;
		$("#wins").text(" " + wins)
		reset()
	}

	//lose
	function loser(){
		loss++;
		$("#loss").text(" " + loss)
		reset()
	}
	
	//game reset

	function reset () {
		numbersArray = [];
		matchMe = Math.floor(Math.random() * 102 + 19)
		crystalNumbers ();
		$("#match").text(" " +matchMe);
		currentScore = 0;
		$("#score").text(" " + currentScore);

//debug . displays new numbersArray + number matchME after win/loss
		console.log(numbersArray)
		console.log(matchMe)
	}

});