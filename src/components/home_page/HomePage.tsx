import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import { useAppDispatch } from "../../hooks";
import { setIsTextVisible } from "../../store/rootSlice";
import ParallaxLogoComponent from "./ParallaxLogoComponent";
import OrganizationInfoBlock from "./OrganizationInfoBlockComponent ";
import TeamCarousel from "./team_carousel/TeamCarousel";
import AchievementBlock from "./AchievementBlock";
import NewsCarouselBlock from "./news_carousel_block/news_carousel_block/NewsCarouselBlock";
import ContactUsButton from "./ContactUsButton";
import AvailableLanguagesBlock from "./available_languages_block/AvailableLanguagesBlock";

const HomePage: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const textVisibleTimeout = setTimeout(() => {
      dispatch(setIsTextVisible(true));
    }, 50);
    return () => clearTimeout(textVisibleTimeout);
  }, [dispatch]);

  return (
    <Box>
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          flexGrow: 1,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(160deg, #CDA5F3, #A6B8F3)",
          opacity: "0.6",
          boxSizing: "border-box",
          overflow: "hidden",
        }}
      >
        <ParallaxLogoComponent />
        <ContactUsButton />
      </Box>
      <OrganizationInfoBlock />
      <TeamCarousel />
      <AchievementBlock />
      <NewsCarouselBlock />
      <AvailableLanguagesBlock />
    </Box>
  );
};

export default HomePage;
