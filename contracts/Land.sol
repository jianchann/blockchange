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
    string public state;

    constructor () public {
        owner = msg.sender;
        landCount = 0;
        state = "";
    }

    function addLand (string memory name, address to, string memory new_state) public {
        require(owner == msg.sender);
        ++landCount;
        landpieces[landCount] = LandPiece(landCount, name, 0);
        _mint(to, landCount);
        state = new_state;
    }

    function acceptBid(uint id, uint bidNo) public {
        require(sellable[id]);  /* Check if LandPiece is for sale */
        require(bidNo != 0);    /* Bids start with 1 */
        require(bidNo <= bids[id].bidCount);    /* Bid exists for current selling iteration */
        require(ownerOf(id) == msg.sender); /* Check if account accepting the bid is the id owner */

        address landowner = ownerOf(id);
        address bidder = bids[id].bidders[bidNo];
        uint bidPrice = bids[id].bidPrices[bidNo];

        require(withdrawable[bidder] >= bidPrice);

        sellable[id] = false;

        withdrawable[landowner] += bidPrice;
        withdrawable[bidder] -= bidPrice;


        transferFrom(landowner, bidder, id);
    }
    /*
    function viewBidPrice(uint id, uint bidNo) public view returns (uint) {
        require(sellable[id]);
        require(bidNo != 0);
        require(bidNo <= bids[id].bidCount);
        require(ownerOf(id) == msg.sender);

        uint price = bids[id].bidPrices[bidNo];

        return price;
    }

    function viewBidCount(uint id, uint bidNo) public view returns uint {
        require(sellable[id]);
        require(bidNo != 0);
        require(bidNo <= bids[id].bidCount);
        require(ownerOf(id) == msg.sender);

        return bids[id].bidCount;
    }
    */

    function isSellable(uint id) public view returns (bool) {
        return (sellable[id]);
    }

    function sellStart(uint id, uint price) public {
        address landowner = ownerOf(id);

        require(landowner == msg.sender);

        sellable[id] = true;
        landpieces[id].price = price;
        bids[id] = Bids(id, 0);

        emit Approval(landowner, address(this), id);
    }

    function sellEnd(uint id) public {
        address landowner = ownerOf(id);

        require(landowner == msg.sender);

        sellable[id] = false;
        bids[id] = Bids(id, 0);

        emit Approval(landowner, address(this), id);
    }

    function withdraw() public {
        address payable account = msg.sender;
        uint balance = withdrawable[account];

        require(balance != 0);

        account.transfer(balance);
    }

    function burnLand(uint id) public {
        require(ownerOf(id) == msg.sender);
        _burn(ownerOf(id), id);
    }

    function bid(uint id) external payable {
        require(sellable[id]);
        address bidder = msg.sender;
        uint bidPrice = msg.value;


        /* Initialize bid */
        ++bids[id].bidCount;
        uint bidNo = bids[id].bidCount;
        bids[id].bidders[bidNo] = bidder;
        bids[id].bidPrices[bidNo] = bidPrice;

        /* Store bid value to account */
        withdrawable[bidder] = bidPrice;
    }
}
