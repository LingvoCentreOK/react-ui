import React, { useState, useEffect } from "react";
import {
  Box,
  CardMedia,
  Typography,
  Paper,
  CardContent,
  useTheme,
} from "@mui/material";
import Carousel, { ResponsiveType } from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import imgCarousel1 from "../../assets/images/carousel_block_images/img_carousel_1.jpg";
import img1 from "../../assets/images/img_1.jpg";
import img2 from "../../assets/images/img_2.jpg";
import img3 from "../../assets/images/img_3.jpg";
import previousArrowIcon from "./icons/previous_arrow_icon.png";
import nextArrowIcon from "./icons/next_arrow_icon.png";

interface TeamCarouselProps {
  deviceType?: string;
}

interface TeamMember {
  id?: string;
  name: string;
  info: string;
  image: string;
}

const TeamCarousel: React.FC<TeamCarouselProps> = ({ deviceType }) => {
  const theme = useTheme();
  const responsive: ResponsiveType = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3001 },
      items: 3,
      slidesToSlide: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1025 },
      items: 2,
      slidesToSlide: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 430 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 429, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const teamMembersData: TeamMember[] = [
    {
      id: "0",
      name: "Ольга",
      info: "Викладач англійської мови, магістр",
      image: imgCarousel1,
    },
    {
      id: "1",
      name: "Хельга",
      info: "Викладач дацької мови, бакалавр",
      image: img1,
    },
    {
      id: "2",
      name: "Ханна",
      info: "Викладач німецької мови, магістр",
      image: img2,
    },
    {
      id: "3",
      name: "Божена",
      info: "Викладач польської мови, бакалавр",
      image: img3,
    },
  ];

  interface CustomArrowProps {
    onClick: () => void;
    retreatFromLeftSide: string | null;
    retreatFromRightSide: string | null;
    arrowIcon: string;
  }

  const CustomArrow: React.FC<CustomArrowProps> = ({
    onClick,
    retreatFromLeftSide,
    retreatFromRightSide,
    arrowIcon,
  }) => {
    const theme = useTheme();
    const [isHovered, setIsHovered] = useState(false);

    const arrowStyles = {
      arrowBackgroundPhoneSize: {
        minWidth: "94px",
        minHeight: "94px",
      },
      arrowSize: {
        width: "64px",
        height: "64px",
      },
    };
    const [sizeStyle, setSizeStyle] = useState(arrowStyles);

    useEffect(() => {
      const handleResize = (): void => {
        if (window.innerWidth < theme.breakpoints.values.xl) {
          setSizeStyle({
            arrowBackgroundPhoneSize: {
              minWidth: "64px",
              minHeight: "64px",
            },
            arrowSize: {
              width: "44px",
              height: "44px",
            },
          });
        }
        if (window.innerWidth < theme.breakpoints.values.lg) {
          setSizeStyle({
            arrowBackgroundPhoneSize: {
              minWidth: "54px",
              minHeight: "54px",
            },
            arrowSize: {
              width: "34px",
              height: "34px",
            },
          });
        }
        if (window.innerWidth < theme.breakpoints.values.mlg) {
          setSizeStyle({
            arrowBackgroundPhoneSize: {
              minWidth: "44px",
              minHeight: "44px",
            },
            arrowSize: {
              width: "24px",
              height: "24px",
            },
          });
        }
        if (window.innerWidth >= theme.breakpoints.values.xl) {
          setSizeStyle({
            arrowBackgroundPhoneSize: {
              minWidth: "94px",
              minHeight: "94px",
            },
            arrowSize: {
              width: "64px",
              height: "64px",
            },
          });
        }
      };

      handleResize();

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, [
      theme.breakpoints.values.xl,
      theme.breakpoints.values.lg,
      theme.breakpoints.values.mlg,
    ]);

    return (
      <button
        onClick={() => onClick()}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={
          {
            position: "absolute",
            outline: "0",
            borderRadius: "50%",
            zIndex: "1000",
            background: isHovered ? "rgba(0,0,0,0.9)" : "rgba(0,0,0,0.4)",
            transition: `all 0.5s ${isHovered ? "0.05s" : "0s"}`,
            color: `${theme.palette.primary.contrastText}`,
            left: `${retreatFromLeftSide}`,
            right: `${retreatFromRightSide}`,
            border: "0",
            cursor: "pointer",
            ...sizeStyle.arrowBackgroundPhoneSize,
          } as React.CSSProperties
        }
      >
        <img
          src={arrowIcon}
          alt="Next Arrow"
          style={{
            objectFit: "contain",
            ...sizeStyle.arrowSize,
          }}
        />
      </button>
    );
  };

  return (
    <Box
      sx={{
        background: "linear-gradient(200deg, #8674AA, #8674aa, #8674aa66)",
        p: "87px 5px 78px",
        textAlign: "center",
        display: "flex",
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
          mb: "8vw",
          [theme.breakpoints.down("md")]: {
            fontSize: "4.8vw",
          },
        }}
      >
        НАША КОМАНДА
      </Typography>
      <Box
        sx={{
          display: "inline-block",
          width: "86%",
          maxWidth: "1490px",
          [theme.breakpoints.down("lg")]: {
            width: "86%",
          },
        }}
      >
        <Box
          sx={{
            paddingBottom: "30px",
            position: "relative",
          }}
        >
          <Carousel
            arrows
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            containerClass="container-with-dots"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            showDots
            renderDotsOutside
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            sliderClass=""
            slidesToSlide={1}
            swipeable
            responsive={responsive}
            deviceType={deviceType}
            autoPlay={deviceType !== "mobile" ? true : false}
            removeArrowOnDeviceType={["mobile"]}
            customLeftArrow={
              <CustomArrow
                onClick={function (): void {
                  throw new Error("Function not implemented.");
                }}
                retreatFromLeftSide="0px"
                retreatFromRightSide={null}
                arrowIcon={previousArrowIcon}
              />
            }
            customRightArrow={
              <CustomArrow
                onClick={function (): void {
                  throw new Error("Function not implemented.");
                }}
                retreatFromRightSide="0px"
                retreatFromLeftSide={null}
                arrowIcon={nextArrowIcon}
              />
            }
            customDot={
              <CustomDot
                onClick={function (): void {
                  throw new Error("Function not implemented.");
                }}
                active={false}
                index={0}
                carouselState={undefined}
              />
            }
          >
            {teamMembersData.map((member, i) => (
              <TeamMemberItem
                key={i}
                name={member.name}
                info={member.info}
                image={member.image}
              />
            ))}
          </Carousel>
        </Box>
      </Box>
    </Box>
  );
};

