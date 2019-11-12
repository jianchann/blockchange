pragma solidity 0.5.3;

import "./ERC721.sol";

contract Land is ERC721 {

    struct LandPiece {
        uint id;
        string name;
        uint price;
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

    address private owner;
    uint public landCount;
    string public StateHash;

    constructor () public {
        owner = msg.sender;
        landCount = 0;
        StateHash = "";
    }

    function addLand (string memory name, address to, string memory newStateHash) public {
        require(owner == msg.sender, "Unauthorized.");
        ++landCount;
        landpieces[landCount] = LandPiece(landCount, name, 0);
        _mint(to, landCount);
        StateHash = newStateHash;
    }

    function acceptBid(uint id, uint bidNo) public {
        require(sellable[id], "Land is not for sale.");  /* Check if LandPiece is for sale */
        require(bidNo != 0, "There are no bids available.");    /* Bids start with 1 */
        require(bidNo <= bids[id].bidCount, "Bid does not exist.");    /* Bid exists for current selling iteration */
        require(ownerOf(id) == msg.sender, "Unauthorized"); /* Check if account accepting the bid is the id owner */

        address landowner = ownerOf(id);
        address bidder = bids[id].bidders[bidNo];
        uint bidPrice = bids[id].bidPrices[bidNo];

        require(withdrawable[bidder] >= bidPrice, "Bidder has no account balance.");

        sellable[id] = false;

        withdrawable[landowner] += bidPrice;
        withdrawable[bidder] -= bidPrice;


        transferFrom(landowner, bidder, id);
    }

    function viewBidPrice(uint id, uint bidNo) public view returns (uint) {
        require(sellable[id], "Land is not for sale.");  /* Check if LandPiece is for sale */
        require(bidNo != 0, "There are no bids available.");    /* Bids start with 1 */
        require(bidNo <= bids[id].bidCount, "Bid does not exist.");    /* Bid exists for current selling iteration */
        require(ownerOf(id) == msg.sender, "Unauthorized"); /* Check if account viewing the bid price is the id owner */

        uint price = bids[id].bidPrices[bidNo];

        return price;
    }

    function viewBidCount(uint id, uint bidNo) public view returns (uint) {
        require(sellable[id], "Land is not for sale.");  /* Check if LandPiece is for sale */
        require(bidNo != 0, "There are no bids available.");    /* Bids start with 1 */
        require(bidNo <= bids[id].bidCount, "Bid does not exist.");    /* Bid exists for current selling iteration */
        require(ownerOf(id) == msg.sender, "Unauthorized."); /* Check if account viewing the bid count is the id owner */

        return bids[id].bidCount;
    }


    function isSellable(uint id) public view returns (bool) {
        return (sellable[id]);
    }

    function sellTag(uint id, uint price) public {
        address landowner = ownerOf(id);

        require(landowner == msg.sender, "Unauthorized.");

        sellable[id] = true;
        landpieces[id].price = price;
        bids[id] = Bids(id, 0);

        emit Approval(landowner, address(this), id);
    }

    function sellUntag(uint id) public {
        address landowner = ownerOf(id);

        require(landowner == msg.sender, "Unauthorized.");

        sellable[id] = false;
        bids[id] = Bids(id, 0);

        emit Approval(landowner, address(this), id);
    }

    function getPrice(uint id) public view returns (uint) {
        require(sellable[id], "Land is not for sale.");

        return landpieces[id].price;
    }

    function withdraw() public {
        address payable account = msg.sender;
        uint balance = withdrawable[account];

        require(balance != 0, "No account balance.");

        withdrawable[account] -= balance;
        account.transfer(balance);
    }

    function getBalance() public view returns (uint) {
        return withdrawable[msg.sender];
    }

    function burnLand(uint id) public {
        require(ownerOf(id) == msg.sender, "Unauthorized.");
        _burn(ownerOf(id), id);
    }

    function bid(uint id) external payable {
        require(sellable[id], "Land is not for sale.");
        address bidder = msg.sender;
        uint bidPrice = msg.value;


        /* Initialize bid */
        ++bids[id].bidCount;
        uint bidNo = bids[id].bidCount;
        bids[id].bidders[bidNo] = bidder;
        bids[id].bidPrices[bidNo] = bidPrice;

        /* Store bid value to account */
        withdrawable[bidder] += bidPrice;
    }
}
