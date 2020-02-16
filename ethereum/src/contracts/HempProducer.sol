pragma solidity ^0.5.1;

contract HempProducer {
  address owner;
  address licensee;

  string licenseId;
  uint128 idIdx;

  Sample[] samples;

  constructor(
    string memory _licenseId
  ) public {
    owner = msg.sender;
    licenseId = _licenseId;
  }

  struct Sample {
    string id;
    string location;
    uint32 harvestDate;
    uint32 testDate;
    uint32 validUntil;
    address sold;
    uint32 shipped;
    string laboratory;
    string method;
    uint8 range;
    uint16 result;
    uint64 size;
    bool pass;
    bool destroyed;
  }


  function _onlyFor(address _user) internal {
    return require(msg.sender == _user, 'FORBIDDEN');
  }

  modifier _onlyOwner {
    _onlyFor(owner);
    _;
  }

  modifier _onlyLicensee {
    _onlyFor(licensee);
    _;
  }

  // Helper functions for working with strings
  function strConcat(string memory _a, string memory _b, string memory _c, string memory _d, string memory _e) internal returns (string memory){
      bytes memory _ba = bytes(_a);
      bytes memory _bb = bytes(_b);
      bytes memory _bc = bytes(_c);
      bytes memory _bd = bytes(_d);
      bytes memory _be = bytes(_e);
      string memory abcde = new string(_ba.length + _bb.length + _bc.length + _bd.length + _be.length);
      bytes memory babcde = bytes(abcde);
      uint k = 0;
      for (uint i = 0; i < _ba.length; i++) babcde[k++] = _ba[i];
      for (uint i = 0; i < _bb.length; i++) babcde[k++] = _bb[i];
      for (uint i = 0; i < _bc.length; i++) babcde[k++] = _bc[i];
      for (uint i = 0; i < _bd.length; i++) babcde[k++] = _bd[i];
      for (uint i = 0; i < _be.length; i++) babcde[k++] = _be[i];
      return string(babcde);
  }

  function strConcat(string memory _a, string memory _b, string memory _c, string memory _d) internal returns (string memory) {
      return strConcat(_a, _b, _c, _d, "");
  }

  function strConcat(string memory _a, string memory _b, string memory _c) internal returns (string memory) {
      return strConcat(_a, _b, _c, "", "");
  }

  function strConcat(string memory _a, string memory _b) internal returns (string memory) {
      return strConcat(_a, _b, "", "", "");
  }

  function uintToStr(uint _val) internal pure returns (string memory _uintAsString) {
    uint _i = _val;

    if (_i == 0) {
        return "0";
    }

    uint j = _i;
    uint len;

    while (j != 0) {
        len++;
        j /= 10;
    }

    bytes memory bstr = new bytes(len);
    uint k = len - 1;

    while (_i != 0) {
        bstr[k--] = byte(uint8(48 + _i % 10));
        _i /= 10;
    }

    return string(bstr);
  }

  function setLicencee(address _licensee) public _onlyOwner {
    licensee = _licensee;
  }

  function addSample(
    string memory _location,
    uint32 _harvestDate,
    uint32 _testDate,
    address _sold,
    uint32 _shipped,
    string memory _laboratory,
    string memory _method,
    uint8 _range,
    uint16 _result,
    uint64 _size,
    bool _pass,
    bool _destroyed
  ) public _onlyLicensee {
    idIdx++;

    Sample memory _sample = Sample({
      id: strConcat(licenseId, '_', uintToStr(idIdx)),
      location: _location,
      harvestDate: _harvestDate,
      testDate: _testDate,
      validUntil: _testDate + 60 * 60 * 24 * 14,
      sold: _sold,
      shipped: _shipped,
      laboratory: _laboratory,
      method: _method,
      range: _range,
      result: _result,
      size: _size,
      pass: _pass,
      destroyed: _destroyed
    });

    samples.push(_sample);
  }
}
