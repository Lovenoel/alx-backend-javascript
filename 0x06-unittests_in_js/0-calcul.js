function calculateNumber(a, b) {
	// Validate inputs
	if (typeof a !== 'number' || typeof b !== 'number'){
		throw new TypeError('Inputs must be numbers');
	}

	// Round inputs and return the sum
	return Math.round(a) + Math.round(b);
}

module.exports = calculateNumber;
