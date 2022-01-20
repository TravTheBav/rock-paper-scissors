// will return only 0, 1, or 2
function getRandomNumber() {
    const max = 3;
    return Math.floor(Math.random() * max);
}

// converts 0, 1, or 2 into respective string representations
function computerPlay() {
    const seed = getRandomNumber();
    if (seed === 0) {
        return 'rock';
    }   else if (seed === 1) {
        return 'paper';
    }   else {
        return 'scissors';
    }
}

// logs the result of a round and returns a number based on who won that round
function playRound(player_pick, computer_pick) {
    player_pick = player_pick.toLowerCase();
    // in case of wrong input
    if (player_pick !== 'rock' && player_pick !== 'paper' && player_pick !== 'scissors') {
        console.log("Must enter 'rock', 'paper', or 'scissors'");
        return playRound(promptPlayer(), computer_pick);
    // in case of tie
    }   else if (player_pick === computer_pick) {
        console.log("it is a tie");
        return 0;
    }   else if ((player_pick === 'rock' && computer_pick === 'scissors') ||
            (player_pick === 'scissors' && computer_pick === 'paper') ||
            (player_pick === 'paper' && computer_pick === 'rock')) {
        console.log(`You win! ${player_pick.toUpperCase()} beats ${computer_pick.toUpperCase()}`);
        return 1;
    }   else {
        console.log(`You lose! ${computer_pick.toUpperCase()} beats ${player_pick.toUpperCase()}`);
        return 2;
    }
}

function promptPlayer() {
    let pick = prompt("Pick 'rock', 'paper', or 'scissors'");
    return pick;
}

// runs a best of 5 R-P-S match
function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let roundResult = playRound(promptPlayer(), computerPlay());
        switch (roundResult) {
            case 1:
                playerScore++;
                break;
            case 2:
                computerScore++;
                break;    
        }
    }
    displayWinner(playerScore, computerScore);
}

// compares scores and logs the winner
function displayWinner(playerScore, computerScore) {
    if (playerScore > computerScore) {
        console.log("You won the match!");
    } else if (computerScore > playerScore) {
        console.log("You lost the match...");
    } else {
        console.log("It was a tie");
    }
}

game();