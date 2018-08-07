const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');//W in capital beause is a constructor
const provider = ganache.provider();
const web3 = new Web3(provider);
const { interface, bytecode } = require('../compile');
require('events').EventEmitter.defaultMaxListeners = 0

let lottery;
let accounts;

beforeEach(async () => {
    account = await web3.eth.getAccounts();

    lottery = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({data: bytecode})
        .send({ from: accounts[0], gas: '1000000'});
});

describe('Lottery contract', () => {
    it('deploys a contract', () => {
        assert.ok(lottery.options.address); 
    });
});

