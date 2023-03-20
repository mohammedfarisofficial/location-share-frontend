import React, { useEffect, useState } from "react";
import Map, { Marker, Popup, Source, Layer } from "react-map-gl";
import { useLocation } from "react-router-dom";
import { geojson, iesLayout } from "../data";
import * as turf from "@turf/turf";

import socketIO from "socket.io-client";

const socket = socketIO.connect(process.env.REACT_APP_API_URL);
const Location = () => {
  const [isLocationFound, setIsLocationFound] = useState(false);
  const [popup, setPopup] = useState(false);
  const [name, setName] = useState("");
  const [friends, setFriends] = useState([]);

  const location = useLocation();

  let lng = 10.564532005786141,
    lat = 76.14821915860668;

  const polygonCoordinatesOfCollege = [
    [
      [10.5626989859838, 76.14832368179236],
      [10.562800554327566, 76.14901462836315],
      [10.563384571652804, 76.1490985751422],
      [10.563892411902685, 76.15017051094594],
      [10.56591106859537, 76.15037069172831],
      [10.566038027692187, 76.14926001125741],
      [10.5657523696499, 76.14910503258676],
      [10.566431600559568, 76.1471936289878],
      [10.562844990467013, 76.14706448009525],
      [10.5626989859838, 76.14832368179236],
    ],
  ];

  //check inside polygon

  const inOut = (point, polygon) => {
    if (turf.booleanPointInPolygon(point, polygon)) {
      console.log("User is inside the polygon");
    } else {
      console.log("User is outside the polygon");
    }
  };

  const point = turf.point([lng, lat]);
  const polygon = turf.polygon(polygonCoordinatesOfCollege);

  inOut(point, polygon);

  //end

  const prevLocation = async () => {
    try {
      const response = await fetch(
        process.env.REACT_APP_API_URL + "/api/users"
      );
      const data = await response.json();
      setFriends(data.users);
      setIsLocationFound(true);
      console.log("default location rendered from db!");
    } catch (err) {
      console.log(err);
    }
  };

  const uploadLocation = () => {
    navigator.geolocation.watchPosition(
      (position) => {
        // console.log("you're changing");
        if (name) {
          socket.emit("position", {
            data: {
              name: name,
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            },
          });
        }
      },
      (error) => console.log(error),
      { enableHighAccuracy: true }
    );
  };

  const positionUpdate = () => {
    socket.on("positionUpdate", (data) => {
      console.log(data.fullDocument);
      let friendsArr = [...friends];
      const friend = friendsArr.filter(
        (fnd) => fnd.name === data.fullDocument.name
      );
      if (friends.length !== 0) {
        friend[0].latitude = data.fullDocument.latitude;
        friend[0].longitude = data.fullDocument.longitude;
        const newFriends = friends.map((fnd) => {
          if (fnd.name === data.fullDocument?.name) {
            return friend[0];
          }
          return fnd;
        });
        setFriends(newFriends);
      }
    });
  };
  useEffect(() => {
    positionUpdate();
  }, []);

  useEffect(() => {
    prevLocation();
  }, []);

  useEffect(() => {
    setName(location.state?.data);
    uploadLocation();
  }, [name, location.state]);

  useEffect(() => {
    inOut(point, polygon);
  }, []);

  //custome polygons
  const layer = {
    id: "polygon",
    type: "fill",
    source: "my-data",
    layout: {},
    paint: {
      "fill-color": "#374ace",
      "fill-opacity": 1,
    },
  };
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Map
        mapStyle="mapbox://styles/mohammedfarisofficial1/clfgrkcas000801qxj8qp9reg"
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS}
        initialViewState={{
          longitude: 76.15003079543125,
          latitude: 10.565125222484612,
          zoom: 17,
        }}
      >
        <Source id="my-data" type="geojson" data={iesLayout}>
          <Layer {...layer} />
        </Source>
        {lat && lng !== "" && (
          <Marker
            longitude={lng}
            latitude={lat}
            offsetLeft={-20}
            offsetTop={-10}
            onClick={() => setPopup(!popup)}
          ></Marker>
        )}
        {geojson.features.map((mkr, i) => (
          <Marker
            key={i}
            longitude={mkr.geometry.coordinates[0]}
            latitude={mkr.geometry.coordinates[1]}
            offsetLeft={-20}
            offsetTop={-10}
            onClick={() => setPopup(!popup)}
          >
            {popup && (
              <div
                style={{
                  width: "200px",
                  height: "300px",
                  backgroundColor: "white",
                  borderRadius: 20,
                }}
              />
            )}
            <img
              src={mkr.properties.img}
              alt=""
              style={{ width: "100px", height: "100px" }}
            />
          </Marker>
        ))}
        {isLocationFound &&
          friends.map((data, i) => (
            <div key={i}>
              <Marker
                longitude={data?.longitude}
                latitude={data?.latitude}
                offsetLeft={-20}
                offsetTop={-10}
                draggable={true}
                //   onDrag={uploadLocation}
              />
              <Popup
                anchor="top"
                longitude={data?.longitude}
                latitude={data?.latitude}
              >
                <h2>{data?.name}</h2>
              </Popup>
            </div>
          ))}
      </Map>
    </div>
  );
};

export default Location;
