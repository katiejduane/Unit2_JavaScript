//TO-DO List for this game:
// fade out gameboard with css, fade in the final grid; right now it's still abrupt!
// problem with the h3 after gameplay being the height of th whole container, and a seeming child // fix spacing, it gets overlapped by the crads as they spin
// how to add button functionality to the buttons that appear on the info screen (name the original function?, but how to recall?)
// add data from an API about where these objects are RIGHT NOW
// fix shuffle functioning for easy/moderate (only pulling from first 2 or 6)



// add a ready listener to the whole DOM
// if., javascript wait until the DOM is finished loading
// before running anything
//add another listener for when the page is resized to change
$(document).ready(() => {
    let matches = 0;
    $('button').click(function () {
        // console.log($(this));
        // attr method, will get the value of that attribute
        let gridSize = $(this).attr('diff');
        let cards = []
        // our monsters start at 1. So start i at 1
        // every time through the loop, we push 2 monsters
        // on because this is a matching game, we need 2
        // so we loop half of the grid size (gridSize/2), but
        // we need to add 1, because we started at 1, not 0
        // OR, we need to end at <=
        for (let i = 1; i <= gridSize / 2; i++) {
            let spaceNumber = i;
            cards.push(`<img src="./images/space-${spaceNumber}.png" />`);
            cards.push(`<img src="./images/space-${spaceNumber}.png" />`);
        }

        let shuffledCards = cards.slice()
        shuffleDeck(shuffledCards, gridSize)
       
        // console.log(cards)
        // init a var to store our html inside of
        let memoryHTML = '<h2>How quickly can you match the celestial bodies?</h2>';
        // loop through all of the cards
        shuffledCards.forEach((card) => {
            memoryHTML += `
                <div class="card col-xs-6 col-sm-3">
                    <div class="card-holder">
                        <div class="card-front">${card}</div>
                        <div class="card-back"></div>
                    </div>
                </div>
            `
        })
        console.log(memoryHTML);
        // I'm sorry Jonathan... I will teach them a better way later!
        $('.memory-game').html(memoryHTML);
        const squareWidth = ($('.card').width())
        $('.card').height(squareWidth)
        //the above two lines will need to be inluded

        //user just clicked on a card
        $('.card-holder').click(function() {
            $(this).addClass('flip');
            let cardsUp = $('.flip');
            // if cardsUp has 2 customElements, than this is the secon card
            if (cardsUp.length == 2) {
                const card1 = cardsUp[0];
                const card2 = cardsUp[1];
                if(card1.innerHTML == card2.innerHTML) {
                    //these cards match!
                    //remove flip
                    cardsUp.removeClass('flip');
                    cardsUp.addClass('matched');
                    matches++
                    if (matches == gridSize / 2) {
                        setTimeout(function(){
                            $('.card-holder').addClass('hidden')
                        }, 3000);
                        setTimeout((gameOver),5000);
                    };

                } else {
                    //these are not a match because the html is different
                    //JS is too dang fast, we have to let the use see the card before we flip it back
                    //setTimeout to the rescue!
                    setTimeout(() => {
                        cardsUp.removeClass('flip');
                    },1000);
                }
            }
        })
    });

});

function shuffleDeck(deck, gridSize) {
    // loop: a LOT! like those machines in casinos that make funny noises!
    // when the loop (lots of times) is focument, the array (deck) will be shuffled!
    for (let i = 0; i < 1000; i++) {
        let rand1 = Math.floor(Math.random() * gridSize);
        let rand2 = Math.floor(Math.random() * gridSize);
        // we need to swutch aDeckToBeShuffled[rand1] with aDeckToBeShuffled[rand2]
        // BUT we have to save the value of one of them so we can keep it for later
        let topCard = deck[rand1];
        deck[rand1] = deck[rand2];
        deck[rand2] = topCard;
    }
    // console.log(aDeckToBeShuffled)
    return deck
}


