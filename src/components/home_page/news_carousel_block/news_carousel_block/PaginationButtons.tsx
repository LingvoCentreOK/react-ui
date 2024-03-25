import React from "react";
import { Box, Pagination, Stack, styled, useTheme } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../../hooks";
import { setCurrentPage } from "../../../../store/rootSlice";

const PaginationButtons: React.FC = () => {
  const { perPage, currentPage, newsStoriesNumbersArray } = useAppSelector(
    (state) => state.reducer
  );
  const pagesNumber = newsStoriesNumbersArray.length / perPage;
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ): void => {
    dispatch(setCurrentPage(page));
  };

  const StyledPagination = styled(Pagination)({
    "& .MuiPaginationItem-root": {
      color: `${theme.palette.primary.contrastText}`,
      borderRadius: "30px",
    },
  });

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Stack mt={2} spacing={1}>
        <StyledPagination
          count={pagesNumber}
          showFirstButton
          showLastButton
          onChange={handlePageChange}
          page={currentPage}
          sx={{
            minWidth: "1px",
            [theme.breakpoints.down("md")]: {
              "& .MuiPaginationItem-root": {
                fontSize: "0.6rem",
                padding: "2px",
                minWidth: "2px",
                height: "14px",
                width: "14px",
              },
              "& .MuiPaginationItem-page.Mui-selected": {
                fontWeight: 600,
              },
              "& .MuiPagination-ul": {
                "& .MuiPaginationItem-ellipsis": {
                  fontSize: "0.6rem",
                },
              },
            },
          }}
        />
      </Stack>
    </Box>
  );
};

export default PaginationButtons;
