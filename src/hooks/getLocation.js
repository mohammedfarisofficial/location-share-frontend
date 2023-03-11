import React from "react";
import { useGeolocated } from "react-geolocated";

const GetLocation = () => {
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false,
      },
      userDecisionTimeout: 5000,
    });

  return !isGeolocationAvailable ? (
    <div>Your browser does not support Geolocation</div>
  ) : !isGeolocationEnabled ? (
    <div>Geolocation is not enabled</div>
  ) : coords ? (
    <>
      <h2>latitude</h2>
      <p>{coords.latitude}</p>
      <h2>longitude</h2>
      <p>{coords.longitude}</p>
    </>
  ) : (
    <div>Getting the location data&hellip; </div>
  );
};

export default GetLocation;
