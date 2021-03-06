// The Dragon Game:
console.log(document);
console.dir(document);


// 1. Put the dragon on the screen.
// 2. Give the user instructions that they must fight or flee and a button for each.
// 3. Instruct the user that if they choose to fight, they must roll a 9 or higher or they will be burnt to a crisp!
// 4. If they flee, change the image of the dragon to the coward fleeing and mock the user for cowardice!
// 5. If they choose to fight, they must roll the dice.Update the dice to reflect their roll.Display on the screen what they rolled As well as the outcome.

// GAME VARIABLES
var dragon = document.getElementById("dragonPic");
var fight = document.getElementById("fightButton");
var flee = document.getElementById("fleeButton");
var dicePic = document.getElementById("diceRoll");
var playButton = document.getElementById("playAgain");

dicePic.classList.add("hidden")

//GAME FUNCTIONS!
function fleeOnce() {
    document.getElementById("instructions").innerHTML = "You've chosen to flee! While this makes you a heap of cowardice, the dragon got tired chasing you and passed out. So you can play again!"
    document.getElementById("warning").innerHTML = "What will you do this time!?"
    dragon.innerHTML = `<img src="./dragon-assets/dragonsleeping.png" class="dragon-img">`
}

function fleeTwice() {
    document.getElementById("instructions").innerHTML = "Flee AGAIN!? This has annoyed the dragon. He awakes and incinerates you with one breath!"
    document.getElementById("warning").innerHTML = "Game over!"
    dragon.innerHTML = `<img src="./dragon-assets/dragon.png" class="dragon-img"> `
    gameOver()
}
// ^need to change the image back from the sleepig dragon to the regular dragon! 

function diceRoll() {
    dragon.innerHTML = `<img src="./dragon-assets/dragon.png" class="dragon-img"> `
    dicePic.classList.remove("hidden");
    document.getElementById("instructions").innerHTML = "Dice roll!"
    document.getElementById("warning").innerHTML = "If you roll less than three... incineration!!"
    var randomNumber = Math.ceil(Math.random(2, 6) * 6);
    dicePic.innerHTML = `<img src="./dragon-assets/d${randomNumber}.gif">`;
    console.log(randomNumber)
    var score = randomNumber
    if (score >= 3) {
        document.getElementById("instructions").innerHTML = "Your roll is greater than three! What would you like to do now? Fight or flee?"
    } else {
        document.getElementById("instructions").innerHTML = "Your roll is LESS than three! BURNT TO A CRISP!"
        document.getElementById("warning").innerHTML = "GAME OVER!";
        gameOver()
    dicePic.classList.add("hidden")
    }
    }

function playAgain() {
    fight.classList.remove("hidden");
    flee.classList.remove("hidden");
    fleed = false;
    console.log("working")
}

function gameOver() {
    fight.classList.add("hidden")
    flee.classList.add("hidden")
    fleed = false;
}

// GAME PLAY!
var fleed = false;

dragon.innerHTML += `
    <img src="./dragon-assets/dragon.png" class="dragon-img">`

alert("Welcome to the dragon game. It's pretty easy. It merely requires that you read and click your mouse. Do you think you can handle that?")


document.getElementById("instructions").innerHTML = "You must try to beat the dragon. FYI: He's super sleepy, but loves to play fetch... Do you want to fight or flee?"
document.getElementById("warning").innerHTML += " If you choose to fight, you must roll a 3 or higher; otherwise you'll be burnt to a crisp!"

// Game function calls...
flee.addEventListener("click", function() {
    if (!fleed) {
        fleeOnce();
        fleed = true;
    } else {
        fleeTwice();
    }
})
fight.addEventListener("click", diceRoll)
playButton.addEventListener("click", playAgain)


// Bonus
// 6. Using a while loop, keep the game going as long as each character has hit points.Start the dragon at 20 and the hero at 20. Add a roll for the dragon.Subtract the hit points for each after the "fight"(roll).The while loop should terminate when one member of the fight drops below 0.

// Super Bonus
// 7. Create other options within the game.For instance,
// 7a.Allow the user one chance in the while loop to "attack with bravery" which will increase the damage done by 4, but will increase damage by 4.
// 7b.Allow the user one chance to drink a health potion and increase their health back to 20.
// 7c.Allow the dragon to randomly get distracted by how shiny the hero's armor is and forget to attack.
// 7d.As the hero is more wounded, decreases his rolls so he does less damage.

// BE CREATIVE...THIS IS A CHANCE TO LEARN JAVASCRIPT!