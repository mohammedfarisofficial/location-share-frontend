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
