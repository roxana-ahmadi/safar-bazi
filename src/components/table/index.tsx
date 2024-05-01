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
    // {
    //   title: "Address",
    //   dataIndex: "address",
    //   key: "address",
    // },
    // {
    //   title: "Tags",
    //   key: "tags",
    //   dataIndex: "tags",
    //   render: (_, { tags }) => (
    //     <>
    //       {tags.map(tag => {
    //         let color = tag.length > 5 ? "geekblue" : "green";
    //         if (tag === "loser") {
    //           color = "volcano";
    //         }
    //         return (
    //           <Tag color={color} key={tag}>
    //             {tag.toUpperCase()}
    //           </Tag>
    //         );
    //       })}
    //     </>
    //   ),
    // },
    // {
    //   title: "Action",
    //   key: "action",
    //   render: (_, record) => (
    //     <Space size="middle">
    //       <a>Invite {record.name}</a>
    //       <a>Delete</a>
    //     </Space>
    //   ),
    // },
  ];

  return <Table columns={columns} dataSource={tableData} />;
};

export default ProductsTable;
