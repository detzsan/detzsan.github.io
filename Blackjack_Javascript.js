/* generatedNumber is the array for the number that got randomly generated. shownNumber is what will display, made for special cases like Jack, Queen, King, Ace. addedNumber is what will be added to the total. 1 + 10 + 4 etc etc */
var generatedNumber = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"]
var shownNumber = ["an Ace", "a 2", "a 3", "a 4", "a 5", "a 6", "a 7", "a 8", "a 9", "a 10","a Jack", "a Queen", "a King"]
var addedNumber = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "10", "10", "10"] 
var total = 0;
var botTotal = 0;
var yourWinCount = 0;
var botWinCount = 0;
var drawCount = 0;
var theRound = 1;



function resetAll() {
	total = 0;
	botTotal = 0;
	yourWinCount = 0;
	botWinCount = 0;
	drawCount = 0;
	theRound = 1;
	document.getElementById('myTotal').value= total;
	document.getElementById('botTotal').value= botTotal
	document.getElementById('yourWins').value= yourWinCount
	document.getElementById('botWins').value= botWinCount
	document.getElementById('roundCount').value= theRound
	document.getElementById("bothTie").value=drawCount
}

function startUp() { 

document.getElementById('myTotal').value="0" 
document.getElementById('botTotal').value="0" 
total = 0;
botTotal = 0;
} 

function hitgenerate() {

 if (total <= 21) {
	ranNum = Math.floor(Math.random()*13)+1 
	for (i=0; i<generatedNumber.length; i++) {
		if(generatedNumber[i] == ranNum) {
			total = total + Number(addedNumber[i])
			break
		}
	}
	alert('You got ' + shownNumber[i] + '.')
	document.getElementById("myTotal").value = total;
	if (total > 21) {
	return gameCheck();
	}
}

}


function iamstanding() {
	
	for (standcount=0; standcount <3; standcount++) {
	
	if (botTotal <= 21) {
	ranNum = Math.floor(Math.random()*13)+1 
	for (i=0; i<generatedNumber.length; i++) {
		if(generatedNumber[i] == ranNum) {
			botTotal = botTotal + Number(addedNumber[i])
			break
		}
	}
	alert('The bot drew a ' + shownNumber[i] + '.')
	document.getElementById("botTotal").value = botTotal;
}
}
	setTimeout(gameCheck, 1000);
}

function roundCounter() {
	if (theRound < 10) {
		theRound = theRound + 1;
	document.getElementById("roundCount").value = theRound;
	}
	else if (theRound = 10) {
		alert('Thanks for playing!')
		return resetAll()
}
}


function playerWins() {
		alert('You Win!')
	yourWinCount = yourWinCount + 1;
	document.getElementById("yourWins").value=yourWinCount;
	return startUp();

}
function botWins() {
	alert('You Lose!')
	botWinCount = botWinCount + 1;
	document.getElementById("botWins").value=botWinCount
	return startUp();

}

function draw() {
	alert('Same score, Draw!')
	drawCount = drawCount + 1;
	document.getElementById("bothTie").value=drawCount

}

function gameCheck() {
	if (botTotal < total && total <= 21 || botTotal > 21) {
		return playerWins(), roundCounter();
		
	}
	else if (botTotal > total && botTotal <=21 || total > 21) {
		return botWins(), roundCounter();
	}
	else if (botTotal == total) {
		return draw(), roundCounter();
	}
}

