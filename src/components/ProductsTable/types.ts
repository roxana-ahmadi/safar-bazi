import { IProduct } from "@/src/store/slices/types";
import { GetProp, TablePaginationConfig, TableProps } from "antd";

export interface IProductsTableProps {
  data: IProduct[];
}

export interface ITableParams {
  pagination?: TablePaginationConfig;
  sortField?: string;
  sortOrder?: string;
  filters?: Parameters<GetProp<TableProps, "onChange">>[1];
}
