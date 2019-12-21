class Deck {
    constructor() {
        //array of suits
        this.suits = ["♣️", "♦️", "❤️", "♠️"];
        //array of rank
        this.rank = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];
    }
}
class shuffle extends Deck {
    cards() {
        //array to store cards
        var deckOfCards = new Array();
        for (let i = 0; i < this.suits.length; i++) {
            for (let j = 0; j < this.rank.length; j++) {
                //push elements of suits array and rank array into deckofcards array
                deckOfCards.push(this.suits[i] + this.rank[j]);
            }
        }
        //displaying cards 
        console.log("******Arranged Cards******")
        console.log(deckOfCards.join(" "));
        this.shuffleCards(deckOfCards);
        return deckOfCards;
    }

    //Shuffling the cards using random function
    shuffleCards(deckOfCards) {
        try {
            if (deckOfCards == undefined || deckOfCards == null) throw 'Cannot be undefined or null'
            if (deckOfCards == ' ') throw 'Cannot be empty'
            //if(isNaN(deckOfCards))   throw  'Input should be a number'
            for (let k = 0; k < deckOfCards.length; k++) {
                //random generates any number 
                var random = Math.floor(Math.random() * deckOfCards.length);
                //swaping the cards according to the random number generated
                var temp = deckOfCards[random];
                deckOfCards[random] = deckOfCards[k];
                deckOfCards[k] = temp;
            }
            //displaying cards after shuffling
            console.log("******After Shuffling******")
            console.log(deckOfCards.join(" "));
        }
        catch (e) {
            console.log(e)
            //card.deckCards();
            return e
        }
    }

    //distrubuting 9 cards to 4 players
    distributingCards(deckOfCards, noOfPlayers, noOfCards) {
        try {
            if (deckOfCards == undefined || noOfPlayers == undefined || noOfCards == undefined || deckOfCards == null || noOfPlayers == null || noOfCards == null) throw 'Cannot be undefined or null'
            if (deckOfCards == " " || noOfPlayers == " " || noOfCards == " ") throw 'Cannot be empty'
            if (isNaN(noOfPlayers) || isNaN(noOfCards)) throw 'Input should be number'
            var k = 0;
            //creating 2-D array
            var player = new Array();
            //Loop will run uptil number of players
            for (let i = 0; i < noOfPlayers; i++) {
                player[i] = new Array();
                //loop will run until number of cards to be distributed divided by number of players
                for (let j = 0; j < Math.floor(noOfCards / noOfPlayers); j++) {
                    //cards distributed will be stored in players 2d array
                    player[i][j] = deckOfCards[k++];
                }
            }
            //displaying cards distributed in players 2d array
            console.log(player);
        }
        catch (e) {
            console.log(e)
            return e
        }
    }
}

module.exports = {
    shuffle
}
