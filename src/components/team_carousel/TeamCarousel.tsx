import React, { useEffect, useMemo } from "react";
import {
  Box,
  CardMedia,
  Typography,
  CardContent,
  useTheme,
} from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useAppDispatch } from "../../hooks";
import { useAppSelector } from "../../hooks";
import {
  setTeamMembersState,
  teamMembers,
  TeamMember,
  setCarouselPropsState,
  carouselProps,
  CarouselProps,
} from "../../store/rootSlice";
import imgCarousel1 from "../../assets/images/carousel_block_images/img_carousel_1.jpg";
import img1 from "../../assets/images/img_1.jpg";
import img2 from "../../assets/images/img_2.jpg";
import img3 from "../../assets/images/img_3.jpg";

const TeamCarousel: React.FC = () => {
  const dispatch = useAppDispatch();
  const teamMembersState = useAppSelector(
    (state) => state.reducer.teamMembersState
  );
  const carouselPropsState = useAppSelector(
    (state) => state.reducer.carouselPropsState
  );
  const theme = useTheme();

  const teamMembersMobileVersion: TeamMember[] = useMemo(
    () => [
      {
        id: "0",
        name: { name1: "Ольга" },
        info: {
          position1: "Викладач англійської мови, магістр",
        },
        images: { image1: imgCarousel1 },
      },
      {
        id: "1",
        name: { name1: "Хельга" },
        info: {
          position1: "Викладач дацької мови, бакалавр",
        },
        images: { image1: img1 },
      },
      {
        id: "2",
        name: { name1: "Ханна" },
        info: {
          position1: "Викладач німецької мови, магістр",
        },
        images: { image1: img2 },
      },
      {
        id: "3",
        name: { name1: "Агнешка" },
        info: {
          position1: "Викладач польської мови, бакалавр",
        },
        images: { image1: img3 },
      },
    ],
    []
  );

  const carouselPropsMobileVersion: CarouselProps = useMemo(
    () => ({
      animation: "slide",
      interval: undefined,
      duration: undefined,
      autoPlay: false,
      indicators: true,
      stopAutoPlayOnHover: false,
      navButtonsAlwaysVisible: false,
    }),
    []
  );

  useEffect(() => {
    const handleResize = (): void => {
      if (window.innerWidth < theme.breakpoints.values.sm) {
        dispatch(setCarouselPropsState(carouselPropsMobileVersion));
        dispatch(setTeamMembersState(teamMembersMobileVersion));
      } else {
        dispatch(setTeamMembersState(teamMembers));
        dispatch(setCarouselPropsState(carouselProps));
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [
    dispatch,
    carouselPropsMobileVersion,
    teamMembersMobileVersion,
    theme.breakpoints.values.sm,
  ]);

  return (
    <Box
      sx={{
        background: "linear-gradient(200deg, #8674AA, #8674aa, #8674aa66)",
        p: "87px 5px 78px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "column",
        [theme.breakpoints.down("md")]: {
          p: "8vw 5px",
        },
        [theme.breakpoints.down("sm")]: {
          p: "8vw 0px",
        },
      }}
    >
      <Typography
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
          [theme.breakpoints.down("md")]: {
            fontSize: "4.8vw",
          },
        }}
      >
        НАША КОМАНДА
      </Typography>
      <Carousel
        {...carouselPropsState}
        PrevIcon={
          <ArrowBackIosIcon
            sx={{
              m: "0 auto",
              p: "0 0 0 15%",
              width: "64px",
              height: "64px",
              backgroundColor: "#00000000",
              [theme.breakpoints.down("md")]: {
                width: "4.4vw",
                height: "4.4vw",
              },
            }}
          />
        }
        NextIcon={
          <ArrowForwardIosIcon
            sx={{
              m: "0 auto",
              p: "0 0 0 15%",
              width: "64px",
              height: "64px",
              backgroundColor: "#00000000",
              [theme.breakpoints.down("md")]: {
                width: "4.4vw",
                height: "4.4vw",
              },
            }}
          />
        }
        sx={{
          width: "86%",
          maxWidth: "1490px",
          [theme.breakpoints.down("lg")]: {
            width: "94%",
          },
          [theme.breakpoints.down("xmd")]: {
            width: "96%",
          },
        }}
      >
        {teamMembersState.map((member, i) => (
          <TeamMemberItem
            key={i}
            name={member.name}
            info={member.info}
            images={member.images}
          />
        ))}
      </Carousel>
    </Box>
  );
};

export default TeamCarousel;

interface TeamMemberItemProps {
  name: { name1: string; name2?: string | undefined };
  info: { position1: string; position2?: string };
  images: { image1: string; image2?: string | undefined };
}

const TeamMemberItem: React.FC<TeamMemberItemProps> = ({
  name,
  info,
  images,
}) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        m: "0 18%",
        maxWidth: "1004px",
        [theme.breakpoints.down("xl")]: {
          m: "0 15%",
        },
        [theme.breakpoints.down("lg")]: {
          m: "0 12%",
        },
        [theme.breakpoints.down("xlg")]: {
          gap: "1vw",
        },
        [theme.breakpoints.down("md")]: {
          m: "0 13%",
          gap: "0.5vw",
        },
        [theme.breakpoints.down("sm")]: {
          m: "0px",
          height: "55.9vw",
        },
      }}
    >
      <TeamMemberCard
        name={name.name1}
        info={info.position1}
        image={images.image1}
      />
      {name.name2 !== undefined &&
        info.position2 !== undefined &&
        images.image2 !== undefined && (
          <TeamMemberCard
            name={name.name2}
            info={info.position2}
            image={images.image2}
          />
        )}
    </Box>
  );
};

