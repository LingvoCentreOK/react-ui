import React from "react";
import Carousel, { ResponsiveType } from "react-multi-carousel";
import { Box, useTheme } from "@mui/material";
import "react-multi-carousel/lib/styles.css";
import CustomArrow from "./CustomArrow";
import previousArrowIcon from "../assets/icons/team_carousel_icons/previous_arrow_icon.png";
import nextArrowIcon from "../assets/icons/team_carousel_icons/next_arrow_icon.png";
import { CarouselProps } from "../types";

const CarouselBlock: React.FC<CarouselProps> = ({
  deviceType,
  responsiveItems,
  children,
}) => {
  const theme = useTheme();
  const responsive: ResponsiveType = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3001 },
      items: responsiveItems[4],
      slidesToSlide: responsiveItems[4],
    },
    desktop: {
      breakpoint: { max: 3000, min: 1025 },
      items: responsiveItems[2],
      slidesToSlide: responsiveItems[2],
    },
    tablet: {
      breakpoint: { max: 1024, min: 430 },
      items: responsiveItems[1],
      slidesToSlide: responsiveItems[1],
    },
    mobile: {
      breakpoint: { max: 429, min: 0 },
      items: responsiveItems[0],
      slidesToSlide: responsiveItems[0],
    },
  };
  return (
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
          {children}
        </Carousel>
      </Box>
    </Box>
  );
};

export default CarouselBlock;
