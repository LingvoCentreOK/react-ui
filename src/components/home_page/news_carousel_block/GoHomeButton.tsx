import React from "react";
import { Button, useTheme, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const GoHomeButton: React.FC<{ buttonTitle: string }> = ({ buttonTitle }) => {
  const theme = useTheme();

  return (
    <Button
      variant="contained"
      component={Link}
      to="/"
      sx={{ ml: "2vh", mt: "2vh", color: theme.palette.primary.contrastText }}
    >
      <Typography>{buttonTitle}</Typography>
    </Button>
  );
};

export default GoHomeButton;
