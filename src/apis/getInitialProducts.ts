import { IProduct } from "../store/slices/types";

export async function getInitialProducts(): Promise<IProduct[] | undefined> {
  const response = await fetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=10", { cache: "no-store" });
  if (!response.ok) return undefined;

  return response.json();
}
