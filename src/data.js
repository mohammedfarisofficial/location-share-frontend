import shopImg from "./assets/shop.png";
import groundImg from "./assets/ground.png";

export const geojson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        name: "Canteen",
        img: shopImg,
      },
      geometry: {
        coordinates: [76.14879830179615, 10.565728252172477],
        type: "Point",
      },
      id: 0,
    },
    {
      type: "Feature",
      properties: {
        name: "IES Boys Hostel",
        img: groundImg,
      },
      geometry: {
        coordinates: [76.1476337217502, 10.56560309104529],
        type: "Point",
      },
      id: 1,
    },
    {
      type: "Feature",
      properties: {
        name: "IES Girls Hostel",
        img: shopImg,
      },
      geometry: {
        coordinates: [76.14901674411391, 10.563701079706291],
        type: "Point",
      },
      id: 2,
    },
  ],
};

//college buildings base

export const buildingBaseGeojson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        "stroke-width": 0,
        "stroke-opacity": 1,
        fill: "#fdfac9",
        "fill-opacity": 1,
      },
      geometry: {
        coordinates: [
          [
            [76.14953944828432, 10.565865625887511],
            [76.14953944828432, 10.56504450532654],
            [76.15029179435976, 10.56504450532654],
            [76.15029179435976, 10.565865625887511],
            [76.14953944828432, 10.565865625887511],
          ],
        ],
        type: "Polygon",
      },
      id: 0,
    },
    {
      type: "Feature",
      properties: {
        "stroke-width": 0,
        "stroke-opacity": 1,
        fill: "#fdfac9",
        "fill-opacity": 1,
      },
      geometry: {
        coordinates: [
          [
            [76.14874232393129, 10.56376727913387],
            [76.14874232393129, 10.563561421866098],
            [76.14907654880591, 10.563561421866098],
            [76.14907654880591, 10.56376727913387],
            [76.14874232393129, 10.56376727913387],
          ],
        ],
        type: "Polygon",
      },
      id: 1,
    },
    {
      type: "Feature",
      properties: {
        "stroke-width": 0,
        "stroke-opacity": 1,
        fill: "#fdfac9",
        "fill-opacity": 1,
      },
      geometry: {
        coordinates: [
          [
            [76.14753996906808, 10.565723650279509],
            [76.14753996906808, 10.565308963555267],
            [76.14772791697129, 10.565308963555267],
            [76.14772791697129, 10.565723650279509],
            [76.14753996906808, 10.565723650279509],
          ],
        ],
        type: "Polygon",
      },
      id: 2,
    },
    {
      type: "Feature",
      properties: {
        "stroke-width": 0,
        "stroke-opacity": 1,
        fill: "#fdfac9",
        "fill-opacity": 1,
        name: "ies_canteen",
      },
      geometry: {
        coordinates: [
          [
            [76.14927023839408, 10.565831739635328],
            [76.14939981085149, 10.565806063142674],
            [76.14942593019987, 10.565948542479518],
            [76.14929584559962, 10.565972205119223],
            [76.14927023839408, 10.565831739635328],
          ],
        ],
        type: "Polygon",
      },
      id: 3,
    },
  ],
};

