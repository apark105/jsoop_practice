
class Calculator{
	constructor(){
		// this.add = '+',
		// this.subtract = '-',
		// this.multiply = '*',
		// this.divide = '/',
		this.storage = [];
		this.operator = null;
		this.num1 = null; 
		this.num2 = null;
		// this.number1 = null;
		// this.number2 = null;
		//takes in nothing
		//make storage for the operator and the numbers
	}
	loadOperator( operator ){
		var operatorCheck = ['+', '-', '*', '/'];
		if ( operatorCheck.indexOf(operator) !== -1 ) {
			this.operator = operator
			return true 
		}
		else {
			return false;
		}
		//adds the operator to the next calculation
		//takes in the operator
		//checks if it is a valid operation (+-*/)
			//save the op to the constructor storage
			//return true
		//or return false if not the right operator
	}
	loadNumber(num){
		if (!isNaN(num) && typeof(num) === 'number' ) {
			if ( this.num1 === null ) {
				this.num1 = num
				return 1
			}
			else if ( this.num2 === null ) {
				this.num2 = num
				return 2
			}
			else {
				return false;
			}
		}
		else {
			return false;
		}
		//takes in a number and stores it as one of the numbers to perform math on
		//takes in 1 number
		//checks if it is actually a number and if we have fewer than 2 numbers
		//if it is a number, and we have 2 or fewer numbers, store it
			//return the number of numbers stored
		//otherwise return false (too many numbers stored)
	}
	calculate(){
		var calculation;
		var num1 = this.num1
		var num2 = this.num2
		switch ( this.operator ) {
			case '+': 
				calculation = num1 + num2;
				break;
			case '-':
				calculation = num1 - num2;
				break; 
			case '/':
				calculation = num1 / num2;
				break; 
			case '*':
				calculation = num1 * num2;
				break; 
		}
		this.num1 = null;
		this.num2 = null;
		return calculation;
		//calculate the result of the stored numbers and operator
		//takes in nothing
		//calculates with the operator and 2 numbers
		//clears out the stored numbers
		//returns the calculated result
	}
}

var addition = new Calculator();
addition.loadNumber(1)
addition.loadNumber(2)
addition.loadOperator('+')
addition.calculate();