import { IProduct } from "@/src/store/slices/types";

export interface IHomePageTableProps {
  promise: Promise<IProduct[] | undefined>;
}
