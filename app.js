/*Web 3 Part
 ***************************
 uuC2uImKjSwk_hUs6ciooZOjuXolBUHMvCa6tBQlJgQ
                            */

var web3 = new Web3(new Web3.providers.WebsocketProvider('wss://k0bcyxppvu:uuC2uImKjSwk_hUs6ciooZOjuXolBUHMvCa6tBQlJgQ@k0azo7vjl7-k0j5nu609n-wss.kr0-aws.kaleido.io'));
web3.eth.defaultAccount = '0x04f24283e3ec28456e99479126a2e2eb12546079';

let abi = [
	{
		"constant": true,
		"inputs": [
			{
				"name": "interfaceId",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "id",
				"type": "uint256"
			},
			{
				"name": "bidNo",
				"type": "uint256"
			}
		],
		"name": "acceptBid",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "getApproved",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "to",
				"type": "address"
			},
			{
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getBalance",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "from",
				"type": "address"
			},
			{
				"name": "to",
				"type": "address"
			},
			{
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "withdraw",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "from",
				"type": "address"
			},
			{
				"name": "to",
				"type": "address"
			},
			{
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "bid",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ownerOf",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "burnLand",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "name",
				"type": "string"
			},
			{
				"name": "to",
				"type": "address"
			},
			{
				"name": "new_state",
				"type": "string"
			}
		],
		"name": "addLand",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "to",
				"type": "address"
			},
			{
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "setApprovalForAll",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "id",
				"type": "uint256"
			},
			{
				"name": "price",
				"type": "uint256"
			}
		],
		"name": "sellStart",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "isSellable",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "from",
				"type": "address"
			},
			{
				"name": "to",
				"type": "address"
			},
			{
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"name": "_data",
				"type": "bytes"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "state",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "id",
				"type": "uint256"
			},
			{
				"name": "bidNo",
				"type": "uint256"
			}
		],
		"name": "viewBidCount",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "sellEnd",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "landCount",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "id",
				"type": "uint256"
			},
			{
				"name": "bidNo",
				"type": "uint256"
			}
		],
		"name": "viewBidPrice",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "getPrice",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "owner",
				"type": "address"
			},
			{
				"name": "operator",
				"type": "address"
			}
		],
		"name": "isApprovedForAll",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "to",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "approved",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "ApprovalForAll",
		"type": "event"
	}
];

var contract = new web3.eth.Contract(abi);

contract.options.address = '0x9320724eb218224d4db01dd7ea5f962b7d1849d4';

let addplot = async (name, to, new_state) => {
  let fCall = contract.methods.addLand(name, to, new_state);

  fCall.estimateGas({
		from: web3.eth.defaultAccount
	}).then((e) => {
		fCall.send({
			from: web3.eth.defaultAccount,
			gas: e
		});
	});
}

let sellLand = async (id, price) => {
  let fCall = contract.methods.sellStart(id, price);
	fCall.estimateGas({
		from: web3.eth.defaultAccount
	}).then((e) => {
		fCall.send({
			from: web3.eth.defaultAccount,
			gas: e
		});
	});
}

let bid = async (id, value) => {
	let fCall = contract.methods.bid(id);
	fCall.estimateGas({
		from: web3.eth.defaultAccount,
		value: value
	}).then((e) => {
		fCall.send({
			from: web3.eth.defaultAccount,
			gas: e,
			value: value
		});
	});
}

let accept_bid = async (id, bidNo) => {
	let fCall = contract.methods.acceptBid(id, bidNo);
	fCall.estimateGas({
		from: web3.eth.defaultAccount
	}).then((e) => {
		fCall.send({
			from: web3.eth.defaultAccount,
			gas: e,
		});
	});
}

/*ipfs
	************************
													*/
//const node = window.Ipfs.create();

/*Map openlayers
  ****************************
                              */

var clickedLand = 0;
var clickedOwner = null;
var total = 0;


