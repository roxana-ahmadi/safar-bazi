import { IProduct } from "../store/slices/types";

export async function getProducts(): Promise<IProduct[] | undefined> {
  const response = await fetch("https://api.escuelajs.co/api/v1/products", { next: { tags: ["product"] } });
  if (!response.ok) return undefined;

  return response.json();
}
