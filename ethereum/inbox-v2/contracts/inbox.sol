pragma solidity ^0.4.4;

contract Inbox {
  string public message;

  constructor(string initalMessage) public {
    message = initalMessage;
  }

  function setMessage(string newMessage) public {
    message = newMessage;
  }

}
