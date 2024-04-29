import { Suspense } from "react";
import { getProducts } from "../apis/getProducts";

export default async function Home() {
  const productsPromise = getProducts();

  return (
    <main>
      <Suspense fallback>
        {/* <ProductsTable promise={productsPromise} />
        {products.map(product => (
          <div key={product.id}>{product.title}</div>
        ))} */}
      </Suspense>
    </main>
  );
}
