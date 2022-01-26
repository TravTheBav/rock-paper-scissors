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
    let result = null;
    let p = document.createElement("p");
    // in case of tie
    if (player_pick === computer_pick) {
        p.textContent = "It's a tie";
        result = 0;
    }   else if ((player_pick === 'rock' && computer_pick === 'scissors') ||
            (player_pick === 'scissors' && computer_pick === 'paper') ||
            (player_pick === 'paper' && computer_pick === 'rock')) {
        p.textContent = `You win! ${player_pick.toUpperCase()} beats ${computer_pick.toUpperCase()}`;
        result = 1;
    }   else {
        p.textContent = `You lose! ${computer_pick.toUpperCase()} beats ${player_pick.toUpperCase()}`;
        result = 2;
    }
    document.getElementById('results').appendChild(p);
    updateScore(result);
}

// runs a best of 5 R-P-S match
function game() {
    initButtons();
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

function initButtons() {
    let buttons = document.getElementsByTagName('button');
    buttons = Array.from(buttons);
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", () => playRound(buttons[i].id, computerPlay()));
    };
}

function updateScore(winner) {
    let score;
    if (winner == 0) {
        return; // early return if there is a tie
    }   else if (winner == 1) {
        score = document.querySelector("#human-player .score");        
    }   else if (winner == 2) {
        score = document.querySelector("#ai-player .score");
    }
    score.textContent = Number(score.textContent) + 1;
}

game();