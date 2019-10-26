pragma solidity 0.5.3;

contract Object {
    struct ObjectPiece {
        uint id;
        string name;
        string date;
        uint partsCount;
    }
    
    struct ObjectParts {
        uint serial;
        string name;
    }
    
    event Recall (uint serial);
    
    mapping (uint => ObjectPiece) objectpieces;
    mapping (uint => mapping (uint => ObjectParts)) objectparts;
    uint objectCount;
    
    constructor () public {
        objectCount = 0;
    }
    
    function addObject(string memory name, string memory date) public {
        ++objectCount;
        objectpieces[objectCount] = ObjectPiece(objectCount, name, date, 0);
    }
    
    function getObjectName(uint id) public view returns (string memory) {
        return objectpieces[id].name;
    }
    
    function getObjectDate(uint id) public view returns (string memory) {
        return objectpieces[id].date;
    }
    
    function addPartstoObject(uint id, uint serial, string memory name) public {
        ++objectpieces[id].partsCount;
        objectparts[id][objectpieces[id].partsCount] = ObjectParts(serial, name); 
    }
    
    function recallParts(uint serial) public {
        emit Recall(serial);
    }
}