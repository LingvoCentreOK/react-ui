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
            alignItems="center"
            sx={{
              overflow: "hidden",
            }}
          >
            {servicesContent.priceInfos.map(
              (priceServicesInfo: string, index: number): React.JSX.Element => (
                <Grid key={index} item xs={12} sm={6}>
                  <Typography
                    gutterBottom
                    variant="h4"
                    color="primary.contrastText"
                    sx={{
                      mb: "62px",
                      fontFamily: "Maven Pro, sans-serif",
                      letterSpacing: "2px",
                      cursor: "default",
                      [theme.breakpoints.down("xl")]: {
                        fontSize: "2vw",
                        letterSpacing: "0.1vw",
                        mb: "3vw",
                      },
                    }}
                  >
                    {priceServicesInfo}
                  </Typography>
                </Grid>
              )
            )}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default ServicesComponent;
