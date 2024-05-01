"use client";

import { Table, TableProps, Input, Button, Modal } from "antd";
import { IProductsTableProps, ITableParams } from "./types";
import { tableColumns } from "./utils";
import { useAppDispatch, useAppSelector, useAppStore } from "@/src/hooks/redux";
import { useEffect, useRef, useState } from "react";
import { setProductData, getProducts } from "@/src/store/slices/products";
import { useDebounce } from "@/src/hooks/useDebounce";
import FilterModal from "../FilterModal";

export default function ProductsTable({ data }: IProductsTableProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [term, setTerm] = useState<string>();
  const [creationAtMin, setCreationAtMin] = useState<Date>();
  const [creationAtMax, setCreationAtMax] = useState<Date>();
  const debounceTerm = useDebounce(term);
  const [loading, setLoading] = useState(false);
  const isMountedRef = useRef(false);
  const store = useAppStore();
  const initialized = useRef(false);
  if (!initialized.current) {
    store.dispatch(setProductData(data));
    initialized.current = true;
  }
  const productsState = useAppSelector(state => state.products);
  const dispatch = useAppDispatch();

  const [tableParams, setTableParams] = useState<ITableParams>({
    pagination: {
      current: 1,
      pageSize: 10,
      total: 100,
    },
  });

  const handleTableChange: TableProps["onChange"] = (pagination, filters, sorter) => {
    setTableParams({
      pagination,
      filters,
      ...sorter,
    });

    // `dataSource` is useless since `pageSize` changed
    // if (pagination.pageSize !== tableParams.pagination?.pageSize) {
    //   setData([]);
    // }
  };

  const fetchData = async () => {
    setLoading(true);

    const limit = tableParams.pagination?.pageSize || 10;
    const offset = ((tableParams.pagination?.current || 1) - 1) * limit;

    await dispatch(getProducts({ title: debounceTerm, limit, offset, creationAtMin, creationAtMax }));

    setLoading(false);
    setTableParams({
      ...tableParams,
      pagination: {
        ...tableParams.pagination,
        total: 100,
      },
    });
  };

  useEffect(() => {
    if (!isMountedRef.current) isMountedRef.current = true;
    else fetchData();
  }, [tableParams.pagination?.current, tableParams.pagination?.pageSize, debounceTerm, creationAtMin, creationAtMax]);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const onFilterModalSubmit = (min: Date, max: Date) => {
    setCreationAtMin(min);
    setCreationAtMax(max);
  };

  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex items-center justify-between gap-4">
        <Input
          className="min-w-32 w-auto"
          placeholder="جستجو..."
          value={term}
          onChange={e => setTerm(e.target.value)}
        />
        <Button onClick={showModal}>فیلتر</Button>
      </div>
      <Table
        dataSource={productsState.data}
        columns={tableColumns}
        onChange={handleTableChange}
        loading={loading}
        pagination={tableParams.pagination}
      />

      <FilterModal onSubmit={onFilterModalSubmit} open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
