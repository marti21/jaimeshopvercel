import Image from "next/image";
import NavBar from "@/app/ui/NavBar"

export default function Home(props: any) {
  console.log("Propsç", props)

  return (
    <main className="flex min-h-screen flex-col">
        <NavBar></NavBar>
        <div className="w-full h-[40px] flex items-center justify-center font-semibold text-white" style={{ background: "#c48330" }}>
          ENVÍOS GRATIS EN 24/48 HORAS 🚚
        </div>
    </main>
  );
}
