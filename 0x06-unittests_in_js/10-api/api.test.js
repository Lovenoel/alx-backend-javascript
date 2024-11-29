const request = require("request");
const { expect } = require("chai");

describe("Index page", () => {
  it("should return status code 200", (done) => {
    request.get("http://localhost:7865/", (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it("should return the correct message", (done) => {
    request.get("http://localhost:7865/", (error, response, body) => {
      expect(body).to.equal("Welcome to the payment system");
      done();
    });
  });
});

describe("Cart page", () => {
  it("should return status code 200 for valid cart id", (done) => {
    request.get("http://localhost:7865/cart/12", (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it("should return the correct message for valid cart id", (done) => {
    request.get("http://localhost:7865/cart/12", (error, response, body) => {
      expect(body).to.equal("Payment methods for cart 12");
      done();
    });
  });

  it("should return status code 404 for invalid cart id", (done) => {
    request.get("http://localhost:7865/cart/hello", (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});

describe("/available_payments endpoint", () => {
  it("should return the correct payment methods", (done) => {
    request.get(
      "http://localhost:7865/available_payments",
      (error, response, body) => {
        expect(JSON.parse(body)).to.deep.equal({
          payment_methods: {
            credit_cards: true,
            paypal: false,
          },
        });
        done();
      }
    );
  });
});

describe("/login endpoint", () => {
  it("should return the correct welcome message", (done) => {
    const options = {
      url: "http://localhost:7865/login",
      method: "POST",
      json: { userName: "Betty" },
    };

    request(options, (error, response, body) => {
      expect(body).to.equal("Welcome Betty");
      done();
    });
  });
});
