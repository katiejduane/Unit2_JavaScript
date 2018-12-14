const freshDeck = createDeck();
let theDeck = freshDeck.slice();
let playerHand = [];
let dealerHand = [];
let gameOn = true;

//blackjack deal function
if (gameOn) {
    $('.deal-button').click(()=>{
        // console.log("user clikced on deal button")
        //we need a deck! we have a deck, we need to shuffle it!
        shuffleDeck(theDeck);
        // console.log(theDeck)
        //we have shuffled the deck, now the players need their cards!
        let topCard = theDeck.shift();
        // put topCard in the playerHand array
        playerHand.push(topCard)
        // Take next card in deck
        topCard = theDeck.shift();
        // give the dealer the new topCar
        dealerHand.push(topCard)
        topCard = theDeck.shift();
        playerHand.push(topCard)
        topCard = theDeck.shift();
        dealerHand.push(topCard)
        // console.log(theDeck.length)
        placeCard('player', 1, playerHand[0])
        placeCard('dealer', 1, dealerHand[0])
        placeCard('player', 2, playerHand[1])
        placeCard('dealer', 2, dealerHand[1])
        calculateTotal(playerHand, 'player')
        calculateTotal(dealerHand, 'dealer')
    })

    $('.deal-button').click(function(){
        $('.deal-button').fadeOut(2000);
    });


    $('.hit-button').click(() => {
        // grab the next card in the deck 
        const topCard = theDeck.shift();
        // push it onto the players Hand
        playerHand.push(topCard)
        placeCard('player', playerHand.length, topCard);
        calculateTotal(playerHand, 'player')
    })

    $('.stand-button').click(() => {
        // console.log("User stands!!")
        // What happens to the players hand, when they stand?
        // Nothing.
        // Control passes to the dealer
        // Rules for the dealer:
        // 1. If I have less than 17, I MUST hit.
        // 2. If I have 17 or more I CANNOT hit, even if it
        // means I will lose
        let dealersTotal = calculateTotal(dealerHand, 'dealer');
        while (dealersTotal < 17) {
            const topCard = theDeck.shift();
            dealerHand.push(topCard);
            placeCard('dealer', dealerHand.length, topCard);
            dealersTotal = calculateTotal(dealerHand, 'dealer');
        }
        checkWin();
    })
}

    function checkWin() {
        const playerTotal = calculateTotal(playerHand, 'player');
        const dealersTotal = calculateTotal(dealersHand, 'dealer');
        if (playerTotal > 21) {
            gameOn = false;
            lose('player');
        } else if (dealersTotal > 21) {
            gameOn = false;
            win('player')
        } else if (playerHand.length <= 3  && playerTotal == 21) {
            gameOn = false;
            blackJack('player')
        } else if (dealersHand.length <= 3 && dealersTotal == 21) {
            gameOn = false;
            blackJack('dealer')
        } else if ( playerHand > dealersHand) {
            gameOn = false;
            win('player')
        } else if (playerHand < dealersHand) {
            gameOn = false;
            lose('player')
        } else {
            gameOn = false;
            tieGame()
        }
     }
    

    // 1. If the player has > 21, player busts and loses.
    // 2. If the dealer has > 21, dealer busts and loses.
    // 3. If playersHand.length == 2 AND playerTotal == 21... BLACKJACK
    // 4. If dealerHand.length == 2 AND dealersTotal == 21... BLACKJACK
    // 5. If player > dealer, player wins
    // 6. if dealer > player, dealer wins
    // 7. else... push (tie)

function blackJack(whoJacked) {
    console.log("jack")
}

function win(whoWon) {
    // have an overlay of some sort with "you win!"
    console.log("win")
}

function lose(whoLost) {
    console.log("lose")
}

function tieGame() {
    console.log("tie")
}

function restart() {
    //will have to fade out hit and stand, fade in a button for restart, which will clear the game, fade back in buttons, and reset the score;
}

// ACE NEEDS TO BE ABLE TO CHANGE VALUES!? BUT WHERE!?!?
function changeAce() {
    
}

function calculateTotal(hand, who) {
    // purpose: 
    // 1. find out the number and return it 
    // 2. update the dom with the right number for whoever's hand it is!
    let handTotal = 0;
    // loop through the hand!
    hand.forEach((card, i)=>{
        //copy everything in the string, except for the last (the letter char)
        let thisCardsValue = card.slice(0, -1);
        handTotal += Number(thisCardsValue);
    })
    console.log(handTotal)
    const classSelector = `.${who}-total`
    $(classSelector).html(handTotal);
    return handTotal
}

function placeCard(who, where, what) {
    // who = ? would be the plaer or the dealer
    // where = ? option 1-6
    // what = ? 1h-14h, 1s-13s, 1d-13d, 1c-13c
    const classSelector = `.${who}-cards .card-${where}`
    $(classSelector).html(`<img src="./cards/${what}.png" >`)

}

// function to create the deck
function createDeck() {
    let newDeck = [];
    // card = suit letter + value
    const suits = ['h', 's', 'd', 'c'];
    //outer loops is for suits
    // for (let s = 0; s < suits.length; s++)
     // a forEach loop takes 1 arg: function
        // that function takes 2 arge:
        // 1. what to call this element in loop
        // 2. index loop is on
    suits.forEach((s, index)=>{
        for(let c = 1; c <= 13; c++) {
            newDeck.push(`${c}${s}`)
        }
    
    })
    return newDeck;
}

function shuffleDeck(aDeckToBeShuffled){
    // loop: a LOT! like those machines in casinos that make funny noises!
    // when the loop (lots of times) is focument, the array (deck) will be shuffled!
    for(let i = 0; i < 100000; i++) {
        let rand1 = Math.floor(Math.random() * 52);
        let rand2 = Math.floor(Math.random() * 52);
        // we need to swutch aDeckToBeShuffled[rand1] with aDeckToBeShuffled[rand2]
        // BUT we have to save the value of one of them so we can keep it for later
        let card1Defender = aDeckToBeShuffled[rand1];
        aDeckToBeShuffled[rand1] = aDeckToBeShuffled[rand2];
        aDeckToBeShuffled[rand2] = card1Defender;
    }
    // console.log(aDeckToBeShuffled)
}

//test