const KeyManager = require('../lib/KeyManager');
const CryptoAPI = require('../lib/CryptoAPI');

const check = {
  price(cmd) {
    console.log(cmd.coin, cmd.cur);
  }
};

module.exports = check;