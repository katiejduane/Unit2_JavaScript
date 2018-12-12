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
// makeArray(gridSize, player1Array);
// makeArray(gridSize, player2Array);

// game start variables //
let turn = 1;
let gameOn = true;

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
                    console.log(i)
                    console.log(j)
                    if (gameOn) {
                        if (this.innerHTML === "~") {
                            if (turn === 1) {
                                this.style.backgroundColor = "#fdf28a";
                                this.style.color = "White";
                                this.innerHTML = "1"
                                boardArray[i][j] = 1
                                turn = 2;
                                document.querySelector('.alert').innerHTML = "It's Player 2's turn!"
                            } else {
                                this.style.backgroundColor = "lightcyan";
                                this.style.color = "white";
                                this.innerHTML = "2"
                                boardArray[i][j] = 2
                                console.log(boardArray)
                                turn = 1;
                                document.querySelector('.alert').innerHTML = "It's Player 1's turn!"
                            }
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
let messageText = document.createTextNode("You've got to connect four to win!")
message.appendChild(messageText)
document.body.appendChild(message)
message.classList.add('alert')

//create restart button
let restartButton = document.createElement("BUTTON")
let restartText = document.createTextNode("Play Again!")
restartButton.appendChild(restartText)
document.body.appendChild(restartButton)
restartButton.classList.add('start-again')
restartButton.classList.add('hidden') //not working

// function to check rows... // function checkWin(boardArray, playerArray, whoMarked)
function checkRows(array, turn) {
        for (let i = 0; i < array.lenth; i++) {
            for (let j = 0; j < array[i].length; j++) {
                if ( array[i][j] == turn && j == array.length -1) {
                    console.log("win")
                    return true;
                } else if (array[i][j] != turn) {
                    break;
                }
            }
        } return false;
}
checkRows(boardArray, 1)

// function endGame(winningCombo, whoWon)

restartButton.addEventListener("click", function (event) {
    gameOn = true;
    document.querySelector('.alert').innerHTML = `You must connect 4 to win!`; //this line works
    restartButton.className += " hidden"
    boardArray = makeArray(gridSize);
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].innerHTML = "~"; 
        buttons[i].style.backgroundColor = "white";
        buttons[i].style.color =  "#ffe605"
        //why won't the hover color work anymore after this point!? maybe the .style method overwrites everything 
        // and shouldn't be used here or in the actual click event...??

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