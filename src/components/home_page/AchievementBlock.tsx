import React from "react";
import { Box, Typography, Grid, useTheme } from "@mui/material";
import { useAppSelector } from "../../hooks";

const AchievementBlock: React.FC = () => {
  const theme = useTheme();
  const { title, infos } = useAppSelector(
    (state) => state.reducer.componentsTitlesState.achievementBlockTitles
  );

  return (
    <Box
      sx={{
        background:
          "linear-gradient(80deg, rgba(134, 116, 170), rgba(134, 116, 170), rgba(134, 116, 170, 0.4))",
        p: "172px 5px",
        justifyContent: "space-around",
        alignItems: "center",
        [theme.breakpoints.down("md")]: {
          p: "8vw 5px",
        },
        [theme.breakpoints.down("sm")]: {
          p: "8vw 0px",
        },
      }}
    >
      <Box
        sx={{
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Typography
          color="primary.contrastText"
          sx={{
            WebkitTextSizeAdjust: "100%",
            WebkitFontSmoothing: "antialiased",
            textRendering: "optimizeLegibility",
            WebkitBoxDirection: "normal",
            fontSize: "48px",
            fontWeight: "500",
            lineHeight: "56px",
            textAlign: "justify",
            color: "primary.contrastText",
            mb: "8vw",
            cursor: "default",
            [theme.breakpoints.down("md")]: {
              fontSize: "4.8vw",
            },
            [theme.breakpoints.down("sm")]: {
              fontSize: "9.4vw",
            },
          }}
        >
          {title}
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Grid
          container
          rowSpacing={{ xs: 1, sm: 1, md: 2 }}
          sx={{
            overflow: "hidden",
            maxWidth: "1200px",
            [theme.breakpoints.down("lg")]: {
              width: "96%",
            },
          }}
        >
          {infos.map((info: string, index: number) => (
            <Grid key={index} item xs={12} sm={6}>
              <Typography
                gutterBottom
                variant="h4"
                color="primary.contrastText"
                sx={{
                  m: "0px",
                  fontFamily: "Maven Pro, sans-serif",
                  letterSpacing: "2px",
                  textAlign: "left",
                  cursor: "default",
                  [theme.breakpoints.down("lg")]: {
                    fontSize: "3vw",
                    letterSpacing: "0.2vw",
                  },
                  [theme.breakpoints.down("xlg")]: {
                    fontSize: "2.9vw",
                    letterSpacing: "0.2vw",
                  },
                  [theme.breakpoints.down("xlg")]: {
                    fontSize: "2.8vw",
                    letterSpacing: "0.2vw",
                  },
                  [theme.breakpoints.down("sm")]: {
                    fontSize: "5vw",
                    lineHeight: "23.5px",
                    maxWidth: "74vw",
                    m: "-4px auto",
                  },
                }}
              >
                {info}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default AchievementBlock;
