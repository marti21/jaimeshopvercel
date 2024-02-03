import { getAllProducts } from "@/app/lib/data";
import ShowAllProducts from "@/app/ui/products/ShowAllProducts"

export default async function ListProducts({ queryParam, pageParam }: { queryParam: string, pageParam: number }) {

  const productos = await getAllProducts(queryParam);

  return (
    <ShowAllProducts list={productos}></ShowAllProducts>
  );
}
