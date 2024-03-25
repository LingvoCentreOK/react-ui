import React, { useEffect } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { Theme } from "@mui/material/styles";
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setIsParallaxEnabled } from "../../store/rootSlice";
import canadaFlag from "../../assets/icons/parallax_logo_icons/canada.png";
import usaFlag from "../../assets/icons/parallax_logo_icons/united-states-of-america.png";
import britainFlag from "../../assets/icons/parallax_logo_icons/united-kingdom.png";
import germanyFlag from "../../assets/icons/parallax_logo_icons/germany.png";
import italyFlag from "../../assets/icons/parallax_logo_icons/italy.png";
import polandFlag from "../../assets/icons/parallax_logo_icons/poland.png";

const ParallaxLogoComponent: React.FC = () => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const { componentsTitlesState, isParallaxEnabled } = useAppSelector(
    (state) => state.reducer
  );
  useEffect(() => {
    const handleResize = (): void => {
      dispatch(
        setIsParallaxEnabled(window.innerWidth >= theme.breakpoints.values.md)
      );
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dispatch, theme.breakpoints.values.md]);

  const textStyles = (
    theme: Theme,
    fontSizesArray: number[],
    marginTopsArray: number[] = [],
    lineHeightsArray: number[] = []
  ): object => ({
    WebkitTextSizeAdjust: "100%",
    WebkitFontSmoothing: "antialiased",
    textRendering: "optimizeLegibility",
    WebkitBoxDirection: "normal",
    fontWeight: "600",
    color: "primary.contrastText",
    cursor: "default",
    fontSize: `${fontSizesArray[0]}px`,
    marginTop: `${marginTopsArray[0]}vh`,
    background: `-webkit-linear-gradient(0deg, #ff8177, #8437fd)`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    [theme.breakpoints.down("lg")]: {
      fontSize: `${fontSizesArray[1]}px`,
      marginTop: `${marginTopsArray[1]}vh`,
      lineHeight: `${lineHeightsArray[0]}px`,
    },
    [theme.breakpoints.down("md")]: {
      fontSize: `${fontSizesArray[2]}px`,
      marginTop: `${marginTopsArray[2]}vh`,
    },
    [theme.breakpoints.down("xmd")]: {
      fontSize: `${fontSizesArray[3]}px`,
      marginTop: `${marginTopsArray[3]}vh`,
      lineHeight: `${lineHeightsArray[1]}px`,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: `${fontSizesArray[4]}px`,
      marginTop: `${marginTopsArray[4]}vh`,
    },
  });
  const titleStyles = (theme: Theme): object => ({
    ...textStyles(theme, [64, 50, 40, 32, 30], [26, 29, 28, 30, 30], [48, 30]),
  });

  const subtitleStyles = (theme: Theme): object => ({
    ...textStyles(theme, [48, 38, 30, 22, 20], [26, -2, -1, 0, 0]),
    lineHeight: "76px",
  });

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
            ...titleStyles(theme),
            [theme.breakpoints.down("sm")]: {
              fontSize: "7vw",
              mt: "30vh",
            },
          }}
        >
          {componentsTitlesState.homePageTitles.title}
        </Typography>
        <Typography
          sx={{
            ...subtitleStyles(theme),
            margin: "0 auto",
            [theme.breakpoints.down("sm")]: {
              fontSize: "5vw",
            },
          }}
        >
          {componentsTitlesState.homePageTitles.subtitle}
        </Typography>
      </Box>
      <MouseParallaxChild />
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

export default ParallaxLogoComponent;
