

class Bank{
	constructor(name){
		this.accountInfo = {}; 
		//takes in the name of the bank.
		//makes an object to store all accounts into
	}
	makeAccount( accountNumber ){
		if (accountNumber in this.accountInfo) {
			return false; 
		}
		else {
			this.accountInfo[accountNumber] = 0
			return this.accountInfo.accountNumber
		}
		//makes an account
		//takes in the account number of an account
		//checks if the account number already exists in the account storage object in the constructor
			//if already exists, returns false
		//otherwise makes an new Account object, storing it into the storage object in the constructor
		//returns the Account object that was constructed
	}
	checkForAccount( accountNumber ){
		if (accountNumber in this.accountInfo) {
			return true; 
		}
		else {
			return false;
		}
		//checks if an account exists or not
		//takes in the account number of an account
		//returns false if the account does not exist in the accounts object from the constructor
		//returns true if the account does exist
	}
	removeAccount( accountNumber ){

		if (typeof(this.accountInfo[accountNumber]) == 'undefined') {
			return `account ${accountNumber} does not exist`
		}
		else if (!!this.accountInfo[accountNumber]) {
			return `account is not empty`
		}
		else {
			delete this.accountInfo[accountNumber]
			return `account ${accountNumber} deleted`
		}
		//removes an account
		//takes in an account number
		//if the account doesn't exist, returns
			//"account <accountNumber> does not exist" where accountNumber is the account number
		//if the account is not empty, returns
			//'account is not empty'
		//otherwise deletes the account from the constructor storage
		//returns 
			//'account <accountNumber> deleted'

	}
	deposit(accountNumber, amount ){

		if (typeof(this.accountInfo[accountNumber]) == 'undefined') {
			return `account does not exist`
		}
		else {
			this.accountInfo[accountNumber] = this.accountInfo[accountNumber] + amount
			return `account ${accountNumber} now has ${amount}`
		}
		//deposits money into an account
		//takes in an account number and a numeric amount
		//if the account doesn't exist, returns
			//'account does not exist'
		//otherwise uses the account's add method and adds to the account
			//returns
			//"account <accountNumber> now has <new account amount>
	}
	withdraw( accountNumber, amount ){
		if (typeof(this.accountInfo[accountNumber]) == 'undefined') {
			return `account does not exist`
		}
		else {
			if ( this.accountInfo[accountNumber] < amount ) {
				var remainingAmt = this.accountInfo[accountNumber]
				this.accountInfo[accountNumber] = 0
				return `removed ${remainingAmt} from account ${accountNumber}. It now has 0`
			}
			else {
				this.accountInfo[accountNumber] = this.accountInfo[accountNumber] - amount
				return `removed ${amount} from account ${accountNumber}. It now has ${this.accountInfo[accountNumber]}`
			}
		}
		//removes money from an account
		//takes in an account number and an amount
		//checks if the account exists, if not
			//return 'account does not exist'
		//uses the Account's remove method to withdraw funds from the account
		//returns "removed <amount withdrawn> from account <account number>. It now has <remaining amount in account>"
	}
}

var newAccount = new Bank();
debugger;
newAccount.makeAccount('1349823399')
newAccount.deposit('1349823399', 10)
newAccount.withdraw('1349823399', 20)
newAccount.removeAccount('1349823399')