import ProductsTable from "../ProductsTable";
import { IHomePageTableProps } from "./types";

export default async function HomePageTable({ promise }: IHomePageTableProps) {
  const products = await promise;

  if (!products) return;

  return <ProductsTable data={products} />;
}
