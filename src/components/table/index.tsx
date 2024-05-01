"use client";

import React, { useState } from "react";
import { Space, Table, Tag, Input } from "antd";
import type { TableProps } from "antd";
import { ITableData } from "./types";

const ProductTableSearchBox = () => {
  const [searchInput, setSearchInput] = useState("");

  const onSearch = value => {};

  return (
    <div>
      <Input onChange={e => setSearchInput(e.target.value)} placeholder="Basic usage" />;
    </div>
  );
};

const ProductsTable = (tableData: ITableData[]) => {
  const columns: TableProps<ITableData>["columns"] = [
    {
      title: "شناسه",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "تصویر",
      dataIndex: "images",
      key: "images",
      render: (_, { images }) => <>{images[0]}</>,
    },
  ];

  return <Table columns={columns} dataSource={tableData} />;
};

export default ProductsTable;
