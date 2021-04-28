require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'hidden enter october food trap renew magic concert gown light army gas'; 
let testAccounts = [
"0xdd84e99f1d9baa82c279f3d25912ad41a57abfe70a15901030cd9dff9dfffd71",
"0xddfd4318016a152a32f645ab7af26148592d50c1100459f2953f05ef1bc5ebc3",
"0x6f2007d22f47120a7cbeefd4580d4de14f56f3f5dbbe202fe25a202afa852444",
"0x5d8e46231ee62ae17acfeee89b9d700810e5bd3522881704a34ea150353dc0d0",
"0xdf9e6707e8d11319fc17ca56123ea60c880918d3c69170ce70391f7028e0df57",
"0x0188a48213b5908a48a876e05c2a83c4b49e15a8aa1da423b156236bcd4462da",
"0x07b6298e22d76e72dca15b8e672023580cb8493aba32d6330584a5ce7c28c42c",
"0xfd61f9c4a181b7a4ee2ac7674e39e804c76fb66d1093f7fb2358f2136f94add6",
"0xe5f58fc8ad5f1d5e6d83e5a74fb6ae67b38a928b55d02d56b1871a128b979df1",
"0x561e4e127f25596101f04e1ddb6216581dc390e54b4f8102ea069fb299304140"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

