const ERC721 = artifacts.require('ERC721')
const KittyInterface = artifacts.require('KittyInterface')
const Ownable = artifacts.require('Ownable')
const SafeMath = artifacts.require('SafeMath')
const SafeMath16 = artifacts.require('SafeMath16')
const SafeMath32 = artifacts.require('SafeMath32')
const ZombieFactory = artifacts.require('ZombieFactory')
const ZombieFeeding = artifacts.require('ZombieFeeding')
const ZombieHelper = artifacts.require('ZombieHelper')
const ZombieAttack = artifacts.require('ZombieAttack')
const ZombieOwnership = artifacts.require('ZombieOwnership')
const ZombieBattle = artifacts.require('ZombieBattle')


module.exports = function(deployer) {
  deployer.deploy(ERC721);
  deployer.deploy(KittyInterface);
  deployer.deploy(Ownable);
  deployer.deploy(SafeMath);
  deployer.deploy(SafeMath16);
  deployer.deploy(SafeMath32);
  deployer.deploy(ZombieFactory);
  deployer.deploy(ZombieFeeding);
  deployer.deploy(ZombieHelper);
  deployer.deploy(ZombieAttack);
  deployer.deploy(ZombieOwnership);
  deployer.deploy(ZombieBattle);
}
