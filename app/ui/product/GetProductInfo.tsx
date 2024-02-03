import { getProductWithId } from "@/app/lib/data";
import ShowProductInfo from "./ShowProductInfo";

interface Producto {
    Id: number;
    Name: string;
    Price: number;
}

export default async function GetProductInfo({ productId }: { productId: string }) {

    const product: Producto[] = await getProductWithId(productId);

  return (
    <ShowProductInfo product={product}></ShowProductInfo>
  );
}
