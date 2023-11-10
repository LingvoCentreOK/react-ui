import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useAppDispatch } from "../../hooks";
import { setIsTextVisible } from "../../store/rootSlice";
import { ParallaxLogo } from "./ParallaxLogo";

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
          overflow: "hidden",
        }}
      >
        <ParallaxLogo></ParallaxLogo>
        <Button
          variant="outlined"
          size="large"
          href="news-page"
          sx={{
            position: "absolute",
            top: "60%",
            color: "primary.contrastText",
            fontSize: "28px",
            height: "80px",
            width: "440px",
            fontWeight: "600",
            borderWidth: "1px",
            borderColor: "primary.contrastText",
            borderRadius: "100px",
            textTransform: "none",
            "&:hover": {
              border: 0,
              background: "linear-gradient(90deg, #ff8177, #8437fd)",
              color: "primary.contrastText",
            },
          }}
        >
          Зв'язатись з нами
        </Button>
      </Box>
      <Box
        sx={{
          p: "200px 0px",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p>Example second block</p>
      </Box>
    </Box>
  );
};

export default HomePage;
