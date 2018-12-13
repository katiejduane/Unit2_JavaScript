// 1. Set up board: check!
// 2. user should be able to click on the Button; when the click happens, the square sould have that player's mark (x or o)
// 3. If it's x's turn, put an x in, otherwise, put an 0!
// 4. In order to accomplish 3, we must know whose turn it is! After x goes,o, then vice versa
// 5. Keep other player from taking a square
// 6. See if someone won! if so, congrats!
// 7. Stop the game ig someone won, otherwise, let it keep going 

// =========== GLOBALS! ============
let whosTurn = 1; // "X"
//make an array for each player, and push each clicked square into the array
let player1Squares = [];
let player2Squares= [];
//array of all winning combos!
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

// function tie() {
let filledSquareCount = 0;

let resetButton = document.querySelector('#reset-button')

let gameOn = true;
resetButton.className += " hidden"

//squares is an 'array' with 9 objects in it, each element is an HTML button element
const squares = document.getElementsByClassName('square');
// const squares = document.getElementsByTagName('square'); this will do the same thing since we are only looking for the buttons!

for (let i = 0; i < squares.length; i++) {
    // make it so the squares are "listening"
    // to add an event listener, what to listen for, what to do when it hears what it's waiting for! 
    // (the method, with the event to listen for and the function to run if that event happens)
    squares[i].addEventListener("click", function(event){
        // console.log(event) will show you what event and where (x/y) that it happened
        // console.log(this) will show you WHAT (this thing) that was clicked on (liek python's 'self')
        // console.dir(this) 
    if(gameOn) {
            if (this.innerHTML === "-") {
                if (whosTurn === 1) {
                    this.innerHTML = "X"; // update the DOM
                    whosTurn = 2; // update JS
                    filledSquareCount++
                    document.getElementById('message').innerHTML = "It's O's turn!" //update the DOM again
                    player1Squares.push(this.id)
                    checkWin(player1Squares,1)
                    checkTie()
                } else {
                    this.innerHTML = "O";
                    whosTurn = 1;
                    filledSquareCount++
                    console.log(filledSquareCount)
                    document.getElementById('message').innerHTML = "It's X's turn!"
                    player2Squares.push(this.id)
                    checkWin(player2Squares, 2)
                    checkTie()
                }
        } else {
            document.getElementById('message').innerHTML = "Sorry, that square is taken!"
            } 
        }    
        }
        )
    }

function endGame(winningCombo, whoWon) {
    //if we get to endgame.. winner winner chicken dinner! so the game is over!
    document.querySelector('#message').innerHTML = `Congrats to player ${whoWon}!`
    resetButton.classList.remove("hidden");
    //we know which squres are the winning squares
    for (let i = 0; i < winningCombo.length; i++) {
        const winningSquare = winningCombo[i];
        const squareElem = document.getElementById(winningSquare);
        console.log(squareElem)
        squareElem.classList.add("winning-square")
    } gameOn = false;

}

function checkWin(playerSquares, whoMarked) {
    // console.log("Checking to see if anyone won!")
    // console.log(playerSquares)
    // console.log(whoMarked)
    // we know who just went and we know what quares they have
    // Outer loop: check each winning combo
    for (let i = 0; i < winningCombos.length; i++){
        // keep track of this many squares in THIS combo
        let squareCount = 0
        // Inner loop: check each squre inside of THIS winning combo
        // winningCombos[i] = the winningCombo we are on (3 squares)
        for (let j = 0; j < winningCombos[i].length; j++) {
            // winningCombos[i][j] = the square in the winningCombo we are on
            const winningSquare = winningCombos[i][j]
            if (playerSquares.includes(winningSquare)) {
                // player has this square
                squareCount++;
            }
        }
        if(squareCount == 3) {
            // console.log("Player won");
            // console.log(winningCombos[i]);
            endGame(winningCombos[i], whoMarked)
        }
    }
}

function checkTie() {
    if (filledSquareCount == squares.length) {
        tie()
}

function tie() {
    document.querySelector('#message').innerHTML = `TIE`
    resetButton.classList.remove("hidden");
    gameOn = false;
}


// function computerTurn() {
// }


resetButton.addEventListener("click", function (event) {
    gameOn = true;
    document.querySelector('#message').innerHTML = `It's O's turn!`;
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
}

// Sean McQuaid[3: 47 PM]
// function computerMove() {
//     const letter = ["A", "B", "C"];
//     let randomLet = Math.floor(Math.random() * 3);
//     let randomNum = Math.ceil(Math.random() * 3);
//     let computerPlay = letter[randomLet] + randomNum.toString();
//     if (!playerOneSquares.includes(computerPlay) && !playerTwoSquares.includes(computerPlay)) {
//         playerTwoSquares.push(computerPlay);
//         squares[computerPlay].innerHTML = "O";
//     } else {
//         computerMove();
//     }
// }