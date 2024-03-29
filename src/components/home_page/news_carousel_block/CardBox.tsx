import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Card, CardContent, Typography, useTheme } from "@mui/material";
import { OneNewsProps } from "../../../types";
import { SeparateNewsStylesProps } from "../../../types";

const CardBox: React.FC<{
  oneNews: OneNewsProps;
  styles: SeparateNewsStylesProps;
  setTreeDotsStyle: boolean;
  showPointer: boolean;
  treeDotsStyle: object;
  isCardDesign?: boolean;
  onCardClickReaction?: boolean;
}> = ({
  oneNews,
  styles,
  setTreeDotsStyle,
  showPointer,
  treeDotsStyle,
  isCardDesign,
  onCardClickReaction,
}) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [counter, setCounter] = useState<number>(0);
  const handleCardClick = (onCardClickReaction: boolean | undefined): void => {
    if (counter < 1 && showPointer && onCardClickReaction) {
      setCounter(counter + 1);
      navigate(`/news-page/${oneNews.id}`);
    }
  };

  useEffect(() => {
    if (window.location.pathname !== "/news-page") {
      setCounter(0);
    }
  }, []);

  const timeInformation = "Дата публікації новини: ";

  return (
    <Box
      sx={{
        mb: "2px",
        [theme.breakpoints.down("xlg")]: {
          lineHeight: "16px",
        },
        [theme.breakpoints.down("sm")]: {
          lineHeight: "10px",
        },
      }}
    >
      <Card
        variant={isCardDesign ? "elevation" : "outlined"}
        elevation={isCardDesign ? 2 : 0}
        onClick={() => {
          handleCardClick(onCardClickReaction);
        }}
        sx={{
          backgroundColor: "#00000000",
          border: "none",
          cursor: showPointer && onCardClickReaction ? "pointer" : "default",
        }}
      >
        <CardContent
          onClick={() => {
            handleCardClick(!onCardClickReaction);
          }}
          sx={{
            padding: "0px",
            "&:last-child": { pb: 0.4 },
            display: "inline",
            maxHeight: "4px",
            cursor: showPointer ? "pointer" : "default",
          }}
        >
          <Typography
            variant="inherit"
            color="primary.contrastText"
            sx={{
              display: "inline",
              fontSize: "14px",
              margin: "0",
              ...(setTreeDotsStyle
                ? {
                    width: "60%",
                    ...treeDotsStyle,
                  }
                : {}),
              [theme.breakpoints.down("xlg")]: {
                ...styles.dateStyles.xlgBreakpoints,
              },
              [theme.breakpoints.down("sm")]: {
                ...styles.dateStyles.smBreakpoints,
              },
            }}
          >
            <b>{timeInformation}</b>
            {new Date(oneNews.time * 1000).toLocaleString()}
          </Typography>
          <br />
          <Typography
            variant="h6"
            color="primary.contrastText"
            component="i"
            sx={{
              display: "inline",
              ...(setTreeDotsStyle
                ? {
                    width: "70%",
                    ...treeDotsStyle,
                  }
                : {}),
              [theme.breakpoints.down("xlg")]: {
                ...styles.newsStyles.xlgBreakpoints,
              },
              [theme.breakpoints.down("sm")]: {
                ...styles.newsStyles.smBreakpoints,
              },
            }}
          >
            {oneNews.title}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CardBox;