interface TeamMemberCardProps {
  name: string;
  info: string;
  image: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  name,
  info,
  image,
}) => {
  const theme = useTheme();

  return (
    <Paper
      elevation={10}
      sx={{
        display: "flex",
        width: "350px",
        backgroundColor: "#00000000",
        mt: "70px",
        p: "0.3vw",
        [theme.breakpoints.down("xlg")]: {
          mt: "7vw",
          p: "0.5vw",
        },
        [theme.breakpoints.down("sm")]: {
          width: "100%",
        },
      }}
    >
      <CardMedia
        component="img"
        src={image}
        alt="img"
        sx={{
          maxWidth: "156px",
          maxHeight: "156px",
          borderRadius: "50%",
          mt: "2px",
          mr: "5%",
          objectFit: "cover",
          [theme.breakpoints.down("xlg")]: {
            maxWidth: "16vw",
            maxHeight: "16vw",
          },
          [theme.breakpoints.down("sm")]: {
            maxWidth: "42vw",
            maxHeight: "42vw",
            m: "auto 2vw",
          },
        }}
      />
      <CardContent
        sx={{
          flex: "0 1 auto",
          p: "0px",
          [theme.breakpoints.down("xlg")]: {
            maxWidth: "15.6vw",
            maxHeight: "15.6vw",
          },
          [theme.breakpoints.down("sm")]: {
            p: "5px 0px",
          },
        }}
      >
        <Typography
          gutterBottom
          variant="h4"
          color="primary.contrastText"
          sx={{
            m: "0px",
            fontFamily: "Maven Pro, sans-serif",
            letterSpacing: "2px",
            [theme.breakpoints.down("xlg")]: {
              fontSize: "3.33vw",
              letterSpacing: "0.2vw",
            },
            [theme.breakpoints.down("sm")]: {
              fontSize: "10vw",
              letterSpacing: "0.6vw",
              mt: "0.5vw",
            },
          }}
        >
          {name}
        </Typography>
        <Typography
          variant="h6"
          color="primary.contrastText"
          sx={{
            width: "min-content",
            lineHeight: "24px",
            fontWeight: "400",
            fontFamily: "Maven Pro, sans-serif",
            letterSpacing: "2px",
            [theme.breakpoints.down("xlg")]: {
              fontSize: "2vw",
              letterSpacing: "0.2vw",
              lineHeight: "2.4vw",
            },
            [theme.breakpoints.down("sm")]: {
              fontSize: "6vw",
              letterSpacing: "0.6vw",
              lineHeight: "7.2vw",
            },
          }}
        >
          {info}
        </Typography>
      </CardContent>
    </Paper>
  );
};