export default TeamCarousel;

const TeamMemberItem: React.FC<TeamMember> = ({ name, info, image }) => {
  return <TeamMemberCard name={name} info={info} image={image} />;
};

const TeamMemberCard: React.FC<TeamMember> = ({ name, info, image }) => {
  const theme = useTheme();

  return (
    <Paper
      elevation={0}
      sx={{
        display: "flex",
        width: "350px",
        backgroundColor: "#00000000",
        p: "0.3vw",
        m: "0 auto",
        ml: "11vw",
        cursor: "pointer",
        [theme.breakpoints.down("lg")]: {
          ml: "8vw",
        },
        [theme.breakpoints.down("lg")]: {
          ml: "7vw",
        },
        [theme.breakpoints.down("mlg")]: {
          ml: "5vw",
        },
        [theme.breakpoints.down("xlg")]: {
          p: "0.5vw",
        },
        [theme.breakpoints.down("sm")]: {
          width: "100%",
          m: "0 auto",
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
            textAlign: "left",
            [theme.breakpoints.down("xlg")]: {
              fontSize: "3.33vw",
              letterSpacing: "0.2vw",
            },
            [theme.breakpoints.down("sm")]: {
              fontSize: "10vw",
              letterSpacing: "0vw",
              mt: "0vw",
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
            textAlign: "left",
            [theme.breakpoints.down("xlg")]: {
              fontSize: "2vw",
              letterSpacing: "0.2vw",
              lineHeight: "2.4vw",
            },
            [theme.breakpoints.down("sm")]: {
              fontSize: "6vw",
              letterSpacing: "0.4vw",
              lineHeight: "6.2vw",
            },
          }}
        >
          {info}
        </Typography>
      </CardContent>
    </Paper>
  );
};

interface CustomDotProps {
  onClick: () => void;
  active: boolean;
  index: number;
  carouselState: any;
}

const CustomDot: React.FC<CustomDotProps> = ({ onClick, active }) => {
  const theme = useTheme();
  const handleClick = (): void => {
    onClick();
  };

  const dotsStyles = {
    padding: "7px",
  };
  const [dotsStyle, setDotsStyle] = useState(dotsStyles);

  useEffect(() => {
    const handleResize = (): void => {
      if (window.innerWidth < theme.breakpoints.values.xl) {
        setDotsStyle({
          padding: "6px",
        });
      }
      if (window.innerWidth < theme.breakpoints.values.lg) {
        setDotsStyle({
          padding: "6px",
        });
      }
      if (window.innerWidth < theme.breakpoints.values.mlg) {
        setDotsStyle({
          padding: "5px",
        });
      }
      if (window.innerWidth < theme.breakpoints.values.xlg) {
        setDotsStyle({
          padding: "4px",
        });
      }
      if (window.innerWidth < theme.breakpoints.values.md) {
        setDotsStyle({
          padding: "3px",
        });
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [
    theme.breakpoints.values.xl,
    theme.breakpoints.values.lg,
    theme.breakpoints.values.mlg,
    theme.breakpoints.values.xlg,
    theme.breakpoints.values.md,
  ]);

  return (
    <button
      style={{
        backgroundColor: active ? "rgba(204,204,204)" : "rgba(0,0,0,0.4)",
        margin: "0 5px",
        ...dotsStyle,
        cursor: "pointer",
        borderRadius: active ? "25%" : "90%",
        display: "inline-block",
        border: active
          ? "1.5px solid rgba(0,0,0,0.6)"
          : "1px solid rgba(255,255,255)",
        boxShadow: "2px 2px 4px #000000",
      }}
      onClick={handleClick}
    />
  );
};
