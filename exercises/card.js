
class Card{
	constructor(suit, faceValue){
		this.suit = suit;
		this.faceValue = faceValue;
	}
	getsuit(){
		return this.suit;
	}
	getFaceValue(){
		return this.faceValue;
	}
}

class Deck{
	constructor(){
		//takes in nothing
		//make storage for your card objects
		this.cardObj = [];
	}
	addCard( suit, faceValue ){
		// var newCardArray =[];
		debugger;
		var newCard = new Card(suit, faceValue);
		// newCardArray.push(newCard)
		// newCardArray.push(newCard.getFaceValue(faceValue))
		this.cardObj.unshift(newCard)
		// this.cardObj.push({
		// 	'Suit':newCard.getsuit(suit), 
		// 	'Face Value': newCard.getFaceValue(faceValue)
		
		// })
		return this.cardObj.length
		//adds a card to the deck
		//takes in a string suit and faceValue
		//makes a new card Object from the Card template
		//adds the card object to the storage in the constructor
		//returns the amount of cards currently stored
	}
	shuffle(){
		for (var i = this.cardObj.length; i > 0; i--) {
			var temp = this.cardObj[i];
			var randomPosition = Math.floor(Math.random() * i );
			this.cardObj[i] = this.cardObj[randomPosition];
			this.cardObj[randomPosition] = temp;
		}
		//reorders the cards in the storage array in a random order
		//takes in nothing
		//returns nothing
	}
	getCardCount(){
		return this.cardObj.length
		//gets the current amount of cards stored
		//takes in nothing
		//returns the amount of cards stored in the array in the constructor
	}
	dealCards( numberOfCards ){
		if (numberOfCards > this.cardObj.length) {
			// var cardCountArray = this.cardObj
			// this.cardObj = [];
			return this.cardObj.length
		}
		else {
			var cardCountArray = [];
			for(var i =0; i < numberOfCards; i++) {
				cardCountArray.push(this.cardObj[i])
				this.cardObj.splice(i, 1)
			}
			console.log(cardCountArray)
			return cardCountArray;
		}
		//deals out a number of cards
		//takes in the number of cards to deal
		//removes that many cards from the deck
		//returns an array with that many cards in it
		//cannot return more cards than the deck has
	}
}