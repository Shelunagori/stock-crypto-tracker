import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const dataActions = {
  FETCH_DATA_REQUEST: "FETCH_DATA_REQUEST",
  FETCH_DATA_SUCCESS: "FETCH_DATA_SUCCESS",
  FETCH_DATA_FAILURE: "FETCH_DATA_FAILURE",
  intialized: "DATA_INITIALIZED",
};

export const fetchData = createAsyncThunk("data/fetchData", async () => {
  const response = await axios.get("http://localhost:4000/api/stock/list");
  return response.data;
});
