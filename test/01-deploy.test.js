const Artifact = artifacts.require('../contracts/Strategy');
const Assert = require('truffle-assertions');

contract('01-deploy.test', (accounts) => {

    const vault = '0xFEB4acf3df3cDEA7399794D0869ef76A6EfAff52';

    let contractInstance;

    const ownerAddress = accounts[0];
    const address1 = accounts[1];

    before(() => {
        web3.eth.defaultAccount = ownerAddress;
    });

    beforeEach(async () => {
        contractInstance = await Artifact.new(vault);
    });

    it('contract name must be YearnStrategyTruffle', async () => {
        const result = await contractInstance.name();
        Assert.equal('YearnStrategyTruffle');
    });
});
