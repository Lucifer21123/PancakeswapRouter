const PancakeRouter = artifacts.require("PancakeRouter");

module.exports = function(deployer) {
    deployer.deploy(PancakeRouter, "0xc4e00b7b193B4484e16876483Dde90c460460416", "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c");
};