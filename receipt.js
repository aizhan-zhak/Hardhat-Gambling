const ethers = require('ethers');
const fs = require('fs');

async function getTransactionReceipt() {
    const provider = new ethers.providers.JsonRpcProvider("https://alfajores-forno.celo-testnet.org");
    const txHash = '0x75f8a6f7e78b1d35c975bedeb014b8529d443d777a8a08ae346f3288298870dc';
  const receipt = await provider.getTransactionReceipt(txHash);

  console.log(receipt);

  const gasUsed = receipt.gasUsed.toNumber();
  const gasPrice = receipt.effectiveGasPrice.toNumber();
  const cost = ethers.utils.formatEther(gasUsed * gasPrice);

  console.log(`Gas used: ${gasUsed}`);
  console.log(`Gas price: ${gasPrice}`);
  console.log(`Transaction cost: ${cost} CELO`);
}

getTransactionReceipt();
