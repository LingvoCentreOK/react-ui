import React, { useEffect } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";

import { useAppSelector, useAppDispatch } from "../../hooks";
import { setIsTextVisible } from "../../store/rootSlice";

import "./HomePage.css";

const HomePage: React.FC = () => {
  const isTextVisible = useAppSelector((state) => state.reducer.isTextVisible);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch(setIsTextVisible(true));
    }, 50);
    return () => clearTimeout(timeout);
  }, [dispatch]);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexGrow: 1,
          flexDirection: "column",
          backgroundColor: "primary.main",
          opacity: "0.6",
          pt: "422px",
          overflow: "hidden",
        }}
      >
        <MouseParallaxContainer
          globalFactorX={0.1}
          globalFactorY={0.1}
          containerStyles={{
            width: "100%",
            height: "200px",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          resetOnLeave
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{
                fontSize: "64px",
                fontWeight: "600",
                color: "primary.contrastText",
                margin: "0 auto",
                cursor: "default",
                transform: isTextVisible ? "scale(1)" : "scale(0.1)",
                transition: "transform 2s ease",
              }}
              className={`initial-text ${isTextVisible ? "animate-text" : ""}`}
            >
              Lingvocentre OK -
            </Typography>
            <Typography
              sx={{
                fontSize: "48px",
                fontWeight: "600",
                color: "primary.contrastText",
                lineHeight: "76px",
                margin: "0 auto",
                cursor: "default",

                transform: isTextVisible ? "scale(1)" : "scale(0.1)",
                transition: "transform 2s ease",
              }}
              className={`initial-text ${isTextVisible ? "animate-text" : ""}`}
            >
              Ми провадимо якісну мовну освіту
            </Typography>
          </Box>
          <MouseParallaxChild
            factorX={0.1}
            factorY={0.3}
            updateStyles={{
              position: "absolute",
              top: "28%",
              left: "50%",
              zIndex: "-1",
              width: "100%",
              display: "flex",
              alignItems: "centre",
              transform: "translate(-50%, -50%)",
            }}
          >
            <Typography
              sx={{
                WebkitTextSizeAdjust: "100%",
                WebkitFontSmoothing: "antialiased",
                textRendering: "optimizeLegibility",
                WebkitBoxDirection: "normal",
                fontSize: "84px",
                fontWeight: "600",
                color: "primary.contrastText",
                opacity: "0.6",
                lineHeight: "102px",
                margin: "0 auto",
                cursor: "default",

                transform: isTextVisible ? "scale(1)" : "scale(0.1)",
                transition: "transform 2s ease",
              }}
            >
              Lingvocentre OK -
            </Typography>
          </MouseParallaxChild>
          <MouseParallaxChild
            factorX={0.3}
            factorY={0.5}
            updateStyles={{
              position: "absolute",
              top: "25%",
              left: "50%",
              zIndex: "-2",
              width: "100%",
              display: "flex",
              alignItems: "centre",
              transform: "translate(-50%, -50%)",
            }}
          >
            <Typography
              sx={{
                WebkitTextSizeAdjust: "100%",
                WebkitFontSmoothing: "antialiased",
                textRendering: "optimizeLegibility",
                WebkitBoxDirection: "normal",
                fontSize: "104px",
                fontWeight: "600",
                color: "primary.contrastText",
                opacity: "0.2",
                lineHeight: "102px",
                margin: "0 auto",
                cursor: "default",

                transform: isTextVisible ? "scale(1)" : "scale(0.1)",
                transition: "transform 2s ease",
              }}
            >
              Lingvocentre OK -
            </Typography>
          </MouseParallaxChild>
          <MouseParallaxChild
            factorX={0.3}
            factorY={0.5}
            updateStyles={{
              position: "absolute",
              top: "72%",
              left: "50%",
              zIndex: "-1",
              width: "100%",
              display: "flex",
              alignItems: "centre",
              transform: "translate(-50%, -50%)",
            }}
          >
            <Typography
              sx={{
                WebkitTextSizeAdjust: "100%",
                WebkitFontSmoothing: "antialiased",
                textRendering: "optimizeLegibility",
                WebkitBoxDirection: "normal",
                fontSize: "58px",
                fontWeight: "600",
                color: "primary.contrastText",
                lineHeight: "76px",
                wordWrap: "break-word",
                opacity: "0.6",
                margin: "0 auto",
                cursor: "default",

                transform: isTextVisible ? "scale(1)" : "scale(0.1)",
                transition: "transform 2s ease",
              }}
            >
              Ми провадимо якісну мовну освіту
            </Typography>
          </MouseParallaxChild>
          <MouseParallaxChild
            factorX={0.3}
            factorY={0.5}
            updateStyles={{
              position: "absolute",
              top: "70%",
              left: "50%",
              zIndex: "-2",
              width: "100%",
              display: "flex",
              alignItems: "centre",
              transform: "translate(-50%, -50%)",
            }}
          >
            <Typography
              sx={{
                WebkitTextSizeAdjust: "100%",
                WebkitFontSmoothing: "antialiased",
                textRendering: "optimizeLegibility",
                WebkitBoxDirection: "normal",
                fontSize: "68px",
                fontWeight: "600",
                color: "primary.contrastText",
                lineHeight: "76px",
                wordWrap: "break-word",
                opacity: "0.2",
                margin: "0 auto",
                cursor: "default",

                transform: isTextVisible ? "scale(1)" : "scale(0.1)",
                transition: "transform 2s ease",
              }}
            >
              Ми провадимо якісну мовну освіту
            </Typography>
          </MouseParallaxChild>
        </MouseParallaxContainer>
        <Button
          variant="outlined"
          size="large"
          href="news-page"
          sx={{
            color: "primary.contrastText",
            fontSize: "32px",
            width: "440px",
            fontWeight: "600",
            border: "3px solid white",
            borderRadius: "100px",
            m: "30px auto 421px",
            textTransform: "none",
            "&:hover": {
              border: "3px solid white",
              backgroundColor: "primary.contrastText",
              color: "primary.main",
            },
          }}
        >
          Зв'язатись з нами
        </Button>
      </Box>
    </>
  );
};

export default HomePage;
