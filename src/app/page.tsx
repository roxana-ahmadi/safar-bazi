import { Suspense } from "react";
import { getProducts } from "../apis/getProducts";
import HomePageTable from "../components/HomePageTable";

export default async function Home() {
  const productsPromise = getProducts();

  return (
    <main>
      <Suspense fallback>
        <HomePageTable promise={productsPromise} />
      </Suspense>
    </main>
  );
}
