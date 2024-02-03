'use client'

import { NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper } from '@chakra-ui/react'
import {Button} from "@nextui-org/react";
import CarritoSvg from '../CarritoSvg';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '@/app/components/Context';

export default function ShowProductInfo(product: any) {
    const { addToCart, removeFromCart } = useContext(CartContext);
    const [ valueCantidad, setValueCantidad ] = useState('1');
    const [ precioTotal, setPrecioTotal ] = useState('');

  useEffect(() => {
    const cantidad = Number(valueCantidad);
    const precio = Number(ProductPrice);

    const total = (cantidad * precio).toFixed(2);

    setPrecioTotal(total);
  },[valueCantidad])

  //console.log("PRRROCUT1", product.product[0])
  const productId = product.product[0].id;
  const productName = product.product[0].name;
  const ProductPrice = product.product[0].price;
  const productImgUrl = product.product[0].name;

  const handleAddToCart = (product: any) => {
    addToCart(product);
  };

  return (
    <div className="w-full h-fit p-12 pl-4 mb-4 flex justify-center">
        <div className="sm:w-[90%] md:w-[70%] lg:w-[70%] xl:w-[80%] 2xl:w-[80%] w-[80%] h-full mt-10 flex flex-col flex-wrap gap-16 items-start">
            <div className="w-full flex flex-row items-start lg:justify-center gap-24 flex-wrap justify-start">
                <img className="w-[500px] h-[650px] rounded-lg" src="https://www.digitalresponse.es/wp-content/uploads/2020/05/campa%C3%B1as_reposicion_de_producto.jpg"></img>
                <div className="flex flex-col gap-4">
                    <span className="text-5xl font-bold">{productName}</span>
                    <div className="mt-[20px] flex flex-row gap-4 items-center justify-start">
                        <span className="text-[15px] line-through">{ProductPrice}€</span>
                        <span className="text-[16px]">€19,99 EUR</span>
                    </div>
                    <span className="text-[16px]">🚚 Envío Gratuito 24/48 Horas</span>
                    <span className="text-[16px]">✅ Garantía de 90 Días Sin Compromiso</span>
                    <span className="text-[16px]">🔥 ¡Últimas unidades en Stock!</span>
                    
                    <div className="flex flex-col items-start mt-4">
                        <span className="text-[15px]">Cantidad:</span>
                        <div className="w-[30%] mt-4">
                            <NumberInput allowMouseWheel size='md' defaultValue={1} min={1} max={10} onChange={(valueString) => setValueCantidad(valueString)}>
                                <NumberInputField />
                                <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                </NumberInputStepper>
                            </NumberInput>
                        </div>
                    </div>
                    <Button radius="sm" className='border border-gray-400 p-6 hover:bg-[#c48330] mt-4' endContent={<CarritoSvg/>} onClick={()=> handleAddToCart({ id: productId, cantidad: valueCantidad, nombre: productName, precio: precioTotal })}>
                        Agregar al carrito
                    </Button>
                </div>
            </div>
        </div>
    </div>
  );
}
