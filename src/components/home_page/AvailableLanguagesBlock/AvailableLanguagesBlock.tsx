import React from "react";
import { Box, useTheme } from "@mui/material";
import LanguagesComponent from "./LanguagesInformationComponent/LanguagesInformationComponent";
import ServicesComponent from "./ServicesInformationComponent";
import ContactInformationComponent from "./ContacstInformationComponent";
import MapsContainer from "./LanguagesInformationComponent/MapsContainer/MapsContainer";

const AvailableLanguagesBlock: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        background:
          "linear-gradient(150deg, rgba(134, 116, 170, 0.4), rgba(134, 116, 170), rgba(134, 116, 170, 0.4), #A6B8F3)",
        p: "80px 0 0 0",
        [theme.breakpoints.down("md")]: {
          p: "8vw 0px",
        },
        [theme.breakpoints.down("sm")]: {
          p: "8vw 0px 0px",
        },
      }}
    >
      <LanguagesComponent />
      <ServicesComponent />
      <Box
        sx={{
          position: "relative",
        }}
      >
        <ContactInformationComponent />
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "82vw",
            clipPath: "polygon(0 35vw, 100vw 0, 100vw 100vw, 0 100vw, 0 0)",
            top: "50vw",
            [theme.breakpoints.down("sm")]: {
              top: "100vw",
            },
          }}
        >
          {/* <div id="map"></div> */}
          <MapsContainer />
        </Box>
      </Box>
    </Box>
  );
};

export default AvailableLanguagesBlock;
