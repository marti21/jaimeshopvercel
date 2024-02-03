'use client'

import { CartContext } from "@/app/components/Context";
import Product from "@/app/components/Product";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";
import { useContext, useEffect, useState } from "react";
import TrashSvg from "./Trash";
import CheckoutForm from "./FormStripe";
import { useRouter } from "next/navigation";

const rows2 = [
    {
      key: "1",
      name: "Tony Reichert",
      role: "CEO",
      status: "Active",
    },
    {
      key: "2",
      name: "Zoey Lang",
      role: "Technical Lead",
      status: "Paused",
    },
    {
      key: "3",
      name: "Jane Fisher",
      role: "Senior Developer",
      status: "Active",
    },
    {
      key: "4",
      name: "William Howard",
      role: "Community Manager",
      status: "Vacation",
    },
  ];
  
const columns = [
  {
    key: "name",
    label: "Producto",
  },
  {
    key: "cantidad",
    label: "Cantidad",
  },
  {
    key: "total",
    label: "Total",
  },
  {
    key: "eliminar",
    label: "",
  },
];

export default function TableCart() {

  const { items, addToCart, removeFromCart } = useContext(CartContext);
  const [ totalPrice, setTotalPrice ] = useState(0)
  const router = useRouter();

  const handleRemoveFromCart = (productId: any) => {
    removeFromCart(productId);
  };

  useEffect(() => {
    var totalPrice = 0;
    items.map((product: any) => {
      totalPrice += Number(parseFloat(product.precio).toFixed(2));
    })
    setTotalPrice(totalPrice)
  },[items])

  const rows = items;
  console.log(rows)

  console.log(items)

  return (
    <>
      <Table aria-label="Example table with dynamic content">
        <TableHeader columns={columns}>
          {(column) => <TableColumn className="text-[14px]" key={column.key}>{column.label}</TableColumn>}
        </TableHeader>
        <TableBody emptyContent={"No hay productos en el carrito."}>
          {rows.map((item: any, index: number) => (
              <TableRow key={index}>
                  <TableCell className="text-[16px]">
                    <div className="flex flex-row items-center gap-4">
                      <img className="w-[80px] h-[80px] rounded-lg" src="https://www.digitalresponse.es/wp-content/uploads/2020/05/campa%C3%B1as_reposicion_de_producto.jpg"></img>
                      {item.nombre}
                    </div>
                  </TableCell>
                  <TableCell className="text-[16px]">{item.cantidad}</TableCell>
                  <TableCell className="text-[16px]">{item.precio}$</TableCell>
                  <TableCell className="text-[16px]">
                    <TrashSvg className="cursor-pointer" onClick={()=> handleRemoveFromCart(item.id)}></TrashSvg>
                  </TableCell>
              </TableRow>
          ))}
        </TableBody>
      </Table>
      <p>Subtotal: {totalPrice} $</p>
      <button onClick={()=> router.push("/pago")}>Pagar pedido</button>
    </>
  );
}
