import { createSlice } from "@reduxjs/toolkit";
import { fetchData } from "../actions/dataActions";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    apidata: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.apidata = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { intialized } = dataSlice.actions;

export default dataSlice.reducer;
