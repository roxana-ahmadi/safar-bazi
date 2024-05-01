"use client";

import { StoreProvider } from "../StoreProvider/StoreProvider";
import { IAppWrapper } from "./types";
import { ConfigProvider } from "antd";

export default function AppWrapper({ children }: IAppWrapper) {
  return (
    <StoreProvider>
      <ConfigProvider direction="rtl">{children}</ConfigProvider>
    </StoreProvider>
  );
}
