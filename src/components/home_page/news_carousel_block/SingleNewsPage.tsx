import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, useTheme, CircularProgress } from "@mui/material";
import { useAppSelector } from "../../../hooks";
import CardBox from "./CardBox";
import axios from "axios";
import { OneNewsProps } from "../../../types";
import GoHomeButton from "./GoHomeButton";

const SingleNewsPage: React.FC = () => {
  const { newsId } = useParams();
  const theme = useTheme();

  const singleCardPageStyles = useAppSelector(
    (state) => state.reducer.cardBoxFontStylesState.singleCardPageStyles
  );
  const treeDotsStyleState = useAppSelector(
    (state) => state.reducer.treeDotsStyleState
  );

  const [newsData, setNewsData] = useState<OneNewsProps | null>(null);
  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const response = await axios.get(
          `https://hacker-news.firebaseio.com/v0/item/${newsId}.json`
        );
        setNewsData(response.data);
      } catch (error) {
        console.error("An error occurred while receiving data:", error);
      }
    };

    void fetchData();
  }, [newsId]);

  return (
    <Box
      sx={{
        height: "100vh",
        background: "linear-gradient(160deg, #CDA5F3, #A6B8F3)",
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      <GoHomeButton buttonTitle="Go home" />
      <Box
        sx={{
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            height: "90vh",
          }}
        >
          {!newsData ? (
            <CircularProgress
              sx={{ color: theme.palette.primary.contrastText }}
            />
          ) : (
            <CardBox
              oneNews={newsData}
              styles={singleCardPageStyles}
              setTreeDotsStyle={false}
              showPointer={false}
              treeDotsStyle={treeDotsStyleState}
            />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default SingleNewsPage;
