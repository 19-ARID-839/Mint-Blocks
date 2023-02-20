// require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-waffle");
const apiKeyforMumbai = "V29oxmE_JAAlLwJGHtngfVbmnfgE8B-I"
const apiKeyforMainnet = "8Eb1ub2DIC9wRO05NxO0NIOqJUCtUXl4"
const fs = require("fs");
const keyData = fs.readFileSync("./p-key").toString();

//currently the metamask account is created by watching udemy course video and is a simple account which is 
//not connected to alchemy however there is a Polygon Mumbai account in the metamask which is connect to the
//mumbai testnet only as there are separate projects on alchemy so its connected only to 1

module.exports = {
    // solidity: "0.8.17",
    defaultNetwork: 'hardhat',
    networks: {
        hardhat: {
            chainId: 1337 //config standard will discss when using metamask 1337 or 80001
        },
        mumbai: {
            url: `https://polygon-mumbai.g.alchemy.com/v2/${apiKeyforMumbai}`,
            accounts: [keyData]
        },
        mainnet: {
            url: `https://polygon-mainnet.g.alchemy.com/v2/${apiKeyforMainnet}`,
            accounts: [keyData]
        }

    },


    solidity: "0.8.17",
};