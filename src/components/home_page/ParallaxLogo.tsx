import { Box, Typography } from "@mui/material";
import React from "react";
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";
import canadaFlag from "./icons/canada.png";
import usaFlag from "./icons/united-states-of-america.png";
import britainFlag from "./icons/united-kingdom.png";
import germanyFlag from "./icons/germany.png";
import italyFlag from "./icons/italy.png";
import polandFlag from "./icons/poland.png";

export function ParallaxLogo(): JSX.Element {
  return (
    <MouseParallaxContainer
      globalFactorX={0.1}
      globalFactorY={0.1}
      containerStyles={{
        width: "100%",
        height: "100%",
        position: "relative",
        display: "flex",
        justifyContent: "center",
      }}
      resetOnLeave
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            WebkitTextSizeAdjust: "100%",
            WebkitFontSmoothing: "antialiased",
            textRendering: "optimizeLegibility",
            WebkitBoxDirection: "normal",
            fontSize: "64px",
            fontWeight: "600",
            color: "primary.contrastText",
            marginTop: "30%",
            cursor: "default",
            background: "-webkit-linear-gradient(0deg, #ff8177, #8437fd)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          LINGVOCENTRE OK -
        </Typography>
        <Typography
          sx={{
            WebkitTextSizeAdjust: "100%",
            WebkitFontSmoothing: "antialiased",
            textRendering: "optimizeLegibility",
            WebkitBoxDirection: "normal",
            fontSize: "48px",
            fontWeight: "600",
            color: "primary.contrastText",
            lineHeight: "76px",
            margin: "0 auto",
            cursor: "default",
          }}
        >
          Ми провадимо якісну мовну освіту
        </Typography>
      </Box>

      <MouseParallaxChild
        factorX={0.8}
        factorY={0.8}
        updateStyles={{
          position: "absolute",
          top: "12%",
          left: "15%",
          zIndex: "-2",
          alignItems: "centre",
        }}
      >
        <img src={britainFlag} style={{ width: "100px", height: "100px" }} />
      </MouseParallaxChild>

      <MouseParallaxChild
        factorX={0.8}
        factorY={0.8}
        updateStyles={{
          position: "absolute",
          top: "45%",
          left: "10%",
          zIndex: "-2",
          alignItems: "centre",
        }}
      >
        <img src={italyFlag} style={{ width: "100px", height: "100px" }} />
      </MouseParallaxChild>
      <MouseParallaxChild
        factorX={0.8}
        factorY={0.8}
        updateStyles={{
          position: "absolute",
          top: "75%",
          left: "20%",
          zIndex: "-2",
          alignItems: "centre",
        }}
      >
        <img src={usaFlag} style={{ width: "100px", height: "100px" }} />
      </MouseParallaxChild>
      <MouseParallaxChild
        factorX={0.8}
        factorY={0.8}
        updateStyles={{
          position: "absolute",
          top: "12%",
          right: "15%",
          zIndex: "-2",
          alignItems: "centre",
        }}
      >
        <img src={canadaFlag} style={{ width: "100px", height: "100px" }} />
      </MouseParallaxChild>
      <MouseParallaxChild
        factorX={0.8}
        factorY={0.8}
        updateStyles={{
          position: "absolute",
          top: "45%",
          right: "10%",
          zIndex: "-2",
          alignItems: "centre",
        }}
      >
        <img src={germanyFlag} style={{ width: "100px", height: "100px" }} />
      </MouseParallaxChild>
      <MouseParallaxChild
        factorX={0.8}
        factorY={0.8}
        updateStyles={{
          position: "absolute",
          top: "75%",
          right: "20%",
          zIndex: "-2",
          alignItems: "centre",
        }}
      >
        <img src={polandFlag} style={{ width: "100px", height: "100px" }} />
      </MouseParallaxChild>
    </MouseParallaxContainer>
  );
}
