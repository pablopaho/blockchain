// See <http://truffleframework.com/docs/advanced/configuration>
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      from: "0xC7CaB9ECEd3a692165572CeC690b07AE9dC3238d",
      network_id: "4", // Match any network id
      gas: 4612388
    },
    rinkeby: {
      host: "127.0.0.1", // Connect to geth on the specified
      port: 8545,
      from: "0xA47D4906b864Ef1AA89446b9dba513f17C217694", // default address to use for any transaction Truffle makes during migrations
      network_id: 4,
      gas: 4612388 // Gas limit used for deploys
    },
    solc: {
		optimizer: {
			enabled: true,
			runs: 200
		}
	 }
  }
};
