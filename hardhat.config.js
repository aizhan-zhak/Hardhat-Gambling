require("dotenv").config({ path: ".env" });

require("@nomicfoundation/hardhat-toolbox");
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    alfajores: {
      url: "https://alfajores-forno.celo-testnet.org",
      chainId: 44787, 
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  solidity: "0.8.17",
};
