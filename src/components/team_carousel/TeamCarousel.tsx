import React from "react";
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
import imgCarousel1 from "../../assets/images/carousel_block_images/img_carousel_1.jpg";
import img2 from "../../assets/images/img_2.jpg";
import img3 from "../../assets/images/img_3.jpg";
import img4 from "../../assets/images/img_4.jpg";

type TeamMember = {
  id: string;
  name: { name1: string; name2: string };
  info: {
    position1: string;
    position2: string;
  };
  images: { image1: string; image2: string };
};

const TeamCarousel: React.FC = () => {
  const theme = useTheme();
  const teamMembers: TeamMember[] = [
    {
      id: "0",
      name: { name1: "Ольга", name2: "Хельга" },
      info: {
        position1: "Викладач англійської мови, магістр",
        position2: "Викладач дацької мови, бакалавр",
      },
      images: { image1: imgCarousel1, image2: img2 },
    },
    {
      id: "1",
      name: { name1: "Хельга", name2: "Катерина" },
      info: {
        position1: "Викладач дацької мови, бакалавр",
        position2: "Викладач німецької мови, магістр",
      },
      images: { image1: img2, image2: img3 },
    },
    {
      id: "2",
      name: { name1: "Катерина", name2: "Агнешка" },
      info: {
        position1: "Викладач німецької мови, магістр",
        position2: "Викладач польської мови, бакалавр",
      },
      images: { image1: img3, image2: img4 },
    },
    {
      id: "3",
      name: { name1: "Агнешка", name2: "Ольга" },
      info: {
        position1: "Викладач польської мови, бакалавр",
        position2: "Викладач англійської мови, магістр",
      },
      images: { image1: img4, image2: imgCarousel1 },
    },
  ];

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
        animation="slide"
        interval={5000}
        duration={1000}
        indicators={true}
        stopAutoPlayOnHover={true}
        navButtonsAlwaysVisible={true}
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
        {teamMembers.map((member, i) => (
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
  name: { name1: string; name2: string };
  info: { position1: string; position2: string };
  images: { image1: string; image2: string };
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
        [theme.breakpoints.down("md")]: {
          m: "0 13%",
        },
      }}
    >
      <TeamMemberCard
        name={name.name1}
        info={info.position1}
        image={images.image1}
      />
      <TeamMemberCard
        name={name.name2}
        info={info.position2}
        image={images.image2}
      />
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
      elevation={0}
      sx={{
        display: "flex",
        width: "350px",
        backgroundColor: "#00000000",
        mt: "70px",
        [theme.breakpoints.down("xlg")]: {
          mt: "7vw",
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
          mr: "20px",
          [theme.breakpoints.down("xlg")]: {
            maxWidth: "15.6vw",
            maxHeight: "15.6vw",
            mr: "2vw",
          },
        }}
      />
      <CardContent sx={{ flex: "0 1 auto", p: "0px" }}>
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
          }}
        >
          {info}
        </Typography>
      </CardContent>
    </Paper>
  );
};
