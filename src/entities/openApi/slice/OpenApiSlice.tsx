import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type ObjectProps } from "@/entities/openApi";

type OpenApiState = {
  components: ObjectProps | null;
  paths: ObjectProps | null;
  other: {
    [key: string]: ObjectProps;
  };
};

const initialState: OpenApiState = {
  components: null,
  paths: null,
  other: {},
};

const openApiSlice = createSlice({
  name: "openApi",
  initialState,
  reducers: {
    setOpenApiData(
      state,
      action: PayloadAction<{
        components: ObjectProps;
        paths: ObjectProps;
        other: {
          [key: string]: ObjectProps;
        };
      }>
    ) {
      state.components = action.payload.components;
      state.paths = action.payload.paths;
      state.other = action.payload.other;
    },
  },
});

export const { setOpenApiData } = openApiSlice.actions;
export const openApiReducer = openApiSlice.reducer;
