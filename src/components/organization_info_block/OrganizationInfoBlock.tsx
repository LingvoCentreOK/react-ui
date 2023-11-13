import React from "react";
import {
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Box,
} from "@mui/material";
import img1 from "../../assets/images/img_1.jpg";
import img2 from "../../assets/images/img_2.jpg";

const OrganizationInfoBlock: React.FC = () => {
  return (
    <Box
      sx={{
        background:
          "linear-gradient(160deg, rgba(134, 116, 170), rgba(134, 116, 170), rgba(134, 116, 170, 0.4))",
        pt: "150px",
        overflow: "hidden",
      }}
    >
      <Grid
        container
        direction="column"
        justifyContent="space-around"
        alignItems="center"
        rowSpacing={12}
        columnSpacing={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={12} md={12}>
          <Card
            sx={{
              height: "100%",
              display: "flex",
              columnGap: "50px",
              backgroundColor: "rgba(255, 255, 255, 0)",
            }}
          >
            <CardMedia
              component="img"
              /* height="640"
              width="530" */
              src={img1}
              alt="img"
              sx={{
                maxHeight: "640px",
                maxWidth: "530px",
                borderRadius: "6%",
              }}
            />
            <CardContent>
              <Typography
                sx={{
                  WebkitTextSizeAdjust: "100%",
                  WebkitFontSmoothing: "antialiased",
                  textRendering: "optimizeLegibility",
                  WebkitBoxDirection: "normal",
                  fontSize: "40px",
                  fontWeight: "400",
                  lineHeight: "46px",
                  color: "primary.contrastText",
                  margin: "0 auto",
                  cursor: "default",
                  maxWidth: "530px",
                }}
              >
                Компанія заснована в 2008 році. За цей час більше 5000 клієнтів
                залишились задоволені нашими послугами
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={12}>
          <Card
            sx={{
              height: "100%",
              display: "flex",
              columnGap: "50px",
              backgroundColor: "rgba(255, 255, 255, 0)",
            }}
          >
            <CardContent>
              <Typography
                sx={{
                  WebkitTextSizeAdjust: "100%",
                  WebkitFontSmoothing: "antialiased",
                  textRendering: "optimizeLegibility",
                  WebkitBoxDirection: "normal",
                  fontSize: "40px",
                  fontWeight: "400",
                  lineHeight: "46px",
                  color: "primary.contrastText",
                  margin: "0 auto",
                  cursor: "default",
                  maxWidth: "530px",
                }}
              >
                Більше половини із наших клієнтів виїхали і проживають за
                кордоном зараз
              </Typography>
            </CardContent>
            <CardMedia
              component="img"
              height="640"
              width="530"
              src={img2}
              alt="img"
              sx={{
                maxHeight: "640px",
                maxWidth: "530px",
                borderRadius: "6%",
              }}
            />
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default OrganizationInfoBlock;
