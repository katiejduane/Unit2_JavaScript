// how to insert it at a specific place, for example, it's insrted BEFORe myJS file, even though the JS file is at the bottom...
// what if i want to restructure the order of the elements I create on the page? How can I do this without actually having an HTML file?

// Function to create game board! //

let gridSize = 4;

// function to create board and player arrays based on grid size!
function makeArray(gridSize) {
    let array = []
    for (i = 0; i < gridSize; i++) {
        let rowArray = []
        array.push(rowArray)
    }
    return array
}

//make arrays to use in game functions
let boardArray = makeArray(gridSize); 
// console.log(boardArray)

// game start variables //
let turn = 1;
let gameOn = true;
let activeSquares = [];

// function to create board and event listeners for each button
function createBoard(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        let boardRow = document.createElement("DIV")
        boardRow.classList.add('board-row')
        document.body.appendChild(boardRow);
        for (let j = 0; j < gridSize; j++) {
            let gameButton = document.createElement("BUTTON"); 
            let bText = document.createTextNode("~");
            gameButton.appendChild(bText);
            gameButton.classList.add("game-buttons")
            boardRow.appendChild(gameButton);
            let clickMe = function () {
                    if (gameOn) {
                        if (this.innerHTML === "~") {
                            if (turn === 1) {
                                this.style.backgroundColor = "#fdf28a";
                                this.style.color = "White";
                                this.innerHTML = "1"
                                boardArray[i][j] = 1
                                checkRows(boardArray, 1)
                                checkCols(boardArray, 1)
                                turn = 2;
                            } else {
                                this.style.backgroundColor = "lightcyan";
                                this.style.color = "white";
                                this.innerHTML = "2"
                                boardArray[i][j] = 2
                                checkRows(boardArray, 2)
                                checkCols(boardArray, 2)
                                turn = 1;
                            }   
                            activeSquares.push("*")
                            checkTie()
                        } else {
                            document.querySelector('.alert').innerHTML = "Sorry, that square is already taken!!"
                        }
                    }
                }
            gameButton.addEventListener("click", clickMe) 
        }
    } 
}

//Calling function to make board and click listeners
createBoard(gridSize)

// create message div!
let message = document.createElement("DIV")
let messageText = document.createTextNode("You've got to connect three to win!")
message.appendChild(messageText)
document.body.appendChild(message)
message.classList.add('alert')

//create restart button
let restartButton = document.createElement("BUTTON")
let restartText = document.createTextNode("Play Again!")
restartButton.appendChild(restartText)
document.body.appendChild(restartButton)
restartButton.classList.add('start-again')
restartButton.classList.add('hidden')

// function to check rows... // function checkWin(boardArray, playerArray, whoMarked)
function checkRows(array, turn) {
        for (let i = 0; i < array.length -3 ; i++) {
            let squareCount = 0;
            for (let j = 0; j < array[i].length; j++) {
                if (array[i][j] == turn) {
                    squareCount++
                }
            }
            if (squareCount == 3) { //this doesn't actually work because, see below!
                win(turn)
            }
        } 
}

// function to check columns!
function checkCols(array, turn) {
    for (let i = 0; i < array.length; i++) {
        let squareCount = 0;
        for (let j = 0; j < array.length; j++) {
            if (array[j][i] == turn) {
                squareCount++
            }
        }
        if (squareCount == 3) { //this doesn't actually work because any 3 out of 4/gridsize will win... 
        // need it to be 3 CONSECUTIVE squares!!!!
            win(turn)
        }
    } 
}

//function for when a player wins
function win(turn) {
    document.querySelector('.alert').innerHTML = `Congrats player ${turn}, you won!`;
    restartButton.classList.remove('hidden')
    gameOn = false;
}

// what to do if there IS a tie
function tie() {
    document.querySelector('.alert').innerHTML = `Ooops! A tie!`;
    restartButton.classList.remove('hidden')
}

//function to check if tie
function checkTie() {
    if (activeSquares.length == (gridSize*gridSize)) {
        tie()
    }
}

restartButton.addEventListener("click", function (event) {
    gameOn = true;
    document.querySelector('.alert').innerHTML = `You must connect three to win!`; //this line works
    restartButton.classList.add('hidden')
    activeSquares = []
    boardArray = makeArray(gridSize)
    for(let i = 0; i < boardArray.length; i++) {
        // console.log("i")
        for (let j = 0; j < boardArray[i].length; j++) {
            // console.log("j")
        }
    }
    const s = document.getElementsByClassName('game-buttons')
    for(let i = 0; i<s.length; i++){
        s[i].innerHTML = "~"
        s[i].style.backgroundColor = "white"
        s[i].style.color = "#ffe605"
    }
})


//notes for making the computer turn function//
// function computerTurn(){

// }


//NOTES on new ways to manipulate the DOM!//
// var btn = document.createElement("BUTTON");        // Create a <button> element
// var t = document.createTextNode("CLICK ME");       // Create a text node
// btn.appendChild(t);                                // Append the text to <button>
// document.body.appendChild(btn);                    // Append <button> to <body>

// var board = document.createElement("DIV");
// var square = document.createElement("BUTTON");
// var buttonText = document.createTextNode("!");
// square.appendChild(buttonText)
// document.getElementById("board-wrapper").appendChild(board); 
// board.appendChild(square)     
// console.log(window)