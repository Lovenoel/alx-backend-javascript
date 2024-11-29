const sinon = require("sinon");
const Utils = require("./utils");
const sendPaymentRequestToApi = require("./3-payment");

describe("sendPaymentRequestToApi", () => {
  it("should stub Utils.calculateNumber to always return 10", () => {
    const stub = sinon.stub(Utils, "calculateNumber").returns(10);
    const consoleSpy = sinon.spy(console, "log");

    sendPaymentRequestToApi(100, 20);

    sinon.assert.calledOnceWithExactly(stub, "SUM", 100, 20);
    sinon.assert.calledOnceWithExactly(consoleSpy, "The total is: 10");

    stub.restore();
    consoleSpy.restore();
  });
});
