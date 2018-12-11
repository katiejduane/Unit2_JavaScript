//It;s possible to make the board using a for loop, manipulate the innerHTML, but in the HTML doc there needs to be on 
// div container, the size of which would determined in CSS...


// let gridSize = 4;
// let board = document.querySelector('.board')

// for(let i = 0; i < gridSize; i++) {
    create element (div) typeof, put in variable, variable.classList.add('board-row') 
//     board.innerHTML+='<div class="board-row">'
//     for(let j = 0; j < gridSize; j++) {
//         board.innerHTML += '<button class="square">Hello</button>'
            create element of button type, store in variable, varibale.classlist.add('square') 
            variable.textContent = "whatever"
            add event listnened to the variables, and now i can refer to the i/j so now i know what's being clicked...
//     }
//     board.innerHTML += "</div>"
}

LOOK UP in JS;
-create element (name of a function) (document.createElement)
- document.appendChild
