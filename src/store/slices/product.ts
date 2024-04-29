import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { IProduct, IProductState } from "./types";
import { AppDispatch } from "..";

const initialState: IProductState = {
  data: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProductData: (state, action: PayloadAction<IProduct[]>) => {
      state.data = action.payload;
    },
  },
});

export const { setProductData } = productSlice.actions;

export const getProducts = () => async (dispatch: AppDispatch) => {
  const response = await axios.get<IProduct[]>("https://api.escuelajs.co/api/v1/products");

  console.log(response);
};

export default productSlice.reducer;
