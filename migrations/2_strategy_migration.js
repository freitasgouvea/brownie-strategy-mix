const Migrations = artifacts.require("Strategy");
require('dotenv').config();

const _vault = process.env.VAULT;

console.log('Vault address: ' + _vault);

module.exports = function (deployer) {
  deployer.deploy(Migrations, _vault);
};
