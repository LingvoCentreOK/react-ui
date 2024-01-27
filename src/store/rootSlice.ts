import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import imgCarousel1 from "../assets/images/carousel_block_images/img_carousel_1.jpg";
import img1 from "../assets/images/organization_info_block_images/img_1.jpg";
import img2 from "../assets/images/organization_info_block_images/img_2.jpg";
import img3 from "../assets/images/organization_info_block_images/img_3.jpg";

export type ComponentsTitles = {
  homePageTitles: {
    title: string;
    subtitle: string;
    buttonTitle: string;
  };
  organizationInfoBlockInfos: {
    firstInfo: string;
    secondInfo: string;
  };
  teamCarouselTitle: string;
  achievementBlockTitles: {
    title: string;
    infos: string[];
  };
};

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
};

export type TeamMember = {
  id: string;
  name: { name1: string; name2?: string | undefined };
  info: {
    position1: string;
    position2?: string | undefined;
  };
  images: { image1: string; image2?: string | undefined };
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

type InitialState = {
  componentsTitlesState: ComponentsTitles;
  isTextVisible: boolean;
  images: string[];
  isParallaxEnabled: boolean;
  teamMembersState: TeamMember[];
};

const initialState: InitialState = {
  componentsTitlesState: componentsTitles,
  isTextVisible: false,
  images: [img1, img2],
  isParallaxEnabled: true,
  teamMembersState: teamMembers,
};

const rootSlice = createSlice({
  name: "app",
  initialState: initialState,
  reducers: {
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
  },
});

export const {
  setIsTextVisible,
  setImages,
  setIsParallaxEnabled,
  setTeamMembersState,
} = rootSlice.actions;
export default rootSlice.reducer;
