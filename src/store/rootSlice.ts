import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  isTextVisible: boolean;
};

const initialState: InitialState = {
  isTextVisible: false,
};

const rootSlice = createSlice({
  name: "app",
  initialState: initialState,
  reducers: {
    setIsTextVisible(state, action: PayloadAction<boolean>) {
      state.isTextVisible = action.payload;
    },
  },
});

export const { setIsTextVisible } = rootSlice.actions;
export default rootSlice.reducer;
