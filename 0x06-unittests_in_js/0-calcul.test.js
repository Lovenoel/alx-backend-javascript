const assert = require("assert");
const calculateNumber = require("./0-calcul");

describe("calculateNumber", () => {
  it("should return 4 for inputs 1 and 3", () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it("should round and return 5 for inputs 1 and 3.7", () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it("should round both numbers and return 6 for inputs 1.5 and 3.7", () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });
});
