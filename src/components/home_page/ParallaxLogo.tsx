import React, { useEffect } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";
import { useAppDispatch } from "../../hooks";
import { useAppSelector } from "../../hooks";
import { setIsParallaxEnabled } from "../../store/rootSlice";
import canadaFlag from "./icons/canada.png";
import usaFlag from "./icons/united-states-of-america.png";
import britainFlag from "./icons/united-kingdom.png";
import germanyFlag from "./icons/germany.png";
import italyFlag from "./icons/italy.png";
import polandFlag from "./icons/poland.png";

const ParallaxLogo: React.FC = () => {
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const isParallaxEnabled = useAppSelector(
    (state) => state.reducer.isParallaxEnabled
  );

  useEffect(() => {
    const handleResize = (): void => {
      if (window.innerWidth < theme.breakpoints.values.md) {
        dispatch(setIsParallaxEnabled(false));
      } else {
        dispatch(setIsParallaxEnabled(true));
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dispatch, theme.breakpoints.values.md]);
  console.log(isParallaxEnabled);
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
      enabled={isParallaxEnabled}
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
            [theme.breakpoints.down("md")]: {
              fontSize: "40px",
              /* lineHeight: "0px", */
              marginTop: "40%",
            },
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
            [theme.breakpoints.down("md")]: {
              fontSize: "30px",
              lineHeight: "48px",
            },
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
        factorX={1.3}
        factorY={1.3}
        updateStyles={{
          position: "absolute",
          top: "45%",
          left: "8%",
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
        factorX={1.3}
        factorY={1.3}
        updateStyles={{
          position: "absolute",
          top: "45%",
          right: "8%",
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
};

export default ParallaxLogo;
