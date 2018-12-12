// how to insert it at a specific place, for example, it's insrted BEFORe myJS file, even though the JS file is at the bottom...
// what if i want to restructure the order of the elements I create on the page? How can I do this without actually having an HTML file?

// Function to create game board! //
let gridSize = 5;

function createBoard(gridSize) {
    for (var i = 0; i < gridSize; i++) {
        var boardRow = document.createElement("DIV")
        boardRow.classList.add('board-row')
        document.body.appendChild(boardRow);
        for (var j = 0; j < gridSize; j++) {
           var gameButton = document.createElement("BUTTON"); 
           var bText = document.createTextNode("~");
           gameButton.appendChild(bText);
           gameButton.classList.add("game-buttons")
           boardRow.appendChild(gameButton);
        }
    } 
}
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

// game start variables //
let turn = 1;
let gameOn = true;

// function to create board and player arrays based on grid size!
let boardArray = [];
let player1Array = [];
let player2Array = [];

function makeArray(gridSize, array) {
    for (i = 0; i < gridSize; i++) {
        rowArray = []
        array.push(rowArray)
        // for (j = 0; j < gridSize; j++) {
        //     rowArray.push(j)
        }
    }

makeArray(gridSize, boardArray); //make arrays to use in game functions
makeArray(gridSize, player1Array);
makeArray(gridSize, player2Array);
console.log(boardArray)
console.log(player1Array)
console.log(player2Array)

// creating event listeners for the buttons //
let buttons = document.getElementsByClassName('game-buttons')
console.log(buttons)

for (let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function(){
        if(gameOn) {
            if (this.innerHTML === "~") {
                if (turn === 1) {
                    this.style.backgroundColor = "#fdf28a";
                    this.style.color = "White";
                    this.innerHTML = "1"
                    turn = 2;
                    document.querySelector('.alert').innerHTML = "It's Player 2's turn!"
                } else {
                    this.style.backgroundColor = "lightcyan";
                    this.style.color = "white";
                    this.innerHTML = "2"
                    turn = 1;
                    document.querySelector('.alert').innerHTML = "It's Player 1's turn!"
                }
            } else {document.querySelector('.alert').innerHTML = "Sorry, that square is already taken!!"
        }
        }
    })
}

// populating arrays with clicks to compare/score... no fucking clue how...

// for (let i = 0; i < boardArray.length; i++) {
//     boardArray.push("hi")
//     for (let j = 0; j < boardArray[i].length; j++) {
//     }   console.log("bye")
// }

// function checkWin(boardArray, playerArray, whoMarked)

// function endGame(winningCombo, whoWon)

restartButton.addEventListener("click", function (event) {
    gameOn = true;
    document.querySelector('.alert').innerHTML = `You must connect 4 to win!`; //this line works
    restartButton.className += " hidden"
    boardArray = []
    player1Array = []
    player2Array = [] 
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


//////// ~NOTES/OLD SHIT~ ////////
//     // create element (div) typeof, put in variable, variable.classList.add('board-row') 
//     board.innerHTML += '<div class="board-row">'
//     for (let j = 0; j < gridSize; j++) {
//         board.innerHTML += '<button class="square">Hello</button>'
//         // create element of button type, store in variable, varibale.classlist.add('square') 
//         // variable.textContent = "whatever"
//         // add event listnened to the variables, and now i can refer to the i/j so now i know what's being clicked...
//     }
//     board.innerHTML += "</div>"
// }


// LOOK UP in JS;
// -create element (name of a function); document.createElement
// -document.appendChild()
// ...create element (div) typeof, put in variable, variable.classList.add('board-row') 
// ...create element of button type, store in variable, varibale.classlist.add('square') 
// ..variable.textContent = " " (or textNode?)
// ...add event listener to the variables, and now i can refer to the i/j so now 
// i know what's being clicked...


// let gridSize = 4;
// let board = document.querySelector('.board')

// for (let i = 0; i < gridSize; i++) {
//     // create element (div) typeof, put in variable, variable.classList.add('board-row') 
//     board.innerHTML += '<div class="board-row">'
//     for (let j = 0; j < gridSize; j++) {
//         board.innerHTML += '<button class="square">Hello</button>'
//         // create element of button type, store in variable, varibale.classlist.add('square') 
//         // variable.textContent = "whatever"
//         // add event listnened to the variables, and now i can refer to the i/j so now i know what's being clicked...
//     }
//     board.innerHTML += "</div>"
// }

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