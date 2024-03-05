import React, { Fragment } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { AvailableLanguagesBlockTitlesProps } from "../../../../types";
import CircleComponent from "./CircleComponent";

const LanguagesInformationComponent: React.FC = () => {
  const theme = useTheme();
  const availableLanguagesBlockTitles: AvailableLanguagesBlockTitlesProps = {
    title: "ДОСТУПНІ МОВИ",
    languagesAndStylesArray: [
      ["German", "#8674AA", "221px", "26vw", "100px", "12.8vw"],
      ["Italian", "#C9DFAC", "249px", "65vw", "0px", "14.4vw"],
      ["English", "#CDA5F3", "346px", "50vw", "242px", "20vw"],
      ["Francis", "#A6B8F3", "264px", "30vw", "458px", "15.3vw"],
      ["Polska", "#EFCEA8", "212px", "72vw", "404px", "12.3vw"],
    ],
  };

  return (
    <Fragment>
      <Box
        sx={{
          height: "48px",
          position: "relative",
          [theme.breakpoints.down("sm")]: {
            height: "100px",
          },
        }}
      >
        <Typography
          color="primary.contrastText"
          sx={{
            WebkitTextSizeAdjust: "100%",
            WebkitFontSmoothing: "antialiased",
            textRendering: "optimizeLegibility",
            WebkitBoxDirection: "normal",
            color: "primary.contrastText",
            fontSize: "48px",
            fontWeight: "500",
            lineHeight: "56px",
            textAlign: "justify",
            cursor: "default",
            position: "absolute",
            left: "22%",
            transform: "translateX(-50%)",
            [theme.breakpoints.down("mlg")]: {
              left: "26%",
            },
            [theme.breakpoints.down("md")]: {
              fontSize: "4.8vw",
            },
            [theme.breakpoints.down("sm")]: {
              fontSize: "9.4vw",
              left: "50%",
              width: "80%",
            },
          }}
        >
          {availableLanguagesBlockTitles.title}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          position: "relative",
          height: "875px",
          [theme.breakpoints.down("lg")]: {
            height: "70vw",
          },
          [theme.breakpoints.down("mlg")]: {
            height: "80vw",
          },
          [theme.breakpoints.down("md")]: {
            height: "70vw",
          },
          [theme.breakpoints.down("sm")]: {
            height: "130vw",
          },
        }}
      >
        {availableLanguagesBlockTitles.languagesAndStylesArray.map(
          (languagesAndColors: string[], index: number): React.JSX.Element => (
            <CircleComponent
              key={index}
              languagesAndColors={languagesAndColors}
            />
          )
        )}
      </Box>
    </Fragment>
  );
};

export default LanguagesInformationComponent;
