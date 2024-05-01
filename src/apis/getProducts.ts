import { IProduct } from "../store/slices/types";

export async function getProducts(): Promise<IProduct[] | undefined> {
  const response = await fetch("https://api.escuelajs.co/api/v1/products", { cache: "no-store" });
  if (!response.ok) return undefined;

  return response.json();
}

export async function getProductByTitle(value: string): Promise<IProduct[] | undefined> {
  const response = await fetch("https://api.escuelajs.co/api/v1/products", { cache: "no-store" });
  if (!response.ok) return undefined;

  return response.json();
}