function loadMap(e, f) {
	total = parseInt(f, 10);
  var geojson = new ol.format.GeoJSON();
	var feature;
	if (e !== "") {
  	feature = geojson.readFeatures(e);
	} else {
		feature = "";
	}

  var raster = new ol.layer.Tile({
    source: new ol.source.OSM()
  });

  var source = new ol.source.Vector({
    features: feature,
    overlaps: false
  });

  var highlight = new ol.style.Style({
    fill: new ol.style.Fill ({
      color: 'rgba(255, 255, 255, 0.7)'
    }),
    stroke: new ol.style.Stroke({
      color: '#FFFFFF',
      width: 3
    })
  });

  /*var totalFeatures = source.getFeatures();
  var total = totalFeatures.length;*/

  var vector = new ol.layer.Vector({
    source: source,
    style: new ol.style.Style({
      fill: new ol.style.Fill({
        color: 'rgba(255, 255, 255, 0.2)'
      }),
      stroke: new ol.style.Stroke({
        color: '#cccccc',
        width: 2
      }),
      image: new ol.style.Circle({
        radius: 7,
        fill: new ol.style.Fill({
          color: '#ffcc33'
        })
      }),
			text: new ol.style.Text({
				fill: new ol.style.Fill({color: '#fff'}),
				stroke: new ol.style.Stroke({color: '#fff'}),
				text: ''
			})
    })
  });

  var map = new ol.Map({
    layers: [raster, vector],
    target: 'map',
    view: new ol.View({
      center: ol.proj.fromLonLat([121.0332, 14.391057]),
      zoom: 17
    })
  });


	var selectClick = new ol.interaction.Select({
		condition: ol.events.condition.click
	});

	map.addInteraction(selectClick);

	var ol_cont = document.querySelector(".ol-overlaycontainer");
	var ol_id = document.createElement("div");
	ol_id.className = "land-id";

	selectClick.on('select', (e) => {
		if (e.selected.length > 0) {
			selected = e.target.getFeatures();
			if (selected !== undefined) {
				if (selected.getArray() !== undefined) {
					if (selected.getArray()[0] !== undefined) {
						if (selected.getArray()[0].getId() !== undefined) {
							clickedLand = selected.getArray()[0].getId();
							contract.methods.isSellable(clickedLand).call().then((e) => {
								if (e) {
									contract.methods.getPrice(clickedLand).call().then((f) => {
										ol_id.innerHTML = "Land ID: " + clickedLand + " - Sale for " + f + " wei";
										ol_cont.append(ol_id);
									})
								} else {
									ol_id.innerHTML = "Land ID: " + clickedLand;
									ol_cont.append(ol_id);
								}
							});
						}
					}
				}
			}
		} else {
			selected = null;
			clickedLand = 0;
			ol_cont.innerHTML = "";
		}
	});

  var draw, snap;
  var modify = new ol.interaction.Modify({
    condition: ol.events.condition.never,
    deleteCondition: ol.events.condition.never,
    insertVertexCondition: ol.events.condition.never,
    source: source});
  map.addInteraction(modify);

  function addInteractions() {
    draw = new ol.interaction.Draw({
      source: source,
      type: 'Polygon'
    });
    draw.on('drawend', (event) => {
      total = total + 1;
      event.feature.setId(total);
    });

    map.addInteraction(draw);
    snap = new ol.interaction.Snap({source: source});
    map.addInteraction(snap);
  }

  addInteractions();
  window.addEventListener("click", (event) => {
    let btn = event.target;
    if (btn.id == "feat") {
      let features = source.getFeatures();
      let new_state = geojson.writeFeatures(features);
			let addr = document.querySelector("#mint-addr").value;
			let name = document.querySelector("#name").value;

      addplot(name, addr, new_state);
    }
    if (btn.id == "view-draw") {
      if (btn.innerHTML == "View") {
        map.removeInteraction(draw);
        map.removeInteraction(snap);
        map.removeInteraction(modify);
        btn.innerHTML = "Draw";
      } else {
        map.addInteraction(draw);
        map.addInteraction(snap);
        map.addInteraction(modify);
        btn.innerHTML = "View";
      }
    }
		if (btn.id == "sell") {
			let price = parseInt(document.querySelector("#sell-price").value);
			sellLand(clickedLand, price);
		}
		if (btn.id == "bid") {
			let bidPrice = parseInt(document.querySelector("#bid-price").value);
			bid(clickedLand, bidPrice);
		}
		if (btn.id == "acc-bid") {
			let bidNo = parseInt(document.querySelector("#bid-no").value);
			accept_bid(clickedLand, bidNo);
		}
  });
}

/* Web page generation */


var app = document.querySelector(".app");

var loggedIn = 0;

function clearApp() {
	app.innerHTML = "";
}

