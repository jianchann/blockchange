/*Web 3 Part
 ***************************
                            */

var web3 = new Web3(new Web3.providers.WebsocketProvider('wss://k0hgjmdgbf:JqpK-H_0td3PwEsionKMZhYQV1yWwM4QuqbffIYg6BI@k0azo7vjl7-k0j5nu609n-wss.kr0-aws.kaleido.io'));
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

contract.options.address = '0x00d883447a90fa438bbd82b7b4665ab17a7907a3';

let addplot = async (name, to, new_state) => {
  let fCall = contract.methods.addLand(name, to, new_state);

  fCall.estimateGas().then((e) => {
		fCall.send({
			from: web3.eth.defaultAccount,
			gas: e
		});
	});
}


/*Map openlayers
  ****************************
                              */



function loadMap(e) {
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
      })
    })
  });

  var map = new ol.Map({
    layers: [raster, vector],
    target: 'map',
    view: new ol.View({
      center: ol.proj.fromLonLat([121.033125, 14.391049]),
      zoom: 17
    })
  });

  var selected = null;

  var highlighting = function (e) {
    if (selected !== null) {
      selected.setStyle(undefined);
      selected = null;
    }

    map.forEachFeatureAtPixel(e.pixel, function(f) {
      selected = f;
      selected.setStyle(highlight);
      return true;
    });
  }

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
    /*draw.on('drawend', (event) => {
      total = total + 1;
      event.feature.setId(total);
    });*/

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
      addplot("Coprahan", "0x857de78d86081490e38ab8b518d10126cf488216", new_state);
    }
    if (btn.id == "view-draw") {
      if (btn.innerHTML == "View") {
        map.removeInteraction(draw);
        map.removeInteraction(snap);
        map.removeInteraction(modify);
        btn.innerHTML = "Draw";
        map.on('pointermove', highlighting);
      } else {
        map.addInteraction(draw);
        map.addInteraction(snap);
        map.addInteraction(modify);
        btn.innerHTML = "View";
        map.un('pointermove', highlighting);
        if (selected !== null ) {
          selected.setStyle(undefined);
        }
        selected = null;
      }
    }
		if (btn.id == "reload") {
			clearApp();
			loadIndex();
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
	account1.innerHTML = "Account1";
	let account2 = document.createElement("option");
	account2.value = "0x093d3cf86803432f557bfcdf8a2c26f939e64aaf"
	account2.innerHTML = "Account2";
	let account3 = document.createElement("option");
	account3.value = "0x857de78d86081490e38ab8b518d10126cf488216"
	account3.innerHTML = "Account3";
	accounts.append(owner);
	accounts.append(account1);
	accounts.append(account2);
	accounts.append(account3);

	let map = document.createElement("div");
	map.className = "map";
	map.id = "map";

	let save_land = document.createElement("button");
	save_land.id = "feat";
	save_land.innerHTML = "Add Land";
	save_land.className = "button";

	let view_draw = document.createElement("button");
	view_draw.id = "view-draw";
	view_draw.innerHTML = "View";
	view_draw.className = "button";

	container.appendChild(accounts);
	container.appendChild(map);
	container.appendChild(save_land);
	container.appendChild(view_draw);

	app.appendChild(container);
	accounts.addEventListener("change", (e) => {
		web3.eth.defaultAccount = e.target.value;
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
	contract.methods.state().call().then((e) => {loadMap(e);});
}
