"use client";

import { Table } from "antd";
import { IProductsTableProps } from "./types";
import { tableColumns } from "./utils";
import { useAppDispatch, useAppSelector, useAppStore } from "@/src/hooks/redux";
import { useRef } from "react";
import { setProductData } from "@/src/store/slices/products";

export default function ProductsTable({ data }: IProductsTableProps) {
  // Initialize the store with the product information
  const store = useAppStore();
  const initialized = useRef(false);
  if (!initialized.current) {
    store.dispatch(setProductData(data));
    initialized.current = true;
  }
  const productsState = useAppSelector(state => state.products);
  const dispatch = useAppDispatch();

  return <Table dataSource={productsState.data} columns={tableColumns} />;
}