function loadIndex() {
	let container = document.createElement("div");
	container.className = "container";

	let accounts = document.createElement("select");
	accounts.name = "accounts"
	accounts.id = "accounts";
	let owner = document.createElement("option");
	owner.value = "0x04f24283e3ec28456e99479126a2e2eb12546079";
	owner.innerHTML = "Owner";
	let account1 = document.createElement("option");
	account1.value = "0xc0d302b0ea07a5022dccd42e4dfe1a844a2e84a8"
	account1.innerHTML = "Account1 (0xc0d)";
	let account2 = document.createElement("option");
	account2.value = "0x093d3cf86803432f557bfcdf8a2c26f939e64aaf"
	account2.innerHTML = "Account2 (0x093)";
	let account3 = document.createElement("option");
	account3.value = "0x857de78d86081490e38ab8b518d10126cf488216"
	account3.innerHTML = "Account3 (0x857)";
	accounts.append(owner);
	accounts.append(account1);
	accounts.append(account2);
	accounts.append(account3);
	let account_cont = document.createElement("div");
	account_cont.className = "gen";
	let acc_bal = document.createElement("p");
	acc_bal.className = "balance";

	let button_container1 = document.createElement("div");
	button_container1.className = "buttons";

	let map = document.createElement("div");
	map.className = "map";
	map.id = "map";

	let button_container2 = document.createElement("div");
	button_container2.className = "buttons";

	let save_land = document.createElement("button");
	save_land.id = "feat";
	save_land.innerHTML = "Add Land";
	save_land.className = "button";

	let name = document.createElement("input");
	name.type = "text";
	name.id = "name"
	name.placeholder = "Name"

	let mint_to = document.createElement("input");
	mint_to.type = "text";
	mint_to.id = "mint-addr"
	mint_to.placeholder = "Address"

	let view_draw = document.createElement("button");
	view_draw.id = "view-draw";
	view_draw.innerHTML = "View";
	view_draw.className = "button";

	let sell_land = document.createElement("button");
	sell_land.id = "sell";
	sell_land.innerHTML = "Sell Land";
	sell_land.className = "button";

	let sell_price = document.createElement("input");
	sell_price.type = "text";
	sell_price.id = "sell-price";
	sell_price.placeholder = "Price";

	let bid = document.createElement("button");
	bid.id = "bid";
	bid.innerHTML = "Bid";
	bid.className = "button";

	let bidprice = document.createElement("input");
	bidprice.type = "text";
	bidprice.id = "bid-price"
	bidprice.placeholder = "Price"

	let acc_bid = document.createElement("button");
	acc_bid.id = "acc-bid";
	acc_bid.innerHTML = "Accept Bid";
	acc_bid.className = "button";

	let bidno = document.createElement("input");
	bidno.type = "text";
	bidno.id = "bid-no"
	bidno.placeholder = "Bid No."

	button_container1.appendChild(save_land);
	button_container1.appendChild(name);
	button_container1.appendChild(mint_to);
	button_container2.appendChild(view_draw);
	button_container1.appendChild(sell_land);
	button_container1.appendChild(sell_price);
	button_container2.appendChild(bid);
	button_container2.appendChild(bidprice);
	button_container2.appendChild(acc_bid);
	button_container2.appendChild(bidno);

	account_cont.appendChild(accounts);
	account_cont.appendChild(acc_bal);
	container.appendChild(account_cont);
	container.appendChild(button_container1);
	container.appendChild(map);
	container.appendChild(button_container2);

	app.appendChild(container);
	accounts.addEventListener("change", (e) => {
		web3.eth.defaultAccount = e.target.value;
		let bal = document.querySelector(".balance");
		contract.methods.getBalance().call({
			from: web3.eth.defaultAccount
		}).then((e) => {
			bal.innerHTML = e;
		});
	});
	loadAddMapUI();
}


function loadLogin() {
	let windowclick = function (e) {
		let clicked = e.target;
		if (clicked.id == "login-submit") {
			clearApp();
			loadIndex();
		}
	}
	let container = document.createElement("div");
	container.className = "container";

	let login_container = document.createElement("div");
	login_container.className = "login-container";

	let login_txt = document.createElement("p");
	login_txt.className = "login-txt";
	login_txt.innerHTML = "Login";

	let login_user = document.createElement("input");
	login_user.className = "login-input";
	login_user.id = "login-user";
	login_user.type = "text";
	login_user.placeholder = "Username";

	let login_pw = document.createElement("input");
	login_pw.className = "login-input";
	login_pw.id = "login-pw";
	login_pw.type = "password";
	login_pw.placeholder = "Password";

	let login_submit = document.createElement("button");
	login_submit.className = "button";
	login_submit.innerHTML = "Submit";
	login_submit.id = "login-submit";

	let notice = document.createElement("div");
	notice.className = "notice-container";
	let login_notice = document.createElement("p");
	login_notice.className = "register-notice";
	login_notice.innerHTML = "You don't have an account yet? "
	let reg = document.createElement("button");
	reg.className = "register";
	reg.innerHTML = "Register";
	reg.id = "register";
	notice.appendChild(login_notice);
	notice.appendChild(reg);

	login_container.appendChild(login_txt);
	login_container.appendChild(login_user);
	login_container.appendChild(login_pw);
	login_container.appendChild(login_submit);
	login_container.appendChild(notice);

	container.appendChild(login_container);

	app.appendChild(container);
	window.addEventListener('click', windowclick);
}

loadLogin();

function loadAddMapUI() {
	contract.methods.state().call().then((e) => {
		contract.methods.landCount().call().then((f) => {
			loadMap(e, f);
		});
	});
}
