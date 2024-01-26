import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { useAppSelector } from "../../../hooks";
import Carousel, { ResponsiveType } from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import imgCarousel1 from "../../../assets/images/carousel_block_images/img_carousel_1.jpg";
import img1 from "../../../assets/images/organization_info_block_images/img_1.jpg";
import img2 from "../../../assets/images/organization_info_block_images/img_2.jpg";
import img3 from "../../../assets/images/organization_info_block_images/img_3.jpg";
import CustomArrow from "./CustomArrow";
import previousArrowIcon from "../../../assets/icons/team_carousel_icons/previous_arrow_icon.png";
import nextArrowIcon from "../../../assets/icons/team_carousel_icons/next_arrow_icon.png";
import TeamMemberItem from "./TeamMemberItem";
import { TeamCarouselProps, TeamMemberProps } from "../../../types";

const TeamCarousel: React.FC<TeamCarouselProps> = ({ deviceType }) => {
  const theme = useTheme();
  const componentsTitlesState = useAppSelector(
    (state) => state.reducer.componentsTitlesState
  );
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

  const teamMembersData: TeamMemberProps[] = [
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
        {componentsTitlesState.teamCarouselTitle}
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
