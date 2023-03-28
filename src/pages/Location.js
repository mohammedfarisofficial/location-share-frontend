import { useEffect, useRef, useState } from "react";
import Map, { Marker, Source, Layer, LngLat } from "react-map-gl";
import { useLocation } from "react-router-dom";
import { geojson, iesLayout, collgeOutLine } from "../data";
import * as turf from "@turf/turf";
import tree from "../assets/tree.png";

import socketIO from "socket.io-client";

const socket = socketIO.connect(process.env.REACT_APP_API_URL);

const Location = () => {
  const [isLocationFound, setIsLocationFound] = useState(false);
  const [popup, setPopup] = useState(false);
  const [name, setName] = useState("");
  const [friends, setFriends] = useState([]);
  const mapRef = useRef(null);

  const [markers, setMarkers] = useState([]);

  const handleMapLoad = () => {
    const map = mapRef.current.getMap();

    map.loadImage(tree, (error, image) => {
      if (error) throw error;
      map.addImage("my-icon", image);
    });
  };

  const [viewState, setViewState] = useState({
    minZoom: 1,
    maxZoom: 20,
    longitude: 76.15003079543125,
    latitude: 10.565125222484612,
    zoom: 17,
  });

  const location = useLocation();

  let lng = 10.564532005786141,
    lat = 76.14821915860668;

  // const markerScale = Math.max(1 - (viewState.zoom - 10) / 20, 0.2);

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
      // console.log("User is inside the polygon");
    } else {
      console.log("User is outside the polygon");
    }
  };

  const point = turf.point([lng, lat]);
  const polygon = turf.polygon(polygonCoordinatesOfCollege);

  inOut(point, polygon);

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
      let friendsArr = [...friends];
      const friend = friendsArr.filter(
        (fnd) => fnd.name === data.fullDocument.name
      );
      if (isLocationFound) {
        console.log(friend[0]);
        friend[0].latitude = data.fullDocument.latitude;
        friend[0].longitude = data.fullDocument.longitude;
        const newFriends = friends.map((fnd) => {
          if (fnd.name === data.fullDocument?.name) {
            return friend[0];
          }
          return fnd;
        });
        setFriends(newFriends);

        const markerHandler = (lat, lng) => {
          mapRef.current.flyTo({ center: [lng, lat], duration: 1000 });
          const currentUser = newFriends.filter((user) => user.name === name);
          const currentUserPoint = turf.point([
            currentUser[0].latitude,
            currentUser[0].longitude,
          ]);
          const friendPoint = turf.point([lat, lng]);
          const distanceBetweeen = turf.distance(
            currentUserPoint,
            friendPoint,
            { units: "meters" }
          );
          alert(distanceBetweeen.toFixed(2) + "m distance");

          // console.log("this is clicked");
        };
        // Create a new array of markers based on the updated friends state
        const newMarkers = newFriends.map((friend) => (
          <Marker
            key={friend._id}
            longitude={friend.longitude}
            latitude={friend.latitude}
            offsetLeft={-20}
            offsetTop={-10}
            onClick={() => markerHandler(friend.latitude, friend.longitude)}
            anchor="bottom"
          ></Marker>
        ));
        setMarkers(newMarkers);
      }
    });
  };

  useEffect(() => {
    prevLocation();
  }, []);
  useEffect(() => {
    positionUpdate();
  }, [friends]);

  useEffect(() => {
    setName(location.state?.data);
    uploadLocation();
  }, [name, location.state]);

  useEffect(() => {
    inOut(point, polygon);
  }, [point, polygon]);

  //custome polygons
  const groundLayer = {
    id: "college-base",
    type: "fill",
    source: "my-roads-data",
    layout: {},
    paint: {
      "fill-color": "#788D5D",
      "fill-opacity": 1,
    },
  };

  console.log("rendering component");
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Map
        {...viewState}
        onMove={(evt) => setViewState(evt.viewState)}
        onLoad={handleMapLoad}
        ref={mapRef}
        mapStyle="mapbox://styles/mohammedfarisofficial1/clfgrkcas000801qxj8qp9reg"
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS}
      >
        <Source id="college-base" type="geojson" data={collgeOutLine}>
          <Layer {...groundLayer} />
        </Source>

        {lat && lng !== "" && (
          <Marker
            longitude={lng}
            latitude={lat}
            offsetLeft={-20}
            offsetTop={-10}
            onClick={() => setPopup(!popup)}
          />
        )}
        {markers}
      </Map>
    </div>
  );
};

export default Location;
