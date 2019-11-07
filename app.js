/*Web 3 Part
 ***************************
                            */
var web3 = new Web3(new Web3.providers.WebsocketProvider('wss://k0hgjmdgbf:JqpK-H_0td3PwEsionKMZhYQV1yWwM4QuqbffIYg6BI@k0azo7vjl7-k0j5nu609n-wss.kr0-aws.kaleido.io'));
web3.eth.defaultAccount = '0x04f24283e3ec28456e99479126a2e2eb12546079';

let abi = [
	{
		"constant": false,
		"inputs": [
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
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	}
];

var contract = new web3.eth.Contract(abi);

contract.options.address = '0xfbff58ff65975b865d0fe6ac0efd292aef70f741';

let addplot = async (new_state) => {
  let fCall = contract.methods.addLand(new_state);

  let calculatedGas = await fCall.estimateGas();

  await fCall.send({
    from: web3.eth.defaultAccount,
    gas: calculatedGas
  });
}


/*Map openlayers
  ****************************
                              */


function loadMap(e) {
  var geojson = new ol.format.GeoJSON();
  var feature = geojson.readFeatures(e);

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
        color: '#CCCCCC',
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

  var raster2 = new ol.layer.Tile({
    source: new ol.source.OSM()
  });

  var source2 = new ol.source.Vector({
    overlaps: false
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
      addplot(new_state);
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
  });
}

contract.methods.state().call().then((e) => {loadMap(e)});
