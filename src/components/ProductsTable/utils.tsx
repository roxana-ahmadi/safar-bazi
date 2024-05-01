import { IProduct } from "@/src/store/slices/types";
import { ColumnsType } from "antd/es/table";
import { ITableParams } from "./types";

export const tableColumns: ColumnsType<IProduct> = [
  {
    title: "شناسه",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "تصویر",
    dataIndex: "images",
    key: "images",
    render: (images: string[], record) => {
      let firstImageItem = images[0];
      firstImageItem = firstImageItem.replaceAll("[", "").replaceAll("]", "").replaceAll('"', "");

      return <img alt={record.title} src={firstImageItem} width={40} height={40} />;
    },
  },
  {
    title: "عنوان",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "موجودی",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "توضیحات",
    dataIndex: "description",
    key: "description",
  },
  {
    title: "تاریخ ایجاد",
    dataIndex: "creationAt",
    key: "creationAt",
    render: (creationAt?: string) => {
      return creationAt && new Date(creationAt).toLocaleDateString();
    },
  },
  {
    title: "دسته بندی",
    dataIndex: "category",
    key: "category",
    render: (category, record) => {
      return category.name;
    },
  },
];

export const getRandomuserParams = (params: ITableParams) => ({
  results: params.pagination?.pageSize,
  page: params.pagination?.current,
  ...params,
});
