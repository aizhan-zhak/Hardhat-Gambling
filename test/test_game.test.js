const { expect } = require("chai");

describe("Game contract", function () {
  let Game;
  let game;

  beforeEach(async function () {
    Game = await ethers.getContractFactory("Game");
    game = await Game.deploy();
    await game.deployed();
  });

  it("should return true if the user guess is correct", async function () {
    // set a predictable random number for testing
    let random_number_1 = 0;
    let random_number_2 = 0;
    let user_guess = 0;

    // call the play function and expect the result to be true
    expect(await game.play(user_guess)).to.equal(true);
  });

  it("should return false if the user guess is incorrect", async function () {
    // set a predictable random number for testing
    let random_number_1 = 0;
    let random_number_2 = 1;
    let user_guess = 2;

    // call the play function and expect the result to be false
    expect(await game.play(user_guess)).to.equal(false);
  });
});
