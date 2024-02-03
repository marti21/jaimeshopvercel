import Product from "@/app/components/Product";
import NavBar from "@/app/ui/NavBar"
import GetProductInfo from "@/app/ui/product/GetProductInfo";
import { useRouter } from "next/navigation";
import { Suspense } from "react";

export default function Producto({params} : {params:any}) {
  
  const productId = params.productId;

  return (
    <main className="flex min-h-screen flex-col">
      <NavBar></NavBar>
        <div className="w-full h-[40px] flex items-center justify-center font-semibold text-white" style={{ background: "#c48330" }}>
          ENVÍOS GRATIS EN 24/48 HORAS 🚚
        </div>

      <Suspense fallback={<p>Cargando...</p>}>
        <GetProductInfo productId={productId}></GetProductInfo>
      </Suspense>
    </main>
  );
}
