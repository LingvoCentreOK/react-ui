import React from "react";
import { Box, Grid, Typography, useTheme } from "@mui/material";
import { servicesContentProps } from "../../../types";

const ServicesComponent: React.FC = () => {
  const theme = useTheme();
  const servicesContent: servicesContentProps = {
    title: "ПОСЛУГИ",
    priceInfos: [
      "ПЕРСОНАЛЬНІ ЗАНЯТТЯ - 200 грн/год*",
      "ГРУПОВІ ЗАНЯТТЯ - 150 грн/год*",
      "ОНЛАЙН ЗАНЯТТЯ - 200 грн/год*",
      "ПЕРЕКЛАДИ ДОКУМЕНТІВ - 100 грн/аркуш*",
    ],
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "space-around", pb: "24px" }}>
      <Box
        sx={{
          background: "#8674AA",
          height: "60vw",
          maxHeight: "1042px",
          width: "60vw",
          maxWidth: "1042px",
          borderRadius: "37px",
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
            color: "primary.contrastText",
            p: "142px 0 127px 14%",
            cursor: "default",
            [theme.breakpoints.down("xl")]: {
              fontSize: "3vw",
              letterSpacing: "0.2vw",
              p: "9vw 0 8vw 14%",
            },
            [theme.breakpoints.down("md")]: {
              p: "9vw 0 7vw 14%",
            },
            [theme.breakpoints.down("xmd")]: {
              p: "8vw 0 6vw 14%",
            },
            [theme.breakpoints.down("sm")]: {
              p: "5vw 0 3vw 14%",
            },
          }}
        >
          {servicesContent.title}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Grid
            container
            direction="column"
            justifyContent="space-evenly"
            sx={{
              overflow: "hidden",
              width: "72%",
            }}
          >
            {servicesContent.priceInfos.map(
              (priceServicesInfo: string, index: number): React.JSX.Element => {
                const [label, price] = priceServicesInfo.split(" - ");
                return (
                  <Grid key={index} item xs={12}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "baseline",
                        gap: "16px",
                        py: "18px",
                        borderBottom:
                          index < servicesContent.priceInfos.length - 1
                            ? "1px solid rgba(255, 255, 255, 0.25)"
                            : "none",
                        [theme.breakpoints.down("xl")]: {
                          py: "1.4vw",
                        },
                      }}
                    >
                      <Typography
                        color="primary.contrastText"
                        sx={{
                          fontFamily: "Maven Pro, sans-serif",
                          fontWeight: "400",
                          letterSpacing: "1px",
                          cursor: "default",
                          fontSize: "22px",
                          [theme.breakpoints.down("xl")]: {
                            fontSize: "1.7vw",
                            letterSpacing: "0.1vw",
                          },
                        }}
                      >
                        {label}
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: "Maven Pro, sans-serif",
                          fontWeight: "700",
                          letterSpacing: "1px",
                          cursor: "default",
                          color: "#FFD166",
                          whiteSpace: "nowrap",
                          fontSize: "24px",
                          [theme.breakpoints.down("xl")]: {
                            fontSize: "1.9vw",
                            letterSpacing: "0.1vw",
                          },
                        }}
                      >
                        {price}
                      </Typography>
                    </Box>
                  </Grid>
                );
              }
            )}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default ServicesComponent;
