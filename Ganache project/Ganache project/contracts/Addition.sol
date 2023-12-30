pragma solidity ^0.8.21;
contract Addition {
  int public sum = 0;
function add (int x, int y) public {
    sum = x + y;
  }
}