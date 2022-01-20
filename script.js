function getRandomNumber() {
    const max = 3;
    return Math.floor(Math.random() * max);
}

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

function playRound(player_pick, computer_pick) {
    player_pick = player_pick.toLowerCase();
    // in case of wrong input
    if (player_pick !== 'rock' && player_pick !== 'paper' && player_pick !== 'scissors') {
        console.log("Must enter 'rock', 'paper', or 'scissors'");
        return playRound(promptPlayer(), computer_pick);
    // in case of tie
    }   else if (player_pick === computer_pick) {
        return "it is a tie";
    }   else if ((player_pick === 'rock' && computer_pick === 'scissors') ||
            (player_pick === 'scissors' && computer_pick === 'paper') ||
            (player_pick === 'paper' && computer_pick === 'rock')) {
        return `You win! ${player_pick.toUpperCase()} beats ${computer_pick.toUpperCase()}`;
    }   else {
        return `You lose! ${computer_pick.toUpperCase()} beats ${player_pick.toUpperCase()}`;
    }
}

function promptPlayer() {
    let pick = prompt("Pick 'rock', 'paper', or 'scissors'");
    return pick;
}