import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiGet, ApiPost } from "../../Helpers/Api/ApiData";
const axios = require("axios").default;

export const getMutualz = createAsyncThunk("getAPI", async () => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/users`
  );
  console.log("response", response);
  return response.data;
});

export const postMutualz = createAsyncThunk("postAPI", async (payload) => {
  console.log("payload", payload);
  const response1 = await ApiPost(`create-mutualz`, payload);
  console.log("response1", response1);
  return response1.data.data;
});

const initialState = {
  Data: [],
  userData: [],
};
export const MutualzpostReducer = createSlice({
  name: "FormData",
  initialState,
  extraReducers: {
    // handleAddData: async (state, action) => {
    //   await ApiPost(`create-mutualz`, action.payload)
    //     .then((res) => {
    //       if (res?.status === 200) {
    //         console.log("ress", res);
    //       }
    //     })
    //     .catch((err) => {
    //       console.log("err", err);
    //     });
    // //   state.Data = action.payload;
    // },
    [getMutualz.fulfilled]: (state, action) => {
      console.log("action++++++", action);
      state.Data = [...state?.Data, ...action.payload];
      // return [action.payload];
    },
    [postMutualz.fulfilled]: (state, action) => {
      console.log("action++++++", action);
      state.userData = [...state?.userData, action.payload];
      // return [action.payload];
    },
  },
});
export const { handleAddData } = MutualzpostReducer.actions;
export default MutualzpostReducer.reducer;