export const iesLayout = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        stroke: "#555555",
        "stroke-width": 0,
        "stroke-opacity": 1,
        fill: "#374ace",
        "fill-opacity": 1,
      },
      geometry: {
        coordinates: [
          [
            [76.14957443688996, 10.565121565421109],
            [76.15025751550098, 10.56510076679514],
            [76.15029076268894, 10.56584357399889],
            [76.1495563020598, 10.565870315024469],
            [76.14957443688996, 10.565121565421109],
          ],
        ],
        type: "Polygon",
      },
      id: 0,
    },
    {
      type: "Feature",
      properties: {
        stroke: "#555555",
        "stroke-width": 0,
        "stroke-opacity": 0,
        fill: "#374ace",
        "fill-opacity": 1,
      },
      geometry: {
        coordinates: [
          [
            [76.14944753102708, 10.56564330078308],
            [76.14896612981227, 10.565639908386743],
            [76.14899546250388, 10.564679858717412],
            [76.14946306009796, 10.564678162513502],
            [76.14944753102708, 10.56564330078308],
          ],
        ],
        type: "Polygon",
      },
      id: 1,
    },
    {
      type: "Feature",
      properties: {
        stroke: "#555555",
        "stroke-width": 0,
        "stroke-opacity": 1,
        fill: "#374ace",
        "fill-opacity": 1,
      },
      geometry: {
        coordinates: [
          [
            [76.14942137605965, 10.565970337012416],
            [76.1492799636336, 10.5659795172284],
            [76.14927862955443, 10.565819519144043],
            [76.14942404421788, 10.56582345352382],
            [76.14942137605965, 10.565970337012416],
          ],
        ],
        type: "Polygon",
      },
    },
    {
      type: "Feature",
      properties: {
        stroke: "#555555",
        "stroke-width": 0,
        "stroke-opacity": 1,
        fill: "#374ace",
        "fill-opacity": 1,
      },
      geometry: {
        coordinates: [
          [
            [76.14756547085591, 10.565711549929631],
            [76.14756788901462, 10.56531812988132],
            [76.14770330587066, 10.565321695624519],
            [76.1476924241594, 10.565725812882519],
            [76.14756547085591, 10.565711549929631],
          ],
        ],
        type: "Polygon",
      },
    },
    {
      type: "Feature",
      properties: {
        stroke: "#555555",
        "stroke-width": 0,
        "stroke-opacity": 1,
        fill: "#374ace",
        "fill-opacity": 1,
      },
      geometry: {
        coordinates: [
          [
            [76.1488199106762, 10.564491235920144],
            [76.14882173161305, 10.563879031044294],
            [76.1495337181234, 10.563861130298747],
            [76.14953735999711, 10.564000756087609],
            [76.14915132127499, 10.564009706455948],
            [76.14915132127499, 10.56434445006714],
            [76.14955374843288, 10.564339079851266],
            [76.14955192749602, 10.56448049549438],
            [76.1488199106762, 10.564491235920144],
          ],
        ],
        type: "Polygon",
      },
    },
    {
      type: "Feature",
      properties: {
        stroke: "#555555",
        "stroke-width": 0,
        "stroke-opacity": 1,
        fill: "#374ace",
        "fill-opacity": 1,
      },
      geometry: {
        coordinates: [
          [
            [76.14961162419968, 10.564503179549334],
            [76.149613607184, 10.563881330048616],
            [76.1498753609132, 10.56387353255478],
            [76.14985553108443, 10.564501230180312],
            [76.14961162419968, 10.564503179549334],
          ],
        ],
        type: "Polygon",
      },
    },
    {
      type: "Feature",
      properties: {
        stroke: "#555555",
        "stroke-width": 0,
        "stroke-opacity": 1,
        fill: "#374ace",
        "fill-opacity": 1,
      },
      geometry: {
        coordinates: [
          [
            [76.14763113418883, 10.564143420508913],
            [76.14762635919942, 10.563530357022273],
            [76.14817807983115, 10.563533211602262],
            [76.14817227224563, 10.56372446840146],
            [76.14803434208693, 10.56372875026905],
            [76.14802708260538, 10.563874333721301],
            [76.1481461381099, 10.563870051855716],
            [76.14813395420805, 10.564148447262028],
            [76.14763113418883, 10.564143420508913],
          ],
        ],
        type: "Polygon",
      },
    },
    {
      type: "Feature",
      properties: {
        stroke: "#555555",
        "stroke-width": 0,
        "stroke-opacity": 1,
        fill: "#374ace",
        "fill-opacity": 1,
      },
      geometry: {
        coordinates: [
          [
            [76.14746179038843, 10.563424662088977],
            [76.14746993331136, 10.562830296101325],
            [76.14824554672072, 10.562844304740949],
            [76.14822518941355, 10.563444674391548],
            [76.14746179038843, 10.563424662088977],
          ],
        ],
        type: "Polygon",
      },
    },
    {
      type: "Feature",
      properties: {
        stroke: "#555555",
        "stroke-width": 0,
        "stroke-opacity": 1,
        fill: "#374ace",
        "fill-opacity": 1,
      },
      geometry: {
        coordinates: [
          [
            [76.14866434364018, 10.563251697197728],
            [76.1486073139128, 10.562927439293432],
            [76.14876298965748, 10.562904710923476],
            [76.14884776357758, 10.562930469742682],
            [76.14887088373791, 10.563227453628173],
            [76.14866434364018, 10.563251697197728],
          ],
        ],
        type: "Polygon",
      },
    },
    {
      type: "Feature",
      properties: {
        stroke: "#555555",
        "stroke-width": 0,
        "stroke-opacity": 1,
        fill: "#374ace",
        "fill-opacity": 1,
      },
      geometry: {
        coordinates: [
          [
            [76.1482388511289, 10.562600946288612],
            [76.14827232516245, 10.56252114723138],
            [76.14843718477869, 10.562592719582284],
            [76.1484003633426, 10.562670873280595],
            [76.1482388511289, 10.562600946288612],
          ],
        ],
        type: "Polygon",
      },
    },
    {
      type: "Feature",
      properties: {
        stroke: "#555555",
        "stroke-width": 0,
        "stroke-opacity": 1,
        fill: "#374ace",
        "fill-opacity": 1,
      },
      geometry: {
        coordinates: [
          [
            [76.1485443835013, 10.56376170761287],
            [76.14854767102281, 10.563464381673668],
            [76.14915257482704, 10.56350316333392],
            [76.14913942474271, 10.563789177929053],
            [76.1485443835013, 10.56376170761287],
          ],
        ],
        type: "Polygon",
      },
    },
  ],
};
