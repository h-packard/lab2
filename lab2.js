function convertTemp(tempUnit, tempQuant) {
var newTemp;
		if (tempUnit === 'F') { 
	newTemp = (tempQuant - 32) * (5/9);
	console.log(tempQuant + " degrees Fahrenheit is " + newTemp + " degrees in Celsius.");
} else if (tempUnit === 'C') {
	newTemp = tempQuant * (9/5) + 32;
	console.log(tempQuant + " degrees Celsius is " + newTemp + " degrees in Fahrenheit.");
} else {
	console.log('Please enter C for Celsius or F for Fahrenheit!');
	}
}

convertTemp("F",212)