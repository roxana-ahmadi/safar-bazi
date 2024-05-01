import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { IGetProductsParams, IProduct, IProductState } from "./types";
import { AppDispatch } from "..";

const initialState: IProductState = {
  data: [],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProductData: (state, action: PayloadAction<IProduct[]>) => {
      state.data = action.payload;
    },
  },
});

export const { setProductData } = productSlice.actions;

export const getProducts =
  ({ creationAtMax, creationAtMin, limit, offset, title }: IGetProductsParams) =>
  async (dispatch: AppDispatch) => {
    const { data } = await axios.get<IProduct[]>("https://api.escuelajs.co/api/v1/products", {
      params: {
        title,
        offset,
        limit,
        creationAt_min: creationAtMin?.toISOString(),
        creationAt_max: creationAtMax?.toISOString(),
      },
    });

    dispatch(setProductData(data));
  };

export default productSlice.reducer;
