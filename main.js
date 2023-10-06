let symbolText = document.getElementById("symbol")
let middleText = document.getElementById("middle-text")

let gameInProgress = false

// Choices
let playerChoice = ""
let computerChoice = ""

// Score
let playerScore = 0
let computerScore = 0

function delay(milliseconds){
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}

function disableButtons() {
    // Disables the buttons using CSS and stuff.
}

async function restartGame(winner) {
    // Update Points
    document.getElementById("playerScoreText").innerHTML = "Player: " + playerScore.toString()
    document.getElementById("computerScoreText").innerHTML = "Computer: " + computerScore.toString();
    // Display Winner
    if(winner != "Tie") {
        middleText.innerHTML = winner + " wins"
    } else {
        middleText.innerHTML = "Tie."
    }
    await delay(2000)
    middleText.innerHTML = "Restarting..."
    await delay(2000)

    // Reset
    middleText.innerHTML = "VS"
    document.getElementById("symbolComputer").innerText = ""
    document.getElementById("symbolPlayer").innerText = ""
    gameInProgress = false;
    
}

function selectWinner() {
    let winner = ""
    if(playerChoice === computerChoice) {
        winner = "Tie"
    } else if(playerChoice === '✊' & computerChoice === '✌️') {
        winner = "Player"
        playerScore++
    } else if(playerChoice === '✋' & computerChoice === '✊') {
        winner = "Player"
        playerScore++
    } else if(playerChoice === '✌️' & computerChoice === '✋') {
        winner = "Player"
        playerScore++
    } else if(computerChoice === '✊' & playerChoice === '✌️'){
        winner = "Computer"
        computerScore++
    } else if(computerChoice === '✋' & playerChoice === '✊') {
        winner = "Computer"
        computerScore++
    } else if(computerChoice === '✌️' & playerChoice === '✋') {
        winner = "Computer"
        computerScore++
    } else {
        console.log("error")
    }

    restartGame(winner)

}

 async function loadAnswer() {
    console.log(`Computer Choice is: ${computerChoice}`)
    console.log(`Player Choice is: ${playerChoice}`)
    document.getElementById("symbolComputer").innerText = "✊"  
    document.getElementById("symbolPlayer").innerText = "✊"
    middleText.innerHTML = "Rock"  
    await delay(500)
    document.getElementById("symbolComputer").innerText = "✋"
    document.getElementById("symbolPlayer").innerText = "✋"
    middleText.innerHTML = "Paper"  
    await delay(500)
    document.getElementById("symbolComputer").innerText = "✌️"
    document.getElementById("symbolPlayer").innerText = "✌️"
    middleText.innerHTML = "Scissors"  
    await delay(500)
    //document.getElementById("symbolComputer").innerText = ""
    //document.getElementById("symbolPlayer").innerText = ""
    middleText.innerHTML = "Shoot!"  
    await delay(250)
    document.getElementById("symbolComputer").innerText = computerChoice
    document.getElementById("symbolPlayer").innerText = playerChoice

    selectWinner()
    
}

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    if(randomNumber === 0) {
        computerChoice = '✊'
    } else if(randomNumber === 1) {
        computerChoice = '✋'
    } else if(randomNumber === 2) {
        computerChoice = '✌️'
    }
    
    loadAnswer()
}

function getPlayerChoice(symbol) {
    if(symbol === 'rock') {
        return '✊'
    } else if(symbol === 'paper') {
        return '✋'
    } else if(symbol === 'scissors') {
        return '✌️'
    }
}

function startGame(symbol) {
    if(gameInProgress == false) {
        console.log(symbol)
        gameInProgress = true
        playerChoice = getPlayerChoice(symbol)
        getComputerChoice()
    }
}