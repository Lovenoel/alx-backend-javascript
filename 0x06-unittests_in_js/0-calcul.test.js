const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {
  it('should return the sum of rounded numbers', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
    assert.strictEqual(calculateNumber(1, 3.7), 5);
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it('should handle negative numbers', () => {
    assert.strictEqual(calculateNumber(-1.4, -3.7), -5);
    assert.strictEqual(calculateNumber(-1.5, -2.5), -4);
  });

  it('should handle zero values', () => {
    assert.strictEqual(calculateNumber(0, 0), 0);
    assert.strictEqual(calculateNumber(-0.4, 0.4), 0);
  });

  it('should handle large numbers', () => {
    assert.strictEqual(calculateNumber(1e10, 1e-10), 10000000000);
  });

  it('should throw a TypeError for non-numeric inputs', () => {
    assert.throws(() => calculateNumber('1', 2), { name: 'TypeError', message: 'Inputs must be numbers' });
    assert.throws(() => calculateNumber(1, '2'), { name: 'TypeError', message: 'Inputs must be numbers' });
    assert.throws(() => calculateNumber('1', '2'), { name: 'TypeError', message: 'Inputs must be numbers' });
    assert.throws(() => calculateNumber(undefined, 2), { name: 'TypeError', message: 'Inputs must be numbers' });
  });
});
