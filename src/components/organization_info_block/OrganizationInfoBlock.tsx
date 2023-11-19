import React from "react";
import { Grid, Typography, CardMedia, Box, useTheme } from "@mui/material";
import img1 from "../../assets/images/img_1.jpg";
import img2 from "../../assets/images/img_2.jpg";

const OrganizationInfoBlock: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        background:
          "linear-gradient(160deg, rgba(134, 116, 170), rgba(134, 116, 170), rgba(134, 116, 170, 0.4))",
        overflow: "hidden",
        /* pt: "238px", */
        p: "238px 5px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      {/* <Box sx={{ maxWidth: "1164px" }}> */}
      <Grid
        container
        /* rowSpacing={1} */
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{
          overflow: "hidden",
          maxWidth: "1216px",
          rowGap: "433px",
        }}
      >
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            border: "1px solid black",
            background: "yellow",
            rowGap: "70px",
          }}
        >
          <CardMedia
            component="img"
            src={img1}
            alt="img"
            sx={{
              maxHeight: "640px",
              maxWidth: "530px",
              borderRadius: "6%",
              mr: "auto",
              /*  [theme.breakpoints.down("sm")]: {
                width: "100%",
                maxWidth: "100%",
              }, */
            }}
          />
          {/* <Typography sx={{ background: "green" }}>
            Grid №1 xs=12 md=8
          </Typography> */}
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{ border: "1px solid black", background: "yellow" }}
        >
          <Typography
            sx={{
              WebkitTextSizeAdjust: "100%",
              WebkitFontSmoothing: "antialiased",
              textRendering: "optimizeLegibility",
              WebkitBoxDirection: "normal",
              fontSize: "40px",
              fontWeight: "400",
              lineHeight: "46px",
              textAlign: "justify",
              color: "primary.contrastText",
              margin: "0 auto",
              cursor: "default",
              width: "530px",
              maxWidth: "530px",
              m: "50px 0 0 auto",
              /* [theme.breakpoints.down("sm")]: {
                fontSize: "20px",
                lineHeight: "23.5px",
              }, */
            }}
          >
            Компанія заснована в 2008 році. За цей час більше 5000 клієнтів
            залишились задоволені нашими послугами
          </Typography>
          {/* <Typography sx={{ background: "green" }}>
            Grid №2 xs=12 md=4
          </Typography> */}
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            border: "1px solid black",
            background: "yellow",

            [theme.breakpoints.down("sm")]: {
              order: { xs: 2 },
            },
          }}
        >
          <Typography
            sx={{
              WebkitTextSizeAdjust: "100%",
              WebkitFontSmoothing: "antialiased",
              textRendering: "optimizeLegibility",
              WebkitBoxDirection: "normal",
              fontSize: "40px",
              fontWeight: "400",
              lineHeight: "46px",
              textAlign: "justify",
              color: "primary.contrastText",
              margin: "0 auto",
              cursor: "default",
              maxWidth: "530px",
              m: "50px 0 0 0px",
              /* [theme.breakpoints.down("sm")]: {
                fontSize: "20px",
                lineHeight: "23.5px",
              }, */
            }}
          >
            Більше половини із наших клієнтів виїхали і проживають за кордоном
            зараз
          </Typography>
          {/* <Typography sx={{ background: "green" }}>
            Grid №3 xs=12 md=4
          </Typography> */}
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{ border: "1px solid black", background: "yellow" }}
        >
          <CardMedia
            component="img"
            src={img2}
            alt="img"
            sx={{
              maxHeight: "640px",
              maxWidth: "530px",
              borderRadius: "6%",
              ml: "auto",
              [theme.breakpoints.down("sm")]: {
                order: { xs: 1 },
                /* width: "100%",
                maxWidth: "100%", */
              },
            }}
          />
          {/* <Typography sx={{ background: "green" }}>
            Grid №4 xs=12 md=8
          </Typography> */}
        </Grid>
      </Grid>
      {/* <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{
          maxWidth: "1164px",
        }}
      >
        <Grid
          item
          xs={12}
          sm={8}
          sx={{ border: "1px solid black", background: "yellow" }}
        >
          <Typography sx={{ background: "green" }}>
            Grid №1 xs=12 md=8
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
          sx={{ border: "1px solid black", background: "yellow" }}
        >
          <Typography sx={{ background: "green" }}>
            Grid №2 xs=12 md=4
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{ border: "1px solid black", background: "yellow" }}
        >
          <Typography sx={{ background: "green" }}>
            Grid №3 xs=12 md=4
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{ border: "1px solid black", background: "yellow" }}
        >
          <Typography sx={{ background: "green" }}>
            Grid №4 xs=12 md=8
          </Typography>
        </Grid>
      </Grid> */}
      {/* </Box> */}
      {/* <Grid
        container
        spacing={2}
        rowSpacing={12}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{
          maxWidth: "1164px",
          p: "238px 10px",
          flexGrow: 1,
          [theme.breakpoints.down("sm")]: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      >
        <Grid
          item
          xs={6}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            padding: "0px 0px 0px 0px",
            [theme.breakpoints.down("sm")]: {
              width: "100%",
              maxWidth: "100%",
            },
          }}
        >
          <CardMedia
            component="img"
            src={img1}
            alt="img"
            sx={{
              maxHeight: "640px",
              maxWidth: "530px",
              borderRadius: "6%",
              mr: "auto",
              [theme.breakpoints.down("sm")]: {
                width: "100%",
                maxWidth: "100%",
              },
            }}
          />
        </Grid>
        <Grid
          item
          xs={6}
          md={6}
          sx={{
            [theme.breakpoints.down("sm")]: {
              width: "100%",
              maxWidth: "100%",
            },
          }}
          className="first-container"
        >
          <Typography
            sx={{
              WebkitTextSizeAdjust: "100%",
              WebkitFontSmoothing: "antialiased",
              textRendering: "optimizeLegibility",
              WebkitBoxDirection: "normal",
              fontSize: "40px",
              fontWeight: "400",
              lineHeight: "46px",
              textAlign: "justify",
              color: "primary.contrastText",
              margin: "0 auto",
              cursor: "default",
              width: "530px",
              maxWidth: "530px",
              mt: "50px",
              [theme.breakpoints.down("sm")]: {
                fontSize: "20px",
                lineHeight: "23.5px",
              },
            }}
          >
            Компанія заснована в 2008 році. За цей час більше 5000 клієнтів
            залишились задоволені нашими послугами
          </Typography>
        </Grid>
        <Grid
          item
          xs={6}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            [theme.breakpoints.down("sm")]: {
              width: "100%",
              maxWidth: "100%",
              order: { xs: 2 },
            },
          }}
        >
          <Typography
            sx={{
              WebkitTextSizeAdjust: "100%",
              WebkitFontSmoothing: "antialiased",
              textRendering: "optimizeLegibility",
              WebkitBoxDirection: "normal",
              fontSize: "40px",
              fontWeight: "400",
              lineHeight: "46px",
              textAlign: "justify",
              color: "primary.contrastText",
              margin: "0 auto",
              cursor: "default",
              maxWidth: "530px",
              mt: "50px",
              [theme.breakpoints.down("sm")]: {
                fontSize: "20px",
                lineHeight: "23.5px",
              },
            }}
          >
            Більше половини із наших клієнтів виїхали і проживають за кордоном
            зараз
          </Typography>
        </Grid>
        <Grid
          item
          xs={6}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            [theme.breakpoints.down("sm")]: {
              width: "100%",
              maxWidth: "100%",
              order: { xs: 1 },
            },
          }}
          className="second-container"
        >
          <CardMedia
            component="img"
            src={img2}
            alt="img"
            sx={{
              maxHeight: "640px",
              maxWidth: "530px",
              borderRadius: "6%",
              [theme.breakpoints.down("sm")]: {
                width: "100%",
                maxWidth: "100%",
              },
            }}
          />
        </Grid>
      </Grid> */}
    </Box>
  );
};

export default OrganizationInfoBlock;
