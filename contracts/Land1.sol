pragma solidity 0.5.3;

import "./ERC721Enumerable.sol";

contract Land is ERC721Enumerable {
    using SafeMath for uint256;
    using Address for address;

    struct LandPiece {
        uint id;
        uint price;
        string deedHash;
    }

    struct Bids {
        uint id;
        uint bidCount;
        mapping (uint => address) bidders;
        mapping (uint => uint) bidPrices;
    }

    mapping (uint => LandPiece) landpieces;
    mapping (address => uint) withdrawable;
    mapping (uint => bool) sellable;
    mapping (uint => Bids) bids;
    mapping (address => string) userBid;

    address private owner;
    address constant private dev = 0x28eb22d0FA4FF0EF156f9D05819e9CE55cda5b23;
    uint public landCount;
    string public StateHash;

    constructor () public {
        owner = msg.sender;
        landCount = 0;
        StateHash = "";
    }

    //ensures only government can access
    modifier onlyGovernment(){
        require(owner == msg.sender);
        _;
    }

    //ensures only land owner can access
    modifier onlyLandOwner(uint id) {
        require(msg.sender == ownerOf(id));
        _;
    }

    //ensures a LandPiece is up for sale
    modifier isForSale(uint id) {
        require(sellable[id]);
        _;
    }

    //ensures bid exists for current selling iteration
    modifier bidsExists(uint id, uint bidNo) {
        require(bidNo != 0);
        require(bidNo <= bids[id].bidCount);    /* Bid exists for current selling iteration */
        _;
    }

    //creating a new piece of land and minting to the land owner
    function addLand (address to, string memory deedHash, string memory newStateHash) onlyGovernment public {
        ++landCount;
        landpieces[landCount] = LandPiece(landCount, 0, deedHash);
        _mint(to, landCount);
        StateHash = newStateHash;
    }

    //place bid
    function bid(uint id, string memory hash) isForSale(id) public payable {
        address bidder = msg.sender;
        uint bidPrice = msg.value;

        //Initialize bid
        ++bids[id].bidCount;
        uint bidNo = bids[id].bidCount;
        bids[id].bidders[bidNo] = bidder;
        bids[id].bidPrices[bidNo] = bidPrice;

        //Store hash of bid in IPFS
        userBid[msg.sender] = hash;

        //Store bid value to account
        withdrawable[bidder] += bidPrice;
    }

    //put the bids in IPFS
    function userBidHash() public view returns (string memory) {
        return userBid[msg.sender];
    }

    //confirm and complete LandPiece sale transation
    function acceptBid(uint id, uint bidNo)  isForSale(id) onlyLandOwner(id) bidsExists(id, bidNo) public {
        address landowner = ownerOf(id);
        address bidder = bids[id].bidders[bidNo];
        uint bidPrice = bids[id].bidPrices[bidNo];

        require(withdrawable[bidder] >= bidPrice);

        sellable[id] = false;

        //computation for deductions
        uint taxDeductible = bidPrice * 6 / 100;
        uint serviceFee = bidPrice * 2 / 100;
        uint total = bidPrice - taxDeductible - serviceFee;

        withdrawable[owner] += taxDeductible;
        withdrawable[dev] += serviceFee;

        withdrawable[landowner] += total;
        withdrawable[bidder] -= bidPrice;

        transferFrom(landowner, bidder, id);
    }

    //get the bid amount of a particular bidder
    function viewBidPrice(uint id, uint bidNo) isForSale(id) onlyLandOwner(id) bidsExists(id, bidNo) public view returns (uint) {
        uint price = bids[id].bidPrices[bidNo];
        return price;
    }

    //get the current number of bids
    function viewBidCount(uint id)  isForSale(id) public view returns (uint) {
        require(ownerOf(id) == msg.sender);
        return bids[id].bidCount;
    }

    //get information if a LandPiece is for sale
    function isSellable(uint id) public view returns (bool) {
        return (sellable[id]);
    }

    //mark the start of sale of a LandPiece
    function sellStart(uint id, uint price) onlyLandOwner(id) public {
        sellable[id] = true;
        landpieces[id].price = price;
        bids[id] = Bids(id, 0);
        emit Approval(ownerOf(id), address(this), id);
    }

    //mark the end of sale of a LandPiece
    function sellEnd(uint id) onlyLandOwner(id) public  {
        sellable[id] = false;
        bids[id] = Bids(id, 0);
        emit Approval(ownerOf(id), address(this), id);
    }

    //get the price of a LandPiece for sale
    function getPrice(uint id) isForSale(id) public view returns (uint) {
        return landpieces[id].price;
    }

    //transfer of balance
    function withdraw() public {
        address payable account = msg.sender;
        uint balance = withdrawable[account];
        require(balance != 0);
        withdrawable[account] -= balance;
        account.transfer(balance);
    }

    //get the balance
    function getBalance() public view returns (uint) {
        return withdrawable[msg.sender];
    }

    //burn LandPiece token
    function burnLand(uint id) public {
        require(ownerOf(id) == msg.sender);
        _burn(ownerOf(id), id);
    }

    function getDeedHash(uint id) public view returns (string memory) {
        return landpieces[id].deedHash;
    }
}
