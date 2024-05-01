import { Action, ThunkAction, combineSlices, configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./slices/products";

const rootReducer = combineSlices(productSlice);
export type RootState = ReturnType<typeof rootReducer>;

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ThunkReturnType = void> = ThunkAction<ThunkReturnType, RootState, unknown, Action>;
