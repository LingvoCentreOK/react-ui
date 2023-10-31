import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Position = {
  x: number;
  y: number;
};

type InitialState = {
  position: Position;
  isTextVisible: boolean;
};

const initialState: InitialState = {
  position: { x: 0, y: 0 },
  isTextVisible: false,
};

const rootSlice = createSlice({
  name: "app",
  initialState: initialState,
  reducers: {
    setIsTextVisible(state, action: PayloadAction<boolean>) {
      state.isTextVisible = action.payload;
    },
    setPosition(state, action: PayloadAction<Position>) {
      state.position = action.payload;
    },
  },
});

export const { setIsTextVisible, setPosition } = rootSlice.actions;
export default rootSlice.reducer;
