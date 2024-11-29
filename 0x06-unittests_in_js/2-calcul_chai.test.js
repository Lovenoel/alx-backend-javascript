const chai = require("chai");
const expect = chai.expect;
const calculateNumber = require("./2-calcul_chai");

describe("calculateNumber", () => {
  it("should round and sum numbers correctly", () => {
    expect(calculateNumber(1.4, 4.5)).to.equal(6);
    expect(calculateNumber(1.7, 3.2)).to.equal(5);
  });
});
