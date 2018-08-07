pragma solidity ^0.4.4;

contract CommunityFactory {

  string public message;
  uint globalDecimals = 10**4;
  uint rateInsurance = 5 * globalDecimals; 
  
  struct Member {
    string name;
    string riskObject;
    uint insuredAmount;
    uint payment;
    uint paymentEvent;
  }

  struct Community {
    string name;
    uint fund;
    uint insuredCount;
    uint eventReported;
    uint eventApproved;
  }

  Community[] public communities;
  Member[] public members;
 
  mapping (string => uint) nameToCommunity;
  mapping (uint => uint) public membersToCommunity;
  mapping (uint => address) public membersToAddress;

  constructor(string initalMessage) public {
    message = initalMessage;
  }

  function quote(uint _insuredAmount) public view returns (uint) {
    uint paymentAmount = ((_insuredAmount * globalDecimals) * rateInsurance) / (100*globalDecimals);
    return paymentAmount;
  }

  function _addMember(address _sender, uint _communityId, string _memberName, string _riskObject, uint _insuredAmount, uint _paymentAmount) internal returns (uint) {
    uint memberId = members.push(Member(_memberName, _riskObject, _insuredAmount, _paymentAmount, 0)) - 1;
    membersToAddress[memberId] = _sender;
    membersToCommunity[memberId] = _communityId;
    communities[_communityId].fund = communities[_communityId].fund + _paymentAmount;
    communities[_communityId].insuredCount = communities[_communityId].insuredCount + 1;
    return memberId;
  }

  function _createCommunity(address _sender, string _name, string _memberName, string _riskObject, uint _insuredAmount, uint _paymentAmount) internal returns (uint, uint) {
    uint communityId = communities.push(Community(_name, 0, 0, 0, 0)) - 1;
    uint newMemberId =_addMember(_sender, communityId, _memberName, _riskObject, _insuredAmount, _paymentAmount);
    nameToCommunity[_name] = communityId;
    return (communityId, newMemberId);
  }

  function buyInsurance(string _name, string _memberName, string _riskObject, uint _insuredAmount) external payable returns (uint, uint) {
    require(msg.value != 0);
    uint _paymentAmount = quote(_insuredAmount);
    uint _insuredAmountDecimals = _insuredAmount * globalDecimals; 
    require(msg.value == _paymentAmount);
    uint communityId;
    uint memberId;
    if(communities.length == 0){
      (communityId, memberId) = _createCommunity(msg.sender, _name, _memberName, _riskObject, _insuredAmountDecimals, msg.value);
    } else {
      communityId = nameToCommunity[_name];
      memberId = _addMember(msg.sender, communityId, _memberName, _riskObject, _insuredAmountDecimals, msg.value);
    }
    return (communityId, memberId);  
  }

}
