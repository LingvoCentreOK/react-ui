import React from "react";
import Button from "@mui/material/Button";
import { useAppSelector } from "../../hooks";
import { useTheme } from "@mui/material";

const ContactUsButton: React.FC = () => {
  const componentsTitlesState = useAppSelector(
    (state) => state.reducer.componentsTitlesState
  );
  const theme = useTheme();

  return (
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
        [theme.breakpoints.down("md")]: {
          width: "380px",
        },
        [theme.breakpoints.down("xmd")]: {
          width: "340px",
        },
      }}
    >
      {componentsTitlesState.homePageTitles.buttonTitle}
    </Button>
  );
};

export default ContactUsButton;