let planetInfo = [
    {
        name: "The Sun",
        type: "G-type main sequence star (Yellow Dwarf)",
        coolFact: "It fuses about 600 million tons of hydrogen into helium every second!"
    },
    {
        name: "Mercury",
        type: "Terrestrial Planet",
        coolFact: "A day on the surface of Mercury lasts 176 Earth days."
    },
    {
        name: "Venus",
        type: "Terrestrial Planet",
        coolFact: "Atmospheric pressure on Venus is 92 times greater than the Earth’s."
    },
    {
        name: "Earth",
        type: "Terrestrial Planet",
        coolFact: "The Earth’s rotation is gradually slowing by approximately 17 milliseconds per hundred years."
    },
    {
        name: "The Moon",
        type: "Satellite",
        coolFact: "It is theorized that the moon is the result of a collision between earth and a now obliterated planet, Theia."
    },
    {
        name: "Mars",
        type: "Terrestrial Planet",
        coolFact: "Mars is home to the tallest mountain in the solar system: Olympus Mons, at 21km high."
    },
    {
        name: "Vesta",
        type: "Minor Planet/Asteroid",
        coolFact: "Unlike asteroids, and like terrestrial planets, it has a crust, a mantel, and a core."
    },
    {
        name: "Jupiter",
        type: "Gas Giant",
        coolFact: "It has the shortest day of all the planets, turning on its axis once every 9 hours and 55 minutes."
    },
    {
        name: "Saturn",
        type: "Gas Giant",
        coolFact: "Saturn has a (north) polar storm that is the shape of hexagon! It's been there for a long as we can see."
    },
    {
        name: "Uranus",
        type: "Ice Giant",
        coolFact: "It makes one trip around the Sun every 84 Earth years; its days/ngihts are each 42 years long."
    },
    {
        name: "Neptune",
        type: "Ice Giant",
        coolFact: "The weather is wild there, with the fastest observed winds in the solar system, and huge, high altitude clouds!"
    },
    {
        name: "Pluto",
        type: "Dwarf Planet",
        coolFact: "Its moon Charon is so large that it wobbles Pluto's rotation. The two are also tidally locked (always face-to-face)."
    }

]

$(window).resize(function () {
    const squareWidth = ($('.card').width())
    $('.card').height(squareWidth)
})

function gameOver() {
    console.log("function check")
    $('.card-holder').removeClass('hidden');
    matches = 0;
    let memoryHTML = ""
    let cards = [];
    for (let i = 1; i <= 12; i++) {
        let spaceNumber = i;
        cards.push(`<img src="./images/space-${spaceNumber}.png" />`)};
        // loop through all of the cards
        memoryHTML = '<h2>Game Over! Click the images to learn more...</h2>'
        cards.forEach((card, i) => {
            memoryHTML += `
                <div class="card col-xs-6 col-sm-3">
                    <div class="card-holder flip">
                        <div class="card-front">${card}</div>
                        <div class="card-back planet-info">${planetInfo[i].name}, ${planetInfo[i].type}, ${planetInfo[i].coolFact}</div>
                    </div>
                </div>
            `
        })
    memoryHTML += 
        `<h3>Do you want to play again?</h3>
            </div>
                <div class="buttons again">
                <button diff=4 class="btn btn-lg btn-success">Easy</button>
                <button diff=12 class="btn btn-lg btn-warning">Moderate</button>
                <button diff=24 class="btn btn-lg btn-danger">Strenuous</button>
            </div>`
    // $('.container').addClass('visible');
    
// how do i add the click functon ^^here? It needs to be a named function that I can just call over and over I think...

//populates the dom and fixes shapes
        $('.memory-game').html(memoryHTML);
        const squareWidth = ($('.card').width())
        $('.card').height(squareWidth)

// this allows the use to mouse over the planet pictures to get info about them
        $('.card-holder').mouseover(function () {
            $(this).removeClass('flip')
         })
        $('.card-holder').mouseout(function () {
            $(this).addClass('flip')
        
    })

    }

    
