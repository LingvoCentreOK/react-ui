import React, { useEffect } from "react";
import { Grid, Typography, CardMedia, Box, useTheme } from "@mui/material";
import { useAppDispatch } from "../../hooks";
import { useAppSelector } from "../../hooks";
import { setImages } from "../../store/rootSlice";
import img1 from "../../assets/images/img_1.jpg";
import img2 from "../../assets/images/img_2.jpg";
import img3 from "../../assets/images/img_3.jpg";
import img4 from "../../assets/images/img_4.jpg";

const OrganizationInfoBlock: React.FC = () => {
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const images = useAppSelector((state) => state.reducer.images);

  useEffect(() => {
    const handleResize = (): void => {
      if (window.innerWidth < theme.breakpoints.values.sm) {
        dispatch(setImages([...[img3, img4]]));
      } else {
        dispatch(setImages([...[img1, img2]]));
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dispatch, theme.breakpoints.values.sm]);

  return (
    <Box
      sx={{
        background:
          "linear-gradient(160deg, rgba(134, 116, 170), rgba(134, 116, 170), rgba(134, 116, 170, 0.4))",
        p: "238px 5px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        [theme.breakpoints.down("sm")]: {
          p: "60px 5px",
        },
      }}
    >
      <Grid
        container
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{
          overflow: "hidden",
          maxWidth: "1164px",
          rowGap: "433px",
          [theme.breakpoints.down("lg")]: {
            width: "96%",
          },
          [theme.breakpoints.down("sm")]: {
            rowGap: "0px",
          },
        }}
      >
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            rowGap: "70px",
            [theme.breakpoints.down("sm")]: {
              mb: "23px",
            },
          }}
        >
          <CardMedia
            component="img"
            src={images[0]}
            alt="img"
            sx={{
              maxWidth: "530px",
              maxHeight: "640px",
              borderRadius: "33px",
              mr: "auto",
              [theme.breakpoints.down("sm")]: {
                maxWidth: "307px",
                maxHeight: "284px",
                m: "0px auto",
              },
            }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            [theme.breakpoints.down("sm")]: {
              mb: "168px",
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
              m: "50px 0 0 auto",
              [theme.breakpoints.down("lg")]: {
                fontSize: "3.33vw",
                lineHeight: "3.33vw",
                m: "3.33vw 0 0 auto",
              },
              [theme.breakpoints.down("sm")]: {
                fontSize: "20px",
                lineHeight: "23.5px",
                maxWidth: "375px",
                m: "0px auto",
              },
            }}
          >
            Компанія заснована в 2008 році. За цей час більше 5000 клієнтів
            залишились задоволені нашими послугами
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
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
              [theme.breakpoints.down("lg")]: {
                fontSize: "3.33vw",
                lineHeight: "3.33vw",
                m: "3.33vw 0 0 0px",
              },
              [theme.breakpoints.down("sm")]: {
                fontSize: "20px",
                lineHeight: "23.5px",
                maxWidth: "375px",
                m: "0px auto",
              },
            }}
          >
            Більше половини із наших клієнтів виїхали і проживають за кордоном
            зараз
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            [theme.breakpoints.down("sm")]: {
              mb: "23px",
            },
          }}
        >
          <CardMedia
            component="img"
            src={images[1]}
            alt="img"
            sx={{
              maxWidth: "530px",
              maxHeight: "640px",
              borderRadius: "33px",
              ml: "auto",
              [theme.breakpoints.down("sm")]: {
                order: { xs: 1 },
                maxWidth: "387px",
                maxHeight: "304px",
                m: "0px auto",
              },
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default OrganizationInfoBlock;
