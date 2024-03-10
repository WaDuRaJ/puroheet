import React, { useState, useEffect } from "react";

const LocationPicker = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });
  }, []);

  return (
    <div>
      <h1>Your location is:</h1>
      <p>{location && `${location.latitude}, ${location.longitude}`}</p>
    </div>
  );
};

export default LocationPicker;