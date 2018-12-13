// 1. Set up board: check!
// 2. user should be able to click on the Button; when the click happens, the square sould have that player's mark (x or o)
// 3. If it's x's turn, put an x in, otherwise, put an 0!
// 4. In order to accomplish 3, we must know humane turn it is! After x goes,o, then vice versa
// 5. Keep other player from taking a square
// 6. See if someone won! if so, congrats!
// 7. Stop the game if someone won, otherwise, let it keep going 

// =========== GLOBALS! ============
let humanTurn = true; // "X"
let gameOn = true;
let compTurn = false;
let isTied = false;
let win = false;

let player1Squares = [];
let player2Squares= [];
let filledSquareCount = 0;

// array of all winning combos
const winningCombos = [
    ["A1", "B1", "C1"],
    ["A2", "B2", "C2"],
    ["A3", "B3", "C3"],
    ["A1", "A2", "A3"],
    ["B1", "B2", "B3"],
    ["C1", "C2", "C3"],
    ["A1", "B2", "C3"],
    ["A3", "B2", "C1"],
]

let resetButton = document.querySelector('#reset-button')
resetButton.className += " hidden"

const squares = document.getElementsByClassName('square');

for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", function(event){
    if(gameOn) {
        if (this.innerHTML == "-") {
                this.innerHTML = "X"; // update the DOM
                humanTurn = "computer"; // update JS
                filledSquareCount++
                player1Squares.push(this.id)
                checkWin(player1Squares, 1)
                checkTie()
                humanTurn = false;
                computerTurn = true;
                if (computerTurn) {
                    computerMove();
                    filledSquareCount++
                    checkWin(player2Squares, 2);
                    checkTie();
                }
            }
        } else {
            document.getElementById('message').innerHTML = "Sorry, that square is taken!"
            } 
        }    
        )
    }

function computerMove() {
    const letter = ["A", "B", "C"];
    let randomLet = Math.floor(Math.random() * 3);
    let randomNum = Math.ceil(Math.random() * 3);
    let computerPlay = letter[randomLet] + randomNum.toString();
    if (!player1Squares.includes(computerPlay) && !player2Squares.includes(computerPlay)) {
        player2Squares.push(computerPlay);
        squares[computerPlay].innerHTML = "O";
        computerTurn = false;
        humanTurn = true;
    } else if (isTied == false && filledSquareCount <= squares.length) {
        computerMove() //why is this causing a callstack max error ONLY when i win/tie at the same time!????
    } else {
        tie()
    }
}

function checkTie() {
    if (filledSquareCount == squares.length && win == false) {
            tie()
            isTied = true;
        } //&& win == false but this causes another call stack error
    }


function tie() {
    document.getElementById('message').innerHTML = `TIE`
    resetButton.classList.remove("hidden");
    gameOn = false;
    }


function endGame(winningCombo, whoWon) {
    if (whoWon == 1) {
        document.getElementById('message').innerHTML = `Congrats to the human player!`
    } else {
        document.getElementById('message').innerHTML = `Congrats to the computer! Sorry human.`
    }
    resetButton.classList.remove("hidden");
    for (let i = 0; i < winningCombo.length; i++) {
        const winningSquare = winningCombo[i];
        const squareElem = document.getElementById(winningSquare);
        console.log(squareElem)
        squareElem.classList.add("winning-square")
    } gameOn = false;

}


function checkWin(playerSquares, whoMarked) {
    for (let i = 0; i < winningCombos.length; i++){
        let squareCount = 0
        for (let j = 0; j < winningCombos[i].length; j++) {
            const winningSquare = winningCombos[i][j]
            if (playerSquares.includes(winningSquare)) {
                squareCount++;
            }
        }
        if(squareCount == 3) {
            win = true;
            endGame(winningCombos[i], whoMarked)
        }
    }
}


resetButton.addEventListener("click", function (event) {
    gameOn = true;
    isTied = false;
    win = false;
    humanTurn = true;
    compTurn = false;
    document.getElementById('message').innerHTML = `It's you versus the computer!`;
    resetButton.className += " hidden"
    squareCount = 0;
    player1Squares = [];
    player2Squares = [];
    filledSquareCount = [];
    for (let i = 0; i < squares.length; i++) {
        squares[i].innerHTML = "-";
        squares[i].classList.remove("winning-square")

    }
})

