import { configureStore } from "@reduxjs/toolkit";
import { openApiReducer } from "@/entities/openApi";

export const store = configureStore({
  reducer: {
    openApi: openApiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;