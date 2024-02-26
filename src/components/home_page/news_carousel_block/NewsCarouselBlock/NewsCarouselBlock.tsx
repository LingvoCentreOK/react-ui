import React, { useEffect } from "react";
import {
  Alert,
  Box,
  CardMedia,
  CircularProgress,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../../hooks";
import { getRepos } from "../../../../actions/reposSliceActions";
import { Link, useRouteError } from "react-router-dom";
import { setCurrentPage } from "../../../../store/rootSlice";
import "react-multi-carousel/lib/styles.css";
import nextArrowIcon from "../../../../assets/icons/team_carousel_icons/next_arrow_icon.png";
import { OneNewsProps } from "../../../../types";
import CardBox from "../CardBox";
import CarouselBlock from "../../../../shared/CarouselBlock";

const NewsCarouselBlock: React.FC = () => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const error: unknown = useRouteError();
  const title = useAppSelector(
    (state) => state.reducer.componentsTitlesState.newsBlockTitle
  );
  const { currentPage, perPage, isLoading, isError, newsStoriesArray } =
    useAppSelector((state) => state.reducer);

  const newsBlockStyles = useAppSelector(
    (state) => state.reducer.cardBoxFontStylesState.newsBlockStyles
  );

  useEffect(() => {
    void dispatch(getRepos(1, perPage));
    dispatch(setCurrentPage(1));
  }, [perPage, currentPage, dispatch]);

  return (
    <Box
      sx={{
        background:
          "linear-gradient(80deg, rgba(134, 116, 170), rgba(134, 116, 170), rgba(134, 116, 170, 0.4))",
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
      <Link
        to="/news-page"
        style={{
          textDecoration: "none",
        }}
      >
        <Box
          sx={{
            display: "flex",
            cursor: "pointer",
            mb: "5vw",
            [theme.breakpoints.down("xl")]: {
              mb: "7vw",
            },
            [theme.breakpoints.down("md")]: {
              mb: "3vw",
            },
          }}
        >
          <Typography
            color="primary.contrastText"
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
              [theme.breakpoints.down("md")]: {
                fontSize: "4.8vw",
              },
              [theme.breakpoints.down("sm")]: {
                fontSize: "9.4vw",
              },
            }}
          >
            {title}
          </Typography>
          <CardMedia
            component="img"
            src={nextArrowIcon}
            alt="Next Arrow"
            sx={{
              maxHeight: "40px",
              borderRadius: "50%",
              margin: "auto",
              ml: "6px",
              [theme.breakpoints.down("xlg")]: {
                maxHeight: "4vw",
              },
              [theme.breakpoints.down("sm")]: {
                maxHeight: "8vw",
              },
            }}
          />
        </Box>
      </Link>
      {isError && (
        <Alert
          severity="error"
          sx={{
            textAlign: "center",
            m: "20vh auto",
          }}
        >
          <Stack direction="column" spacing={2}>
            <Typography variant="h1">Oops!</Typography>
            <Typography variant="h3">
              Sorry, an unexpected error has occurred.
            </Typography>
            <Typography variant="h3">
              <i>
                {(error as Error)?.message ||
                  (error as { data?: string })?.data}
              </i>
            </Typography>
          </Stack>
        </Alert>
      )}
      {isLoading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress
            sx={{ color: theme.palette.primary.contrastText }}
          />
        </Box>
      ) : (
        <CarouselBlock responsiveItems={[1, 2, 3, 3]} isDraggable={false}>
          {newsStoriesArray &&
            newsStoriesArray.map(
              (oneNews: OneNewsProps | null): React.JSX.Element | null => {
                if (oneNews) {
                  return (
                    <CardBox
                      key={`${oneNews.id}`}
                      oneNews={oneNews}
                      styles={newsBlockStyles}
                      setTreeDotsStyle={true}
                      useDoubleClick={true}
                      showPointer={true}
                    />
                  );
                }
                return null;
              }
            )}
        </CarouselBlock>
      )}
    </Box>
  );
};

export default NewsCarouselBlock;
