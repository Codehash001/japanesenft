const hre = require('hardhat')

const _initBaseURI='ipfs://QmaUmLTtYjcofnSfEYouBiTGcNVQJbH9NeueWu3Mr7EBSM/'
//const proxyRegistryAddressRinkeby = '0xf57b2c51ded3a29e6891aba85459d600256cf317'
//const proxyRegistryAddressMainnet = '0xa5409ec958c83c3f309868babaca7c86dcb077c1'

async function main() {

  // Deploy the contract
  const weRjapaneseTest01 = await hre.ethers.getContractFactory('WeRjapaneseTest01')
  const WeRjapaneseTest01 = await weRjapaneseTest01.deploy(
    _initBaseURI)
await WeRjapaneseTest01.deployed()

  console.log('WeRjapaneseTest01 deployed to:', WeRjapaneseTest01.address)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })