import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { useAppSelector } from "../../../hooks";
import "react-multi-carousel/lib/styles.css";
import imgCarousel1 from "../../../assets/images/carousel_block_images/img_carousel_1.jpg";
import img1 from "../../../assets/images/organization_info_block_images/img_1.jpg";
import img2 from "../../../assets/images/organization_info_block_images/img_2.jpg";
import img3 from "../../../assets/images/organization_info_block_images/img_3.jpg";
import TeamMemberItem from "./TeamMemberItem";
import { TeamMemberProps } from "../../../types";
import CarouselBlock from "../../../shared/CarouselBlock";

const TeamCarousel: React.FC = () => {
  const theme = useTheme();
  const componentsTitlesState = useAppSelector(
    (state) => state.reducer.componentsTitlesState
  );

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
          cursor: "default",
          [theme.breakpoints.down("md")]: {
            fontSize: "4.8vw",
          },
          [theme.breakpoints.down("sm")]: {
            fontSize: "9.4vw",
          },
        }}
      >
        {componentsTitlesState.teamCarouselTitle}
      </Typography>
      <CarouselBlock responsiveItems={[1, 2, 2, 3]} isDraggable={true}>
        {teamMembersData &&
          teamMembersData.map(
            (member: TeamMemberProps | null, i): React.JSX.Element | null =>
              member && member.id ? (
                <TeamMemberItem
                  key={i}
                  name={member.name}
                  info={member.info}
                  image={member.image}
                />
              ) : null
          )}
      </CarouselBlock>
    </Box>
  );
};

export default TeamCarousel;
