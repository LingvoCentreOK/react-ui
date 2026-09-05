import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  BreakpointStyles,
  CardBoxFontStylesProps,
  ComponentsTitles,
  OneNewsProps,
  TeamMemberProps,
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

export const teamMembers: TeamMemberProps[] = [
  {
    id: "0",
    name: "Ольга",
    info: "Викладач англійської мови, магістр",
    image: imgCarousel1,
  },
  {
    id: "1",
    name: "Хельга",
    info: "Викладач дацької мови, бакалавр",
    image: img1,
  },
  {
    id: "2",
    name: "Ханна",
    info: "Викладач німецької мови, магістр",
    image: img2,
  },
  {
    id: "3",
    name: "Божена",
    info: "Викладач польської мови, бакалавр",
    image: img3,
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
  teamMembersState: TeamMemberProps[];
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
    setTeamMembersState(state, action: PayloadAction<TeamMemberProps[]>) {
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
