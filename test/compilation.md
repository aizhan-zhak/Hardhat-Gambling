### 1. Challenge 1 - Test and Deploy

```shell 
npx hardhat run scripts/deploy.js --network localhost
```

Downloading compiler 0.8.17
Compiled 2 Solidity files successfully
Contract Deployed at 0x0165878A594ca255338adfa4d48449f69242Eb8F

```shell 
MacBook-Air-Aizhan:Hardhat-Gambling aizhana$ npx hardhat test
```

  Engine
    bitwiseAnd
      ✔ should return 0 when both inputs are 0
      ✔ should return the bitwise AND of two numbers

  Game contract
    ✔ should return true if the user guess is correct
    ✔ should return false if the user guess is incorrect


  4 passing (3s)

```shell 
(base) MacBook-Air-Aizhan:Hardhat-Gambling aizhana$ git commit -m "Add new test files and compilation report, update package-lock and package.json. This commit adds new test files for the game, engine and the game contract, along with a report on the Solidity compilation process. The package-lock and package.json files were also updated to reflect these changes"
```

[main 2d26144] Add new test files and compilation report, update package-lock and package.json. This commit adds new test files for the game, engine and the game contract, along with a report on the Solidity compilation process. The package-lock and package.json files were also updated to reflect these changes
 6 files changed, 153 insertions(+), 390 deletions(-)
 create mode 100644 test/compilation.md
 create mode 100644 test/test_engine.test.js
 create mode 100644 test/test_game.test.js

```shell 
(base) MacBook-Air-Aizhan:Hardhat-Gambling aizhana$ git push
warning: redirecting to https://github.com/aizhan-zhak/Hardhat-Gambling/
Enumerating objects: 15, done.
Counting objects: 100% (15/15), done.
Delta compression using up to 2 threads
Compressing objects: 100% (10/10), done.
Writing objects: 100% (10/10), 5.26 KiB | 449.00 KiB/s, done.
Total 10 (delta 3), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (3/3), completed with 3 local objects.
To http://github.com/aizhan-zhak/Hardhat-Gambling
   61ed3d2..2d26144  main -> main
```

### 2. Challenge 2 - Celo Alfajores Deployment
```shell 
npm install dotenv
npx hardhat run scripts/deploy.js --network alfajores
```

Contract Deployed at 0xe6317492C8a532992019394FE3C827C564169Fe5