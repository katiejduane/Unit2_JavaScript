//TO-DO:
// --finalRound function to end game and give option to play again from 0
// --Ace function isn't working
// --add player/deal to score #s on top and bottom on board
// --make sure that "hit" is turned off unless deal has been pressed

const freshDeck = createDeck();
let theDeck = freshDeck.slice();
let playerHand = [];
let dealerHand = [];
let gameOn = true;
let playerFinal = 0;
let dealerFinal = 0;
let round = 1;
let stand = false;
$('.reset-button').css({
    'visibility': 'hidden',
    'opacity': 0 })

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
        $('.deal-button').css({
            'opacity': 0
        });
    });


    $('.hit-button').click(() => {
        // grab the next card in the deck 
        if (stand == false) {
            let topCard = theDeck.shift();
            // push it onto the players Hand
            playerHand.push(topCard)
            placeCard('player', playerHand.length, topCard);
            calculateTotal(playerHand, 'player')
        }
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
        stand = true;
        let dealerTotal = calculateTotal(dealerHand, 'dealer');
        while (dealerTotal < 17) {
            const topCard = theDeck.shift();
            dealerHand.push(topCard);
            placeCard('dealer', dealerHand.length, topCard);
            dealerTotal = calculateTotal(dealerHand, 'dealer');
        }
        checkWin();
    })

    
    $('.reset-button').click(() => {
        theDeck = freshDeck.slice();
        handTotal = 0;
        playerTotal = 0;
        dealerTotal = 0;
        playerHand = []
        dealerHand = []
        hasAce = false;
        stand = false;
        $(".card").html("");
        $('.player-total').text(playerTotal)
        $('.dealer-total').text(dealerTotal)
        $('.reset-button').css({
            'opacity': 0
        });
        $('.deal-button').css({
            'opacity': 1
        })
        $('.player-final').text(`You: ${playerFinal}`)
        $('.dealer-final').text(`Dealer: ${dealerFinal}`)
        round++
        document.querySelector(".message").innerHTML = `Round ${round} of 5!`
        checkRound();
        })
    
}

// ===================== Game Functionality! ======================

function checkWin() {
    let playerTotal = calculateTotal(playerHand, 'player');
    let dealerTotal = calculateTotal(dealerHand, 'dealer');
    console.log(playerTotal, dealerTotal)
    if (playerTotal > 21 && dealerTotal < 21) {
        bust('player');
    } else if (playerTotal > 21 && dealerTotal > 21) {
        bust('dealer')
    } else if (dealerTotal > 21 && playerTotal < 21) {
        win('player')
    } else if (playerTotal > dealerTotal && playerTotal < 21) {
        win('player')
    } else if (dealerTotal > playerTotal && dealerTotal < 21) {
        lose('player')
    } else if (playerTotal == 21) {
        blackJack('player')
    } else if (dealerTotal == 21) {
        blackJack('dealer')
    } else if (playerTotal < dealerTotal && dealerTotal < 21) {
        lose('player')
    } else {
        tieGame()
    }
}
    // 1. If the player has > 21, player busts and loses.
    // 2. If the dealer has > 21, dealer busts and loses.
    // 3. If playersHand.length == 2 AND playerTotal == 21... BLACKJACK
    // 4. If dealerHand.length == 2 AND dealerTotal == 21... BLACKJACK
    // 5. If player > dealer, player wins
    // 6. if dealer > player, dealer wins
    // 7. else... push (tie)

function blackJack(whoJacked) {
    $('.reset-button').css({
        'opacity': 1,
        'visibility': 'visible'
    });
    if (whoJacked == 'player') {
        playerFinal += 1000
        $(".message").text(`You got Blackjack!`);
    } else {
        dealerFinal += 1000
        $(".message").text(`The dealer got Blackjack...`);
    }
}

function bust(whoBusted){
    if (whoBusted = 'player') {
        $(".message").text(`Yikes! you busted!!`);
        dealerFinal += 100;
    } else {
        $(".message").text(`The dealer busted! Silly computer!`)
        playerFinal += 100;
    }
    $('.reset-button').css({
        'opacity': 1,
        'visibility': 'visible'
    });
}

function win(whoWon) {
    $(".message").text(`Yeeaaass! You won this round!`)
    $('.reset-button').css({
        'opacity': 1,
        'visibility': 'visible'
    });
    console.log("win")
    playerFinal += 500;
}

function lose(whoLost) {
    document.querySelector(".message").innerHTML = `Uh oh! You lost! That's a win for the computer...`
    $('.reset-button').css({
        'opacity': 1,
        'visibility': 'visible'
    });
    dealerFinal += 500;
    console.log(`${whoLost} lost`)
}

function tieGame() {
    console.log("tie")
    $('.reset-button').css({
        'opacity': 1,
        'visibility': 'visible'
    });
}

function checkRound() {
    if (round == 5) {
       endGame()
       console.log("round check")
    }
}

function endGame(){
    console.log("end")
    //CSS overlay with winning person's name and final score!
    if (playerFinal > dealerFinal){
        //player wins
    } else {
        //dealer wins
    }
    gameOn = false
    //some sort of function to turn game back on to play another five rounds...
}

function calculateTotal(hand, who) {
    // purpose: 
    // 1. find out the number and return it 
    // 2. update the dom with the right number for whoever's hand it is!
    let handTotal = 0;
    let hasAce = false;
    // loop through the hand!
    hand.forEach((card, i)=>{
        //copy everything in the string, except for the last (the letter char)
        let thisCardsValue = card.slice(0, -1);
        if (thisCardsValue > 10) {
            thisCardsValue = 10;
        } else if (thisCardsValue == 1) {
            hasAce = true;
        }
        handTotal += Number(thisCardsValue);
    })

    if (hasAce && handTotal < 10){
        handTotal += 10;
    }

    console.log(handTotal)
    const classSelector = `.${who}-total`
    $(classSelector).html(handTotal);
    return handTotal
}

function placeCard(who, where, what) {
    // who = ? would be the player or the dealer
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
