const { expect } = require("chai");

describe("Engine", function () {
  let engine;

  beforeEach(async function () {
    const Engine = await ethers.getContractFactory("Engine");
    engine = await Engine.deploy();
    await engine.deployed();
  });

  // Testing the bitwiseAnd function
  describe("bitwiseAnd", function () {
    it("should return 0 when both inputs are 0", async function () {
      // Calling it and expecting the result to be 0
      expect(await engine.bitwiseAnd(0, 0)).to.equal(0);
    });

    it("should return the bitwise AND of two numbers", async function () {
      // Calling it with two numbers and expecting the result to be the bitwise AND
      expect(await engine.bitwiseAnd(3, 5)).to.equal(1);
      expect(await engine.bitwiseAnd(7, 11)).to.equal(3);
    });
  });
});
