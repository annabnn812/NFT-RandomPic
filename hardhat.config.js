require('@nomiclabs/hardhat-waffle');
const fs = require("fs")
const privateKey = fs.readFileSync(".secret").toString().trim()
const myApi = fs.readFileSync(".alchemyapi").toString().trim()

module.exports = {
defaultNetwork: "rinkeby",
  networks: {
    hardhat: {
     
    },
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/Y158a1VUU-vjLilrxM5i91wP2EpOmGJN",
      accounts: [privateKey],
      
    }
    
  },
  solidity: {
    version: "0.8.0",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 20000
  }
}