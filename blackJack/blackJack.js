const freshDeck = createDeck();
let theDeck = freshDeck.slice();

//blackjack deal function
$('.deal-button').click(()=>{
    // console.log("user clikced on deal button")
    //we need a deck! we have a deck, we need to shuffle it!
    shuffleDeck(theDeck);
})

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
    console.log(aDeckToBeShuffled)
}