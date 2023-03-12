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
