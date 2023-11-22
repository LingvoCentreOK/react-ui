import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import img1 from "../assets/images/img_1.jpg";
import img2 from "../assets/images/img_2.jpg";

type InitialState = {
  isTextVisible: boolean;
  images: string[];
  isParallaxEnabled: boolean;
};

const initialState: InitialState = {
  isTextVisible: false,
  images: [img1, img2],
  isParallaxEnabled: true,
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
  },
});

export const { setIsTextVisible, setImages, setIsParallaxEnabled } =
  rootSlice.actions;
export default rootSlice.reducer;
