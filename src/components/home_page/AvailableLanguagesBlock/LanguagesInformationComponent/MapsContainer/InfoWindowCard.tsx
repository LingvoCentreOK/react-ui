"use client";

import React from "react";
import { InfoWindow } from "@vis.gl/react-google-maps";
import { Stack, Typography } from "@mui/material";
const InfoWindowCard: React.FC<{
  setOpenWindow: (value: boolean) => void;
}> = ({ setOpenWindow }) => {
  const position = { lat: 49.4464472, lng: 32.0616021 };

  return (
    <InfoWindow position={position} onCloseClick={() => setOpenWindow(false)}>
      <Stack sx={{ maxWidth: "200px" }}>
        <Typography>
          <b>LingvoCentreOK</b>
        </Typography>
        <Typography sx={{ textDecoration: "underline" }}>
          School of foreign languages
        </Typography>
        <Typography>
          Baidy Vyshnevets'kogho St, 57, 5th floor, <br /> Cherkasy, Cherkasy
          Oblast, Ukraine
        </Typography>
      </Stack>
    </InfoWindow>
  );
};

export default InfoWindowCard;
