import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  BreakpointStyles,
  CardBoxFontStylesProps,
  ComponentsTitles,
  OneNewsProps,
  TeamMember,
  TreeDotsStyleProps,
} from "../types";
import imgCarousel1 from "../assets/images/carousel_block_images/img_carousel_1.jpg";
import img1 from "../assets/images/organization_info_block_images/img_1.jpg";
import img2 from "../assets/images/organization_info_block_images/img_2.jpg";
import img3 from "../assets/images/organization_info_block_images/img_3.jpg";

export const componentsTitles: ComponentsTitles = {
  homePageTitles: {
    title: "LINGVOCENTRE OK -",
    subtitle: "Ми провадимо якісну мовну освіту",
    buttonTitle: "Зв'язатись з нами",
  },
  organizationInfoBlockInfos: {
    firstInfo:
      "Компанія заснована в 2008 році. За цей час більше 5000 клієнтів залишились задоволені нашими послугами",
    secondInfo:
      "Більше половини із наших клієнтів виїхали і проживають за кордоном зараз",
  },
  teamCarouselTitle: "КОМАНДА",
  achievementBlockTitles: {
    title: "НАШІ ДОСЯГНЕННЯ",
    infos: [
      "10000+ клієнтів",
      "10+ років існування компанії",
      "5 мов",
      "10+ викладачів",
    ],
  },
  newsBlockTitle: "НОВИНИ",
};

export const teamMembers: TeamMember[] = [
  {
    id: "0",
    name: { name1: "Ольга", name2: "Хельга" },
    info: {
      position1: "Викладач англійської мови, магістр",
      position2: "Викладач дацької мови, бакалавр",
    },
    images: { image1: imgCarousel1, image2: img1 },
  },
  {
    id: "1",
    name: { name1: "Хельга", name2: "Ханна" },
    info: {
      position1: "Викладач дацької мови, бакалавр",
      position2: "Викладач німецької мови, магістр",
    },
    images: { image1: img1, image2: img2 },
  },
  {
    id: "2",
    name: { name1: "Ханна", name2: "Агнешка" },
    info: {
      position1: "Викладач німецької мови, магістр",
      position2: "Викладач польської мови, бакалавр",
    },
    images: { image1: img2, image2: img3 },
  },
  {
    id: "3",
    name: { name1: "Агнешка", name2: "Ольга" },
    info: {
      position1: "Викладач польської мови, бакалавр",
      position2: "Викладач англійської мови, магістр",
    },
    images: { image1: img3, image2: imgCarousel1 },
  },
];

const cardBoxFontStyles: CardBoxFontStylesProps = {
  newsBlockStyles: {
    dateStyles: {
      xlgBreakpoints: {
        fontSize: "2vw",
        letterSpacing: "0.2vw",
      } as BreakpointStyles,
      smBreakpoints: {
        fontSize: "4vw",
        letterSpacing: "0.2vw",
      } as BreakpointStyles,
    },
    newsStyles: {
      xlgBreakpoints: {
        fontSize: "3.33vw",
        letterSpacing: "0.2vw",
      } as BreakpointStyles,
      smBreakpoints: {
        fontSize: "6vw",
        letterSpacing: "0vw",
      } as BreakpointStyles,
    },
  },
  newsPageStyles: {
    dateStyles: {
      xlgBreakpoints: {
        fontSize: "1.2vw",
        letterSpacing: "0.1vw",
      } as BreakpointStyles,
      smBreakpoints: {
        fontSize: "1.8vw",
        letterSpacing: "0.1vw",
      } as BreakpointStyles,
    },
    newsStyles: {
      xlgBreakpoints: {
        fontSize: "2vw",
        letterSpacing: "0.1vw",
      } as BreakpointStyles,
      smBreakpoints: {
        fontSize: "2.4vw",
        letterSpacing: "0.1vw",
      } as BreakpointStyles,
    },
  },
  singleCardPageStyles: {
    dateStyles: {
      xlgBreakpoints: {
        fontSize: "2vw",
        letterSpacing: "0.2vw",
      } as BreakpointStyles,
      smBreakpoints: {
        fontSize: "3vw",
        letterSpacing: "0.2vw",
      } as BreakpointStyles,
    },
    newsStyles: {
      xlgBreakpoints: {
        fontSize: "3.33vw",
        letterSpacing: "0.2vw",
      } as BreakpointStyles,
      smBreakpoints: {
        fontSize: "5vw",
        letterSpacing: "0vw",
      } as BreakpointStyles,
    },
  },
};

const treeDotsStyle: TreeDotsStyleProps = {
  display: "inline-block",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
};

type InitialState = {
  currentPage: number;
  perPage: number;
  isLoading: boolean;
  isError: boolean;
  newsStoriesArray: Array<OneNewsProps | null>;
  componentsTitlesState: ComponentsTitles;
  isTextVisible: boolean;
  images: string[];
  isParallaxEnabled: boolean;
  teamMembersState: TeamMember[];
  newsStoriesNumbersArray: Array<object>;
  newsData: object;
  cardBoxFontStylesState: CardBoxFontStylesProps;
  treeDotsStyleState: TreeDotsStyleProps;
};

const initialState: InitialState = {
  currentPage: 1,
  perPage: 10,
  isLoading: true,
  isError: false,
  newsStoriesArray: [],
  componentsTitlesState: componentsTitles,
  isTextVisible: false,
  images: [img1, img2],
  isParallaxEnabled: true,
  teamMembersState: teamMembers,
  newsStoriesNumbersArray: [],
  newsData: {},
  cardBoxFontStylesState: cardBoxFontStyles,
  treeDotsStyleState: treeDotsStyle,
};

const rootSlice = createSlice({
  name: "app",
  initialState: initialState,
  reducers: {
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setIsError(state, action: PayloadAction<boolean>) {
      state.isError = action.payload;
    },
    setNewsStoriesArray(state, action) {
      state.newsStoriesArray = action.payload;
      state.isLoading = false;
    },
    setIsTextVisible(state, action: PayloadAction<boolean>) {
      state.isTextVisible = action.payload;
    },
    setImages(state, action: PayloadAction<string[]>) {
      state.images = action.payload;
    },
    setIsParallaxEnabled(state, action: PayloadAction<boolean>) {
      state.isParallaxEnabled = action.payload;
    },
    setTeamMembersState(state, action: PayloadAction<TeamMember[]>) {
      state.teamMembersState = action.payload;
    },
    setNewsStoriesNumbersArray(state, action) {
      state.newsStoriesNumbersArray = action.payload;
      state.isLoading = false;
    },
    setNewsData(state, action) {
      state.newsData = action.payload;
      state.isLoading = false;
    },
  },
});

export const {
  setCurrentPage,
  setIsLoading,
  setIsError,
  setNewsStoriesArray,
  setIsTextVisible,
  setImages,
  setIsParallaxEnabled,
  setTeamMembersState,
  setNewsStoriesNumbersArray,
  setNewsData,
} = rootSlice.actions;
export default rootSlice.reducer;
