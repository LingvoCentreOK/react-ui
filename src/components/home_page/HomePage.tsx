import React, { useEffect } from "react";
import Box from "@mui/material/Box";
//import Button from "@mui/material/Button";
import { useAppDispatch } from "../../hooks";
import { setIsTextVisible } from "../../store/rootSlice";
import ParallaxLogo from "./ParallaxLogo";
import OrganizationInfoBlock from "./OrganizationInfoBlock";
import TeamCarousel from "./team_carousel/TeamCarousel";
import AchievementBlock from "./AchievementBlock";
import NewsCarouselBlock from "./news_carousel_block/NewsCarouselBlock/NewsCarouselBlock";
import ContactUsButton from "./ContactUsButton";
import AvailableLanguagesBlock from "./AvailableLanguagesBlock/AvailableLanguagesBlock";

const HomePage: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch(setIsTextVisible(true));
    }, 50);
    return () => clearTimeout(timeout);
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
        <ParallaxLogo />
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
