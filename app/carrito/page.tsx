import NavBar from "@/app/ui/NavBar"
import { Suspense } from "react";
import TableCart from "../ui/carrito/TableCart";

export default function Carrito() {
  
  return (
    <main className="flex min-h-screen flex-col">
      <NavBar></NavBar>
        <div className="w-full h-[40px] flex items-center justify-center font-semibold text-white" style={{ background: "#c48330" }}>
          ENVÍOS GRATIS EN 24/48 HORAS 🚚
        </div>

        <div className="w-full flex items-center justify-center">
            <Suspense fallback={<p>Cargando...</p>}>
                <div className="w-[40%]">
                    <TableCart></TableCart>
                </div>
            </Suspense>
        </div>
    </main>
  );
}
