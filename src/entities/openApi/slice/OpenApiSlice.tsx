import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type ObjectProps } from "@/entities/openApi";

type OpenApiState = {
  components: ObjectProps | null;
  paths: ObjectProps | null;
  name: string;
  other: {
    [key: string]: ObjectProps;
  };
  selectedFile: string | null;
};

const initialState: OpenApiState = {
  components: null,
  paths: null,
  name: "",
  other: {},
  selectedFile: null,
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
        name: string;
        other: {
          [key: string]: ObjectProps;
        };
        selectedFile: string | null;
      }>
    ) {
      state.components = action.payload.components;
      state.paths = action.payload.paths;
      state.name = action.payload.name;
      state.other = action.payload.other;
      state.selectedFile = action.payload.selectedFile;
      console.log(state.selectedFile);
    },
    selectFile(state, action: PayloadAction<string>) {
      state.selectedFile = action.payload;
      console.log(state.selectedFile);
    },
  },
});

export const selectOpenApi = (state: { openApi: OpenApiState }) =>
  state.openApi;

export const { setOpenApiData } = openApiSlice.actions;
export const openApiReducer = openApiSlice.reducer;

export const { selectFile } = openApiSlice.actions;
