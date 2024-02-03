import NavBar from "@/app/ui/NavBar"
import ListProducts from "@/app/ui/products/ListProducts"
import { Suspense } from "react"
import SkeletonListProducts from "../ui/products/SkeletonListProducts";
import FilterProducts from "../ui/products/FilterProducts";
import SearchProducts from "../ui/products/SearchProducts";
import Product from "../components/Product";

export default function Productos({searchParams}: {searchParams?:{
  query?: string,
  page?: string
}}) {

  const queryParam = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <main className="flex min-h-screen flex-col">
        <NavBar></NavBar>
        <div className="w-full h-[40px] flex items-center justify-center font-semibold text-white" style={{ background: "#c48330" }}>
          ENVÍOS GRATIS EN 24/48 HORAS 🚚
        </div>

        <div className="w-full h-fit p-12 pl-4 mb-4 flex justify-center">
            <div className="sm:w-[90%] md:w-[90%] lg:w-[80%] xl:w-[80%] 2xl:w-[60%] w-[80%] h-full text-5xl font-bold mt-10 flex flex-col flex-wrap	gap-16 items-start">
                <span>Productos</span>
                <div className="flex flex-row flex-wrap gap-4 items-center w-full">
                  <span className="text-sm font-medium">Ordenar por: </span>
                  <FilterProducts></FilterProducts>
                  <SearchProducts></SearchProducts>
                </div>
            </div>
        </div>

        <div className="w-full flex items-center justify-center">
            <div className="sm:w-[90%] md:w-[90%] lg:w-[80%] xl:w-[80%] 2xl:w-[60%] w-[80%]">
              <Suspense key={queryParam} fallback={<SkeletonListProducts></SkeletonListProducts>}>
                <ListProducts queryParam={queryParam} pageParam={currentPage}></ListProducts>
              </Suspense>
            </div>
        </div>
    </main>
  );
}
