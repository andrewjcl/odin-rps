function computerPlay() {
    let compChoice = Math.floor(Math.random() * 3);
    if (compChoice == 0) {
        return "rock";
    } else if (compChoice == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function userPlay() {
    let userChoice = window.prompt('Enter your choice: ');
    return userChoice;
}

function getResult() {
    if (computerScore > userScore) {
        return 'WINNER: Computer!';
    } else if (userScore > computerScore) {
        return 'WINNER: User!';
    } else {
        return 'DRAW...';
    }
}

let computerScore = 0;
let userScore = 0;
let round = 0;

while (round < 5) {
    let userMove = userPlay();
    let computerMove = computerPlay();
    round++;

    console.log(`==== Round ${round} ====`)
    console.log(`Computer: ${computerMove}`);
    console.log(`User: ${userMove}`);


    if (userMove == computerMove) {
        console.log(`DRAW!`)
    } else if (userMove == 'paper') {
        if (computerMove == 'rock') {
            console.log('Player wins!');
            userScore++;
        } else {
            console.log('Computer wins!')
            computerScore++;
        }
    } else if (userMove == 'rock') {
        if (computerMove == 'paper') {
            console.log('Computer wins!');
            computerScore++;
        } else {
            console.log('Player wins!');
            userScore++;
        }
    } else if (userMove == 'scissors') {
        if (computerMove == 'paper') {
            console.log('Player wins!')
            userScore++;
        } else {
            console.log('Computer wins!');
            computerScore++;
        }
    }
}

console.log("***************")
console.log("Final Score:")
console.log("***************")
console.log(`Player: ${userScore}`);
console.log(`Computer: ${computerScore}`);
console.log("***************")
console.log(getResult());

