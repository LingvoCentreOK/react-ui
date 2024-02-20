import {
  setIsLoading,
  setIsError,
  setNewsStoriesNumbersArray,
  setNewsStoriesArray,
} from "../store/rootSlice";
import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";

export function getRepos(currentPage: number, perPage: number) {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(setIsLoading(true));
      const newStoriesNumbersResponse = await axios.get(
        `https://hacker-news.firebaseio.com/v0/newstories.json?sort=desc`
      );
      dispatch(setNewsStoriesNumbersArray(newStoriesNumbersResponse.data));

      const startPaginationPageIndex = (currentPage - 1) * perPage;
      const endPaginationPageIndex = startPaginationPageIndex + perPage;

      const storiesArray = await newStoriesNumbersResponse.data
        .slice(startPaginationPageIndex, endPaginationPageIndex)
        .map((storiesNumber: Promise<[]>) =>
          axios.get(
            `https://hacker-news.firebaseio.com/v0/item/${storiesNumber}.json`
          )
        );

      let newsArray = await Promise.all(storiesArray);
      newsArray = newsArray.map((news) => news.data);
      dispatch(setNewsStoriesArray(newsArray));
    } catch (error) {
      dispatch(setIsError(true));
      dispatch(setIsLoading(false));
      setTimeout(() => {
        dispatch(setIsError(false));
      }, 2000);
    }
  };
}
