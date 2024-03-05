import React from "react";
import { Box, Typography, useTheme } from "@mui/material";

interface CircleProps {
  languagesAndColors: string[];
}

const CircleComponent: React.FC<CircleProps> = ({ languagesAndColors }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        color: "primary.contrastText",
        background: languagesAndColors[1],
        borderRadius: "180%",
        width: languagesAndColors[2],
        height: languagesAndColors[2],
        boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.5)",
        position: "absolute",
        left: languagesAndColors[3],
        transform: "translateX(-50%)",
        top: languagesAndColors[4],
        [theme.breakpoints.down("xl")]: {
          width: languagesAndColors[5],
          height: languagesAndColors[5],
        },
        [theme.breakpoints.down("lg")]: {
          width: `calc(${languagesAndColors[5]} * 1.2)`,
          height: `calc(${languagesAndColors[5]} * 1.2)`,
        },
        [theme.breakpoints.down("md")]: {
          top: `calc(${languagesAndColors[4]} * 0.7)`,
        },
        [theme.breakpoints.down("xmd")]: {
          top: `calc(${languagesAndColors[4]} * 0.5)`,
        },
        [theme.breakpoints.down("sm")]: {
          width: `calc(${languagesAndColors[5]} * 1.7)`,
          height: `calc(${languagesAndColors[5]} * 1.7)`,
          top: `calc(${languagesAndColors[4]} * 0.65)`,
        },
      }}
    >
      <Typography
        variant="h4"
        color="primary.contrastText"
        sx={{
          WebkitTextSizeAdjust: "100%",
          WebkitFontSmoothing: "antialiased",
          textRendering: "optimizeLegibility",
          WebkitBoxDirection: "normal",
          m: "0px",
          fontFamily: "Maven Pro, sans-serif",
          [theme.breakpoints.down("lg")]: {
            fontSize: "3vw",
            letterSpacing: "0.2vw",
          },
          [theme.breakpoints.down("xlg")]: {
            fontSize: "2.9vw",
            letterSpacing: "0.2vw",
          },
          [theme.breakpoints.down("md")]: {
            fontSize: "2.8vw",
            letterSpacing: "0.2vw",
          },
          [theme.breakpoints.down("sm")]: {
            fontSize: "5vw",
            lineHeight: "23.5px",
            m: "0px auto",
          },
        }}
      >
        {languagesAndColors[0]}
      </Typography>
    </Box>
  );
};

export default CircleComponent;
