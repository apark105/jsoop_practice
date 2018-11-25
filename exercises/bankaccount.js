

class Account{
	constructor(){
		//store the amount of money in the account
		this.money = 0; 
	}
	add( amount ){
		this.money = this.money + amount;
		return this.money;
		//add money to the amount stored in the account
		//takes in an amount
		//adds it to the existing amount
		//returns the new amount in the account
	}
	remove( amount ){
		if ( this.money < amount ) {
			var remainingBal = this.money;
			this.money = 0;
			return remainingBal;
		}
		else {
			this.money = this.money - amount 
			return amount
		}
		//removes funds from an account
		//check if the amount to withdraw is more than the account
		//if more, only withdraw the amount in the account, not more
		//if less, withdraw the amount specified
		//return the amount actually withdrawn
	}
	getAmount(){
		return this.money
		//returns the amount in the account
	}
}