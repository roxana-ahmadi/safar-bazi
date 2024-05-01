import { Suspense } from "react";
import { getInitialProducts } from "../apis/getInitialProducts";
import HomePageTable from "../components/HomePageTable";

export default async function Home() {
  const productsPromise = getInitialProducts();

  return (
    <main>
      <Suspense fallback>
        <HomePageTable promise={productsPromise} />
      </Suspense>
    </main>
  );
}
