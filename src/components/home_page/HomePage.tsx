import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import { useLocation } from "react-router-dom";
import { scrollToSection } from "../../shared/scrollToSection";
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
  const location = useLocation();

  useEffect(() => {
    const textVisibleTimeout = setTimeout(() => {
      dispatch(setIsTextVisible(true));
    }, 50);
    return () => clearTimeout(textVisibleTimeout);
  }, [dispatch]);

  useEffect(() => {
    const scrollTo = (location.state as { scrollTo?: string } | null)?.scrollTo;
    if (!scrollTo) return;
    const scrollTimeout = setTimeout(() => {
      scrollToSection(scrollTo);
    }, 150);
    return () => clearTimeout(scrollTimeout);
  }, [location.state]);

  return (
    <Box>
      <Box
        id="home"
        sx={{
          height: "100vh",
          display: "flex",
          flexGrow: 1,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(160deg, #CDA5F3, #A6B8F3)",
          boxSizing: "border-box",
          overflow: "hidden",
        }}
      >
        <ParallaxLogoComponent />
        <ContactUsButton />
      </Box>
      <Box id="about" sx={{ scrollMarginTop: "70px" }}>
        <OrganizationInfoBlock />
      </Box>
      <Box id="team" sx={{ scrollMarginTop: "70px" }}>
        <TeamCarousel />
      </Box>
      <Box id="achievements" sx={{ scrollMarginTop: "70px" }}>
        <AchievementBlock />
      </Box>
      <Box id="news" sx={{ scrollMarginTop: "70px" }}>
        <NewsCarouselBlock />
      </Box>
      <Box id="languages" sx={{ scrollMarginTop: "70px" }}>
        <AvailableLanguagesBlock />
      </Box>
    </Box>
  );
};

export default HomePage;
