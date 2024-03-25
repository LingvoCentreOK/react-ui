import React from "react";
import { Box, useTheme } from "@mui/material";
import RenderLanguagesComponent from "./languages_info_component/LanguagesComponent ";
import RenderServicesComponent from "./ServicesComponent";
import RenderContactInfoComponent from "./ContactInfoComponent";
import RenderMapsContainer from "./languages_info_component/maps_container/MapsContainer";

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
      <RenderLanguagesComponent />
      <RenderServicesComponent />
      <Box
        sx={{
          position: "relative",
        }}
      >
        <RenderContactInfoComponent />
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
          <RenderMapsContainer />
        </Box>
      </Box>
    </Box>
  );
};

export default AvailableLanguagesBlock;
