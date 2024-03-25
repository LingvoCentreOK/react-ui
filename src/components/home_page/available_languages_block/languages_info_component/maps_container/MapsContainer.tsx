import React, { useState } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
} from "@vis.gl/react-google-maps";
import InfoWindowComponent from "./InfoWindowComponent";
const MapsComponent: React.FC = () => {
  const initialPosition = { lat: 49.4464472, lng: 32.0616021 };
  const [isInfoWindowOpen, setIsInfoWindowOpen] = useState<boolean>(false);
  const handleMapClickEvent = (): void => {
    if (isInfoWindowOpen) setIsInfoWindowOpen(false);
  };

  return (
    <APIProvider apiKey={"AIzaSyAg6QWcm1iCT58f7CzSOYMw8zc-BQbzRCQ"}>
      <div style={{ height: "100%", width: "100%" }}>
        <Map
          zoom={16}
          center={initialPosition}
          mapId={"bf4a24ebafc74740"}
          onClick={handleMapClickEvent}
        >
          <div id="makerElementId">
            <AdvancedMarker
              position={initialPosition}
              onClick={() => setIsInfoWindowOpen(true)}
            >
              <Pin
                background={"grey"}
                borderColor={"green"}
                glyphColor={"purple"}
              />
            </AdvancedMarker>
          </div>

          {isInfoWindowOpen && (
            <InfoWindowComponent setOpenWindow={setIsInfoWindowOpen} />
          )}
        </Map>
      </div>
    </APIProvider>
  );
};

export default MapsComponent;
