"use client";

import { Provider } from "react-redux";
import { IAppWrapper } from "./types";
import { store } from "@/src/store";

export default function AppWrapper({ children }: IAppWrapper) {
  return <Provider store={store}>{children}</Provider>;
}
