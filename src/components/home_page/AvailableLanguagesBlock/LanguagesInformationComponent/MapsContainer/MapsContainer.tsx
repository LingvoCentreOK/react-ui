import React, { useState } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
} from "@vis.gl/react-google-maps";
import InfoWindowCard from "./InfoWindowCard";
const MapsContainer: React.FC = () => {
  const position = { lat: 49.4464472, lng: 32.0616021 };
  const [open, setOpen] = useState<boolean>(false);
  const handleMapClick = (): void => {
    if (open) setOpen(false);
  };

  return (
    <APIProvider apiKey={"AIzaSyAg6QWcm1iCT58f7CzSOYMw8zc-BQbzRCQ"}>
      <div style={{ height: "100%", width: "100%" }}>
        <Map
          zoom={16}
          center={position}
          mapId={"bf4a24ebafc74740"}
          onClick={handleMapClick}
        >
          <div id="makerElementId">
            <AdvancedMarker position={position} onClick={() => setOpen(true)}>
              <Pin
                background={"grey"}
                borderColor={"green"}
                glyphColor={"purple"}
              />
            </AdvancedMarker>
          </div>

          {open && <InfoWindowCard setOpenWindow={setOpen} />}
        </Map>
      </div>
    </APIProvider>
  );
};

export default MapsContainer;
