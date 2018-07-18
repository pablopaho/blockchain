const path = require('path');
const fs = require('fs');
const solc = require('solc');

const communityFactoryPath = path.resolve(__dirname, 'contracts', 'CommunityFactory.sol');
const source = fs.readFileSync(communityFactoryPath, 'utf8');

module.exports = solc.compile(source, 1).contracts[':CommunityFactory'];
