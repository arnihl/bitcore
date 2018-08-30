var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};

// No specific testnet set up for SMLY so
// using same params for both networks
exports.livenet = {
  name: 'testnet',
  magic: hex('fbc0b6db'),
  addressVersion: 0x19,
  privKeyVersion: 239,
  P2SHVersion: 196,
  hkeyPublicVersion: 0x043587cf,
  hkeyPrivateVersion: 0x04358394,
  genesisBlock: {
    hash: hex('fd542373994c9d9b7769b978c0f2f2732812d2bb01e2bd1161d1c6f64c730f66'),
    merkle_root: hex('8bec68a7adac5d2b25c6b2f9a1c5825a89e12718a34e73ea769c399cc31e44e964'),
    height: 0,
    nonce: 386703170,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1408974288,
    bits: 504365040,
  },
  dnsSeeds: [
    'smileyco.in',
    'dnsseed.smileyco.in'
  ],
  defaultClientPort: 11337
};
exports.mainnet = exports.livenet;
exports.testnet = {
  name: 'testnet',
  magic: hex('fbc0b6db'),
  addressVersion: 0x19,
  privKeyVersion: 239,
  P2SHVersion: 196,
  hkeyPublicVersion: 0x043587cf,
  hkeyPrivateVersion: 0x04358394,
  genesisBlock: {
    hash: hex('fd542373994c9d9b7769b978c0f2f2732812d2bb01e2bd1161d1c6f64c730f66'),
    merkle_root: hex('8bec68a7adac5d2b25c6b2f9a1c5825a89e12718a34e73ea769c399cc31e44e964'),
    height: 0,
    nonce: 386703170,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1408974288,
    bits: 504365040,
  },
  dnsSeeds: [
    'smileyco.in',
    'dnsseed.smileyco.in'
  ],
  defaultClientPort: 11337
};
