npx hardhat run scripts/deploy.js --network localhost

Downloading compiler 0.8.17
Compiled 2 Solidity files successfully
Contract Deployed at 0x0165878A594ca255338adfa4d48449f69242Eb8F

MacBook-Air-Aizhan:Hardhat-Gambling aizhana$ npx hardhat test


  Engine
    bitwiseAnd
      ✔ should return 0 when both inputs are 0
      ✔ should return the bitwise AND of two numbers

  Game contract
    ✔ should return true if the user guess is correct
    ✔ should return false if the user guess is incorrect


  4 passing (3s)