var PiggyBank = artifacts.require("PiggyBank");
module.exports = function(deployer) {
    // deployment steps
    deployer.deploy(PiggyBank);
  };