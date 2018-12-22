//Store DOM in variable
var playerScore = 0
var computerScore = 0
var playerScoreID = document.getElementById('playerScore')
var computerScoreID = document.getElementById('computerScore')
var result = document.querySelector('.result > h3')
var rock = document.getElementById('rock')
var paper = document.getElementById('paper')
var scissor = document.getElementById('scissor')

//Function main()
function main() {
    rock.addEventListener('click', function() {
        ruleGame('rock')
    })

    paper.addEventListener('click', function() {
        ruleGame('paper')
    })

    scissor.addEventListener('click', function() {
        ruleGame('scissor')
    })

}
//Player win
function win(playerRPS, computerRPS) {
    playerScore += 1
    playerScoreID.innerHTML = playerScore
    computerScoreID.innerHTML = computerScore
    if (playerRPS === 'rock') {
        var outUser = 'Rock'
    } else if (playerRPS === 'paper') {
        var outUser = 'Paper'
    } else if (playerRPS === 'scissor') {
        var outUser = 'Scissor'
    }

    if (computerRPS === 'rock') {
        var outComp = 'Rock'
    } else if (computerRPS === 'paper') {
        var outComp = 'Paper'
    } else if (computerRPS === 'scissor') {
        var outComp = 'Scissor'
    }
    result.innerHTML = 'You win using ' + outUser + ' againts ' + outComp + '!'
}

//Player lose
function lose(playerRPS, computerRPS) {
    computerScore += 1
    playerScoreID.innerHTML = playerScore
    computerScoreID.innerHTML = computerScore
    if (playerRPS === 'rock') {
        var outUser = 'Rock'
    } else if (playerRPS === 'paper') {
        var outUser = 'Paper'
    } else if (playerRPS === 'scissor') {
        var outUser = 'Scissor'
    }

    if (computerRPS === 'rock') {
        var outComp = 'Rock'
    } else if (computerRPS === 'paper') {
        var outComp = 'Paper'
    } else if (computerRPS === 'scissor') {
        var outComp = 'Scissor'
    }
    result.innerHTML = 'You lose, your ' + outUser + ' beaten by ' + outComp + '.'
}

//Player draw
function draw(playerRPS, computerRPS) {
    playerScoreID.innerHTML = playerScore
    computerScoreID.innerHTML = computerScore
    result.innerHTML = 'It is a draw!'
}

//Get computer rock paper scissor
function computer() {
    var option = ['rock', 'paper', 'scissor']
    var mathRandom = Math.random() * 3
    var randomNumber = Math.floor(mathRandom)
    return option[randomNumber]
}

//Proccess the game
function ruleGame(playerRPS) {
    var computerRPS = computer()
    if (playerRPS === 'rock' && computerRPS === 'scissor') {
        return win(playerRPS, computerRPS)
    } else if (playerRPS === 'scissor' && computerRPS === 'paper') {
        return win(playerRPS, computerRPS)
    } else if (playerRPS === 'paper' && computerRPS === 'rock') {
        return win(playerRPS, computerRPS)
    } else if (playerRPS === 'rock' && computerRPS === 'paper') {
        return lose(playerRPS, computerRPS)
    } else if (playerRPS === 'paper' && computerRPS === 'scissor') {
        return lose(playerRPS, computerRPS)
    } else if (playerRPS === 'scissor' && computerRPS === 'rock') {
        return lose(playerRPS, computerRPS)
    } else if (playerRPS === 'rock' && computerRPS === 'rock') {
        return draw(playerRPS, computerRPS)
    } else if (playerRPS === 'paper' && computerRPS === 'paper') {
        return draw(playerRPS, computerRPS)
    } else if (playerRPS === 'scissor' && computerRPS === 'scissor') {
        return draw(playerRPS, computerRPS)
    }
}

//Call main()
main()