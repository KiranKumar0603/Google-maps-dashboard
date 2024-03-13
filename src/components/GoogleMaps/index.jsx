import React from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import { REACT_APP_GOOGLE_MAPS_KEY } from "../../constants/constants";
import SearchLocationInput from "../SearchLocationInput";
import { Typography } from "@mui/material";
import markerIcon from "../../assets/markerIcon.svg";

const MapComponent = ({ selectedLocation, setSelectedLocation }) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: REACT_APP_GOOGLE_MAPS_KEY,
  });

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);
  console.log(isLoaded);
  if (loadError) return "Error";
  if (!isLoaded) return "Maps";

  return (
    <div style={{ marginTop: "50px", position: "relative" }}>
      <GoogleMap
        mapContainerStyle={{
          height: "400px",
          borderRadius: "50px",
        }}
        center={selectedLocation}
        zoom={13}
        onLoad={onMapLoad}
      >
        <SearchLocationInput
          setSelectedLocation={setSelectedLocation}
          sx={{ position: "absolute", zIndex: 2, top: 20, right: 20 }}
        />
        <MarkerF position={selectedLocation} icon={<markerIcon />} />
      </GoogleMap>
      <Typography
        sx={{ position: "absolute", top: "50%", left: "50%", zIndex: -1 }}
      >
        please reload if Map is not visible
      </Typography>
    </div>
  );
};

export default MapComponent;
