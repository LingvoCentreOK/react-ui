import React, { useEffect } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { useAppSelector, useAppDispatch } from "../../hooks";
import { setPosition, setIsTextVisible } from "../../store/rootSlice";

import "./HomePage.css";

const HomePage: React.FC = () => {
  const position = useAppSelector((state) => state.reducer.position);
  const isTextVisible = useAppSelector((state) => state.reducer.isTextVisible);
  const dispatch = useAppDispatch();

  const handleMouseMove = (event: MouseEvent): void => {
    const offsetX = (window.innerWidth / 2 - event.clientX) * 0.02;
    const offsetY = (window.innerHeight / 2 - event.clientY) * 0.02;
    dispatch(setPosition({ x: offsetX, y: offsetY }));
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  });

  useEffect(() => {
    dispatch(setIsTextVisible(true));
  }, [dispatch]);

  const parallaxTextStyles = {
    transform: `translate(${position.x}px, ${position.y}px)`,
    transition: "transform 0.5s ease-in-out 0.2s",
  };

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        flexGrow: 1,
        flexDirection: "column",
        backgroundColor: "primary.main",
        opacity: "0.6",
        pt: "422px",
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
          lineHeight: "102px",
          margin: "0 auto",
          cursor: "default",

          transform: isTextVisible ? "scale(1)" : "scale(0.1)",
          transition: "transform 2s ease",
        }}
        className={`initial-text ${isTextVisible ? "animate-text" : ""}`}
      >
        Lingvocentre OK -
      </Typography>
      <Box
        sx={{
          position: "absolute",
          top: "41.9%",
          left: "50%",
          zIndex: "-1",
          width: "100%",
          display: "flex",
          alignItems: "centre",

          transform: `translate(-50%, -50%) ${
            isTextVisible ? "scale(1)" : "scale(0.1)"
          }`,
          transition: "transform 2s ease",
        }}
        className={`initial-text ${isTextVisible ? "animate-text" : ""}`}
      >
        <Typography
          sx={{
            fontSize: "74px",
            fontWeight: "600",
            color: "primary.contrastText",
            lineHeight: "102px",
            wordWrap: "break-word",
            margin: "0 auto",
            ...parallaxTextStyles,
            transition: "transform 1s",
          }}
        >
          <Box
            component="span"
            style={{
              opacity: "0.6",
              cursor: "default",
            }}
          >
            Lingvocentre OK -
          </Box>
        </Typography>
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: "41.8%",
          left: "50%",
          zIndex: "-2",
          width: "100%",
          display: "flex",
          alignItems: "centre",

          transform: `translate(-50%, -50%) ${
            isTextVisible ? "scale(1)" : "scale(0.1)"
          }`,
          transition: "transform 2s ease",
        }}
        className={`initial-text ${isTextVisible ? "animate-text" : ""}`}
      >
        <Typography
          sx={{
            fontSize: "84px",
            fontWeight: "600",
            color: "primary.contrastText",
            lineHeight: "102px",
            margin: "0 auto",
            ...parallaxTextStyles,
            transition: "transform 2s",
          }}
        >
          <Box
            component="span"
            style={{
              opacity: "0.2",
              cursor: "default",
            }}
          >
            Lingvocentre OK -
          </Box>
        </Typography>
      </Box>
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
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          zIndex: "-1",
          width: "100%",
          display: "flex",
          alignItems: "centre",

          transform: `translate(-50%, -50%) ${
            isTextVisible ? "scale(1)" : "scale(0.1)"
          }`,
          transition: "transform 2s ease",
        }}
        className={`initial-text ${isTextVisible ? "animate-text" : ""}`}
      >
        <Typography
          sx={{
            fontSize: "58px",
            fontWeight: "600",
            color: "primary.contrastText",
            lineHeight: "76px",
            wordWrap: "break-word",
            margin: "0 auto",
            ...parallaxTextStyles,
            transition: "transform 1s",
          }}
        >
          <Box
            component="span"
            style={{
              opacity: "0.6",
              cursor: "default",
            }}
          >
            Ми провадимо якісну мовну освіту
          </Box>
        </Typography>
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          zIndex: "-2",
          width: "100%",
          display: "flex",
          alignItems: "centre",

          transform: `translate(-50%, -50%) ${
            isTextVisible ? "scale(1)" : "scale(0.1)"
          }`,
          transition: "transform 2s ease",
        }}
        className={`initial-text ${isTextVisible ? "animate-text" : ""}`}
      >
        <Typography
          sx={{
            fontSize: "68px",
            fontWeight: "600",
            color: "primary.contrastText",
            lineHeight: "76px",
            wordWrap: "break-word",
            margin: "0 auto",
            ...parallaxTextStyles,
            transition: "transform 2s",
          }}
        >
          <Box
            component="span"
            style={{
              opacity: "0.2",
              cursor: "default",
            }}
          >
            Ми провадимо якісну мовну освіту
          </Box>
        </Typography>
      </Box>
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
  );
};

export default HomePage;
