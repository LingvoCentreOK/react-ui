import React, { useEffect } from "react";
import { Box, Stack, useTheme, CircularProgress } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { getRepos } from "../../../actions/reposSliceActions";
import CardBox from "./CardBox";
import PaginationButtons from "./NewsCarouselBlock/PaginationButtons";
import { OneNewsProps } from "../../../types";
import GoHomeButton from "./GoHomeButton";

export const NewsPage: React.FC = () => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const { currentPage, perPage, isLoading, newsStoriesArray } = useAppSelector(
    (state) => state.reducer
  );

  const newsPageStyles = useAppSelector(
    (state) => state.reducer.cardBoxFontStylesState.newsPageStyles
  );

  const treeDotsStyleState = useAppSelector(
    (state) => state.reducer.treeDotsStyleState
  );

  useEffect(() => {
    void dispatch(getRepos(currentPage, perPage));
  }, [perPage, currentPage, dispatch]);

  return (
    <Box
      sx={{
        height: "100vh",
        background: "linear-gradient(160deg, #CDA5F3, #A6B8F3)",
        boxSizing: "border-box",
      }}
    >
      <GoHomeButton buttonTitle="Go home" />
      <Box
        sx={{
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          flexDirection: "column",
          overflowY: "hidden",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            height: "90vh",
          }}
        >
          {isLoading && !newsStoriesArray ? (
            <CircularProgress
              sx={{ color: theme.palette.primary.contrastText }}
            />
          ) : (
            <Stack>
              {newsStoriesArray &&
                newsStoriesArray.map(
                  (oneNews: OneNewsProps | null): React.JSX.Element | null => {
                    if (oneNews) {
                      return (
                        <CardBox
                          key={`${oneNews.id}`}
                          oneNews={oneNews}
                          styles={newsPageStyles}
                          setTreeDotsStyle={false}
                          showPointer={true}
                          treeDotsStyle={treeDotsStyleState}
                          isCardDesign={true}
                        />
                      );
                    }
                    return null;
                  }
                )}
              <PaginationButtons />
            </Stack>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default NewsPage;
