require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture roast food ski stomach cost mirror color hunt kangaroo army genuine'; 
let testAccounts = [
"0xea08a550572f392148e5e183516b7cd01796b401ac1e6e6fa5fd97027cc8c2cd",
"0xad0c6629369fe5fca569b06b0a3a3dc4dab2082eb5bc40d6d50ef8eb837f3db5",
"0x5b6454cc53687081288da3faccc902f423399675488de24d9ce4d2d4a0373efb",
"0x49bd01b5adc6b954f97960045bb2aae5007ebfb0af74995fdae3e844645fe9fd",
"0xcae512cf97be1359ec02cab621c93637c82f2980d4bac367413d5689aa3dab38",
"0x9de81aa9ad336c7e129dfafe0c125daac60bd49b76bd79c8c8fe497bc0215df6",
"0xf20ed5620b44020cb1dcfb14145d7d2f5a4d34536592f7b449a0fe5fdebcc002",
"0x3e8b163fd997a4dd59ad719fa166ad849cc63f2ffa32211680d20881cc0169e5",
"0x05751df499569d9aea6298403ece32a51fb3f3b343e5a237eb8e01cfe132781a",
"0x46b12a42269ecb9e9c1c0ea4de09250b2e305ad205653fbc42e373550943fbc2"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


