import { configureStore } from '@reduxjs/toolkit';

import reducer from './rootSlice';

const store = configureStore({
   reducer: {
      reducer: reducer,
   },
});

export default store;

export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatchType = typeof store.dispatch;