const hre = require('hardhat')
const { MerkleTree } = require('merkletreejs')
const keccak256 = require('keccak256')
const whitelist = require('./whitelist.js')

const _initBaseURI='ipfs://QmaUmLTtYjcofnSfEYouBiTGcNVQJbH9NeueWu3Mr7EBSM/'
//const proxyRegistryAddressRinkeby = '0xf57b2c51ded3a29e6891aba85459d600256cf317'
//const proxyRegistryAddressMainnet = '0xa5409ec958c83c3f309868babaca7c86dcb077c1'

async function main() {
  const nftFactory = await hre.ethers.getContractFactory('WeRjapaneseTest01')
  const nftContract = await nftFactory.attach(
    '0x08bBBa836cB7a402B6F1f3839c22C9a940f8d1FF'
  )

    // Calculate merkle root from the whitelist array
    const leafNodes = whitelist.map((addr) => keccak256(addr))
    const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true })
    const root = merkleTree.getRoot().toString('hex')
  
  
  
    console.log('Whitelist root set to:', root)
  }
  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error)
      process.exit(1)
    })
