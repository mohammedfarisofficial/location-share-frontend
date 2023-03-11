import React, { useEffect, useState } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import { useLocation } from "react-router-dom";
import { geojson } from "../data";
import shopImg from "../assets/shop.png";

import socketIO from "socket.io-client";

const socket = socketIO.connect(process.env.REACT_APP_API_URL);

const Location = () => {
  const [isLocationFound, setIsLocationFound] = useState(false);
  const [popup, setPopup] = useState(false);
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [name, setName] = useState("");
  const [friends, setFriends] = useState([]);

  const location = useLocation();

  const uploadLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        if (name) {
          // setLat(position.coords.latitude);
          // setLng(position.coords.longitude);
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
      { enableHighAccuracy: true, timeout: 20000, distanceFilter: 10 }
    );
    socket.on("otherPositions", (friendsData) => {
      console.log(friendsData.latitude);
      let friendsArr = [...friends];
      const friend = friendsArr.filter((fnd) => fnd.name === friendsData.name);
      if (friends.length !== 0) {
        friend[0].latitude = friendsData.latitude;
        friend[0].longitude = friendsData.longitude;
        const newFriends = friends.map((fnd) => {
          if (fnd.name === friendsData?.name) {
            return friend[0];
          }
          return fnd;
        });
        setFriends(newFriends);
      }
      // setIsLocationFound(true);
    });
  };
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
  useEffect(() => {
    prevLocation();
  }, []);

  useEffect(() => {
    setName(location.state?.data);
    uploadLocation();
  }, [name, location.state]);

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Map
        mapStyle="mapbox://styles/mohammedfarisofficial1/cldq4mkps000e01qmtotbkp0k"
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS}
        initialViewState={{
          longitude: 76.15003079543125,
          latitude: 10.565125222484612,
          zoom: 10,
        }}
      >
        {/* {renderMarker()} */}
        {/* <Source id="my-data" type="geojson" data={geojson}>
          <Layer {...layerStyle}>
            <h2>hello</h2>
          </Layer>
        </Source> */}
        {lat && lng !== "" && (
          <Marker
            longitude={lng}
            latitude={lat}
            offsetLeft={-20}
            offsetTop={-10}
            onClick={() => setPopup(!popup)}
          >
            {/* <Popup anchor="top" longitude={lng} latitude={lat}>
              <h2>{name}</h2>
            </Popup> */}
          </Marker>
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
              src={shopImg}
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
