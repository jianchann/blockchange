/* Web3 */

var web3 = new Web3(new Web3.providers.WebsocketProvider('wss://k0azo7vjl7-k0j5nu609n-wss.kr0-aws.kaleido.io'));
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
				"name": "newStateHash",
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
		"constant": false,
		"inputs": [
			{
				"name": "id",
				"type": "uint256"
			},
			{
				"name": "hash",
				"type": "string"
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
		"constant": true,
		"inputs": [],
		"name": "totalSupply",
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
		"constant": true,
		"inputs": [
			{
				"name": "owner",
				"type": "address"
			},
			{
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "tokenOfOwnerByIndex",
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
		"constant": true,
		"inputs": [
			{
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "tokenByIndex",
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
		"constant": true,
		"inputs": [],
		"name": "StateHash",
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
		"name": "userBidHash",
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

contract.options.address = '0x61bd7811ca1b55c919003c350ac4048c213468f7';

let addLand = async (to, newStateHash) => {
  let fCall = contract.methods.addLand(to, newStateHash);

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

let unsellLand = async (id) => {
	let fCall = contract.methods.sellEnd(id);
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

let viewBids = (id) => {
	contract.methods.viewBidCount(id).call().then((e) => {
		for (i = 1; i <= e; i++) {
			contract.methods.viewBidPrice(id, i).call().then((f) => {
				/* display here */
			});
		}
	});
}

/* IPFS */



const ipfs = window.IpfsHttpClient({
	host: "k0azo7vjl7-k0o4rrkwqs-ipfs.kr0-aws.kaleido.io",
	protocol: "https",
	port: "",
	headers: {
		Authorization: "Basic " + btoa("k0bcyxppvu:uuC2uImKjSwk_hUs6ciooZOjuXolBUHMvCa6tBQlJgQ")
	}
});

function getState(hash) {
	return new Promise((resolve, reject) => {
		const client = new XMLHttpRequest();
		client.open("GET", "https://k0azo7vjl7-k0o4rrkwqs-ipfs.kr0-aws.kaleido.io/api/v0/cat/" + hash, true);
		client.setRequestHeader("Authorization", "Basic " + btoa("k0bcyxppvu:uuC2uImKjSwk_hUs6ciooZOjuXolBUHMvCa6tBQlJgQ"));
		client.onload = function () {
			resolve(this.response);
		}
		client.onerror = function () {
			reject(this.statusText);
		}
		client.send();
	});
}


/* UI */


var app = document.querySelector('.app');
var app_cont;
var loggedIn = 0;
var username = "";

function clear() {
	app.innerHTML = "";
}
	/* Openlayers */
var clickedLand = 0;
var clickedOwner = null;
var total = 0;

var map, view, draw, snap;

function loadMap(g, f) {
	total = parseInt(f, 10);
  var geojson = new ol.format.GeoJSON();
	var feature;
	if (g !== "") {
  	feature = geojson.readFeatures(g);
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

	view = new ol.View({
		center: ol.proj.fromLonLat([121.0332, 14.391057]),
		zoom: 17
	});

  map = new ol.Map({
    layers: [raster, vector],
    target: 'map',
    view: view /*new ol.View({
      center: ol.proj.fromLonLat([121.0332, 14.391057]), //UP [121.0685, 14.6538]
      zoom: 17
    })*/
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
							display(selected.getArray()[0].getId());
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

    snap = new ol.interaction.Snap({source: source});
  }

  addInteractions();

  app_cont.addEventListener('click', (event) => {
  	let tar = event.target;
		if (tar.id == 'search-btn') {
			let search_id = document.querySelector('#search-id').value;
			if (source.getFeatureById(search_id) != null) {
				locate(search_id);
			}
		}
  	if (tar.id == 'add-btn') {
  		let features = source.getFeatures();
			let newState = geojson.writeFeatures(features);
			let addr = document.querySelector('#mint-address').value;
			ipfs.add(newState).then(function (result) {
				addLand(addr, result[0].hash);
			});
  	}
		if (tar.id == 'sell-land') {
			let price = parseInt(document.querySelector('#sell-price').value, 10);
			sellLand(clickedLand, price);
		}
		if (tar.id == 'unsell-land') {
			unsellLand(clickedLand);
		}
		if (tar.className == 'property') {
			locate(parseInt(tar.id, 10));
		}
  });

	function locate(id) {
		let feature = source.getFeatureById(parseInt(id, 10));
		let coordinates = feature.getGeometry().getExtent();
		selectClick.getFeatures().clear();
		selectClick.getFeatures().push(feature);
		display(id);
		view.animate({center: coordinates});
	}

	function display(id) {
		clickedLand = parseInt(id, 10);
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


	/* End openlayers */
function loadIndex() {
	if (!(loggedIn)) {
		loadLogin();
		return;
	}
	/* Create and add header */

	let header = document.createElement('div');
	header.className = 'header2';

	let logo = document.createElement('button');
	logo.className = 'logo-btn';

	let name = document.createElement('p');
	name.innerHTML = 'Soli';
	name.className = 'name';

	let greet = document.createElement('p');
	greet.className = 'greet';
	greet.innerHTML = 'Hi ' + username + '!';

	let home_btn = document.createElement('p');
	home_btn.className = 'btn2';
	home_btn.id = 'home';
	home_btn.innerHTML = 'Home';

	let supp_btn = document.createElement('p');
	supp_btn.className = 'btn2';
	supp_btn.id = 'support';
	supp_btn.innerHTML = 'Support';

	let acc_btn = document.createElement('p');
	acc_btn.className = 'btn2';
	acc_btn.id = 'account';
	acc_btn.innerHTML = 'Account';

	let logout_btn = document.createElement('p');
	logout_btn.className = 'btn2';
	logout_btn.id = 'logout';
	logout_btn.innerHTML = 'Logout';

	for (i = 1; i < 4; i++) {
		let third = document.createElement('div');
		third.className = 'third';
		third.id = 'third' + i.toString() + '-2';
		header.appendChild(third);
	}

	app.appendChild(header);

	let third1 = document.querySelector('#third1-2');
	let third2 = document.querySelector('#third2-2');
	let third3 = document.querySelector('#third3-2');

	third1.appendChild(logo);
	third1.appendChild(name);
	third2.appendChild(greet);
	third3.appendChild(home_btn);
	third3.appendChild(supp_btn);
	third3.appendChild(acc_btn);
	third3.appendChild(logout_btn);

	/* Create and load main interface */

	app_cont = document.createElement('div');
	app_cont.className = 'app-container';
	app.appendChild(app_cont);

	let twentyfive = document.createElement('div');
	twentyfive.className = 'twentyfive';

	let seventyfive = document.createElement('div');
	seventyfive.className = 'seventyfive';

	/* Create and load user menu */

	let search_land = document.createElement('button');
	search_land.className = 'btn3';
	search_land.id = 'search';
	search_land.append('Search');

	let search_cont = document.createElement('div');
	search_cont.id = 'search-cont';
	search_cont.className = 'hidden';

	let search_box = document.createElement('input');
	search_box.className = 'text-box';
	search_box.id = 'search-id';
	search_box.placeholder = 'Land ID';

	let search_btn = document.createElement('button');
	search_btn.className = 'btn4';
	search_btn.id = 'search-btn';
	search_btn.innerHTML = 'SEARCH';

	search_cont.append(search_box);
	search_cont.append(search_btn);

	let add_drop = document.createElement('button');
	add_drop.className = 'btn3';
	add_drop.id = 'add-drp';
	add_drop.append('Add Land');

	let add_cont = document.createElement('div');
	add_cont.id = 'add-cont';
	add_cont.className = 'hidden';

	let add_box = document.createElement('input');
	add_box.className = 'text-box';
	add_box.id = 'mint-address'
	add_box.placeholder = 'Address';

	let add_btn = document.createElement('button');
	add_btn.className = 'btn4';
	add_btn.id = 'add-btn';
	add_btn.innerHTML = 'MINT';

	add_cont.append(add_box);
	add_cont.append(add_btn);



	let myprop_btn = document.createElement('button');
	myprop_btn.className = 'btn3';
	myprop_btn.id = 'my-properties';
	myprop_btn.append('My Properties');

	let myprop = document.createElement('div');
	myprop.className = 'properties';

	contract.methods.balanceOf(web3.eth.defaultAccount).call().then((e) => {
		for (i = 0; i < e; i++) {
			contract.methods.tokenOfOwnerByIndex(web3.eth.defaultAccount, i).call().then((f) => {
				let property = document.createElement('div');
				property.className = 'property';
				property.id = f;
				property.innerHTML = f;
				myprop.appendChild(property);
			});
		}
	});

	let myacc_btn = document.createElement('button');
	myacc_btn.className = 'btn3';
	myacc_btn.id = 'my-acc';
	myacc_btn.append('My Account');

	let myacc = document.createElement('div');
	myacc.id = 'bal';
	myacc.className = 'hidden';
	myacc.innerHTML = 'Withdrawable balance: '

	let wd_btn = document.createElement('button');
	wd_btn.id = "withdraw";
	wd_btn.className = 'btn4';
	wd_btn.innerHTML = 'WITHDRAW';
	var amount = 0;

	contract.methods.getBalance().call().then((e) => {
		amount = e;
		myacc.append(amount);
		myacc.appendChild(wd_btn);
	});

	let sell_btn = document.createElement('button');
	sell_btn.className = 'btn3';
	sell_btn.id = 'sell';
	sell_btn.append('Sell Land');

	let sell_cont = document.createElement('div');
	sell_cont.className = 'hidden';
	sell_cont.id = 'sell-cont';

	/*let sell_box = document.createElement('input');
	sell_box.className = 'text-box';
	sell_box.id = 'sell-price';
	sell_box.placeholder = 'Price';

	let sell_land = document.createElement('button');
	sell_land.id = "sell-land";
	sell_land.className = 'btn4';
	sell_land.innerHTML = 'SELL';

	let unsell_land = document.createElement('button');
	unsell_land.id = "unsell-land";
	unsell_land.className = 'btn4';
	unsell_land.innerHTML = 'CANCEL';*/

	let bid_btn = document.createElement('button');
	bid_btn.className = 'btn3';
	bid_btn.id = 'bid-btn';
	bid_btn.append('Bid');

	let bid_cont = document.createElement('div');
	bid_cont.className = 'hidden';
	bid_cont.id = 'bid-cont';

	let bid_box = document.createElement('input');
	bid_box.className = 'text-box';
	bid_box.id = 'bid-price';
	bid_box.placeholder = 'Value';

	let bid_land = document.createElement('button');
	bid_land.id = "bid";
	bid_land.className = 'btn4';
	bid_land.innerHTML = 'BID';

	bid_cont.appendChild(bid_box);
	bid_cont.appendChild(bid_land);

	twentyfive.appendChild(search_land);
	twentyfive.appendChild(search_cont);
	if (username == 'Owner') {
		twentyfive.appendChild(add_drop);
		twentyfive.appendChild(add_cont);
	}
	twentyfive.appendChild(myprop_btn);
	twentyfive.appendChild(myprop);
	twentyfive.appendChild(myacc_btn);
	twentyfive.appendChild(myacc);
	twentyfive.appendChild(sell_btn);
	twentyfive.appendChild(sell_cont);
	twentyfive.appendChild(bid_btn);
	twentyfive.appendChild(bid_cont);


	/* Create and load map */

	let map = document.createElement('div');
	map.className = 'map';
	map.id = 'map';

	app_cont.appendChild(twentyfive);
	app_cont.appendChild(seventyfive);
	seventyfive.appendChild(map);
	loadAddMap();
}

function loadLogin() {
	let header = document.createElement('div');
	header.className = 'header';

	let logo = document.createElement('button');
	logo.className = 'logo-btn';

	let name = document.createElement('p');
	name.innerHTML = 'Soli';
	name.className = 'name';

	let home_btn = document.createElement('p');
	home_btn.className = 'btn1';
	home_btn.id = 'home';
	home_btn.innerHTML = 'Home';

	let about_btn = document.createElement('p');
	about_btn.className = 'btn1';
	about_btn.id = 'about';
	about_btn.innerHTML = 'About';

	let reg_btn = document.createElement('p');
	reg_btn.className = 'btn1';
	reg_btn.id = 'register';
	reg_btn.innerHTML = 'Register';

	for (i = 1; i < 4; i++) {
		let third = document.createElement('div');
		third.className = 'third';
		third.id = 'third' + i.toString();
		header.appendChild(third);
	}

	app.appendChild(header);

	let third1 = document.querySelector('#third1');
	let third2 = document.querySelector('#third2');
	let third3 = document.querySelector('#third3');

	third1.appendChild(logo);
	third1.appendChild(name);

	third2.appendChild(home_btn);
	third2.appendChild(about_btn);
	third2.appendChild(reg_btn);

	let landing = document.createElement('div');
	landing.className = 'landing-container';
	app.appendChild(landing);

	for (i = 1; i < 3; i++) {
		let fifty = document.createElement('div');
		fifty.className = 'fifty';
		fifty.id = 'fifty' + i.toString();
		landing.append(fifty);
	}
	let fifty1 = document.querySelector('#fifty1');
	let fifty2 = document.querySelector('#fifty2');

	let landing_txt = document.createElement('p');
	landing_txt.className = 'landing-txt';
	landing_txt.innerHTML = 'Create an account and own land on the go.';

	fifty1.appendChild(landing_txt);

	let login = document.createElement('div');
	login.className = 'login-container';

	let login_txt = document.createElement('div');
	login_txt.className = 'login-txt';
	login_txt.innerHTML = 'Welcome!';

	let user = document.createElement('input');
	user.id = 'username';
	user.type = 'text';
	user.placeholder = 'Username';

	let pass = document.createElement('input');
	pass.id = 'password';
	pass.type = 'password';
	pass.placeholder = 'Password';

	let submit = document.createElement('button');
	submit.id = 'submit';
	submit.className = 'submit-btn';
	submit.innerHTML = 'Login';

	let forgot_pw = document.createElement('p');
	forgot_pw.id = 'forgot-pw';

	let link = document.createElement('a');
	link.className = 'link';
	link.innerHTML = "Forgot your password?";
	link.href = "#";

	let new_here = document.createElement('p');
	new_here.id = 'create-acc';
	new_here.innerHTML = 'Not yet registered? ';

	let link2 = document.createElement('a');
	link2.className = 'link';
	link2.innerHTML = "Create an account.";
	link2.href = "#";

	new_here.append(link2);

	forgot_pw.appendChild(link);

	login.appendChild(login_txt);
	login.appendChild(user);
	login.appendChild(pass);
	login.appendChild(forgot_pw);
	login.appendChild(submit);
	login.appendChild(new_here);



	fifty2.appendChild(login);

}


loadIndex();

window.addEventListener('click', (event) => {
	let clicked = event.target;
	if (clicked.classList.contains('btn3')) {
		/*if (clicked.classList.contains('btn3-active')) {
			clicked.classList.remove('btn3-active');
		} else {
			clicked.classList.add('btn3-active');
		}*/
		clicked.classList.toggle('btn3-active');
	}
	if (clicked.id == 'submit') {
		let u = document.querySelector('#username');
		username = u.value;
		loggedIn = 1;
		if (username == 'Owner') {
			web3.eth.defaultAccount = '0x04f24283e3ec28456e99479126a2e2eb12546079';
		}
		if (username == 'Account1') {
			web3.eth.defaultAccount = '0xc0d302b0ea07a5022dccd42e4dfe1a844a2e84a8';
		}
		if (username == 'Account2') {
			web3.eth.defaultAccount = '0x093d3cf86803432f557bfcdf8a2c26f939e64aaf';
		}
		if (username == 'Account3') {
			web3.eth.defaultAccount = '0x857de78d86081490e38ab8b518d10126cf488216';
		}
		/* reload */
		clear();
		loadIndex();
	}
	if (clicked.id == 'logout') {
		loggedIn = 0;
		/* reload */
		clear();
		loadIndex();
	}
	if (clicked.id == 'search') {
		let cont = document.querySelector('#search-cont');
		let display = window.getComputedStyle(cont, null).display;
		if (display == 'none') {
			cont.style.display = 'flex';
		} else {
			cont.style.display = 'none';
		}
	}
	if (clicked.id == 'add-drp') {
		let cont = document.querySelector('#add-cont');
		let display = window.getComputedStyle(cont, null).display;
		if (display == 'none') {
			cont.style.display = 'flex';
			map.addInteraction(draw);
			map.addInteraction(snap);
		} else {
			cont.style.display = 'none';
			map.removeInteraction(draw);
			map.removeInteraction(snap);
		}
	}
	if (clicked.id == 'my-properties') {
		let prop = document.querySelector('.properties');
		let display = window.getComputedStyle(prop, null).display;
		if (display == 'none') {
			prop.style.display = 'flex';
		} else {
			prop.style.display = 'none';
		}
	}
	if (clicked.id == 'my-acc') {
		let acc = document.querySelector('#bal');
		let display = window.getComputedStyle(acc, null).display;
		if (display == 'none') {
			acc.style.display = 'flex';
		} else {
			acc.style.display = 'none';
		}
	}
	if (clicked.id == 'sell') {
		let cont = document.querySelector('#sell-cont');
		let display = window.getComputedStyle(cont, null).display;
		if (display == 'none') {
			cont.style.display = 'flex';
			if (clickedLand != 0) {
				contract.methods.ownerOf(clickedLand).call().then((e) => {
					contract.methods.isSellable(clickedLand).call().then((f) => {
						if (e == web3.eth.defaultAccount) {
							if (f) {
								cont.append('Currently for sale.');
								let unsell_land = document.createElement('button');
								unsell_land.id = "unsell-land";
								unsell_land.className = 'btn4';
								unsell_land.innerHTML = 'CANCEL'
								cont.appendChild(unsell_land);
							} else {
								let sell_box = document.createElement('input');
								sell_box.className = 'text-box';
								sell_box.id = 'sell-price';
								sell_box.placeholder = 'Price';

								let sell_land = document.createElement('button');
								sell_land.id = "sell-land";
								sell_land.className = 'btn4';
								sell_land.innerHTML = 'SELL';
								cont.appendChild(sell_box);
								cont.appendChild(sell_land);
							}
						} else {
							cont.append('You are not the owner of this land.');
						}
					});
				});
			} else {
				cont.style.display = 'none';
			}
		} else {
			cont.innerHTML = "";
			cont.style.display = 'none';
		}
	}
	if (clicked.id == 'bid-btn') {
		let cont = document.querySelector('#bid-cont');
		let display = window.getComputedStyle(cont, null).display;
		if (display == 'none') {
			cont.style.display = 'flex';
		} else {
			cont.style.display = 'none';
		}
	}

	/* Handling web3 transactions */
});

function loadAddMap() {
	contract.methods.StateHash().call().then((e) => {
		console.log("Loaded hash " + e);
		contract.methods.landCount().call().then((f) => {
			if (e == "") {
				loadMap("", f);
			} else {
				getState(e).then((g) => {
					loadMap(g, f);
				});
			}
		});
	});
}
