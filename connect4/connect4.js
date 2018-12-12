// Function to create game board!

let gridSize = 4;

function createBoard(gridSize) {
    for (var i = 0; i < gridSize; i++) {
        var boardRow = document.createElement("DIV")
        boardRow.classList.add('board-row')
        document.body.appendChild(boardRow);
        for (var j = 0; j < gridSize; j++) {
           var gameButton = document.createElement("BUTTON"); 
           var bText = document.createTextNode("~");
           gameButton.appendChild(bText);
           boardRow.appendChild(gameButton);
        }
    } 
}
createBoard(gridSize)

let turn = 1;
let player1Sq = [];
let player2Sq = [];
let gameOn = true;





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