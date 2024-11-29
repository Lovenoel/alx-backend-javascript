const sinon = require("sinon");
const Utils = require("./utils");
const sendPaymentRequestToApi = require("./3-payment");

describe("sendPaymentRequestToApi", () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = sinon.spy(console, "log");
  });

  afterEach(() => {
    consoleSpy.restore();
  });

  it('should log "The total is: 120" for inputs 100 and 20', () => {
    sendPaymentRequestToApi(100, 20);
    sinon.assert.calledOnceWithExactly(consoleSpy, "The total is: 120");
  });

  it('should log "The total is: 20" for inputs 10 and 10', () => {
    sendPaymentRequestToApi(10, 10);
    sinon.assert.calledOnceWithExactly(consoleSpy, "The total is: 20");
  });
});
