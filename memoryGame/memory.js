//TO-DO List for this game:
// make it a space memory game; vesta, other solar system object, extra-solar system objects
// this could actually be a cool game that includes images that relate to your interests or something!
// you could re-do it with or without bootstrap, could be a good opp to learn it!
// after you win: a dive or overlay should open, with a click listener to load a grid 
// (using bootstrap pr jQuery plugin for slider) of the images with facts about them, name, type, location...
// add data from an API about where these objects are RIGHT NOW



// add a ready listener to the whole DOM
// if., javascript wait until the DOM is finished loading
// before running anything
//add another listener for when the page is resized to change

$(document).ready(() => {
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
        let memoryHTML = '';
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

function shuffleDeck(aDeckToBeShuffled, gridSize) {
    // loop: a LOT! like those machines in casinos that make funny noises!
    // when the loop (lots of times) is focument, the array (deck) will be shuffled!
    for (let i = 0; i < 1000; i++) {
        let rand1 = Math.floor(Math.random() * gridSize);
        let rand2 = Math.floor(Math.random() * gridSize);
        // we need to swutch aDeckToBeShuffled[rand1] with aDeckToBeShuffled[rand2]
        // BUT we have to save the value of one of them so we can keep it for later
        let tempCard = aDeckToBeShuffled[rand1];
        aDeckToBeShuffled[rand1] = aDeckToBeShuffled[rand2];
        aDeckToBeShuffled[rand2] = tempCard;
    }
    // console.log(aDeckToBeShuffled)
    return aDeckToBeShuffled
}


$(window).resize(function () {
    const squareWidth = ($('.card').width())
    $('.card').height(squareWidth)
})