/**
 *                                          @DechOfCard
 * 
 * @Description - To initialize deck of cards having suit ("Clubs", "Diamonds", "Hearts", "Spades") 
                    & Rank ("2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace").
 
    @input - Number of cards to be distributed and to Number Of Players
    @LOgic - Shuffle the cards using Random method and then distribute 9 Cards to 4 Players
    @output - Print the Cards the received by the 4 Players using 2D Array

    @author : Deepak Singh

    @since : 02/12/1996

*/


var utility = require('./deckCardUtil');
//var u = require('../utility/utility');
var rl = require('readline-sync')
var deck = new utility.shuffle();

class DeckCard {
    deckCards() {
        var cards = deck.cards();
        //deck.shuffleCards(cards);
        // console.log("Enter number of Players=");
        // var noOfPlayers=u.inputIntegerRead();
        // console.log("Enter number of cards to be distrubed=");
        // var noOfCards=u.inputIntegerRead();
        var noOfPlayers = rl.questionInt("Enter number of Players=");
        var noOfCards = rl.questionInt("Enter number of cards=");
        deck.distributingCards(cards, noOfPlayers, noOfCards);
    }
}

var deckCard = new DeckCard();
deckCard.deckCards();

module.exports = {
    DeckCard
}
